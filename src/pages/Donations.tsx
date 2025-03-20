import { Heart, Star, Crown, Gift } from 'lucide-react';

export function Donations() {
  const supportTiers = [
    {
      title: "Fan Support",
      icon: Heart,
      amount: "Any Amount",
      description: "Support my music journey with any contribution you can make.",
      perks: [
        "Personal thank you email",
        "Name in credits of next release",
        "Exclusive behind-the-scenes content"
      ]
    },
    {
      title: "VIP Supporter",
      icon: Star,
      amount: "$50+",
      description: "Become a VIP supporter and get exclusive access to content and events.",
      perks: [
        "All Fan Support perks",
        "Monthly exclusive digital content",
        "Early access to new releases",
        "Supporter-only livestreams"
      ]
    },
    {
      title: "Producer Circle",
      icon: Crown,
      amount: "$200+",
      description: "Join the inner circle of supporters and be part of the creative process.",
      perks: [
        "All VIP Supporter perks",
        "Quarterly virtual meetup",
        "Input on upcoming projects",
        "Executive producer credit",
        "Exclusive merchandise"
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2400&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-black mb-6">SUPPORT THE MUSIC</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Your support helps keep the music flowing. Choose how you'd like to contribute to the journey.
          </p>
        </div>
      </div>

      {/* Support Tiers */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportTiers.map((tier) => (
            <div key={tier.title} className="bg-zinc-900/50 rounded-xl p-8 backdrop-blur-sm">
              <tier.icon size={40} className="text-red-500 mb-6" />
              <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
              <div className="text-red-500 text-xl font-bold mb-4">{tier.amount}</div>
              <p className="text-gray-400 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-gray-300">{perk}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="mailto:Miranomas@franciscoherreramusic.com?subject=Support Tier: {tier.title}"
                className="block w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg transition text-center"
              >
                Support Now
              </a>
            </div>
          ))}
        </div>

        {/* One-Time Gift */}
        <div className="mt-20 bg-zinc-900/50 rounded-xl p-8 backdrop-blur-sm text-center">
          <Gift size={40} className="text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">One-Time Gift</h2>
          <p className="text-xl text-gray-400 mb-8">
            Prefer to make a one-time contribution? Every bit of support helps fuel the creative process.
          </p>
          <a 
            href="mailto:Miranomas@franciscoherreramusic.com?subject=One-Time Support Inquiry"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg transition"
          >
            <Heart size={20} />
            Send Support
          </a>
        </div>
      </div>
    </div>
  );
}