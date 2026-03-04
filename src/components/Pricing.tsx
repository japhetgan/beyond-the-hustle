import { useScrollReveal } from '../hooks/useScrollReveal'
import { CHECKOUT_URL, pricingInclusions } from '../data/content'

function GoldCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
      <path d="M20 6L9 17L4 12" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  const ref = useScrollReveal()

  return (
    <section id="pricing" ref={ref} className="reveal-section py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">Your Investment</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal">
            Secure Your Place
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-cream p-8 md:p-12 lg:p-14 border border-gold/20 relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent" />

            <div className="relative">
              <p className="font-heading text-sm uppercase tracking-[0.3em] text-gold mb-2">
                Spring 2026
              </p>
              <h3 className="font-heading text-3xl md:text-4xl text-charcoal font-semibold mb-2">
                Off the Record Retreat
              </h3>
              <p className="font-body text-charcoal/60 mb-8">
                May 29 – June 1, 2026
              </p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-heading text-5xl md:text-6xl font-bold text-gold">$5,497</span>
                  <span className="font-body text-sm text-charcoal/50">pay in full</span>
                </div>
                <p className="font-body text-charcoal/60">
                  or 2 payments of <span className="font-semibold text-charcoal">$2,997</span>
                </p>
              </div>

              <div className="w-full h-px bg-gold/20 mb-8" />

              <div className="space-y-4 mb-10">
                {pricingInclusions.map((item) => (
                  <div key={item} className="flex gap-3">
                    <GoldCheck />
                    <p className="font-body text-sm text-charcoal/80">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold text-charcoal text-center text-sm uppercase tracking-widest px-8 py-4 font-medium hover:bg-gold-light transition-all duration-300 hover:shadow-lg"
              >
                Reserve Your Ticket for The Full Experience
              </a>
            </div>
          </div>

          <p className="text-center font-body text-xs text-charcoal/40 mt-6 leading-relaxed">
            Due to the intimate and curated nature of this experience, all sales are final.
            Please reach out to our team with any questions before purchasing.
          </p>
        </div>
      </div>
    </section>
  )
}
