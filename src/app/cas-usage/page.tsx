import { Metadata } from 'next'
import CasUsageGrid from '@/components/sections/CasUsageGrid'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Bibliothèque de Cas d\'Usage IA',
  description: 'Explorez plus de 20 cas d\'usage de l\'Intelligence Artificielle classés par département : RH, Finance, Marketing, Opérations, Relation Client.',
}

export default function CasUsagePage() {
  return (
    <>
      <section className="relative pt-32 bg-bg-secondary overflow-hidden">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            L'IA en Action : <br className="hidden md:block" />
            <span className="text-accent-primary">Cas d'Usage Concrets</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-text-secondary mb-8">
            Passez de la théorie à la pratique. Parcourez notre bibliothèque de cas d'usage éprouvés et découvrez comment l'Intelligence Artificielle résout les défis réels de chaque département de votre entreprise.
          </p>
        </div>
      </section>

      {/* Reusing CasUsageGrid but passing preview={false} to show all cases with filters */}
      <CasUsageGrid preview={false} />

      <ContactCTA />
    </>
  )
}
