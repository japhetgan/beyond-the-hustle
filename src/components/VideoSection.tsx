import { useScrollReveal } from '../hooks/useScrollReveal'

export default function VideoSection() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="reveal-section py-24 md:py-32 px-6 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">See It For Yourself</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
            Experience Beyond The Hustle
          </h2>
        </div>

        {/* Video Container — 16:9 aspect ratio */}
        <div className="relative w-full aspect-video bg-charcoal-light overflow-hidden group cursor-pointer">
          {/*
            ============================================
            TO ADD YOUR VIDEO:
            ============================================
            Option A — YouTube/Vimeo embed:
              Replace this entire div's contents with:
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            Option B — Self-hosted MP4:
              Replace this entire div's contents with:
              <video
                src="/videos/bth-promo.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                controls
                poster="/images/video-poster.jpg"
              />

            Option C — Keep the placeholder and link to external video:
              Wrap in an <a> tag linking to your video URL
            ============================================
          */}

          {/* Placeholder background — cinematic gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-gold/10" />

          {/* Decorative film grain texture */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }} />

          {/* Corner decorative frames */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/30" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/30" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/30" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/30" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/90 flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-500 shadow-2xl">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="ml-1">
                <path d="M8 5V19L19 12L8 5Z" fill="#1A1A1A" />
              </svg>
            </div>
            <p className="mt-6 text-white/60 text-sm uppercase tracking-widest font-body">
              Watch The Highlight Reel
            </p>
          </div>

          {/* Subtle animated shimmer on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
        </div>

        <p className="text-center text-white/30 text-xs mt-4 font-body">
          Highlights from past Beyond The Hustle retreats
        </p>
      </div>
    </section>
  )
}
