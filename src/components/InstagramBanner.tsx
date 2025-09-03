import { Instagram, Twitter, Youtube, Facebook, Music2 } from 'lucide-react';

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: '#',
    color: 'hover:text-pink-500'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: '#',
    color: 'hover:text-blue-400'
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: '#',
    color: 'hover:text-red-600'
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: '#',
    color: 'hover:text-blue-600'
  },
  {
    icon: Music2,
    label: 'Spotify',
    href: '#',
    color: 'hover:text-green-500'
  }
];

export function InstagramBanner() {
  return (
    <div className="relative h-[400px] bg-[#1a1a1a] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-[200px] font-bold text-[#2a2a2a] select-none tracking-tight" data-editable data-name="social-background-text">
          FOLLOW US
        </h2>
      </div>
      <div className="relative space-y-8 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-white" data-editable data-name="social-heading">
          Connect With Us
        </h3>
        <div className="flex items-center justify-center gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={`transform hover:scale-110 transition-all duration-300 ${social.color}`}
              aria-label={social.label}
              data-editable data-name={`social-icon-${social.label.toLowerCase()}`}
            >
              <social.icon size={32} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}