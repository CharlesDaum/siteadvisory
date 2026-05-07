import { Metadata } from 'next'
import ApproacheTimeline from '@/components/sections/ApproacheTimeline'
import ContactCTA from '@/components/sections/ContactCTA'
import SectionHeader from '@/components/ui/SectionHeader'
import { FAQ_APPROCHE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Notre Approche Méthodologique',
  description: 'Découvrez notre méthodologie éprouvée pour transformer l\'IA en leviers de croissance concrets pour votre entreprise.',
}

export default function ApprochePage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-bg-primary overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 z-0 bg-dot-pattern opacity-30 mix-blend-screen" />
        <div className="container relative z-10 mx-auto px-6">
          <SectionHeader 
            title="De la Vision à l'Impact Réel"
            subtitle="L'Intelligence Artificielle n'est plus une technologie du futur, c'est un impératif d'aujourd'hui. Découvrez comment notre méthodologie rigoureuse sécurise votre investissement et accélère votre transformation."
            badge="MÉTHODOLOGIE"
            align="center"
          />
        </div>
      </section>

      <ApproacheTimeline preview={false} />

      {/* Engagements / Garanties */}
      <section className="py-24 bg-bg-secondary border-t border-border-subtle">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Nos Engagements"
            subtitle="Ce qui fait la différence quand vous travaillez avec NexIA Advisory."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle">
              <h3 className="text-xl font-bold text-white mb-4">Indépendance Technologique</h3>
              <p className="text-text-secondary">Nous ne sommes liés à aucun éditeur. Nous recommandons et intégrons toujours la solution (OpenAI, Anthropic, Mistral, Open-Source) la plus pertinente pour vos enjeux spécifiques.</p>
            </div>
            <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle">
              <h3 className="text-xl font-bold text-white mb-4">Souveraineté & Sécurité</h3>
              <p className="text-text-secondary">Vos données restent les vôtres. Nous concevons des architectures "Privacy by Design" garantissant qu'aucune donnée sensible ne sert à l'entraînement de modèles publics.</p>
            </div>
            <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle">
              <h3 className="text-xl font-bold text-white mb-4">Transfert de Compétences</h3>
              <p className="text-text-secondary">Notre objectif n'est pas de vous rendre dépendants, mais autonomes. Chaque projet inclut un volet formation pour acculturer vos équipes techniques et métiers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-bg-primary border-t border-border-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader 
            title="Questions Fréquentes"
            align="center"
            className="mb-16"
          />
          <div className="flex flex-col gap-4">
            {FAQ_APPROCHE.map((faq, idx) => (
              <details key={idx} className="group p-6 rounded-2xl bg-bg-card border border-border-subtle [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                  {faq.question}
                  <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-border-subtle transition-colors group-hover:border-accent-primary group-hover:text-accent-primary">
                    <svg className="h-3 w-3 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
