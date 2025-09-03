export function PassionSection() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=2400&q=80")',
        }}
        data-editable
        data-name="passion-background"
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h2 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter text-shadow-lg flex items-center justify-center gap-4" data-editable data-name="passion-line1">
              PASSIONATE
              <span className="text-red-600 transform -rotate-12">🎸</span>
              <span className="text-red-600">ARTIST</span>
            </h2>
            <h2 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter text-shadow-lg" data-editable data-name="passion-line2">
              CRAFTING SOULFUL
            </h2>
            <h2 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter text-shadow-lg" data-editable data-name="passion-line3">
              MUSIC, CONNECTING
            </h2>
            <h2 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter text-shadow-lg" data-editable data-name="passion-line4">
              HEARTS THROUGH
            </h2>
            <h2 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter text-shadow-lg" data-editable data-name="passion-line5">
              POWERFUL MELODIES
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
