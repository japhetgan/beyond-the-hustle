export const CHECKOUT_URL = 'https://kerrytepedino.thrivecart.com/bthretreat-spring2026/'

/*
  ============================================
  PHOTO GUIDE — Drop photos and update paths
  ============================================

  Section Photos (full-width backgrounds):
    Hero:        /public/images/hero.jpg              → heroImage below
    Philosophy:  /public/images/philosophy-bg.jpg     → philosophyBgImage below
    Final CTA:   /public/images/cta-bg.jpg            → ctaBgImage below
    Who Belongs: /public/images/who-belongs.jpg        → whoBelongsImage below
    Origin Story:/public/images/origin-story.jpg       → originImage below

  Speaker Headshots (600×800px, 3:4 portrait):
    /public/images/speakers/jessica-conti.jpg  → speakers[].image
    /public/images/speakers/kerry-tepedino.jpg → etc.

  Host Portraits (800×600px, 4:3 landscape):
    /public/images/hosts/kerry-tepedino.jpg    → hostBios[].image
    /public/images/hosts/jessica-conti.jpg

  Experience Cards (800×600px each):
    /public/images/experience/gourmet-dinner.jpg  → experienceCards[].image
    /public/images/experience/luxury-travel.jpg
    /public/images/experience/inspiring-sessions.jpg
    /public/images/experience/personalized-gifts.jpg
    /public/images/experience/surprise-adventures.jpg
    /public/images/experience/new-friendships.jpg

  Case Study Portraits (400×400px, square):
    /public/images/case-studies/jeanette.jpg   → caseStudies[].image
    /public/images/case-studies/jennifer.jpg

  Gallery (800px+ wide, mixed orientations):
    /public/images/gallery/gallery-1.jpg through gallery-8.jpg

  ============================================
*/

// Section background images
export const heroImage = '/images/hero.jpg'
export const philosophyBgImage = '/images/philosophy-bg.jpg'
export const ctaBgImage = ''
export const whoBelongsImage = '/images/who-belongs.jpg'
export const originImage = '/images/origin-story.jpg'

export const speakers = [
  { name: 'Jessica Conti', title: 'Managing Partner, Legacy Capital Professionals', image: '/images/speakers/jessica-conti.jpg' },
  { name: 'Kerry Tepedino', title: 'CEO, One Thought Away Project', image: '/images/speakers/kerry-tepedino.jpg' },
  { name: 'Erin Athene', title: 'Speaker & Leader', image: '/images/speakers/erin-athene.jpg' },
  { name: 'JB Owen', title: 'Speaker & Leader', image: '/images/speakers/jb-owen.jpg' },
  { name: 'Lori Otto', title: 'Speaker & Leader', image: '/images/speakers/lori-otto.jpg' },
  { name: 'Danielle Ribeiro', title: 'Speaker & Leader', image: '/images/speakers/danielle-ribeiro.jpg' },
  { name: 'Sarah Sullivan', title: 'Speaker & Leader', image: '/images/speakers/sarah-sullivan.jpg' },
  { name: 'Kelly Worley', title: 'Speaker & Leader', image: '/images/speakers/kelly-worley.jpg' },
]

export const whoBelongsPoints = [
  'Built businesses to 7, 8, or 9 figures and ready for next-level breakthrough',
  'Want more money, freedom, and joy without adding more to your plate',
  'Crave real conversations with women who get it',
  'Ready to invest in YOU — the woman behind the business',
]

export const whatYouGainCards = [
  {
    title: 'Peer-Level Power Circle',
    description: 'Surround yourself with women who operate at your level — no explanations needed. Just real talk, real strategy, and real support.',
    icon: 'circle',
  },
  {
    title: 'CEO Reset Experience',
    description: 'Step away from the noise. Recalibrate your vision, energy, and priorities so you return sharper than ever.',
    icon: 'reset',
  },
  {
    title: 'Private Coaching Moments',
    description: 'Intimate access to Kerry & Jessica for personalized guidance on your biggest challenges and boldest goals.',
    icon: 'coaching',
  },
  {
    title: 'Luxury Adventure & Soul Expansion',
    description: 'Curated experiences designed to stretch your comfort zone, ignite your spirit, and create memories that last a lifetime.',
    icon: 'adventure',
  },
]

export const philosophyCards = [
  { title: 'Rediscover Your Strength', description: 'Reconnect with the power that built your empire — and channel it into every area of your life.' },
  { title: 'Ascend Together', description: 'Rise alongside women who challenge, inspire, and elevate you to your highest potential.' },
  { title: 'Nurture Yourself', description: 'Give yourself the care, attention, and grace you so freely give to everyone else.' },
  { title: 'Ignite Your Spirit', description: 'Reignite the fire within — the passion, creativity, and joy that fuel your greatest work.' },
  { title: 'Forge Lasting Bonds', description: 'Build friendships that transcend business — connections rooted in trust, vulnerability, and shared vision.' },
  { title: 'Exhale & Unwind', description: 'Release the weight you\'ve been carrying. Breathe. Rest. Restore. You\'ve earned it.' },
]

export const caseStudies = [
  {
    headline: '2x Income + 100x Happiness',
    name: 'Jeanette',
    image: '/images/case-studies/jeanette.jpg',
    quote: 'Jeanette doubled her income in just 2 weeks after attending. By year one, she had tripled it entirely. Her practice is now waitlist-only, and she recently took her family on a once-in-a-lifetime trip to Africa. She didn\'t just build a bigger business — she built a bigger life.',
  },
  {
    headline: 'From Burnt Out to Absolutely Glowing',
    name: 'Jennifer',
    image: '/images/case-studies/jennifer.jpg',
    quote: 'Jennifer came in running on empty — no energy, constant stress, and relationships that had fizzled under the weight of her hustle. Within months of the retreat, she did a full 360. She now competes in marathons, has reconnected deeply with her family, and radiates the kind of energy that inspires everyone around her.',
  },
]

export const experienceCards = [
  { title: 'Gourmet Dinner', description: 'Indulge in curated culinary experiences that bring the group together.', image: '/images/experience/gourmet-dinner.jpg' },
  { title: 'Luxury Travel', description: 'Every detail handled so you can be fully present and immersed.', image: '/images/experience/luxury-travel.jpg' },
  { title: 'Inspiring Sessions', description: 'Thought-provoking workshops designed for women at your level.', image: '/images/experience/inspiring-sessions.jpg' },
  { title: 'Personalized Gifts', description: 'Thoughtful, luxurious surprises curated just for you.', image: '/images/experience/personalized-gifts.jpg' },
  { title: 'Surprise Adventures', description: 'Unforgettable, one-of-a-kind experiences you won\'t see coming.', image: '/images/experience/surprise-adventures.jpg' },
  { title: 'New Friendships', description: 'Bonds forged through shared vulnerability and extraordinary moments.', image: '/images/experience/new-friendships.jpg' },
]

export const pricingInclusions = [
  'Strategy Hot Seats & Power Panels',
  'Next-Level Networking',
  'Custom Business Expansion Plan',
  'Mastermind Reception',
  'Experiential Personal Growth',
  'Panels & Workshops on Wealth, Wellness & Leadership',
  'Connection Moments',
  'Sunset Celebration',
]

export const hostBios = [
  {
    name: 'Kerry Tepedino',
    title: 'Mindset Expert & Retreat Host',
    image: '/images/hosts/kerry-tepedino.jpg',
    bullets: [
      'CEO of One Thought Away Project',
      '#1 International Bestselling Author',
      'Mindset Expert & Transformational Leader',
    ],
  },
  {
    name: 'Jessica Conti',
    title: 'Business Strategist & Retreat Host',
    image: '/images/hosts/jessica-conti.jpg',
    bullets: [
      'Managing Partner, Legacy Capital Professionals',
      'Award-Winning CEO & Entrepreneur',
      '20+ Years of Entrepreneurial Leadership',
    ],
  },
]

export const faqItems = [
  {
    question: 'Who is this retreat for?',
    answer: 'This retreat is exclusively for women entrepreneurs and business leaders running 7 to 9 figure businesses who are ready to stop grinding and start living. If you\'ve built something incredible but feel like something is missing — this is for you.',
  },
  {
    question: 'What is included in the price?',
    answer: 'Your investment includes all retreat programming, strategy hot seats, power panels, next-level networking, a custom business expansion plan, the mastermind reception, experiential personal growth sessions, panels and workshops on wealth, wellness, and leadership, connection moments, and the sunset celebration. Accommodations and travel are not included.',
  },
  {
    question: 'What are the payment options?',
    answer: 'You can pay in full at $5,497 or choose two payments of $2,997 each. All payments are processed securely through our checkout portal.',
  },
  {
    question: 'Where is the retreat held?',
    answer: 'The exact location will be revealed to confirmed attendees. What we can tell you: it\'s a stunning, luxury venue that matches the caliber of the women in the room. Think breathtaking views, world-class amenities, and an atmosphere designed for transformation.',
  },
  {
    question: 'What is the refund policy?',
    answer: 'Due to the intimate and curated nature of this experience, all sales are final. We carefully select every attendee to ensure the highest quality experience for everyone in the room. If you have questions or concerns before purchasing, please reach out to our team.',
  },
  {
    question: 'How is this different from other retreats?',
    answer: 'Beyond The Hustle is not a conference, a seminar, or a networking event. It\'s a curated, intimate experience designed specifically for high-performing women who are ready to go beyond business strategy and into whole-life transformation. The women in this room are not beginners — they\'re leaders ready for their next chapter.',
  },
  {
    question: 'Can I bring a guest or business partner?',
    answer: 'Each attendee must register individually. We welcome you to share this opportunity with someone who fits the profile — but every woman in the room goes through our selection process to ensure the integrity of the experience.',
  },
]
