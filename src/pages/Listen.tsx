import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Heart, Shuffle, Repeat, ListMusic } from 'lucide-react';

const playlists = [
  {
    name: "Latest Releases",
    songs: [
      { title: "Mariachi Soul", duration: "4:32", album: "Urban Symphony" },
      { title: "Guitar Dreams", duration: "3:45", album: "Urban Symphony" },
      { title: "Fusion Night", duration: "5:12", album: "Urban Symphony" }
    ]
  },
  {
    name: "Classical Hits",
    songs: [
      { title: "Spanish Guitar", duration: "4:15", album: "Vintage Collection" },
      { title: "Midnight Strings", duration: "3:58", album: "Vintage Collection" },
      { title: "Desert Rose", duration: "4:45", album: "Vintage Collection" }
    ]
  }
];

const albums = [
  {
    title: "Urban Symphony",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    year: "2024"
  },
  {
    title: "Vintage Collection",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    year: "2023"
  }
];

export function Listen() {
  const [currentSong, setCurrentSong] = useState(playlists[0].songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-20">
      <div className="flex h-[calc(100vh-5rem)]">
        {/* Sidebar */}
        <div className="w-64 bg-black p-6 flex flex-col">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Your Library</h2>
            <div className="space-y-2">
              {albums.map((album) => (
                <div key={album.title} className="flex items-center gap-3 p-2 hover:bg-zinc-800 rounded-lg cursor-pointer">
                  <img src={album.cover} alt={album.title} className="w-12 h-12 rounded" />
                  <div>
                    <p className="font-medium">{album.title}</p>
                    <p className="text-sm text-gray-400">{album.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Playlists</h2>
            <div className="space-y-2">
              {playlists.map((playlist) => (
                <div 
                  key={playlist.name}
                  className="p-2 hover:bg-zinc-800 rounded-lg cursor-pointer flex items-center gap-3"
                >
                  <ListMusic size={20} className="text-red-500" />
                  {playlist.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-4xl">
            <div className="flex items-end gap-8 mb-8">
              <img 
                src={albums[0].cover}
                alt={albums[0].title}
                className="w-64 h-64 rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-7xl font-black mb-4">{albums[0].title}</h1>
                <p className="text-gray-400">Francisco Herrera • 2024 • 12 songs</p>
              </div>
            </div>

            <div className="mt-8">
              {playlists[0].songs.map((song, index) => (
                <div 
                  key={song.title}
                  className={`flex items-center justify-between p-4 rounded-lg hover:bg-zinc-800/50 cursor-pointer ${
                    currentSong.title === song.title ? 'bg-zinc-800/50' : ''
                  }`}
                  onClick={() => setCurrentSong(song)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 w-8">{index + 1}</span>
                    <div>
                      <p className="font-medium">{song.title}</p>
                      <p className="text-sm text-gray-400">{song.album}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Heart size={20} className="text-gray-400 hover:text-red-500 cursor-pointer" />
                    <span className="text-gray-400">{song.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Player Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-zinc-900 border-t border-zinc-800 px-4">
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4 w-1/3">
            <img 
              src={albums[0].cover}
              alt={currentSong.title}
              className="w-14 h-14 rounded"
            />
            <div>
              <p className="font-medium">{currentSong.title}</p>
              <p className="text-sm text-gray-400">{currentSong.album}</p>
            </div>
            <Heart size={20} className="text-gray-400 hover:text-red-500 cursor-pointer" />
          </div>

          <div className="flex flex-col items-center w-1/3">
            <div className="flex items-center gap-6 mb-2">
              <Shuffle size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <SkipBack size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              <button 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-105 transition"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause size={24} className="text-black" />
                ) : (
                  <Play size={24} className="text-black ml-1" />
                )}
              </button>
              <SkipForward size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              <Repeat size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="w-full flex items-center gap-2">
              <span className="text-xs text-gray-400">2:14</span>
              <div className="flex-1 h-1 bg-zinc-600 rounded-full">
                <div className="w-1/3 h-full bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400">{currentSong.duration}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-1/3 justify-end">
            <Volume2 size={20} className="text-gray-400" />
            <div className="w-24 h-1 bg-zinc-600 rounded-full">
              <div className="w-2/3 h-full bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}