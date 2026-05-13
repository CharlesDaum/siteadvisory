import { Metadata } from 'next'
import { FORMATIONS, FAQ_FORMATION } from '@/lib/constants'
import PageHero from '@/components/ui/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import ContactCTA from '@/components/sections/ContactCTA'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'

export const metadata: Metadata = {
  title: 'Formations & Culture IA',
  description: 'Programmes de formation sur mesure pour démystifier l\'IA, former vos collaborateurs et impulser une culture de l\'innovation.',
}

export default function FormationPage() {
  return (
    <>
      <PageHero
        badge="Nexia Academy"
        title="Accélérez l'adoption de l'IA"
        titleAccent="par vos équipes"
        subtitle="L'outil ne fait pas tout. Pour tirer une réelle valeur de l'IA, l'acculturation et la montée en compétence de vos collaborateurs sont indispensables. Formats adaptés à chaque niveau de maturité."
        align="center"
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FORMATIONS.map((formation, idx) => {
              // @ts-ignore
              const Icon = Icons[formation.icon] || Icons.BookOpen
              return (
                <div
                  key={idx}
                  className="flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.07] p-8 hover:border-accent-primary/20 transition-colors"
                >
                  <div className="mb-6 h-12 w-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="font-display text-2xl font-bold text-white mb-3">{formation.title}</h2>

                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-secondary">{formation.duration}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-muted">{formation.audience}</span>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {formation.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Programme</p>
                    <ul className="flex flex-col gap-2.5">
                      {formation.modules.map((module, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle2 className="h-4 w-4 text-accent-primary shrink-0 mt-0.5" />
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                    <span className="font-semibold text-white">{formation.price}</span>
                    <a href="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-primary hover:text-white transition-colors group">
                      Demander un devis
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader
            title="Questions Fréquentes"
            subtitle="Tout ce que vous devez savoir sur nos formats pédagogiques."
            align="center"
            className="mb-16"
          />
          <div className="flex flex-col gap-3">
            {FAQ_FORMATION.map((faq, idx) => (
              <details key={idx} className="group rounded-2xl bg-white/[0.03] border border-white/[0.07] [&_summary::-webkit-details-marker]:hidden hover:border-accent-primary/20 transition-colors">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-white">
                  {faq.question}
                  <span className="ml-4 shrink-0 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 transition-colors group-open:border-accent-primary group-open:text-accent-primary">
                    <svg className="h-3 w-3 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-text-secondary leading-relaxed">
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
