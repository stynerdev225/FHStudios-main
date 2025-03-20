import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    slug: 'making-of-mariachi-soul',
    title: "Behind the Scenes: Making of 'Mariachi Soul'",
    excerpt: "Take a journey with me through the creative process of my latest album, from initial inspiration to final production.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Music Production"
  },
  {
    id: 2,
    slug: 'street-to-madison',
    title: "From Street Performance to Madison Square Garden",
    excerpt: "My journey from performing in local venues to headlining major concerts. The challenges, victories, and lessons learned.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Personal Journey"
  },
  {
    id: 3,
    slug: 'evolution-modern-mariachi',
    title: "The Evolution of Modern Mariachi",
    excerpt: "Exploring how traditional mariachi music is being reimagined and fused with contemporary genres.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Music History"
  }
];

export function Blog() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486520299386-6d106b22014b?auto=format&fit=crop&w=2400&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-white">BLOG</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Stories, insights, and behind-the-scenes looks into the world of music
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-zinc-900/50 rounded-xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 text-white">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 mb-6">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="flex items-center gap-2 text-red-500 group-hover:text-red-400 transition"
                >
                  Read More <ArrowRight size={20} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
