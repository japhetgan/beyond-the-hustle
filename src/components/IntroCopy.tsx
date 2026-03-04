import { useScrollReveal } from '../hooks/useScrollReveal'
import { CHECKOUT_URL } from '../data/content'

export default function IntroCopy() {
  const ref = useScrollReveal()

  return (
    <section id="about" ref={ref} className="reveal-section py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-px bg-gold mx-auto mb-10" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-8">
          Now, it's your turn<br />to consider…
        </h2>
        <p className="font-body text-lg md:text-xl text-charcoal/70 leading-relaxed mb-6">
          What would it feel like to stop pushing and start flowing? To be surrounded by
          elite women who don't need you to explain the weight of your vision — because
          they carry one of their own?
        </p>
        <p className="font-body text-lg md:text-xl text-charcoal/70 leading-relaxed mb-10">
          Beyond The Hustle is where high-performing women come to exhale, recalibrate,
          and remember who they were before the world told them they had to do more to be more.
        </p>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-charcoal text-sm uppercase tracking-widest px-10 py-4 font-medium hover:bg-gold-light transition-all duration-300 hover:shadow-lg"
        >
          Step Into The Room
        </a>
      </div>
    </section>
  )
}
