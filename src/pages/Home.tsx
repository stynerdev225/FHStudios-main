import { Hero } from '../components/Hero';
import { LatestReleases } from '../components/LatestReleases';
import { FeaturedPerformance } from '../components/FeaturedPerformance';
import { PassionSection } from '../components/PassionSection';
import { AboutSection } from '../components/AboutSection';
import { Testimonials } from '../components/Testimonials';
import { InstagramBanner } from '../components/InstagramBanner';

export function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-500 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🎸</span>
            <span className="font-bold text-lg">FRANCISCO'S ARTISTIC JOURNEY</span>
          </div>
        </div>
      </div>
      <Hero />
      <LatestReleases />
      <FeaturedPerformance />
      <AboutSection />
      <PassionSection />
      <Testimonials />
      <InstagramBanner />
    </>
  );
}
