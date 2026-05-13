'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

const BENEFITS = [
  '15 cas d\'usage IA prêts à déployer en 2026',
  'Framework de scoring ROI/faisabilité',
  'Template d\'audit data en 10 questions',
  'Check-list de gouvernance IA (RGPD + AI Act)',
]

export default function LeadMagnetSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    // TODO: brancher sur l'API / Mailchimp / HubSpot quand disponible
    setSubmitted(true)
  }

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-white/[0.01] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
            {/* Gauche — pitch + bénéfices */}
            <div className="p-10 lg:p-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
                Ressource gratuite
              </span>

              <h2 className="font-body text-3xl font-semibold text-white md:text-4xl tracking-[-0.02em] leading-tight mb-4">
                Pas encore prêt à parler ?{' '}
                <span className="italic font-normal text-accent-secondary">Commencez par ce guide.</span>
              </h2>

              <p className="text-text-secondary leading-relaxed mb-8">
                <strong className="text-white font-medium">Le Blueprint IA 2026</strong> —
                32 pages pour identifier, prioriser et déployer les bons cas d'usage IA dans
                votre entreprise. Rédigé par nos consultants seniors.
              </p>

              {/* Bénéfices */}
              <div className="flex flex-col gap-2.5 mb-8">
                {BENEFITS.map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-text-secondary">{b}</span>
                  </div>
                ))}
              </div>

              {/* Formulaire */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="votre@email-pro.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 px-4 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary transition-colors"
                  />
                  <Button type="submit" variant="primary" size="lg" className="group whitespace-nowrap">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger le PDF
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-accent-primary/10 border border-accent-primary/30 p-5 flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">Merci ! Vérifiez votre boîte mail.</p>
                    <p className="text-xs text-text-secondary">
                      Nous vous avons envoyé le Blueprint IA 2026 à <strong className="text-white">{email}</strong>.
                    </p>
                  </div>
                </motion.div>
              )}

              <p className="text-xs text-text-muted mt-4">
                100% gratuit · Aucune carte demandée · Désinscription en un clic
              </p>
            </div>

            {/* Droite — mockup du guide */}
            <div className="relative hidden lg:flex items-center justify-center p-10 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 border-l border-white/[0.05]">
              <div className="relative">
                {/* Halo derrière le mockup */}
                <div className="absolute inset-0 -m-12 rounded-full bg-accent-secondary/10 blur-3xl" />

                {/* Mockup de la couverture du guide */}
                <div className="relative w-64 h-80 rounded-xl bg-gradient-to-br from-bg-secondary to-bg-primary border border-white/10 shadow-2xl overflow-hidden rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10" />

                  {/* Bandeau supérieur */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary" />

                  <div className="relative p-8 flex flex-col h-full">
                    <BookOpen className="h-8 w-8 text-accent-secondary mb-6" strokeWidth={1.5} />

                    <p className="text-xs font-mono uppercase tracking-[0.15em] text-accent-primary mb-3">
                      Édition 2026
                    </p>

                    <h3 className="font-body text-2xl font-semibold text-white leading-tight tracking-[-0.02em] mb-4">
                      Le Blueprint IA pour les entreprises
                    </h3>

                    <p className="text-xs text-text-secondary leading-relaxed">
                      Identifier, prioriser et déployer les bons cas d'usage IA dans votre organisation.
                    </p>

                    <div className="mt-auto pt-6 border-t border-white/10">
                      <p className="text-[10px] text-text-muted uppercase tracking-wider">Par Nexia Advisory</p>
                    </div>
                  </div>
                </div>

                {/* Badge "PDF · 32 pages" */}
                <div className="absolute -bottom-3 -right-3 rounded-full bg-accent-secondary text-bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-lg">
                  PDF · 32 pages
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
