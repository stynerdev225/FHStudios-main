import { Link } from "react-router-dom"
import { Guitar, ArrowRight } from "lucide-react"

export function FeaturedPerformance() {
  return (
    <div className="bg-zinc-900 py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-500 px-6 py-3 rounded-full" data-editable data-name="featured-request">
              <Guitar size={24} />
              <span className="font-bold text-lg">REQUEST A SHOW</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight" data-editable data-name="featured-title">
              No Events
              <br />
              Near You?
              <br />
              <span className="text-red-600">No Problem</span>
            </h2>

            <p className="text-xl text-gray-300" data-editable data-name="featured-desc">
              Request a show in your area and experience Francisco Herrera's soul-stirring fusion of mariachi and modern
              guitar live!
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/tours"
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold transition inline-flex items-center gap-2"
              >
                Request a Show
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/tours"
                className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition"
              >
                View Tour Dates
              </Link>
            </div>
          </div>

          <div className="relative">
            <figure className="aspect-[3/4] rounded-2xl overflow-hidden" data-editable data-name="featured-image">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80"
                alt="Francisco Herrera Live Performance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </figure>
            <a
              href="mailto:Miranomas@franciscoherreramusic.com?subject=Show Request&body=I would like to request a show in my area."
              className="absolute -bottom-8 -right-8 bg-red-600 text-white px-10 py-8 rounded-2xl transform rotate-6 hover:rotate-0 hover:scale-110 shadow-xl transition-all duration-300 cursor-pointer animate-pulse"
              data-editable data-name="featured-cta"
            >
              <div className="transform rotate-0 text-4xl md:text-5xl font-black whitespace-nowrap flex items-center justify-center gap-4">
                Request Now
                <ArrowRight strokeWidth={2.5} className="animate-bounce w-12 h-12" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

