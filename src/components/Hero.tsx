import { CHECKOUT_URL, heroImage } from "../data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-blush-light/30 to-gold/15">
      {/* Background photo */}
      {heroImage && (
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Overlay stack — only when photo is present */}
      {heroImage && (
        <>
          {/* Layer 1: Dark scrim for text legibility */}
          <div className="absolute inset-0 bg-charcoal/65" />
          {/* Layer 2: Brand warm wash — gold from top, blush fade at bottom */}
          <div className="absolute inset-0 bg-linear-to-b from-gold/20 via-transparent to-blush/15" />
        </>
      )}

      {/* Floating orbs */}
      <div
        className="orb w-72 h-72 bg-gold/30 top-[10%] left-[10%]"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="orb orb-alt w-96 h-96 bg-blush/40 top-[20%] right-[5%]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="orb w-64 h-64 bg-gold/20 bottom-[15%] left-[35%]"
        style={{ animationDelay: "-10s" }}
      />
      <div
        className="orb orb-alt w-80 h-80 bg-blush/25 bottom-[25%] right-[20%]"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="orb w-48 h-48 bg-cream-dark/50 top-[50%] left-[5%]"
        style={{ animationDelay: "-8s" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Date badge with shimmer gold effect */}
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-gold/60 bg-charcoal/50 backdrop-blur-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-body font-bold shimmer-text">
            May 29 – June 1, 2026
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        </div>
        <h1
          className={`font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] ${heroImage ? "text-white" : "text-charcoal"}`}
        >
          You're Leading.
          <br />
          <span className="italic font-medium text-gold">
            But Are You{" "}
            <span className="underline decoration-white">Living</span>?
          </span>
        </h1>
        <p
          className={`font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed [text-shadow:0_1px_6px_rgba(0,0,0,0.4)] ${heroImage ? "text-white/90" : "text-charcoal/70"}`}
        >
          You've built the business. Now let's build the life that makes it
          worth it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-charcoal text-sm uppercase tracking-widest px-10 py-4 font-medium hover:bg-gold-light transition-all duration-300 hover:shadow-lg"
          >
            Join Your Sisterhood
          </a>
          <a
            href="#about"
            className={`border-2 text-sm uppercase tracking-widest px-10 py-4 font-medium transition-all duration-300 ${
              heroImage
                ? "border-white/80 text-white hover:border-white hover:bg-white hover:text-charcoal"
                : "border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-cream"
            }`}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom fade — always cream for smooth section transition */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-cream to-transparent" />
    </section>
  );
}
