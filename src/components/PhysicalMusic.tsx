import { Music2, Play, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const streamingMusic = [
  {
    title: "Mariachi Soul - Premium Collection",
    format: "Digital Album",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?auto=format&fit=crop&w=800&q=80",
    features: ["High Quality Audio", "Digital Booklet", "Exclusive Content", "Instant Download"]
  },
  {
    title: "Guitar Dreams - Digital Edition",
    format: "Digital Album",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1598387846148-47e82ee120cc?auto=format&fit=crop&w=800&q=80",
    features: ["Studio Quality", "Bonus Tracks", "Digital Artwork"]
  },
  {
    title: "Live at Madison Square Garden",
    format: "Digital Concert",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    features: ["Full Concert Video", "Behind the Scenes", "Digital Program"]
  }
];

export function PhysicalMusic() {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <Music2 size={40} className="text-red-600" />
          <h2 className="text-5xl font-black" data-editable data-name="digital-releases-title">DIGITAL RELEASES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {streamingMusic.map((item, index) => (
            <div key={item.title} className="bg-zinc-900 rounded-xl overflow-hidden group">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition group-hover:scale-105"
                  data-editable
                  data-name={`digital-album-image-${index}`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-600 p-6 rounded-full transform scale-75 group-hover:scale-100 transition-transform">
                    <Play size={32} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1" data-editable data-name={`digital-album-title-${index}`}>{item.title}</h3>
                  <p className="text-red-500 font-medium" data-editable data-name={`digital-album-format-${index}`}>{item.format}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${item.price}</span>
                  <div className="flex items-center gap-3">
                    <button className="text-gray-400 hover:text-red-500 transition">
                      <Heart size={20} />
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full transition font-bold">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/store/all-digital-releases"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 transition"
            data-editable data-name="digital-releases-cta"
          >
            Explore All Digital Releases
            <Play size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
