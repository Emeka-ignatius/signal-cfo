import Hero from '@/components/Hero'
import NarrativeSection from '@/components/NarrativeSection'
import FounderSection from '@/components/FounderSection'
import CriticalMirror from '@/components/CriticalMirror'
import TimelineFAQ from '@/components/TimelineFAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative bg-forest-900 min-h-screen">
      <Hero />
      <NarrativeSection />
      <FounderSection />
      <CriticalMirror />
      <TimelineFAQ />
      <Footer />
    </main>
  )
}
