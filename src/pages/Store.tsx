import { Play, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { KidsBooks } from '../components/KidsBooks';
import { VintageRecords } from '../components/VintageRecords';
import { PhysicalMusic } from '../components/PhysicalMusic';
import { SocialConnect } from '../components/SocialConnect';

const merchItems = [
  {
    title: "Tour Hoodie",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Classic T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Snapback Cap",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80"
  }
];

export function Store() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2400&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-7xl md:text-9xl font-black mb-6">OFFICIAL STORE</h1>
            <p className="text-2xl text-gray-300 max-w-2xl">
              Discover our exclusive collection of merchandise, books, and vintage records. From stylish apparel to educational children's books and classic vinyl, find something special for every music lover.
            </p>
          </div>
        </div>
      </div>

      {/* Merchandise Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-black mb-12">MERCHANDISE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {merchItems.map((item) => (
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
                    <h3 className="text-xl font-bold text-black">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <button className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/store/all-merchandise"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 transition"
            >
              Explore All Merchandise
              <Play size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Physical Music Section */}
      <PhysicalMusic />

      {/* Kids' Books Section */}
      <KidsBooks />

      {/* Vintage Records Section */}
      <VintageRecords />

      {/* Social Connect Section */}
      <SocialConnect />
    </div>
  );
}
