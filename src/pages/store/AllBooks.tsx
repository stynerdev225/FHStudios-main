import { ShoppingCart } from 'lucide-react';
import { SocialConnect } from '../../components/SocialConnect';

const books = [
  {
    title: "Music Adventures with Francisco",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
    age: "Ages 5-8"
  },
  {
    title: "Rhythm and Rhyme",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    age: "Ages 4-7"
  },
  {
    title: "The Musical Journey",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    age: "Ages 6-9"
  },
  // Adding 3 new books
  {
    title: "Mexican Folk Songs for Kids",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?auto=format&fit=crop&w=800&q=80",
    age: "Ages 5-9"
  },
  {
    title: "Dance to the Mariachi Beat",
    price: 23.99,
    image: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&w=800&q=80",
    age: "Ages 4-8"
  },
  {
    title: "My First Guitar Songbook",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=800&q=80",
    age: "Ages 7-10"
  }
];

export function AllBooks() {
  return (
    <div className="pt-20">
      <div className="relative h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2400&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-7xl md:text-8xl font-black mb-6">BOOKS</h1>
            <p className="text-2xl text-gray-300 max-w-2xl">
              Educational and entertaining books for young music lovers
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((item) => (
            <div key={item.title} className="group">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 mb-4">
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
                  <p className="text-sm text-gray-500">{item.age}</p>
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
