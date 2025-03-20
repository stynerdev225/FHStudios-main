import { Music, MessageSquare, Users, Send } from 'lucide-react';

export function Collaboration() {
  const collaborationTypes = [
    {
      title: "Music Production",
      icon: Music,
      description: "Collaborate on beats, melodies, or full tracks. Open to producers, musicians, and vocalists.",
      requirements: [
        "Professional recording capability",
        "Experience with digital audio workstations",
        "Strong understanding of hip-hop production"
      ]
    },
    {
      title: "Songwriting",
      icon: MessageSquare,
      description: "Join forces on lyrical content, song structure, and storytelling.",
      requirements: [
        "Proven writing experience",
        "Understanding of song structure",
        "Ability to work within themes"
      ]
    },
    {
      title: "Live Performance",
      icon: Users,
      description: "Musicians and performers for live shows and tours.",
      requirements: [
        "Professional stage experience",
        "Reliable transportation",
        "Flexible schedule for rehearsals"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=2400&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-black mb-6">COLLABORATE</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Join forces with Francisco Herrera to create something extraordinary. We're always open to working with talented artists who share our passion.
          </p>
        </div>
      </div>

      {/* Collaboration Types */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborationTypes.map((type) => (
            <div key={type.title} className="bg-zinc-900/50 rounded-xl p-8 backdrop-blur-sm">
              <type.icon size={40} className="text-red-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
              <p className="text-gray-400 mb-6">{type.description}</p>
              <ul className="space-y-3 mb-8">
                {type.requirements.map((req) => (
                  <li key={req} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 bg-zinc-900/50 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Send us your proposal including your experience, links to your work, and your vision for the collaboration.
          </p>
          <a 
            href="mailto:Miranomas@franciscoherreramusic.com?subject=Collaboration Proposal"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg transition"
          >
            <Send size={20} />
            Submit Proposal
          </a>
        </div>
      </div>
    </div>
  );
}