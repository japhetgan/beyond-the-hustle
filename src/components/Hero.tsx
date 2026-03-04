import { CHECKOUT_URL } from '../data/content'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-blush-light/30 to-gold/15">
      {/* Floating orbs */}
      <div className="orb w-72 h-72 bg-gold/30 top-[10%] left-[10%]" style={{ animationDelay: '0s' }} />
      <div className="orb orb-alt w-96 h-96 bg-blush/40 top-[20%] right-[5%]" style={{ animationDelay: '-5s' }} />
      <div className="orb w-64 h-64 bg-gold/20 bottom-[15%] left-[35%]" style={{ animationDelay: '-10s' }} />
      <div className="orb orb-alt w-80 h-80 bg-blush/25 bottom-[25%] right-[20%]" style={{ animationDelay: '-3s' }} />
      <div className="orb w-48 h-48 bg-cream-dark/50 top-[50%] left-[5%]" style={{ animationDelay: '-8s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-charcoal/60 mb-6 font-body">
          May 29 – June 1, 2026
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal leading-[1.1] mb-6">
          You're Leading.
          <br />
          <span className="italic font-medium text-gold-dark">But Are You Living?</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          You've built the business. Now let's build the life that makes it worth it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-charcoal text-sm uppercase tracking-widest px-10 py-4 font-medium hover:bg-gold-light transition-all duration-300 hover:shadow-lg"
          >
            Join Your Sisterhood
          </a>
          <a
            href="#about"
            className="border-2 border-charcoal/30 text-charcoal text-sm uppercase tracking-widest px-10 py-4 font-medium hover:border-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
