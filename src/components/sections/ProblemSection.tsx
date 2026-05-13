'use client'

import { motion } from 'framer-motion'
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/animations'

const PAIN_POINTS = [
  {
    problem: 'Des projets IA qui n\'atteignent jamais la production',
    detail: '73% des initiatives IA restent bloquées en POC. Sans méthode et expertise, les budgets s\'évaporent sans résultat concret.',
  },
  {
    problem: 'Des prestataires généralistes qui survendent l\'IA',
    detail: 'Les ESN et agences web proposent de l\'IA sans maîtriser les LLMs, le RAG ou la gouvernance des données. Vous payez pour du buzz.',
  },
  {
    problem: 'Une transformation IA sans adoption interne',
    detail: 'Déployer une solution IA sans embarquer les équipes, c\'est investir dans un outil que personne n\'utilise. Le changement est aussi crucial que la technologie.',
  },
]

const DIFFERENTIATORS = [
  'Expertise exclusive IA — aucun projet hors périmètre IA',
  'Consultants seniors sur chaque mission, zéro junior',
  'Déploiement en production garanti, pas des slides',
  'Transfert de compétences intégré à chaque mission',
  'Indépendance technologique — nous choisissons la meilleure solution pour vous',
]

export default function ProblemSection() {
  return (
    <section className="py-28 relative overflow-hidden">

      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left — Pain points */}
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              Le problème
            </span>

            <h2 className="font-body text-3xl font-semibold text-white md:text-4xl tracking-[-0.02em] leading-tight mb-4">
              Pourquoi la plupart des projets IA{' '}
              <span className="italic font-normal text-red-400">échouent.</span>
            </h2>
            <p className="text-text-secondary mb-10 leading-relaxed">
              L'IA n'est pas magique. Sans expertise réelle et méthode éprouvée,
              les projets s'enlisent, les budgets explosent, et les équipes perdent confiance.
            </p>

            <div className="flex flex-col gap-6">
              {PAIN_POINTS.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="flex gap-4 p-5 rounded-xl bg-red-500/5 border border-red-500/10"
                >
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">{item.problem}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Nexia solution */}
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
              Notre approche
            </span>

            <h2 className="font-body text-3xl font-semibold text-white md:text-4xl tracking-[-0.02em] leading-tight mb-4">
              Un cabinet 100% IA,{' '}
              <span className="italic font-normal text-accent-primary">100% résultats.</span>
            </h2>
            <p className="text-text-secondary mb-10 leading-relaxed">
              Nous ne faisons que de l'IA. Pas de digitalisation généraliste,
              pas de PowerPoint vide. Uniquement des solutions déployées en production
              et mesurées sur leur ROI.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {DIFFERENTIATORS.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent-primary shrink-0" />
                  <span className="text-text-primary text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/approche"
              className="inline-flex items-center gap-2 text-accent-primary font-semibold text-sm hover:text-white transition-colors group"
            >
              Découvrir notre méthodologie
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
