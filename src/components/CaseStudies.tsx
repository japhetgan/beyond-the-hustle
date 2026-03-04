import { useScrollReveal } from '../hooks/useScrollReveal'
import { caseStudies } from '../data/content'

export default function CaseStudies() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="reveal-section py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">Real Transformations</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal">
            Stories That Speak
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 reveal-children">
          {caseStudies.map((study) => (
            <div
              key={study.name}
              className="bg-white p-8 md:p-12 relative group hover:shadow-lg transition-all duration-500"
            >
              {/* Decorative quote mark */}
              <span className="font-heading text-8xl md:text-9xl text-gold/15 absolute top-4 left-6 leading-none select-none">
                "
              </span>

              <div className="relative">
                <h3 className="font-heading text-2xl md:text-3xl text-charcoal font-semibold mb-6 italic">
                  {study.headline}
                </h3>
                <p className="font-body text-charcoal/70 leading-relaxed mb-6">
                  {study.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-blush/30 flex items-center justify-center">
                    <span className="font-heading text-sm font-semibold text-charcoal/60">
                      {study.name[0]}
                    </span>
                  </div>
                  <span className="font-body text-sm uppercase tracking-widest text-charcoal/50">
                    {study.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
