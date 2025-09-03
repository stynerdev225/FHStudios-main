import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Francisco Herrera's fusion of mariachi and modern guitar is revolutionary. His masterful blend of traditional and contemporary styles creates an unforgettable musical experience.",
    author: "Darrell Stewart",
    title: "Music Enthusiast & Blogger",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "The way he combines traditional mariachi elements with contemporary guitar techniques is pure genius. Every performance is a journey through musical innovation.",
    author: "Maria Rodriguez",
    title: "Music Producer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "His performances are more than just concerts; they're transformative experiences that bridge cultural gaps through the universal language of music.",
    author: "James Chen",
    title: "Concert Reviewer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "A virtuoso who redefines the boundaries of guitar music. His fusion of styles creates something entirely new and captivating.",
    author: "Sophie Bennett",
    title: "Music Magazine Editor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
  }
];

const otherTestimonials = [
  {
    name: "Harmoniq Studios",
    author: "Devon Lane",
    title: "Music Enthusiast & Blogger",
    quote: "An incredible talent that keeps pushing boundaries."
  },
  {
    name: "Melodic Essence",
    author: "Marvin McKinney",
    title: "Music Enthusiast & Blogger",
    quote: "Pure musical innovation at its finest."
  },
  {
    name: "RhythmEcho",
    author: "Eleanor Pena",
    title: "Music Enthusiast & Blogger",
    quote: "A fresh take on traditional sounds."
  },
  {
    name: "ToneCraft Media",
    author: "Theresa Webb",
    title: "Music Enthusiast & Blogger",
    quote: "Masterful fusion of styles and cultures."
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-32 bg-zinc-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-black text-black mb-4" data-editable data-name="testimonials-title">TESTIMONIALS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-editable data-name="testimonials-subtitle">
            Hear what fans and critics are saying about Francisco Herrera—genuine experiences that
            showcase the impact of his music on listeners.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Rotating Testimonial */}
          <div className="bg-white rounded-3xl p-12 shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0" data-editable data-name={`testimonial-image-${currentIndex}`}>
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
              <div className="flex-1">
                <Quote className="text-red-600 w-16 h-16 mb-6" />
                <p className="text-3xl font-bold text-black mb-6 transition-opacity duration-500" data-editable data-name={`testimonial-quote-${currentIndex}`}>
                  {testimonials[currentIndex].quote}
                </p>
                <div>
                  <p className="text-xl font-bold text-black transition-opacity duration-500" data-editable data-name={`testimonial-author-${currentIndex}`}>
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-600 transition-opacity duration-500" data-editable data-name={`testimonial-title-${currentIndex}`}>
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-red-600 w-8' : 'bg-gray-300'
                  }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Other Testimonials */}
          <div className="grid md:grid-cols-4 gap-6">
            {otherTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-xl text-black" data-editable data-name={`other-testimonial-name-${index}`}>{testimonial.name}</h3>
                  <Quote className="text-red-600 w-6 h-6" />
                </div>
                <p className="text-gray-700 mb-4" data-editable data-name={`other-testimonial-quote-${index}`}>{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-black" data-editable data-name={`other-testimonial-author-${index}`}>{testimonial.author}</p>
                  <p className="text-sm text-gray-600" data-editable data-name={`other-testimonial-title-${index}`}>{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
