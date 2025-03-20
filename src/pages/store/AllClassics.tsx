import { ShoppingCart } from 'lucide-react';
import { SocialConnect } from '../../components/SocialConnect';

interface Classic {
  id: number;
  title: string;
  price: number;
  image: string;
  year: string;
}

export function AllClassics() {
  const classics: Classic[] = [
    {
      id: 1,
      title: "Vintage Vinyl Collection",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?auto=format&fit=crop&w=800&q=80",
      year: "1985"
    },
    {
      id: 2,
      title: "First Edition LP",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1519677584237-752f8853252e?auto=format&fit=crop&w=800&q=80",
      year: "1982"
    },
    {
      id: 3,
      title: "Rare Studio Sessions",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1502773860571-211a597d6e4b?auto=format&fit=crop&w=800&q=80",
      year: "1978"
    },
    {
      id: 4,
      title: "Mariachi Memories",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80",
      year: "1980"
    },
    {
      id: 5,
      title: "Mexican Folk Collection",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=800&q=80",
      year: "1975"
    },
    {
      id: 6,
      title: "Dia de los Muertos Sessions",
      price: 219.99,
      image: "https://images.unsplash.com/photo-1603827457577-609e6f42a45e?auto=format&fit=crop&w=800&q=80",
      year: "1983"
    },
    {
      id: 7,
      title: "Aztec Rhythms",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      year: "1979"
    },
    {
      id: 8,
      title: "Mexico City Live",
      price: 259.99,
      image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&q=80",
      year: "1976"
    },
    {
      id: 9,
      title: "Folklórico Fusion",
      price: 229.99,
      image: "https://images.unsplash.com/photo-1547995886-6dc09384c6e6?auto=format&fit=crop&w=800&q=80",
      year: "1981"
    }
  ];

  const handleAddToCart = (id: number) => {
    // TODO: Implement cart functionality
    console.log(`Adding item ${id} to cart`);
  };

  return (
    <div className="pt-20">
      <div className="relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=2400&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-7xl md:text-8xl font-black mb-6">CLASSICS</h1>
            <p className="text-2xl text-gray-300 max-w-2xl">
              Rare and vintage recordings from the vault
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classics.map((item) => (
            <div key={item.id} className="group">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1516223725307-6f76b9182f7c?w=800&auto=format&fit=crop&q=60";
                  }}
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-400">${item.price}</p>
                  <p className="text-sm text-gray-500">Released: {item.year}</p>
                </div>
                <button 
                  onClick={() => handleAddToCart(item.id)}
                  className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition"
                >
                  <ShoppingCart size={20} />
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
