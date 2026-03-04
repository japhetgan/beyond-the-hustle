import { useScrollReveal } from '../hooks/useScrollReveal'

/*
  ============================================
  TO ADD YOUR PHOTOS:
  ============================================
  1. Place your event photos in the /public/images/gallery/ folder
  2. Name them: gallery-1.jpg, gallery-2.jpg, etc.
  3. Replace the placeholder divs below with <img> tags:
     <img src="/images/gallery/gallery-1.jpg" alt="Description" className="w-full h-full object-cover" />
  4. For best results, use photos that are at least 800px wide
  5. Mix of landscape and portrait photos creates the best visual effect
  ============================================
*/

const galleryItems = [
  { id: 1, span: 'col-span-2 row-span-2', label: 'Group Photo', hint: 'Large group shot — best at 1200×800px' },
  { id: 2, span: 'col-span-1 row-span-1', label: 'Gourmet Dinner', hint: 'Dinner table or culinary moment' },
  { id: 3, span: 'col-span-1 row-span-1', label: 'Workshop Session', hint: 'Women engaged in session' },
  { id: 4, span: 'col-span-1 row-span-2', label: 'Candid Moment', hint: 'Portrait or candid — vertical crop' },
  { id: 5, span: 'col-span-1 row-span-1', label: 'Adventure', hint: 'Outdoor activity or excursion' },
  { id: 6, span: 'col-span-2 row-span-1', label: 'Panel Discussion', hint: 'Wide shot of speakers — best at 1200×600px' },
  { id: 7, span: 'col-span-1 row-span-1', label: 'Networking', hint: 'Women connecting and laughing' },
  { id: 8, span: 'col-span-1 row-span-1', label: 'Celebration', hint: 'Toast, sunset, or group celebration' },
]

const placeholderGradients = [
  'from-gold/15 via-blush/10 to-cream-dark/20',
  'from-blush/20 via-gold/10 to-cream/15',
  'from-charcoal/5 via-blush/15 to-gold/10',
  'from-gold/10 via-cream-dark/20 to-blush/15',
  'from-blush/15 via-cream/10 to-gold/20',
  'from-cream-dark/15 via-gold/15 to-blush/10',
  'from-gold/20 via-blush/15 to-cream-dark/10',
  'from-blush/10 via-gold/20 to-cream/15',
]

export default function PhotoGallery() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="reveal-section py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">Past Retreats</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal">
            Moments That Matter
          </h2>
          <p className="font-body text-charcoal/60 mt-4 max-w-xl mx-auto">
            A glimpse into the magic, connection, and transformation that happens when extraordinary women come together.
          </p>
        </div>

        {/* Photo Grid — Masonry-style with CSS Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4 reveal-children">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`${item.span} relative overflow-hidden group cursor-pointer`}
            >
              {/*
                Replace this placeholder div with an <img> tag:
                <img
                  src={`/images/gallery/gallery-${item.id}.jpg`}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              */}
              <div className={`w-full h-full bg-gradient-to-br ${placeholderGradients[i]} flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}>
                {/* Placeholder content — remove when adding real photos */}
                <div className="text-center p-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2 opacity-20">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1A1A1A" strokeWidth="1.5" />
                    <circle cx="8.5" cy="8.5" r="1.5" stroke="#1A1A1A" strokeWidth="1.5" />
                    <path d="M3 16L8 11L13 16" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M13 14L16 11L21 16" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <p className="font-heading text-sm text-charcoal/30 font-semibold">{item.label}</p>
                  <p className="font-body text-[10px] text-charcoal/20 mt-1">{item.hint}</p>
                </div>
              </div>

              {/* Hover overlay — keep this even with real photos */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
