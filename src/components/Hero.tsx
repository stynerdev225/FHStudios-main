
// Removed useRef and useState since only one video is needed
import React from 'react';

export function Hero() {
  // Minimal ContentTools initialization
  React.useEffect(() => {
    // ContentTools is loaded globally via CDN
    const ContentTools = window.ContentTools;
    if (ContentTools) {
      ContentTools.EditorApp.get().init('*[data-editable]', 'data-name');
      ContentTools.EditorApp.get().init('*[data-editable]', 'data-name');
    }
  }, []);

  return (
    <div className="relative h-[85vh] md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source
            src="https://pub-69c5f4c6114b43b2bb233e67012060c4.r2.dev/FH-Website-Assets/FH-Videos/FH-1-Video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center w-full px-2 sm:px-4">
          <h1
            className="text-6xl sm:text-8xl md:text-[12rem] font-black text-white leading-[0.9] md:leading-none tracking-tighter mb-4 md:mb-8 mx-auto"
            data-editable
            data-name="hero-title"
          >
            FRANCISCO<br />HERRERA
          </h1>
          <p
            className="text-lg sm:text-xl md:text-3xl text-gray-300 mb-6 md:mb-12 max-w-md md:max-w-2xl mx-auto px-4"
            data-editable
            data-name="hero-desc"
          >
            Experience the soul-stirring fusion of traditional mariachi and modern guitar artistry
          </p>
          {/* ...existing code... */}
        </div>
      </div>
    </div>
  );
}
