import { useScrollReveal } from '../hooks/useScrollReveal'
import { speakers } from '../data/content'

/*
  ============================================
  TO ADD SPEAKER PHOTOS:
  ============================================
  1. Place photos in /public/images/speakers/
  2. Name them to match the 'image' field in content.ts:
     jessica-conti.jpg, kerry-tepedino.jpg, etc.
  3. Update each speaker's 'image' field in src/data/content.ts
  4. The <img> tag below will automatically display them
  5. Recommended size: 600×800px (3:4 portrait ratio)
  ============================================
*/

function SpeakerPhoto({ name, image }: { name: string; image?: string }) {
  const initials = name.split(' ').map(n => n[0]).join('')

  if (image) {
    return (
      <div className="w-full aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
    )
  }

  return (
    <div className="w-full aspect-[3/4] bg-gradient-to-br from-charcoal/5 via-blush/20 to-gold/10 flex items-center justify-center relative overflow-hidden">
      {/* Decorative silhouette shape */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[45%] bg-charcoal/[0.04] rounded-t-full" />
      <div className="absolute bottom-[40%] left-1/2 -translate-x-1/2 w-[28%] aspect-square bg-charcoal/[0.04] rounded-full" />
      <span className="font-heading text-4xl text-charcoal/15 font-semibold relative z-10">{initials}</span>
    </div>
  )
}

export default function SpeakerGrid() {
  const ref = useScrollReveal()

  return (
    <section id="speakers" ref={ref} className="reveal-section py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">The Women In The Room</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal">
            Your Sisterhood Awaits
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 reveal-children">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group bg-cream/50 overflow-hidden hover:shadow-lg transition-all duration-500"
            >
              <SpeakerPhoto name={speaker.name} image={speaker.image} />
              <div className="p-4 md:p-5">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-charcoal group-hover:text-gold-dark transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-xs md:text-sm text-charcoal/50 mt-1">{speaker.title}</p>
              </div>
            </div>
          ))}

          {/* "And So Many More" card */}
          <div className="bg-gradient-to-br from-gold/10 to-blush/10 flex items-center justify-center p-6 min-h-[280px]">
            <div className="text-center">
              <span className="font-heading text-5xl text-gold/40 block mb-3">+</span>
              <p className="font-heading text-xl md:text-2xl text-charcoal italic">
                And So Many More
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
