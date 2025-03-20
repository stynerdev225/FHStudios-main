import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const records = [
  {
    title: "MARIACHI SOUL",
    artist: "Francisco Herrera",
    image: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?auto=format&fit=crop&w=800&q=80",
    type: "Album"
  },
  {
    title: "GUITARRA NIGHTS",
    artist: "Francisco Herrera",
    image: "https://images.unsplash.com/photo-1598387846148-47e82ee120cc?auto=format&fit=crop&w=800&q=80",
    type: "Single"
  },
  {
    title: "LATIN FUSION",
    artist: "Francisco Herrera",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    type: "EP"
  },
  {
    title: "MARIACHI DREAMS",
    artist: "Francisco Herrera",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    type: "Album"
  },
  {
    title: "SPANISH GUITAR",
    artist: "Francisco Herrera",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    type: "Single"
  },
  {
    title: "ACOUSTIC SOUL",
    artist: "Francisco Herrera",
    image: "https://images.unsplash.com/photo-1520483601560-389dff434fdf?auto=format&fit=crop&w=800&q=80",
    type: "Album"
  }
];

export function RecordSection() {
  return (
    <div className="bg-zinc-100 py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
          <div className="flex items-center gap-8">
            <div className="text-zinc-300">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20ZM12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7ZM12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15Z"/>
              </svg>
            </div>
            <h2 className="text-7xl font-black text-black">LATEST RELEASED</h2>
          </div>
          <Link 
            to="/store/all-digital-releases"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition"
          >
            VIEW ALL ALBUM
            <Play size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {records.map((record) => (
            <div key={record.title} className="group relative bg-white p-6 rounded-3xl">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                <img
                  src={record.image}
                  alt={record.title}
                  className="w-full h-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black mb-1">{record.title}</h3>
                  <p className="text-gray-600">{record.artist}</p>
                </div>
                <span className="text-sm font-bold text-red-600">{record.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
