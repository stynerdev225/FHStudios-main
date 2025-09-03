import { useState, useEffect } from 'react';
import { Music, Heart, Globe, Award, Users, Star } from 'lucide-react';
import { SocialConnect } from '../components/SocialConnect';
import { Link } from 'react-router-dom';
import { ArrowRight, Music2 } from 'lucide-react';

export function About() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const authenticityMessages = [
    "Staying true to our roots while embracing innovation",
    "Creating authentic music that speaks from the heart",
    "Preserving our cultural heritage through sound",
    "Expressing genuine stories through every note"
  ];

  const communityMessages = [
    "Building connections through the universal language of music",
    "Fostering unity across cultures and generations",
    "Creating spaces for shared musical experiences",
    "Strengthening bonds through collaborative performances"
  ];

  const excellenceMessages = [
    "Pursuing the highest standards in our music and performances",
    "Continuously pushing the boundaries of artistic expression",
    "Mastering our craft with dedication and passion",
    "Setting new benchmarks in musical innovation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) =>
        prev === authenticityMessages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [authenticityMessages.length]);

  const achievements = [
    {
      icon: Music,
      number: "1M+",
      text: "Lives Touched Through Music"
    },
    {
      icon: Users,
      number: "100K+",
      text: "Concert Attendees"
    },
    {
      icon: Globe,
      number: "30+",
      text: "Countries Toured"
    },
    {
      icon: Award,
      number: "15+",
      text: "Music Awards"
    }
  ];

  return (
    <div>
      {/* Hero Title Section */}
      <div className="relative py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2400&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <span className="text-red-600 uppercase tracking-widest text-lg font-bold mb-6 block" data-editable data-name="about-hero-subtitle">
              The Story Behind The Music
            </span>
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter" data-editable data-name="about-hero-title">
              About <br />
              <span className="text-red-600">Francisco</span>
            </h1>
            <div className="h-1 w-32 bg-red-600 mb-8"></div>
            <p className="text-2xl md:text-3xl text-zinc-300 font-light leading-relaxed" data-editable data-name="about-hero-desc">
              From street performances to sold-out arenas, every step of this journey
              has been fueled by passion, authenticity, and the unwavering support
              of our incredible community.
            </p>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black mb-4 text-center tracking-tight">
            The <span className="text-red-600">Story</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative z-10">
                <img
                  src="https://pub-e51e6a830d3346cea7ea8a85a6b8d942.r2.dev/1.Tio.png"
                  alt="Francisco Herrera Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-24 -right-8 bg-red-600 text-white p-8 rounded-2xl z-20">
                <div className="text-6xl font-black mb-2">30+</div>
                <div className="text-xl">Years of Music</div>
              </div>
              <div className="absolute -bottom-24 left-8 bg-black/80 backdrop-blur-lg text-white p-8 rounded-2xl z-20 max-w-md">
                <span className="text-red-600 uppercase tracking-wider text-sm font-bold mb-2 block">
                  Musical Legacy
                </span>
                <p className="text-lg font-medium leading-relaxed">
                  From traditional mariachi roots to contemporary activism, Francisco's journey spans three decades of musical innovation and social change.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <span className="text-red-600 uppercase tracking-wider text-lg font-bold mb-4 block">
                  A Legacy of Music and Activism
                </span>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                  From Traditional Roots to Global Impact
                </h3>
              </div>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl !leading-relaxed text-gray-300" data-editable data-name="about-bio-para1">
                  Francisco Herrera is a musician, composer, and social justice activist whose musical journey
                  spans over three decades. Born into a family of musicians in Mexico, Francisco's early exposure
                  to traditional mariachi music laid the foundation for his unique artistic expression.
                </p>
                <p className="text-xl md:text-2xl !leading-relaxed text-gray-300" data-editable data-name="about-bio-para2">
                  Through his music, Francisco has become a voice for social change, using his platform to advocate
                  for justice, equality, and human dignity. His compositions blend traditional Latin American rhythms
                  with contemporary sounds, creating a musical bridge between cultures and generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-zinc-900/50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon size={40} className="mx-auto mb-4 text-red-500" />
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-gray-400">{achievement.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-600 uppercase tracking-wider text-lg font-bold mb-4 block" data-editable data-name="about-mission-subtitle">
              Making a Difference
            </span>
            <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tight" data-editable data-name="about-mission-title">
              Our <span className="text-red-600">Mission</span>
            </h2>
            <div className="space-y-12">
              <p className="text-xl md:text-2xl !leading-relaxed" data-editable data-name="about-mission-para1">
                Through music, we aim to create spaces of healing, unity, and social transformation.
                Our mission extends beyond entertainment to embrace education, community building,
                and the preservation of cultural heritage.
              </p>
              <p className="text-xl md:text-2xl !leading-relaxed" data-editable data-name="about-mission-para2">
                We believe in the power of music to bridge divides, inspire change, and create
                meaningful connections across cultures and generations.
              </p>
            </div>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden">
            <img
              src="https://pub-e51e6a830d3346cea7ea8a85a6b8d942.r2.dev/OurMission.png"
              alt="Our Mission"
              className="w-full h-full object-cover object-[center_15%]"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-zinc-900/50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-black mb-4 text-center tracking-tight">
            Our <span className="text-red-600">Values</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-black/50 p-8 rounded-xl group hover:bg-black/70 transition-all duration-500 border border-white/20 hover:border-white/40">
              <Heart size={40} className="text-red-500 mb-6" />
              <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight group-hover:text-red-500 transition-colors duration-300">
                Authenticity
                <div className="h-1 w-16 bg-red-500 mt-2 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <p className="text-white text-xl md:text-2xl font-medium h-32 flex items-center transition-all duration-700">
                {authenticityMessages[currentMessageIndex]}
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-xl group hover:bg-black/70 transition-all duration-500 border border-white/20 hover:border-white/40">
              <Users size={40} className="text-red-500 mb-6" />
              <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight group-hover:text-red-500 transition-colors duration-300">
                Community
                <div className="h-1 w-16 bg-red-500 mt-2 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <p className="text-white text-xl md:text-2xl font-medium h-32 flex items-center transition-all duration-700">
                {communityMessages[currentMessageIndex]}
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-xl group hover:bg-black/70 transition-all duration-500 border border-white/20 hover:border-white/40">
              <Star size={40} className="text-red-500 mb-6" />
              <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight group-hover:text-red-500 transition-colors duration-300">
                Excellence
                <div className="h-1 w-16 bg-red-500 mt-2 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <p className="text-white text-xl md:text-2xl font-medium h-32 flex items-center transition-all duration-700">
                {excellenceMessages[currentMessageIndex]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Light Section */}
      <div className="bg-white text-black py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tight" data-editable data-name="about-join-title">
                Join The <span className="text-red-600">Journey</span> of <br />
                <span className="text-red-600">Musical</span> Revolution
              </h2>
              <span className="text-red-600 uppercase tracking-wider text-lg font-bold mb-8 block" data-editable data-name="about-join-subtitle">
                Where Every Note Tells a Story of Change
              </span>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl !leading-relaxed text-zinc-700" data-editable data-name="about-join-para1">
                  Every performance ignites a spark. Every note tells a story. Every moment creates
                  a connection that transcends boundaries, bringing us together in the universal
                  language of music.
                </p>
                <p className="text-xl md:text-2xl !leading-relaxed text-zinc-700" data-editable data-name="about-join-para2">
                  This isn't just our story – it's yours too. Whether you're a musician sharing
                  the stage, a fan singing along, or someone just discovering our sound, you're
                  part of this extraordinary musical revolution that continues to grow and inspire.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/tours"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 group shadow-[0_4px_0_rgb(185,28,28)] hover:shadow-[0_2px_0_rgb(185,28,28)] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none"
                  >
                    Join Us On Tour
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 group shadow-[0_4px_0_rgb(185,28,28)] hover:shadow-[0_2px_0_rgb(185,28,28)] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none"
                  >
                    Collaborations & Bookings
                    <Music2 className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2400&q=80"
                  alt="Live Performance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-red-600 text-white p-8 rounded-2xl">
                <div className="text-6xl font-black mb-2">1M+</div>
                <div className="text-xl">Lives Touched</div>
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
