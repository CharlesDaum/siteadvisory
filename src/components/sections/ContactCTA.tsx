'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, FileText, CheckCircle2, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

const GUARANTEES = [
  'Réponse sous 24h ouvrées',
  'Consultation initiale gratuite et sans engagement',
  'NDA disponible sur demande',
  'Interlocuteur senior dédié dès le premier contact',
]

export default function ContactCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="rounded-3xl border border-accent-primary/20 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
              {/* Pitch */}
              <div className="p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                    Passez à l'action
                  </span>
                  <h2 className="font-body text-3xl font-semibold text-white md:text-4xl tracking-[-0.02em] leading-tight mb-5">
                    Votre projet IA mérite{' '}
                    <span className="italic font-normal text-accent-primary">une expertise réelle.</span>
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-8">
                    Chaque semaine sans IA est une semaine où vos concurrents prennent de l'avance.
                    Discutons de vos enjeux lors d'un premier échange gratuit et confidentiel.
                  </p>

                  <div className="flex flex-col gap-3">
                    {GUARANTEES.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent-primary shrink-0" />
                        <span className="text-sm text-text-secondary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/5">
                  <p className="text-xs text-text-muted">
                    Nos experts ont accompagné +120 entreprises en France et en Europe.
                    Secteurs : Finance, Industrie, Retail, SaaS, Santé.
                  </p>
                </div>
              </div>

              {/* Actions hiérarchisées */}
              <div className="p-10 lg:p-14 flex flex-col gap-7">

                {/* Option 1 — Mise en avant */}
                <div className="relative rounded-2xl border-2 border-accent-primary/40 bg-accent-primary/[0.04] p-6 -mt-2">
                  {/* Badge "Le plus populaire" */}
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-bg-primary shadow-lg">
                      <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                      Le plus populaire · Par où commencer
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2 mt-2">
                    <span className="text-[10px] font-mono text-accent-primary tracking-[0.15em] uppercase">Option 01</span>
                  </div>
                  <h3 className="font-body text-xl font-semibold text-white mb-2 tracking-[-0.01em]">
                    Consultation stratégique
                  </h3>
                  <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                    Un échange de 45 minutes avec un consultant senior pour évaluer
                    votre maturité IA et identifier vos quick wins.
                  </p>
                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="w-full group">
                      <Calendar className="mr-2 h-5 w-5" />
                      Réserver ma consultation
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* Séparateur */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-white/5" />
                  <span className="text-xs text-text-muted uppercase tracking-wider">ou</span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>

                {/* Option 2 — Discrète */}
                <div className="rounded-2xl border border-white/[0.07] p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-text-muted tracking-[0.15em] uppercase">Option 02</span>
                  </div>
                  <h3 className="font-body text-base font-semibold text-white mb-2 tracking-[-0.01em]">
                    Demande de diagnostic personnalisé
                  </h3>
                  <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                    Vous préférez d'abord détailler votre contexte par écrit ?
                    Remplissez notre questionnaire en 3 minutes.
                  </p>
                  <Link href="/contact">
                    <Button variant="secondary" size="md" className="w-full group">
                      <FileText className="mr-2 h-4 w-4" />
                      Remplir le questionnaire
                    </Button>
                  </Link>
                </div>

                <p className="text-center text-xs text-text-muted">
                  Aucun engagement · 100% confidentiel
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
