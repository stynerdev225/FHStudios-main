import { Calendar, MapPin, ExternalLink, Guitar, ArrowRight, Camera, Crown, Star, Music2 } from 'lucide-react';
import { SocialConnect } from '../components/SocialConnect';

const tourDates = [
  {
    date: "2025-06-15",
    city: "San Francisco",
    venue: "FRANCISCO HERRERA IN CONCERT - Migration strengthens / La Migración fortalece la nación",
    status: "Pre-Register"
  },
  {
    date: "2024-04-15",
    city: "New York City",
    venue: "Madison Square Garden",
    status: "On Sale"
  },
  {
    date: "2024-04-18",
    city: "Los Angeles",
    venue: "The Forum",
    status: "Sold Out"
  },
  {
    date: "2024-04-22",
    city: "Chicago",
    venue: "United Center",
    status: "On Sale"
  },
  {
    date: "2024-04-25",
    city: "Miami",
    venue: "FTX Arena",
    status: "On Sale"
  }
];

const fanPhotos = [
  {
    url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
    location: "Los Angeles"
  },
  {
    url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80",
    location: "New York"
  },
  {
    url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=800&q=80",
    location: "Chicago"
  },
  {
    url: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80",
    location: "Miami"
  }
];

const vipPerks = [
  {
    title: "Meet & Greet",
    description: "Personal interaction with Francisco and the band"
  },
  {
    title: "Soundcheck Access",
    description: "Watch the pre-show preparations and exclusive performances"
  },
  {
    title: "Premium Seating",
    description: "Best seats in the house with perfect view of the stage"
  },
  {
    title: "Exclusive Merch",
    description: "Limited edition VIP-only merchandise package"
  }
];

export function Tours() {
  const scrollToTourDates = () => {
    document.getElementById('tour-dates')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVipPackages = () => {
    document.getElementById('vip-packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=2400&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-500 px-6 py-3 rounded-full mb-8">
                <Music2 size={24} />
                <span className="font-bold text-lg">WORLD TOUR 2024</span>
              </div>
              
              <h1 className="text-8xl md:text-[10rem] font-black leading-none mb-8">
                LIVE &<br />
                <span className="text-red-600">ON STAGE</span>
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12 max-w-2xl">
                Experience the soul-stirring fusion of mariachi and modern guitar artistry live in concert
              </p>
              
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={scrollToTourDates}
                  className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-xl font-bold transition flex items-center gap-2"
                >
                  View All Dates
                  <ArrowRight className="group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={scrollToVipPackages}
                  className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full text-xl font-bold transition"
                >
                  VIP Packages
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black h-32"></div>
      </div>

      {/* Add ID to Tour Dates section */}
      <div id="tour-dates" className="container mx-auto px-4 py-16">
        <h1 className="text-7xl font-black mb-12">TOUR DATES</h1>
        
        <div className="space-y-6 mb-32">
          {tourDates.map((show) => (
            <div 
              key={show.date + show.venue}
              className="bg-zinc-900 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Calendar size={20} />
                    {new Date(show.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-red-500" />
                    <span className="font-bold text-xl">{show.city}</span>
                  </div>
                  <div className="text-gray-400 mt-1">{show.venue}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href={`mailto:Miranomas@franciscoherreramusic.com?subject=${encodeURIComponent(`Concert Tickets Request - ${show.city} ${new Date(show.date).toLocaleDateString()}`)}
                  &body=${encodeURIComponent(`I'm interested in tickets for the concert in ${show.city} on ${new Date(show.date).toLocaleDateString()}.`)}`}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    show.status === 'Sold Out' 
                      ? 'bg-zinc-700 text-zinc-300 pointer-events-none'
                      : 'bg-red-600 text-white hover:bg-red-700 hover:scale-105 hover:shadow-lg'
                  }`}
                >
                  {show.status}
                </a>
                {show.status !== 'Sold Out' && (
                  <a 
                    href={`mailto:Miranomas@franciscoherreramusic.com?subject=${encodeURIComponent(`Concert Tickets Request - ${show.city} ${new Date(show.date).toLocaleDateString()}`)}
                    &body=${encodeURIComponent(`I'm interested in tickets for the concert in ${show.city} on ${new Date(show.date).toLocaleDateString()}.`)}`}
                    className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-bold transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-lg group"
                  >
                    Tickets
                    <ExternalLink size={20} className="transform transition-transform group-hover:rotate-12" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* First VIP Experience Section */}
        {/* Add ID to VIP section */}
        <div id="vip-packages" className="mb-32">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-12 space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full">
                  <Crown size={24} />
                  <span className="font-bold text-lg">FRANCISCO HERRERA IN CONCERT</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  Migration strengthens<br />
                  <span className="text-white/80">La Migración</span><br />
                  the nation<br />
                  <span className="text-white/80">fortalece la nación</span>
                </h2>
                
                <div className="space-y-4">
                  <div className="text-2xl font-bold">
                    Summer / Verano 2025<br />
                    San Francisco
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Special Guests</h3>
                    <p className="text-white/80">Invitados especiales</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:Miranomas@franciscoherreramusic.com?subject=VIP Access Request - Concert 2025"
                    className="bg-white text-red-600 hover:bg-yellow-300 px-8 py-4 rounded-full font-bold transition inline-flex items-center gap-2 group"
                  >
                    Get VIP Access
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="mailto:Miranomas@franciscoherreramusic.com?subject=Concert Information Request 2025"
                    className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition inline-flex items-center gap-2 group"
                  >
                    Request Info
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              
              <div className="relative h-full min-h-[400px]">
                <img 
                  src="https://pub-e51e6a830d3346cea7ea8a85a6b8d942.r2.dev/LaMigración.png"
                  alt="VIP Concert Experience"
                  className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-red-800/50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Second VIP Experience Section (Duplicate) */}
        <div className="mb-32">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-12 space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full">
                  <Crown size={24} />
                  <span className="font-bold text-lg">VIP EXPERIENCE</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  Elevate Your<br />Concert Experience
                </h2>
                
                <div className="grid grid-cols-2 gap-6">
                  {vipPerks.map((perk) => (
                    <div key={perk.title} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Star size={20} className="text-yellow-300" />
                        <h3 className="font-bold">{perk.title}</h3>
                      </div>
                      <p className="text-white/80 text-sm">{perk.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:Miranomas@franciscoherreramusic.com?subject=VIP Access Request - Concert 2025"
                    className="bg-white text-red-600 hover:bg-yellow-300 px-8 py-4 rounded-full font-bold transition inline-flex items-center gap-2 group"
                  >
                    Get VIP Access
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="mailto:Miranomas@franciscoherreramusic.com?subject=Concert Information Request 2025"
                    className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition inline-flex items-center gap-2 group"
                  >
                    Request Info
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              
              <div className="relative h-full min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80"
                  alt="VIP Concert Experience"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-red-800/50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Fan Photos Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Camera size={32} className="text-red-600" />
            <h2 className="text-5xl font-black">FAN PHOTOS</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fanPhotos.map((photo, index) => (
              <div key={index} className="group relative aspect-square rounded-xl overflow-hidden">
                <img 
                  src={photo.url}
                  alt={`Fan photo from ${photo.location}`}
                  className="w-full h-full object-cover transition group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <span className="text-sm font-bold">{photo.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request a Show Section */}
        <div className="mb-32 relative">  {/* Added margin bottom for button space */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-12 space-y-8">
                <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-500 px-6 py-3 rounded-full">
                  <Guitar size={24} />
                  <span className="font-bold text-lg">REQUEST A SHOW</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black leading-tight">
                  No Events<br />
                  Near You?<br />
                  <span className="text-red-600">No Problem</span>
                </h2>
                
                <p className="text-xl text-gray-300">
                  Request a show in your area and experience Francisco Herrera's soul-stirring fusion of mariachi and modern guitar live!
                </p>
              </div>
              
              <div className="relative h-full min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80"
                  alt="Francisco Herrera Live Performance"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50"></div>
              </div>
            </div>
          </div>

          {/* Button now outside the black background frame */}
          <a 
            href="mailto:Miranomas@franciscoherreramusic.com?subject=Show Request&body=I would like to request a show in my area."
            className="absolute -bottom-16 -right-8 bg-red-600 text-white px-10 py-8 rounded-2xl transform rotate-6 hover:rotate-0 hover:scale-110 shadow-xl transition-all duration-300 cursor-pointer animate-pulse z-10"
          >
            <div className="transform rotate-0 text-4xl md:text-5xl font-black whitespace-nowrap flex items-center justify-center gap-4">
              Request Now
              <ArrowRight strokeWidth={2.5} className="animate-bounce w-12 h-12" />
            </div>
          </a>
        </div>
      </div>

      {/* Social Connect Section */}
      <SocialConnect />
    </div>
  );
}
