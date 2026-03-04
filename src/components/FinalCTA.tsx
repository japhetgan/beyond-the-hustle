import { useScrollReveal } from '../hooks/useScrollReveal'
import { CHECKOUT_URL } from '../data/content'

export default function FinalCTA() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      className="reveal-section py-24 md:py-32 px-6 bg-gradient-to-br from-cream via-blush-light/30 to-gold/20 relative overflow-hidden"
    >
      {/* Subtle decorative orbs */}
      <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-gold/10 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-blush/15 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-16 h-px bg-gold mx-auto mb-10" />
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-8">
          At Beyond The Hustle, you're one meaningful connection… one crazy adventure… one powerful conversation…{' '}
          <span className="italic text-gold-dark">away from a completely different life.</span>
        </h2>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-charcoal text-sm uppercase tracking-widest px-12 py-5 font-medium hover:bg-gold-light transition-all duration-300 hover:shadow-lg"
        >
          Save Your Spot Now
        </a>
      </div>
    </section>
  )
}
