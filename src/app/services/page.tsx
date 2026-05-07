import { Metadata } from 'next'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ContactCTA from '@/components/sections/ContactCTA'
import SectionHeader from '@/components/ui/SectionHeader'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos Services & Solutions IA',
  description: 'Du diagnostic data au déploiement d\'agents intelligents, découvrez nos offres pour intégrer l\'IA au cœur de votre stratégie.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-8 bg-bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-30 mix-blend-screen" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            L'IA <span className="text-accent-primary">Sur-Mesure</span> <br className="hidden md:block" /> pour votre Croissance
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            Nos solutions sont conçues pour répondre aux défis spécifiques des dirigeants : rationaliser les opérations, débloquer de nouveaux relais de croissance et garantir l'avantage concurrentiel.
          </p>
        </div>
      </section>

      <ServicesGrid preview={false} />

      <section className="py-24 bg-bg-secondary border-y border-border-subtle">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Pourquoi choisir NexIA Advisory ?"
            align="center"
            className="mb-16"
          />
          
          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border-subtle bg-bg-card">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-subtle bg-bg-primary">
                  <th className="p-4 md:p-6 text-text-secondary font-medium w-1/3">Critères</th>
                  <th className="p-4 md:p-6 text-white font-bold border-l border-r border-border-subtle bg-accent-primary/10 w-1/3">NexIA Advisory</th>
                  <th className="p-4 md:p-6 text-text-muted font-medium w-1/3">ESN / Généralistes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                <tr>
                  <td className="p-4 md:p-6 text-text-primary">Focus métier & Stratégique</td>
                  <td className="p-4 md:p-6 border-l border-r border-border-subtle bg-accent-primary/5 text-accent-primary font-medium">Expertise native IA & Business</td>
                  <td className="p-4 md:p-6 text-text-secondary">Focus technique IT traditionnel</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 text-text-primary">Temps de déploiement</td>
                  <td className="p-4 md:p-6 border-l border-r border-border-subtle bg-accent-primary/5 text-accent-primary font-medium">En semaines (Approche MVP & Agile)</td>
                  <td className="p-4 md:p-6 text-text-secondary">En mois ou années</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 text-text-primary">Indépendance solutions</td>
                  <td className="p-4 md:p-6 border-l border-r border-border-subtle bg-accent-primary/5 text-accent-primary font-medium">Totalement agnostique (Multi-LLM)</td>
                  <td className="p-4 md:p-6 text-text-secondary">Souvent liés à des éditeurs spécifiques</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 text-text-primary">Transparence & ROI</td>
                  <td className="p-4 md:p-6 border-l border-r border-border-subtle bg-accent-primary/5 text-accent-primary font-medium">Matrice ROI validée avant tout dev</td>
                  <td className="p-4 md:p-6 text-text-secondary">Effet tunnel fréquent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
