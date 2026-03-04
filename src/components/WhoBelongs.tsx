import { useScrollReveal } from '../hooks/useScrollReveal'
import { whoBelongsPoints } from '../data/content'

function GoldCheck() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-1">
      <path
        d="M20 6L9 17L4 12"
        stroke="#C9A84C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function WhoBelongs() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="reveal-section py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: headline */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">This Is Your Invitation</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
            Who Belongs<br />In This Room
          </h2>
          <div className="w-16 h-px bg-gold mt-8" />
        </div>

        {/* Right: bullet points */}
        <div className="space-y-6">
          {whoBelongsPoints.map((point, i) => (
            <div key={i} className="flex gap-4">
              <GoldCheck />
              <p className="font-body text-lg text-charcoal/80 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
