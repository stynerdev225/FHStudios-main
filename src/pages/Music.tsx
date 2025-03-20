import { useState } from 'react';
import { Play, Share2, Clock, Download, Check } from 'lucide-react';
import { RecordSection } from '../components/RecordSection';
import { VintageRecords } from '../components/VintageRecords';
import { SocialConnect } from '../components/SocialConnect';
import { useAuthStore } from '../store/useAuthStore';

interface Track {
  title: string;
  duration: string;
  id: string; // Add this to identify tracks
}

interface Album {
  title: string;
  year: string;
  id: string; // Add this to identify albums
  tracks: Track[];
}

const albums: Album[] = [
  {
    title: "Urban Symphony",
    year: "2024",
    id: "urban-symphony-2024",
    tracks: [
      { 
        id: "city-lights",
        title: "City Lights", 
        duration: "3:45"
      },
      { 
        id: "midnight-flow",
        title: "Midnight Flow", 
        duration: "4:12"
      },
      { 
        id: "street-poetry",
        title: "Street Poetry", 
        duration: "3:58"
      },
      { 
        id: "urban-dreams",
        title: "Urban Dreams", 
        duration: "4:22"
      }
    ]
  },
  {
    title: "Street Poetry",
    year: "2023",
    id: "street-poetry-2023",
    tracks: [
      { id: "concrete-stories", title: "Concrete Stories", duration: "4:02" },
      { id: "night-rhythms", title: "Night Rhythms", duration: "3:56" },
      { id: "urban-tales", title: "Urban Tales", duration: "4:15" },
      { id: "city-beat", title: "City Beat", duration: "3:48" }
    ]
  }
];

export function Music() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { isSubscribed } = useAuthStore();

  const handleDownload = async (album: Album, track?: Track) => {
    if (!isSubscribed) {
      // Show donation prompt modal
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 flex items-center justify-center bg-black/50 z-50';
      modal.innerHTML = `
        <div class="bg-zinc-900 p-6 rounded-xl shadow-xl max-w-md text-center">
          <h3 class="text-xl font-bold mb-4">Support the Artist</h3>
          <p class="text-gray-400 mb-6">Help support independent music by making a donation to download this ${track ? 'track' : 'album'}.</p>
          <div class="flex flex-col gap-4">
            <a 
              href="mailto:Miranomas@franciscoherreramusic.com?subject=Music Download Donation - ${track ? track.title : album.title}"
              class="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full transition flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              Make a Donation
            </a>
            <button 
              class="px-6 py-3 hover:text-gray-300 transition close-modal-and-download"
              data-id="${track ? track.id : album.id}"
              data-filename="${track ? track.title : album.title}"
            >
              Maybe Later
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      // Handle "Maybe Later" click with download
      modal.querySelector('.close-modal-and-download')?.addEventListener('click', async (e) => {
        const button = e.target as HTMLButtonElement;
        const id = button.dataset.id;
        const filename = button.dataset.filename;

        try {
          // Get signed URL from your backend
          const response = await fetch(`/api/get-download-url`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id,
              type: track ? 'track' : 'album'
            })
          });

          if (!response.ok) {
            throw new Error('Failed to get download URL');
          }

          const { signedUrl } = await response.json();

          // Initiate download with signed URL
          const link = document.createElement('a');
          link.href = signedUrl;
          link.download = `${filename}.mp4`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error('Download failed:', error);
          // Show error message to user
          alert('Download failed. Please try again later.');
        } finally {
          document.body.removeChild(modal);
        }
      });
      return;
    }

    // Direct download for subscribed users - same process with signed URL
    try {
      const response = await fetch(`/api/get-download-url`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: track ? track.id : album.id,
          type: track ? 'track' : 'album'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get download URL');
      }

      const { signedUrl } = await response.json();

      const link = document.createElement('a');
      link.href = signedUrl;
      link.download = `${track ? track.title : album.title}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again later.');
    }
  };

  const handleShare = async (album: Album, track?: Track) => {
    const isTrackShare = !!track;
    const shareTitle = track ? `${track.title} from ${album.title}` : album.title;
    const currentUrl = `${window.location.origin}/music/${encodeURIComponent(album.title)}${
      isTrackShare ? `/track/${encodeURIComponent(track.title)}` : ''
    }`;
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(shareTitle);

    const shareLinks = {
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=Check out "${encodedTitle}"`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    };

    const shareMenu = document.createElement('div');
    shareMenu.className = 'fixed inset-0 flex items-center justify-center bg-black/50 z-50';
    shareMenu.innerHTML = `
      <div class="bg-zinc-900 p-6 rounded-xl shadow-xl">
        <h3 class="text-xl font-bold mb-4">Share "${shareTitle}"</h3>
        <div class="flex items-center gap-4 mb-4">
          <a href="${shareLinks.twitter}" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="${shareLinks.facebook}" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 transition p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="${shareLinks.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-blue-700 transition p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <button class="copy-link hover:text-green-500 transition p-2" data-url="${currentUrl}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          </button>
        </div>
        <button class="close-menu text-sm text-gray-400 hover:text-white transition">Close</button>
      </div>
    `;

    document.body.appendChild(shareMenu);

    const copyButton = shareMenu.querySelector('.copy-link');
    if (copyButton) {
      copyButton.addEventListener('click', async () => {
        const url = copyButton.getAttribute('data-url');
        if (url) {
          try {
            await navigator.clipboard.writeText(url);
            const id = track ? `${album.title}-${track.title}` : album.title;
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
          } catch (err) {
            console.error('Failed to copy:', err);
          }
        }
      });
    }

    const closeButton = shareMenu.querySelector('.close-menu');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        document.body.removeChild(shareMenu);
      });
    }

    shareMenu.addEventListener('click', (e) => {
      if (e.target === shareMenu) {
        document.body.removeChild(shareMenu);
      }
    });
  };

  return (
    <div className="pt-20">
      <RecordSection />
      <VintageRecords />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-7xl font-black mb-12">DISCOGRAPHY</h1>
        
        <div className="space-y-16">
          {albums.map((album) => (
            <div key={album.title} className="bg-zinc-900 rounded-xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-4xl font-bold">{album.title}</h2>
                  <p className="text-gray-400">{album.year}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-red-600 hover:bg-red-700 p-4 rounded-full">
                    <Play size={24} />
                  </button>
                  <button 
                    onClick={() => handleDownload(album)}
                    className="bg-zinc-800 hover:bg-zinc-700 p-4 rounded-full transition"
                    title="Download Album"
                  >
                    <Download size={24} />
                  </button>
                  <button 
                    onClick={() => handleShare(album)}
                    className="bg-zinc-800 hover:bg-zinc-700 p-4 rounded-full transition"
                  >
                    {copiedId === album.title ? <Check size={24} /> : <Share2 size={24} />}
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {album.tracks.map((track, index) => (
                  <div 
                    key={track.title}
                    className="flex items-center justify-between p-4 hover:bg-zinc-800 rounded-lg transition"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500 w-8">{index + 1}</span>
                      <span className="font-medium">{track.title}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={() => handleDownload(album, track)}
                        className="text-gray-400 hover:text-white transition"
                        title="Download Track"
                      >
                        <Download size={20} />
                      </button>
                      <button 
                        onClick={() => handleShare(album, track)}
                        className="text-gray-400 hover:text-white transition"
                      >
                        {copiedId === `${album.title}-${track.title}` ? (
                          <Check size={20} />
                        ) : (
                          <Share2 size={20} />
                        )}
                      </button>
                      <span className="text-gray-400 flex items-center gap-2">
                        <Clock size={20} />
                        {track.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Connect Section */}
      <SocialConnect />
    </div>
  );
}
