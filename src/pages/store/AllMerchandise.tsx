import { ShoppingCart } from 'lucide-react';
import { SocialConnect } from '../../components/SocialConnect';

const allMerchItems = [
  {
    title: "Mexican Striped Blouse",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Tour Hoodie",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Classic T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Día de Muertos Tee",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Aztec Pattern Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1490707967831-1fd9b48e40e2?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Mariachi Embroidered Cap",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Folklórico Dance Tee",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Lucha Libre Mask Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1590333748338-d629e4564ad9?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Mexican Art Hoodie",
    price: 75.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Sarape Inspired Pullover",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1553532434-5ab5b6b84993?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Aztec Pattern Sweater",
    price: 65.99,
    image: "https://images.unsplash.com/photo-1589476993333-f55b84301219?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Día de Muertos Hoodie",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Papel Picado Tank Top",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1529171374461-2ea966dee0f5?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Embroidered Mexican Blouse",
    price: 48.99,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  },
  {
    title: "Traditional Huipil Top",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/images/placeholder.jpg"
  }
];

export function AllMerchandise() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
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
            <h1 className="text-7xl md:text-8xl font-black mb-6">MERCHANDISE</h1>
            <p className="text-2xl text-gray-300 max-w-2xl">
              Official Francisco Herrera merchandise and apparel
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allMerchItems.map((item) => (
            <div key={item.title} className="group">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.src = "https://placehold.co/800x800/gray/white?text=Image+Not+Found";
                  }}
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-400">${item.price}</p>
                </div>
                <button className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition">
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
