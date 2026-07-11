import Hero from '@/components/Hero'
import BrandsSection from '@/components/BrandsSection'
import NarrativeSection from '@/components/NarrativeSection'
import CriticalMirror from '@/components/CriticalMirror'
import HowItWorksSection from '@/components/HowItWorksSection'
import SprintSection from '@/components/SprintSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import WhoItsForSection from '@/components/WhoItsForSection'
import FounderSection from '@/components/FounderSection'
import FaqSection from '@/components/FaqSection'
import FinalCtaSection from '@/components/FinalCtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative bg-forest-900 min-h-screen">
      <Hero />
      <BrandsSection />
      <NarrativeSection />
      <CriticalMirror />
      <HowItWorksSection />
      <SprintSection />
      <TestimonialsSection />
      <WhoItsForSection />
      <FounderSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
