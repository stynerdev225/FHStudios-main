import { Instagram, Twitter, Youtube, Facebook, Music2 } from 'lucide-react';

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/franciscoherrera',
    color: 'hover:bg-pink-600'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/franciscoherrera',
    color: 'hover:bg-blue-400'
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: 'https://www.youtube.com/@FranciscoHerreraOfficial',
    color: 'hover:bg-red-600'
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/franciscoherrera',
    color: 'hover:bg-blue-600'
  },
  {
    icon: Music2,
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/franciscoherrera',
    color: 'hover:bg-green-500'
  }
];

export function SocialConnect() {
  return (
    <div className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <h2 className="text-[200px] font-bold text-white select-none tracking-tight" data-editable data-name="social-bg-text">
          FOLLOW US
        </h2>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-12" data-editable data-name="social-heading">Connect With Us</h2>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center w-24 h-24 bg-zinc-900 rounded-2xl ${social.color} transition-all duration-300`}
              aria-label={social.label}
              data-editable
              data-name={`social-link-${index}`}
            >
              <social.icon size={40} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
