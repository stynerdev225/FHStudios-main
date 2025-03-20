import { Play } from 'lucide-react';
import { SocialConnect } from '../../components/SocialConnect';

const digitalReleases = [
  {
    title: "Midnight Sessions EP",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=800&q=80",
    type: "Digital Album"
  },
  {
    title: "Urban Rhythms",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    type: "Digital Album"
  },
  {
    title: "Summer Beats Collection",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80",
    type: "Digital Album"
  }
];

export function AllDigitalReleases() {
  return (
    <div className="pt-20">
      <div className="relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=2400&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-7xl md:text-8xl font-black mb-6">DIGITAL RELEASES</h1>
            <p className="text-2xl text-gray-300 max-w-2xl">
              Download Francisco Herrera's latest digital releases
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {digitalReleases.map((item) => (
            <div key={item.title} className="group">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-400">${item.price}</p>
                  <p className="text-sm text-gray-500">{item.type}</p>
                </div>
                <button className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition">
                  <Play size={20} />
                </button>
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
