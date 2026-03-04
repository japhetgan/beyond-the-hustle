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
        <div className="relative w-full aspect-video bg-charcoal-light overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1004138668?h=0c97a61a2a&title=0&byline=0&portrait=0"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Beyond The Hustle Retreat Highlights"
          />
        </div>

        <p className="text-center text-white/30 text-xs mt-4 font-body">
          Highlights from past Beyond The Hustle retreats
        </p>
      </div>
    </section>
  )
}
