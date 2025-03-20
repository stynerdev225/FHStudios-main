import { Link } from 'react-router-dom';
import { Mic2, Music2, Play } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[85vh] md:min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2400&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center w-full px-2 sm:px-4">
          <h1 className="text-6xl sm:text-8xl md:text-[12rem] font-black text-white leading-[0.9] md:leading-none tracking-tighter mb-4 md:mb-8 mx-auto">
            FRANCISCO<br />HERRERA
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-300 mb-6 md:mb-12 max-w-md md:max-w-2xl mx-auto px-4">
            Experience the soul-stirring fusion of traditional mariachi and modern guitar artistry
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 max-w-xs md:max-w-none mx-auto">
            <Link 
              to="/music" 
              className="w-full md:w-auto bg-red-600 hover:bg-red-700 px-4 md:px-8 py-2.5 md:py-4 rounded-lg md:rounded-full text-base md:text-xl font-bold inline-flex items-center justify-center gap-2 transition"
            >
              Latest Album
              <Play size={18} />
            </Link>
            <Link 
              to="/store" 
              className="w-full md:w-auto flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 px-4 md:px-8 py-2.5 md:py-4 rounded-lg md:rounded-full text-base md:text-xl font-bold transition"
            >
              <Music2 size={18} />
              All Tracks
            </Link>
            <Link 
              to="/tours" 
              className="w-full md:w-auto flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 px-4 md:px-8 py-2.5 md:py-4 rounded-lg md:rounded-full text-base md:text-xl font-bold transition"
            >
              <Mic2 size={18} />
              Tour Dates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
