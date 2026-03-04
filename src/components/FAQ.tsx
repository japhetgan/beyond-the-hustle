import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { faqItems } from '../data/content'

export default function FAQ() {
  const ref = useScrollReveal()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={ref} className="reveal-section py-24 md:py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">Questions</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal">
            Frequently Asked
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-charcoal/10 hover:border-gold/30 transition-colors duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 md:p-7 text-left cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-lg md:text-xl text-charcoal pr-4">
                  {item.question}
                </span>
                <span
                  className={`text-gold text-2xl leading-none transition-transform duration-300 shrink-0 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                <div>
                  <p className="px-6 md:px-7 pb-6 md:pb-7 font-body text-charcoal/60 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
