'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { Star, ArrowRight, Quote } from 'lucide-react'
import Link from 'next/link'

function initialsFromName(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function TestimonialsSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
              Témoignages clients
            </span>
            <h2 className="font-body text-4xl font-semibold text-white md:text-5xl tracking-[-0.02em] leading-[1.1]">
              Ce que nos clients{' '}
              <span className="italic font-normal text-accent-primary">disent de nous.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-text-muted shrink-0">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-accent-secondary text-accent-secondary" />
              ))}
            </div>
            <span>4,9/5 · 98% de satisfaction</span>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, idx) => {
            const userInitials = initialsFromName(t.name)
            const companyInitials = t.companyInitials || t.company.charAt(0)
            const companyColor = t.companyColor || '#14B8A6'

            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.07] p-8 hover:border-accent-primary/20 transition-colors overflow-hidden"
              >
                {/* Badge entreprise — coloré, top right */}
                <div className="absolute top-6 right-6">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center font-bold text-sm text-white shadow-lg"
                    style={{
                      backgroundColor: companyColor,
                      boxShadow: `0 4px 20px ${companyColor}40`,
                    }}
                    aria-label={`Logo de ${t.company}`}
                  >
                    {companyInitials}
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-secondary text-accent-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="h-5 w-5 text-accent-primary/40 mb-3" />
                <p className="text-text-primary text-base leading-relaxed mb-8 flex-grow">
                  {t.quote}
                </p>

                {/* Auteur — avatar utilisateur + nom + société */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-xs shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${companyColor}cc, ${companyColor}66)`,
                    }}
                  >
                    {userInitials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                    <p className="text-xs text-text-muted truncate">{t.role}</p>
                    <p className="text-xs font-medium truncate" style={{ color: companyColor }}>
                      {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors group"
          >
            Rejoignez nos clients satisfaits — obtenez une consultation gratuite
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
