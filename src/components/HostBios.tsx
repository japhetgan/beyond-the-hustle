import { useScrollReveal } from '../hooks/useScrollReveal'
import { hostBios } from '../data/content'

/*
  ============================================
  TO ADD HOST PHOTOS:
  ============================================
  1. Place photos in /public/images/hosts/
  2. Update the 'image' field in src/data/content.ts:
     image: '/images/hosts/kerry-tepedino.jpg'
  3. Recommended size: 800×600px (4:3 landscape ratio)
  ============================================
*/

export default function HostBios() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="reveal-section py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">Your Hosts</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal">
            Meet Kerry & Jessica
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 reveal-children">
          {hostBios.map((host) => (
            <div key={host.name} className="bg-white overflow-hidden group hover:shadow-lg transition-all duration-500">
              {/* Portrait — shows real photo if provided, gradient placeholder otherwise */}
              <div className="w-full aspect-[4/3] relative overflow-hidden">
                {host.image ? (
                  <img
                    src={host.image}
                    alt={host.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-charcoal/5 via-blush/15 to-gold/10 flex items-center justify-center">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[55%] bg-charcoal/[0.04] rounded-t-full" />
                    <div className="absolute bottom-[48%] left-1/2 -translate-x-1/2 w-[22%] aspect-square bg-charcoal/[0.04] rounded-full" />
                    <span className="font-heading text-6xl text-charcoal/10 font-bold relative z-10">
                      {host.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>

              <div className="p-8 md:p-10">
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal mb-2">
                  {host.name}
                </h3>
                <p className="font-body text-sm text-gold uppercase tracking-widest mb-6">
                  {host.title}
                </p>
                <div className="space-y-3">
                  {host.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3">
                      <span className="text-gold mt-1.5 text-xs">&#9670;</span>
                      <p className="font-body text-sm text-charcoal/70">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
