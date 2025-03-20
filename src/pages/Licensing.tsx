import { Mail } from 'lucide-react';

export function Licensing() {
  const licenses = [
    {
      title: "Commercial Use",
      description: "For business advertisements, corporate videos, or commercial projects",
      includes: [
        "Full broadcasting rights",
        "Worldwide usage",
        "One-time fee",
        "Professional quality files"
      ]
    },
    {
      title: "Film & TV",
      description: "Perfect for documentaries, films, TV shows, and web series",
      includes: [
        "Synchronization rights",
        "Performance rights",
        "Multiple territory options",
        "Custom edits available"
      ]
    },
    {
      title: "Live Performance",
      description: "For theatrical productions, dance performances, and live events",
      includes: [
        "Public performance rights",
        "Arrangement permissions",
        "Event-specific licensing",
        "Multiple show options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-black mb-6">MUSIC LICENSING</h1>
        <p className="text-xl text-gray-400 mb-12">
          License Francisco Herrera's music for your project. All licenses are customizable to meet your specific needs.
        </p>

        {/* License Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {licenses.map((license) => (
            <div key={license.title} className="bg-zinc-800/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{license.title}</h3>
              <p className="text-gray-400 mb-6">{license.description}</p>
              <ul className="space-y-3 mb-8">
                {license.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="mailto:Miranomas@franciscoherreramusic.com?subject=License Quote Request - {license.title}"
                className="block w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg transition text-center"
              >
                Get Quote
              </a>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-zinc-800/50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">Custom Licensing Needs?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Contact us directly to discuss your specific requirements. We're here to help you find the perfect licensing solution for your project.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:Miranomas@franciscoherreramusic.com"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition"
            >
              <Mail size={20} />
              Contact for Licensing
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
            <p className="text-gray-400">
              All licenses are subject to our standard terms and conditions. Rights granted are non-exclusive unless otherwise specified. Please contact us for full terms and detailed pricing information.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Usage Rights</h2>
            <p className="text-gray-400">
              Each license type comes with specific usage rights and restrictions. We recommend discussing your project details with us to ensure you receive the appropriate licensing coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
