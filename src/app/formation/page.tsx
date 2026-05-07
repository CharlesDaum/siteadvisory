import { Metadata } from 'next'
import { FORMATIONS, FAQ_FORMATION } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import ContactCTA from '@/components/sections/ContactCTA'
import { CheckCircle2 } from 'lucide-react'
import * as Icons from 'lucide-react'

export const metadata: Metadata = {
  title: 'Formations & Culture IA',
  description: 'Programmes de formation sur mesure pour démystifier l\'IA, former vos collaborateurs et impulser une culture de l\'innovation.',
}

export default function FormationPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dot-pattern opacity-30 mix-blend-screen" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <Badge variant="pill" className="mb-6">
            <span className="mr-2 text-accent-primary">●</span> NEXIA ACADEMY
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Accélérez l'adoption de l'IA <br className="hidden md:block" />
            <span className="text-accent-primary">par vos équipes</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            L'outil ne fait pas tout. Pour tirer une réelle valeur de l'IA, l'acculturation et la montée en compétence de vos collaborateurs sont indispensables. Découvrez nos formats adaptés à chaque niveau de maturité.
          </p>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary border-t border-border-subtle relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-accent-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {FORMATIONS.map((formation, idx) => {
              // @ts-ignore
              const Icon = Icons[formation.icon] || Icons.BookOpen
              
              return (
                <Card key={idx} hoverable className="flex flex-col relative overflow-hidden bg-bg-card border-border-subtle group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/10 rounded-bl-full opacity-50 transition-opacity group-hover:opacity-100" />
                  
                  <div className="mb-6 h-14 w-14 rounded-xl bg-bg-secondary border border-border-subtle flex items-center justify-center text-accent-primary relative z-10">
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <h2 className="text-2xl font-display font-bold text-white mb-2 relative z-10">{formation.title}</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    <Badge variant="outline" className="text-xs">{formation.duration}</Badge>
                    <Badge variant="outline" className="text-xs text-text-muted border-border-subtle">{formation.audience}</Badge>
                  </div>
                  
                  <p className="text-text-secondary mb-8 relative z-10">
                    {formation.description}
                  </p>
                  
                  <div className="mb-8 relative z-10 flex-grow">
                    <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Programme :</h4>
                    <ul className="space-y-3">
                      {formation.modules.map((module, i) => (
                        <li key={i} className="flex items-start text-sm text-text-secondary">
                          <CheckCircle2 className="h-4 w-4 text-accent-primary mr-2 shrink-0 mt-0.5" />
                          <span>{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-border-subtle relative z-10 flex items-center justify-between">
                    <span className="font-semibold text-white">{formation.price}</span>
                    <a href="/contact" className="text-sm font-medium text-accent-primary hover:text-white transition-colors">
                      Demander un devis →
                    </a>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Formation */}
      <section className="py-24 bg-bg-primary border-t border-border-subtle">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader 
            title="Questions Fréquentes"
            subtitle="Tout ce que vous devez savoir sur nos formats pédagogiques."
            align="center"
            className="mb-16"
          />
          <div className="flex flex-col gap-4">
            {FAQ_FORMATION.map((faq, idx) => (
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
