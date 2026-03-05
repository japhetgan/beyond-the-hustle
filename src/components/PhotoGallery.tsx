import { useScrollReveal } from '../hooks/useScrollReveal'

const galleryItems = [
  { id: 1, span: 'col-span-2 row-span-2', label: 'Group Photo', image: '/images/gallery/gallery-1.jpg' },
  { id: 2, span: 'col-span-1 row-span-1', label: 'Gourmet Dinner', image: '/images/gallery/gallery-2.jpg' },
  { id: 3, span: 'col-span-1 row-span-1', label: 'Workshop Session', image: '/images/gallery/gallery-3.jpg' },
  { id: 4, span: 'col-span-1 row-span-2', label: 'Candid Moment', image: '/images/gallery/gallery-4.jpg' },
  { id: 5, span: 'col-span-1 row-span-1', label: 'Adventure', image: '/images/gallery/gallery-5.jpg' },
  { id: 6, span: 'col-span-2 row-span-1', label: 'Panel Discussion', image: '/images/gallery/gallery-6.jpg' },
  { id: 7, span: 'col-span-1 row-span-1', label: 'Networking', image: '/images/gallery/gallery-7.jpg' },
  { id: 8, span: 'col-span-1 row-span-1', label: 'Celebration', image: '/images/gallery/gallery-8.jpg' },
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
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} relative overflow-hidden group cursor-pointer`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500 flex items-end">
                <p className="font-body text-sm text-white px-4 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
