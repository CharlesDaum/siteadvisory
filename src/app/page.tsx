'use client'

import { useReveal } from '@/hooks/useReveal'
import Spotlight from '@/components/ui/Spotlight'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import LLMAgentsDiagram from '@/components/sections/LLMAgentsDiagram'
import ApproacheTimeline from '@/components/sections/ApproacheTimeline'
import ProblemSection from '@/components/sections/ProblemSection'
import CasUsageGrid from '@/components/sections/CasUsageGrid'
import CommitmentsSection from '@/components/sections/CommitmentsSection'
import ContactCTA from '@/components/sections/ContactCTA'

export default function HomePage() {
  useReveal()
  return (
    <>
      <Spotlight />
      <HeroSection />
      <MarqueeSection />
      <TestimonialsSection />
      <ServicesGrid />
      <LLMAgentsDiagram />
      <ApproacheTimeline />
      <ProblemSection />
      <CasUsageGrid />
      <CommitmentsSection />
      <ContactCTA />
    </>
  )
}
