import React from 'react';
import { Music2, Check, Crown, Guitar } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Basic",
    price: 9.99,
    features: [
      "Stream all albums",
      "Ad-free listening",
      "High-quality audio",
      "Mobile app access"
    ]
  },
  {
    name: "Premium",
    price: 19.99,
    featured: true,
    features: [
      "Everything in Basic",
      "Exclusive content",
      "Early access to new releases",
      "Live virtual events",
      "Downloadable tracks"
    ]
  },
  {
    name: "Family",
    price: 29.99,
    features: [
      "Up to 6 accounts",
      "Everything in Premium",
      "Parental controls",
      "Family mix playlists"
    ]
  }
];

export function MusicSubscription() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2400&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>

      <div className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-4 bg-red-600/20 text-red-500 px-6 py-3 rounded-full mb-8">
              <Music2 size={24} />
              <span className="font-bold text-lg">PREMIUM MUSIC ACCESS</span>
            </div>
            <h2 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
              UNLOCK THE<br />
              <span className="text-red-600">FULL EXPERIENCE</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get unlimited access to Francisco's complete discography, exclusive content, and early access to new releases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            <div className="absolute -top-20 -right-20 text-red-600/10">
              <Guitar size={200} />
            </div>

            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative group ${
                  plan.featured 
                    ? 'transform -translate-y-6' 
                    : ''
                }`}
              >
                <div className={`
                  rounded-3xl p-8 backdrop-blur-xl transition-all duration-500
                  ${plan.featured 
                    ? 'bg-red-600/90 ring-4 ring-red-500/50 group-hover:bg-red-600/95' 
                    : 'bg-white/5 group-hover:bg-white/10'
                  }
                `}>
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black">${plan.price}</span>
                        <span className="text-sm opacity-80">/month</span>
                      </div>
                    </div>
                    {plan.featured && <Crown size={24} className="text-yellow-300" />}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check size={20} className={plan.featured ? 'text-yellow-300' : 'text-red-500'} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/listen"
                    className={`
                      block w-full py-4 rounded-xl font-bold text-center transition-all duration-300
                      ${plan.featured 
                        ? 'bg-white text-red-600 hover:bg-yellow-300' 
                        : 'bg-red-600 text-white hover:bg-red-700'
                      }
                    `}
                  >
                    Choose Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}