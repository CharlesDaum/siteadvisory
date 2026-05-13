import { Metadata } from 'next'
import CasUsageGrid from '@/components/sections/CasUsageGrid'
import ContactCTA from '@/components/sections/ContactCTA'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Bibliothèque de Cas d\'Usage IA',
  description: 'Explorez plus de 20 cas d\'usage de l\'Intelligence Artificielle classés par département : RH, Finance, Marketing, Opérations, Relation Client.',
}

export default function CasUsagePage() {
  return (
    <>
      <PageHero
        badge="Cas d'Usage"
        title="L'IA en Action :"
        titleAccent="Résultats Concrets"
        subtitle="Plus de 20 cas d'usage éprouvés, classés par département. Passez de la théorie à la pratique et identifiez les opportunités IA les plus impactantes pour votre organisation."
        align="center"
      />

      <CasUsageGrid preview={false} />

      <ContactCTA />
    </>
  )
}
