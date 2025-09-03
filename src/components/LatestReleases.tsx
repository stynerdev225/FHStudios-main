import { Play } from 'lucide-react';

const releases = [
  {
    title: "Urban Symphony",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    date: "2024"
  },
  {
    title: "Midnight Flow",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    date: "2023"
  },
  {
    title: "Street Poetry",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    date: "2023"
  }
];

export function LatestReleases() {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-black mb-12" data-editable data-name="latest-releases-title">LATEST RELEASES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {releases.map((release, index) => (
            <div key={release.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={release.cover}
                alt={release.title}
                className="w-full aspect-square object-cover transition group-hover:scale-110"
                data-editable
                data-name={`release-image-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold" data-editable data-name={`release-title-${index}`}>{release.title}</h3>
                  <p className="text-gray-400" data-editable data-name={`release-date-${index}`}>{release.date}</p>
                </div>
                <button className="absolute right-6 bottom-6 bg-red-600 p-3 rounded-full opacity-0 group-hover:opacity-100 transition">
                  <Play size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}