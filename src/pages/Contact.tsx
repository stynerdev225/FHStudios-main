import React, { useState } from 'react';
import { Mail, Instagram, Twitter, Youtube, Guitar } from 'lucide-react';
import { SocialConnect } from '../components/SocialConnect';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:Miranomas@franciscoherreramusic.com?subject=Contact Form: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-20">
      {/* Artist Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
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
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-500 px-6 py-3 rounded-full mb-8">
                <Guitar size={24} />
                <span className="font-bold text-lg">GET IN TOUCH</span>
              </div>
              
              <h1 className="text-7xl md:text-[8rem] font-black leading-none mb-8">
                LET'S<br />
                <span className="text-red-600">CONNECT</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-zinc-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Connect</h2>
            <div className="space-y-6">
              <a 
                href="#" 
                className="flex items-center gap-4 text-xl hover:text-red-500 transition"
              >
                <Mail size={24} />
                management@franciscoherrera.com
              </a>
              <a 
                href="#" 
                className="flex items-center gap-4 text-xl hover:text-red-500 transition"
              >
                <Instagram size={24} />
                @franciscoherrera
              </a>
              <a 
                href="#" 
                className="flex items-center gap-4 text-xl hover:text-red-500 transition"
              >
                <Twitter size={24} />
                @franciscoherrera
              </a>
              <a 
                href="#" 
                className="flex items-center gap-4 text-xl hover:text-red-500 transition"
              >
                <Youtube size={24} />
                Francisco Herrera Official
              </a>
            </div>

            <div className="mt-12">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src="https://pub-e51e6a830d3346cea7ea8a85a6b8d942.r2.dev/OurMission.png"
                  alt="Francisco Herrera"
                  className="w-full h-full object-cover object-[center_5%] hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Connect Section */}
      <SocialConnect />
    </div>
  );
}
