'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Clock, ShieldCheck, FileText } from 'lucide-react'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/animations'
import Button from '@/components/ui/Button'

const TRUST_ITEMS = [
  { value: '+120', label: 'projets déployés' },
  { value: '€2.4M', label: 'de ROI généré' },
  { value: '98%', label: 'satisfaction client' },
  { value: '< 8 sem.', label: 'délai moyen de prod.' },
]

const GUARANTEES = [
  { icon: Clock, label: 'Réponse sous 24h' },
  { icon: ShieldCheck, label: 'NDA sur demande' },
  { icon: FileText, label: 'Consultation gratuite' },
]

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden pt-32 pb-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto flex flex-col items-center px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={staggerItem} className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
            Cabinet de conseil spécialisé IA · Paris
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={staggerItem}
          className="mx-auto max-w-4xl font-body text-white tracking-[-0.03em] leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold"
        >
          L'IA qui livre{' '}
          <span className="italic font-normal text-accent-primary">vraiment</span>{' '}
          des résultats.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl"
        >
          De l'audit stratégique au déploiement en production, nous transformons
          vos données en avantage compétitif — avec la rigueur d'un cabinet
          et la profondeur technique d'un studio IA.
        </motion.p>

        {/* CTA unique fort */}
        <motion.div variants={staggerItem} className="mt-12">
          <Link href="/contact">
            <Button variant="primary" size="lg" className="group h-14 px-8 text-base">
              Obtenir une consultation gratuite
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Garanties inline — bien visibles près du CTA */}
        <motion.div
          variants={staggerItem}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {GUARANTEES.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-accent-primary" strokeWidth={2} />
                <span className="text-sm font-medium text-text-primary">{item.label}</span>
              </div>
            )
          })}
        </motion.div>

        {/* Lien secondaire discret */}
        <motion.div variants={staggerItem} className="mt-8">
          <Link
            href="/cas-usage"
            className="text-sm text-text-muted hover:text-text-secondary transition-colors inline-flex items-center gap-1.5 group"
          >
            Ou explorez nos cas d'usage concrets
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={staggerItem} className="mt-24 w-full max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {TRUST_ITEMS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <span className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs text-text-muted text-center uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-6 z-10 flex flex-col items-center gap-1 text-text-muted"
      >
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  )
}
