import { Metadata } from 'next'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ContactCTA from '@/components/sections/ContactCTA'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Nos Services & Solutions IA',
  description: 'Du diagnostic data au déploiement d\'agents intelligents, découvrez nos offres pour intégrer l\'IA au cœur de votre stratégie.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Nos Solutions"
        title="L'IA Sur-Mesure"
        titleAccent="pour votre Croissance"
        subtitle="Six offres structurées pour vous accompagner de la réflexion stratégique au déploiement technique — sans sur-promesse, avec des résultats mesurables à chaque étape."
        align="center"
      />

      <ServicesGrid preview={false} />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Pourquoi choisir NexIA Advisory ?"
            align="center"
            className="mb-16"
          />

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.07]">
                  <th className="p-4 md:p-6 text-text-secondary font-medium text-sm w-1/3">Critères</th>
                  <th className="p-4 md:p-6 text-white font-bold border-l border-r border-white/[0.07] bg-accent-primary/10 w-1/3 text-sm">NexIA Advisory</th>
                  <th className="p-4 md:p-6 text-text-muted font-medium text-sm w-1/3">ESN / Généralistes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {[
                  ['Focus métier & Stratégique', 'Expertise native IA & Business', 'Focus technique IT traditionnel'],
                  ['Temps de déploiement', 'En semaines (MVP & Agile)', 'En mois ou années'],
                  ['Indépendance solutions', 'Agnostique multi-LLM', 'Souvent liés à des éditeurs'],
                  ['Transparence & ROI', 'Matrice ROI validée avant tout dev', 'Effet tunnel fréquent'],
                ].map(([criteria, nexia, esn]) => (
                  <tr key={criteria}>
                    <td className="p-4 md:p-6 text-text-primary text-sm">{criteria}</td>
                    <td className="p-4 md:p-6 border-l border-r border-white/[0.07] bg-accent-primary/5 text-accent-primary font-medium text-sm">{nexia}</td>
                    <td className="p-4 md:p-6 text-text-secondary text-sm">{esn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
