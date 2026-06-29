import Hero from '@/components/Hero'
import StatsStrip from '@/components/StatsStrip'
import RecognitionSection from '@/components/RecognitionSection'
import CriticalMirror from '@/components/CriticalMirror'
import WhoItsForSection from '@/components/WhoItsForSection'
import SprintSection from '@/components/SprintSection'
import FounderSection from '@/components/FounderSection'
import FinalCtaSection from '@/components/FinalCtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative bg-forest-900 min-h-screen">
      <Hero />
      <RecognitionSection />
      <CriticalMirror />
      <WhoItsForSection />
      <SprintSection />
      <StatsStrip />
      <FounderSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
