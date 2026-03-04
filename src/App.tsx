import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import IntroCopy from './components/IntroCopy'
import SpeakerGrid from './components/SpeakerGrid'
import WhoBelongs from './components/WhoBelongs'
import WhatYouGain from './components/WhatYouGain'
import Philosophy from './components/Philosophy'
import CaseStudies from './components/CaseStudies'
import PhotoGallery from './components/PhotoGallery'
import OriginStory from './components/OriginStory'
import ExperienceHighlights from './components/ExperienceHighlights'
import Pricing from './components/Pricing'
import HostBios from './components/HostBios'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-cream text-charcoal font-body">
      <Navbar />
      <Hero />
      <VideoSection />
      <IntroCopy />
      <SpeakerGrid />
      <WhoBelongs />
      <WhatYouGain />
      <Philosophy />
      <CaseStudies />
      <PhotoGallery />
      <OriginStory />
      <ExperienceHighlights />
      <Pricing />
      <HostBios />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
