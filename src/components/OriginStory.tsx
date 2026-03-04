import { useScrollReveal } from '../hooks/useScrollReveal'

export default function OriginStory() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="reveal-section py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">Our Story</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal">
            The Heart of Beyond The Hustle
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: story copy */}
          <div>
            <p className="font-body text-lg text-charcoal/70 leading-relaxed mb-6">
              Kerry and Jessica created Beyond The Hustle because nothing like it existed.
              They looked around at the retreats, the masterminds, the conferences — and saw
              the same pattern everywhere: more hustle, more strategy, more pressure.
            </p>
            <p className="font-body text-lg text-charcoal/70 leading-relaxed mb-6">
              But what about the woman behind the business? What about her joy, her peace,
              her adventures, her friendships? What about the life she was building all of
              this for in the first place?
            </p>
            <p className="font-body text-lg text-charcoal/70 leading-relaxed">
              So they built the room they wished they'd had. A space where success isn't
              measured by revenue alone — but by the richness of the life you're living.
              Where vulnerability is strength. Where sisterhood isn't a buzzword — it's the foundation.
            </p>
          </div>

          {/* Right: quote block */}
          <div className="bg-cream p-8 md:p-12 relative">
            <div className="w-12 h-px bg-gold mb-8" />
            <blockquote className="font-heading text-2xl md:text-3xl text-charcoal italic leading-relaxed mb-8">
              "We built the room we wished we'd had — and now, we're saving a seat for you."
            </blockquote>
            <p className="font-body text-charcoal/70 leading-relaxed mb-8">
              This isn't just an event. It's a movement. A community. A declaration that
              you can have the business AND the life — and you don't have to choose.
            </p>
            <div className="font-heading text-lg text-charcoal">
              <p className="italic text-gold-dark mb-1">With Love And Anticipation,</p>
              <p className="font-semibold">Kerry & Jessica</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
