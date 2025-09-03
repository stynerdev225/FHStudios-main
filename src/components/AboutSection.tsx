
export function AboutSection() {
  return (
    <div className="relative py-48 overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2400&q=80")'
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-[90rem] mx-auto">
          <div className="text-left mb-24">
            <span
              className="text-red-600 uppercase tracking-wider text-lg font-bold"
              data-editable
              data-name="about-subtitle"
            >
              Artistic Journey
            </span>
            <h2
              className="text-8xl md:text-[10rem] font-black tracking-tighter mt-4 leading-none"
              data-editable
              data-name="about-title"
            >
              <span className="text-white">FRANCISCO'S </span>
              <span className="text-red-600">ARTISTIC JOURNEY</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <figure
              className="md:col-span-3 aspect-[4/6] rounded-3xl overflow-hidden"
              data-editable
              data-name="about-main-image"
            >
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80"
                alt="Artist with Guitar Black and White"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </figure>
            <div className="md:col-span-2 space-y-12">
              <figure
                className="aspect-[3/4] rounded-3xl overflow-hidden"
                data-editable
                data-name="about-secondary-image"
              >
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
                  alt="Artist with Guitar Warm Tones"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </figure>
              <div
                className="flex justify-center"
                data-editable
                data-name="about-emoji"
              >
                <span className="text-[300px] text-red-600 transform -rotate-12">🎸</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
