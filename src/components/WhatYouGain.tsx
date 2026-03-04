import { useScrollReveal } from '../hooks/useScrollReveal'
import { whatYouGainCards } from '../data/content'

function CardIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    circle: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="15" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="8" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" fill="#C9A84C" />
      </svg>
    ),
    reset: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 8V20L28 24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="14" stroke="#C9A84C" strokeWidth="1.5" />
        <path d="M8 12L6 8M8 12L12 10" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    coaching: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 6C14 6 10 10 10 15C10 22 20 34 20 34C20 34 30 22 30 15C30 10 26 6 20 6Z" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="20" cy="15" r="4" stroke="#C9A84C" strokeWidth="1.5" />
      </svg>
    ),
    adventure: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 6L26 18H34L28 26L30 34L20 28L10 34L12 26L6 18H14L20 6Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  }

  return icons[type] || icons.circle
}

export default function WhatYouGain() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="reveal-section py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">The Transformation</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal">
            What You Will Gain
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 reveal-children">
          {whatYouGainCards.map((card) => (
            <div
              key={card.title}
              className="bg-cream/40 p-8 md:p-10 group hover:bg-cream hover:shadow-md transition-all duration-500"
            >
              <div className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                <CardIcon type={card.icon} />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-charcoal mb-3">
                {card.title}
              </h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
