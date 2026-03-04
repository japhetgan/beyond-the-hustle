import { useScrollReveal } from '../hooks/useScrollReveal'
import { experienceCards } from '../data/content'

const icons = [
  // Gourmet Dinner
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="20" r="10" stroke="#C9A84C" strokeWidth="1.5" /><path d="M18 10V6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" /><path d="M14 10C14 8 16 6 18 6C20 6 22 8 22 10" stroke="#C9A84C" strokeWidth="1.5" /><line x1="8" y1="20" x2="28" y2="20" stroke="#C9A84C" strokeWidth="1.5" /></svg>,
  // Luxury Travel
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 4L22 14H30L24 20L26 30L18 24L10 30L12 20L6 14H14L18 4Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" /></svg>,
  // Inspiring Sessions
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 6C18 6 14 14 14 20C14 24 16 28 18 30C20 28 22 24 22 20C22 14 18 6 18 6Z" stroke="#C9A84C" strokeWidth="1.5" /><path d="M12 12H24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" /><path d="M10 18H26" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  // Personalized Gifts
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="6" y="14" width="24" height="16" rx="2" stroke="#C9A84C" strokeWidth="1.5" /><path d="M18 14V30" stroke="#C9A84C" strokeWidth="1.5" /><path d="M6 20H30" stroke="#C9A84C" strokeWidth="1.5" /><path d="M18 14C18 14 14 10 12 8C10 6 12 4 14 6C16 8 18 14 18 14Z" stroke="#C9A84C" strokeWidth="1.5" /><path d="M18 14C18 14 22 10 24 8C26 6 24 4 22 6C20 8 18 14 18 14Z" stroke="#C9A84C" strokeWidth="1.5" /></svg>,
  // Surprise Adventures
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 4L6 32H30L18 4Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="18" cy="22" r="3" stroke="#C9A84C" strokeWidth="1.5" /><path d="M18 14V18" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  // New Friendships
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="14" cy="12" r="4" stroke="#C9A84C" strokeWidth="1.5" /><circle cx="22" cy="12" r="4" stroke="#C9A84C" strokeWidth="1.5" /><path d="M6 28C6 22 10 18 14 18C16 18 17 19 18 19C19 19 20 18 22 18C26 18 30 22 30 28" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" /></svg>,
]

export default function ExperienceHighlights() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="reveal-section py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">The Experience</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal">
            What Awaits You
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal-children">
          {experienceCards.map((card, i) => (
            <div
              key={card.title}
              className="bg-white p-8 md:p-10 group hover:shadow-md transition-all duration-500"
            >
              <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                {icons[i]}
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-charcoal mb-3">
                {card.title}
              </h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
