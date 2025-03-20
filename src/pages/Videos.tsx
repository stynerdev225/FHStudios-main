import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Calendar, Share2, Heart, Check } from 'lucide-react';
import { SocialConnect } from '../components/SocialConnect';

const featuredVideo = {
  title: "Mariachi Soul - Live at Madison Square Garden",
  thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=2400&q=80",
  duration: "2:15:00",
  views: "2.1M",
  date: "March 15, 2024"
};

const videos = [
  {
    title: "Street Dreams - Official Music Video",
    thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80",
    duration: "4:32",
    views: "1.2M",
    category: "Music Videos"
  },
  {
    title: "Urban Poetry - Behind the Scenes",
    thumbnail: "https://images.unsplash.com/photo-1520483601560-389dff434fdf?auto=format&fit=crop&w=1600&q=80",
    duration: "8:15",
    views: "856K",
    category: "Behind the Scenes"
  },
  {
    title: "Live at Madison Square Garden",
    thumbnail: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1600&q=80",
    duration: "12:45",
    views: "2.1M",
    category: "Live Performances"
  },
  {
    title: "Guitar Tutorial - Mariachi Basics",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80",
    duration: "15:20",
    views: "450K",
    category: "Tutorials"
  },
  {
    title: "Studio Session - New Album",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1600&q=80",
    duration: "23:45",
    views: "325K",
    category: "Behind the Scenes"
  },
  {
    title: "Fan Meet & Greet Highlights",
    thumbnail: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1600&q=80",
    duration: "5:30",
    views: "198K",
    category: "Events"
  }
];

const categories = ["All", "Music Videos", "Live Performances", "Behind the Scenes", "Tutorials", "Events"];

export function Videos() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [copiedVideoId, setCopiedVideoId] = useState<string | null>(null);

  // Add scroll function
  const scrollToVideos = () => {
    document.getElementById('video-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShare = async (video: typeof videos[0]) => {
    const currentUrl = `${window.location.origin}/videos/${encodeURIComponent(video.title)}`;
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(video.title);

    const shareLinks = {
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    };

    const shareMenu = document.createElement('div');
    shareMenu.className = 'fixed inset-0 flex items-center justify-center bg-black/50 z-50';
    shareMenu.innerHTML = `
      <div class="bg-zinc-900 p-6 rounded-xl shadow-xl">
        <h3 class="text-xl font-bold mb-4">Share "${video.title}"</h3>
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

    // Handle copy link button
    const copyButton = shareMenu.querySelector('.copy-link');
    if (copyButton) {
      copyButton.addEventListener('click', async () => {
        const url = copyButton.getAttribute('data-url');
        if (url) {
          try {
            await navigator.clipboard.writeText(url);
            setCopiedVideoId(video.title);
            setTimeout(() => setCopiedVideoId(null), 2000);
          } catch (err) {
            console.error('Failed to copy:', err);
          }
        }
      });
    }

    // Handle close button
    const closeButton = shareMenu.querySelector('.close-menu');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        document.body.removeChild(shareMenu);
      });
    }

    // Close on background click
    shareMenu.addEventListener('click', (e) => {
      if (e.target === shareMenu) {
        document.body.removeChild(shareMenu);
      }
    });
  };

  const filteredVideos = selectedCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Featured Video */}
      <div className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${featuredVideo.thumbnail})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-red-500 mb-4">
                <Calendar size={20} />
                <span>{featuredVideo.date}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6">{featuredVideo.title}</h1>
              <div className="flex items-center gap-6">
                <button 
                  onClick={scrollToVideos}
                  className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold flex items-center gap-2 transition"
                >
                  <Play size={24} />
                  Watch Now
                </button>
                <button 
                  onClick={() => navigate('/tours')}
                  className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-zinc-800 hover:bg-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div id="video-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div key={video.title} className="group">
              <div className="aspect-video relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-red-600 p-6 rounded-full transform scale-75 group-hover:scale-100 transition">
                    <Play size={32} />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">{video.title}</h3>
                  <p className="text-gray-400">{video.views} views</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-gray-400 hover:text-red-500 transition">
                    <Heart size={20} />
                  </button>
                  <button 
                    onClick={() => handleShare(video)}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {copiedVideoId === video.title ? <Check size={20} /> : <Share2 size={20} />}
                  </button>
                </div>
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
