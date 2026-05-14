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
        subtitle="Six offres calibrées pour chaque étape de votre maturité IA — du premier diagnostic à la solution propriétaire en production. Chaque livrable est tangible, chaque KPI est mesuré."
        align="center"
      />

      <ServicesGrid />

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
                  ['Positionnement', 'Spécialiste IA pure player', 'Généraliste IT rebadgé IA'],
                  ['Profils en mission', 'Seniors uniquement, zéro junior', 'Profils mixtes, juniors fréquents'],
                  ['Délai de mise en production', 'En semaines — MVP agile garanti', 'En mois, souvent en années'],
                  ['Indépendance technologique', 'Agnostique — aucun partenariat éditeur', 'Souvent liés à des éditeurs'],
                  ['Transparence ROI', 'Business case validé avant tout développement', 'Effet tunnel, ROI rarement mesuré'],
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
