import { BookOpen, ShoppingCart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const books = [
  {
    title: "My First Guitar Adventure",
    price: 19.99,
    age: "Ages 5-8",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800&q=80",
    description: "A colorful journey into the world of music"
  },
  {
    title: "Musical Dreams",
    price: 24.99,
    age: "Ages 4-7",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    description: "Bedtime stories with musical themes"
  },
  {
    title: "The Little Guitarist",
    price: 21.99,
    age: "Ages 6-9",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    description: "Learn about instruments through stories"
  }
];

export function KidsBooks() {
  return (
    <div className="py-20 bg-gradient-to-b from-zinc-100 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <BookOpen size={40} className="text-red-600" />
          <h2 className="text-5xl font-black text-black" data-editable data-name="kids-books-title">KIDS' BOOKS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div key={book.title} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition group-hover:scale-105"
                  data-editable
                  data-name={`kids-book-image-${index}`}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1" data-editable data-name={`kids-book-title-${index}`}>{book.title}</h3>
                    <span className="text-sm font-medium text-red-600" data-editable data-name={`kids-book-age-${index}`}>{book.age}</span>
                  </div>
                  <span className="text-xl font-bold text-black" data-editable data-name={`kids-book-price-${index}`}>${book.price}</span>
                </div>
                <p className="text-gray-600 mb-6" data-editable data-name={`kids-book-desc-${index}`}>{book.description}</p>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/store/all-books"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 transition"
            data-editable data-name="kids-books-cta"
          >
            Explore All Books
            <Play size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
