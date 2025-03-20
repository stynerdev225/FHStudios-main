import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Facebook, Linkedin, Copy, Check } from 'lucide-react';

const blogPostsData = {
  'making-of-mariachi-soul': {
    id: 1,
    title: "Behind the Scenes: Making of 'Mariachi Soul'",
    excerpt: "Take a journey with me through the creative process of my latest album, from initial inspiration to final production.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Music Production",
    content: `
      <p class="mb-6">The journey of creating "Mariachi Soul" began on a warm summer evening in Mexico City. The streets were alive with the sounds of traditional mariachi music, but in my mind, I heard something different – a fusion of these timeless melodies with modern soul rhythms.</p>

      <h2 class="text-2xl font-bold mb-4">The Initial Spark</h2>
      <p class="mb-6">It all started when I encountered a group of young musicians who, like me, were looking to push the boundaries of traditional mariachi music. Their energy and vision aligned perfectly with what I had been dreaming of creating.</p>

      <h2 class="text-2xl font-bold mb-4">The Recording Process</h2>
      <p class="mb-6">We spent three months in the studio, experimenting with different arrangements and sounds. The biggest challenge was finding the perfect balance between maintaining the authenticity of mariachi while introducing contemporary elements.</p>

      <h2 class="text-2xl font-bold mb-4">Key Collaborations</h2>
      <p class="mb-6">Working with producer Juan Martinez was a game-changer. His experience in both traditional Mexican music and modern production techniques helped us achieve the unique sound we were after.</p>

      <h2 class="text-2xl font-bold mb-4">The Final Touch</h2>
      <p class="mb-6">The album's finishing touches came together during a series of late-night sessions. We knew we had created something special when even the studio cleaning staff would stop to listen and dance to our playbacks.</p>
    `
  },
  'street-to-madison': {
    id: 2,
    title: "From Street Performance to Madison Square Garden",
    excerpt: "My journey from performing in local venues to headlining major concerts. The challenges, victories, and lessons learned.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Personal Journey",
    content: `
      <p class="mb-6">Every artist's journey has a beginning, and mine started on the vibrant streets of Los Angeles. With just my guitar and a handful of songs, I would perform for anyone willing to listen.</p>

      <h2 class="text-2xl font-bold mb-4">The Early Days</h2>
      <p class="mb-6">I remember my first street performance like it was yesterday. The nervous energy, the curious onlookers, and that first dollar earned doing what I love most – making music.</p>

      <h2 class="text-2xl font-bold mb-4">Breaking Through</h2>
      <p class="mb-6">The turning point came when a local venue owner heard me playing outside his restaurant. That led to my first regular gig, which opened doors I never knew existed.</p>

      <h2 class="text-2xl font-bold mb-4">The Madison Square Garden Dream</h2>
      <p class="mb-6">When I finally got the call to perform at Madison Square Garden, it felt surreal. Standing on that stage, I couldn't help but think of that young musician performing on street corners.</p>
    `
  },
  'evolution-modern-mariachi': {
    id: 3,
    title: "The Evolution of Modern Mariachi",
    excerpt: "Exploring how traditional mariachi music is being reimagined and fused with contemporary genres.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Music History",
    content: `
      <p class="mb-6">Mariachi music has come a long way from its humble beginnings in the streets of Jalisco. Today, it's experiencing a renaissance as artists blend traditional elements with modern musical styles.</p>

      <h2 class="text-2xl font-bold mb-4">Traditional Roots</h2>
      <p class="mb-6">Understanding the evolution of mariachi requires us to look back at its origins. The traditional ensemble typically included violins, guitars, trumpets, and the iconic vihuela.</p>

      <h2 class="text-2xl font-bold mb-4">Modern Influences</h2>
      <p class="mb-6">Contemporary mariachi artists are incorporating elements from jazz, rock, and even electronic music. This fusion has created exciting new possibilities while respecting the genre's rich heritage.</p>

      <h2 class="text-2xl font-bold mb-4">The Future of Mariachi</h2>
      <p class="mb-6">As we look to the future, mariachi music continues to evolve. Young musicians are bringing fresh perspectives while maintaining the emotional depth that has always been at the heart of this beloved genre.</p>
    `
  }
};

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPostsData[slug as keyof typeof blogPostsData];
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-red-500 hover:text-red-400 flex items-center gap-2 justify-center">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const currentUrl = window.location.href;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(post.title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center rounded-xl overflow-hidden mb-12">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>
          
          <div className="relative px-8">
            <div className="flex flex-col gap-2 mb-4">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-gray-100 hover:text-white bg-zinc-700/80 px-4 py-2 rounded-lg transition w-fit"
              >
                <ArrowLeft size={20} />
                Back to Blog
              </Link>
              
              <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm w-fit">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-invert prose-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Updated Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Share this article</h3>
              <div className="flex items-center gap-4">
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <button
                  onClick={handleCopyLink}
                  className="hover:text-green-500 transition"
                  aria-label="Copy link"
                >
                  {copied ? <Check size={24} /> : <Copy size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Back Button */}
          <div className="flex flex-col gap-2 mt-12">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-100 hover:text-white bg-zinc-700/80 px-4 py-2 rounded-lg transition w-fit"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
