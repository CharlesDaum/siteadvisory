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
        subtitle="Notre méthode rigoureuse en 4 phases sécurise votre investissement et transforme chaque initiative IA en résultat mesurable — du diagnostic jusqu'au déploiement en production."
        align="center"
      />

      <ApproacheTimeline preview={false} />
      <CommitmentsSection />
      <FAQSection items={FAQ_APPROCHE} />
      <ContactCTA />
    </>
  )
}
