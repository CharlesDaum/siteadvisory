'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import GlowOrb from '@/components/ui/GlowOrb'

export default function ContactCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-20 mix-blend-screen" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-4xl rounded-3xl border border-border-accent/30 bg-white/[0.03] p-10 text-center backdrop-blur-xl sm:p-16 lg:p-20 relative overflow-hidden"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-accent-primary/50 rounded-tl-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-accent-primary/50 rounded-br-3xl opacity-50" />

          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-accent-primary/10 p-3 text-accent-primary">
              <Sparkles className="h-8 w-8" />
            </div>
          </div>

          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Prêt à accélérer votre <br className="hidden sm:block" />
            <span className="text-accent-primary">Transformation IA ?</span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-text-secondary">
            Discutons de vos enjeux métier. Nos experts sont à votre disposition pour une consultation initiale gratuite et confidentielle.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Démarrer votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-text-muted">
            Réponse sous 24h · Consultation gratuite · NDA sur demande
          </p>
        </motion.div>
      </div>
    </section>
  )
}
