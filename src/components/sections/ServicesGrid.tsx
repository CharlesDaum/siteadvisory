'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface ServicesGridProps {
  preview?: boolean
}

export default function ServicesGrid({ preview = false }: ServicesGridProps) {
  const displayedServices = preview ? SERVICES.slice(0, 6) : SERVICES

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
            Nos Solutions
          </span>
          <h2 className="font-body text-4xl font-semibold text-white md:text-5xl tracking-[-0.02em] leading-[1.1] mb-4">
            De la stratégie au déploiement,{' '}
            <span className="italic font-normal text-accent-primary">nous couvrons tout.</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Six offres structurées pour vous accompagner à chaque étape de votre
            transformation IA — sans dispersion, sans sur-promesse.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {displayedServices.map((service) => {
            // @ts-ignore
            const Icon = Icons[service.icon] || Icons.Star

            return (
              <motion.div variants={staggerItem} key={service.slug} className="h-full">
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <article className="relative h-full flex flex-col rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] p-8 overflow-hidden transition-all duration-500 hover:border-accent-primary/30 hover:from-white/[0.06] hover:to-white/[0.02] hover:-translate-y-1">

                    {/* Halo teal au hover (coin haut droit) */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent-primary/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Flèche externe en haut à droite */}
                    <ArrowUpRight className="absolute top-8 right-8 h-5 w-5 text-text-muted z-10 transition-all duration-300 group-hover:text-accent-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

                    {/* Icône — grande et prominente */}
                    <div className="mb-7 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-accent-primary/20 to-accent-primary/[0.03] border border-accent-primary/25 text-accent-primary relative z-10 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>

                    {/* Titre */}
                    <h3 className="font-body text-2xl font-semibold text-white tracking-[-0.02em] mb-3 leading-tight relative z-10">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed flex-grow mb-6 relative z-10">
                      {service.shortDesc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-7 relative z-10">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-text-muted border border-white/[0.06] group-hover:border-accent-primary/20 group-hover:text-text-secondary transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="flex items-center gap-2 pt-6 border-t border-white/[0.05] relative z-10">
                      <span className="text-sm font-medium text-accent-primary transition-colors">
                        Voir le détail
                      </span>
                      <ArrowRight className="h-4 w-4 text-accent-primary transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </article>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom link to all services */}
        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-text-secondary hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all"
            >
              Voir toutes nos solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
