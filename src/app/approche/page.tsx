import { Metadata } from 'next'
import ApproacheTimeline from '@/components/sections/ApproacheTimeline'
import CommitmentsSection from '@/components/sections/CommitmentsSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactCTA from '@/components/sections/ContactCTA'
import PageHero from '@/components/ui/PageHero'
import { FAQ_APPROCHE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Notre Approche Méthodologique',
  description: 'Découvrez notre méthodologie éprouvée pour transformer l\'IA en leviers de croissance concrets pour votre entreprise.',
}

export default function ApprochePage() {
  return (
    <>
      <PageHero
        badge="Méthodologie"
        title="De la vision"
        titleAccent="à l'impact réel."
        subtitle="Une méthodologie en 4 phases construite à partir de 120+ déploiements en production. Chaque phase a des livrables précis, des KPIs mesurés et un transfert de compétences intégré."
        align="center"
      />

      <ApproacheTimeline />
      <CommitmentsSection />
      <FAQSection items={FAQ_APPROCHE} />
      <ContactCTA />
    </>
  )
}
