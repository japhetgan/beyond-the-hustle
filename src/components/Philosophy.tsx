import { useScrollReveal } from '../hooks/useScrollReveal'
import { philosophyCards, philosophyBgImage } from '../data/content'

const cardIcons = [
  // Strength - shield
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 3L4 8V16C4 23 9 28 16 29C23 28 28 23 28 16V8L16 3Z" stroke="#C9A84C" strokeWidth="1.5" /><path d="M12 16L15 19L21 13" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  // Ascend - arrows up
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M10 22L16 8L22 22" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 18H20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  // Nurture - heart
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 27C16 27 4 20 4 12C4 8 7 5 11 5C13.5 5 15.5 6.5 16 7.5C16.5 6.5 18.5 5 21 5C25 5 28 8 28 12C28 20 16 27 16 27Z" stroke="#C9A84C" strokeWidth="1.5" /></svg>,
  // Ignite - flame
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 3C16 3 10 12 10 18C10 22 12.5 26 16 28C19.5 26 22 22 22 18C22 12 16 3 16 3Z" stroke="#C9A84C" strokeWidth="1.5" /><path d="M16 18C16 18 14 15 14 13C14 11 16 10 16 10C16 10 18 11 18 13C18 15 16 18 16 18Z" stroke="#C9A84C" strokeWidth="1.5" /></svg>,
  // Bonds - chain link
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="12" cy="16" r="6" stroke="#C9A84C" strokeWidth="1.5" /><circle cx="20" cy="16" r="6" stroke="#C9A84C" strokeWidth="1.5" /></svg>,
  // Exhale - wind
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 12H20C22 12 24 10 24 8C24 6 22 4 20 4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" /><path d="M4 20H24C26 20 28 18 28 16C28 14 26 12 24 12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" /><path d="M4 28H16C18 28 20 26 20 24C20 22 18 20 16 20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" /></svg>,
]

export default function Philosophy() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="reveal-section relative py-24 md:py-32 px-6 bg-charcoal text-white overflow-hidden">
      {/* Background photo with dark overlay */}
      {philosophyBgImage && (
        <>
          <img
            src={philosophyBgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* 85% opacity charcoal overlay — photo bleeds through subtly */}
          <div className="absolute inset-0 bg-charcoal/85" />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">Be Bold. Be Brave.</p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            If You're Settling In Any Area Of Your Life…{' '}
            <span className="text-gold italic">Beyond The Hustle Is Non-Negotiable.</span>
          </h2>
          <p className="font-body text-lg text-white/60 leading-relaxed">
            It's time to reconnect with your purpose — and design a life that's as extraordinary
            as the business you've built. A life of wealth, wellness, adventure, and deep connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-children">
          {philosophyCards.map((card, i) => (
            <div
              key={card.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 group hover:bg-white/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="mb-5 opacity-60 group-hover:opacity-100 transition-opacity">
                {cardIcons[i]}
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="font-body text-sm text-white/50 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
