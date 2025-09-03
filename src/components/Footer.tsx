import { Link } from 'react-router-dom';
import { Home, Phone, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:Miranomas@franciscoherreramusic.com?subject=Newsletter Subscription&body=Please subscribe me to the newsletter.%0D%0A%0D%0AEmail: ${email}`;
    window.location.href = mailtoLink;
    setEmail(''); // Reset the input after sending
  };

  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-2xl font-black mb-6" data-editable data-name="footer-contact-heading">CONTACT US</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Home className="text-gray-400" size={20} />
                <span data-editable data-name="footer-address">Canticle Farm, Oakland CA 94601</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gray-400" size={20} />
                <span data-editable data-name="footer-phone">+1 (415) 812-9362</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-gray-400" size={20} />
                <span data-editable data-name="footer-email">Miranomas@franciscoherreramusic.com</span>
              </div>
            </div>
          </div>

          {/* Helpful Links Section */}
          <div>
            <h3 className="text-2xl font-black mb-6" data-editable data-name="footer-links-heading">HELPFUL LINKS</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Link to="/" className="block hover:text-red-500 transition">HOME</Link>
                <Link to="/about" className="block hover:text-red-500 transition">ABOUT US</Link>
                <Link to="/music" className="block hover:text-red-500 transition">MUSIC</Link>
                <Link to="/videos" className="block hover:text-red-500 transition">VIDEOS</Link>
                <Link to="/store" className="block hover:text-red-500 transition">STORE</Link>
                <Link to="/contact" className="block hover:text-red-500 transition">CONTACT</Link>
              </div>
              <div className="space-y-3">
                <Link to="/tours" className="block hover:text-red-500 transition">EVENTS</Link>
                <Link to="/blog" className="block hover:text-red-500 transition">BLOG</Link>
                <Link to="/licensing" className="block hover:text-red-500 transition">LICENSING</Link>
                <Link to="/collaboration" className="block hover:text-red-500 transition">COLLABORATION</Link>
                <Link to="/donations" className="flex items-center gap-2 hover:text-red-500 transition">
                  DONATIONS <span className="text-2xl">🎸</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Subscribe Newsletter Section */}
          <div>
            <h3 className="text-2xl font-black mb-6" data-editable data-name="footer-newsletter-heading">SUBSCRIBE NEWSLETTER</h3>
            <p className="text-gray-400 mb-4" data-editable data-name="footer-newsletter-text">
              Never Miss a Beat: Subscribe for Exclusive News, Updates, and Special Offers
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-zinc-800 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 rounded-full p-3 transition"
              >
                <ArrowRight size={24} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800">
          <div className="text-6xl font-black tracking-tighter mb-6 md:mb-0 flex items-baseline" data-editable data-name="footer-logo">
            <span className="text-red-600">FH</span>
            <span className="text-4xl font-black tracking-widest ml-1">STUDIOS</span>
          </div>
          <div className="text-sm text-gray-400 flex flex-col md:flex-row items-center gap-4">
            <span data-editable data-name="footer-copyright">Copyright © 2024 Francisco Herrera Studios</span>
            <div className="flex items-center gap-4">
              <span>|</span>
              <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <span>|</span>
              <span data-editable data-name="footer-rights">All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
