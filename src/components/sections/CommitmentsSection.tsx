'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Network, GraduationCap } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { staggerContainer, staggerItem } from '@/lib/animations'

const COMMITMENTS = [
  {
    icon: Network,
    title: 'Indépendance Technologique',
    body: 'Aucun éditeur ne nous paye. Nous recommandons toujours la solution la plus adaptée à vos enjeux — OpenAI, Anthropic, Mistral ou open-source.',
  },
  {
    icon: ShieldCheck,
    title: 'Souveraineté & Sécurité',
    body: 'Vos données restent les vôtres. Architectures Privacy by Design, RGPD natif, aucune donnée sensible exposée à des modèles publics.',
  },
  {
    icon: GraduationCap,
    title: 'Transfert de Compétences',
    body: 'Notre objectif n\'est pas de vous rendre dépendants, mais autonomes. Chaque mission inclut un volet formation pour vos équipes.',
  },
]

export default function CommitmentsSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Nos Engagements"
          title="Trois principes non négociables."
          subtitle="Ce qui fait la différence quand vous travaillez avec NexIA Advisory."
          align="center"
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {COMMITMENTS.map((c) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                variants={staggerItem}
                className="flex flex-col gap-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] p-8 hover:border-accent-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent-primary/10 border border-accent-primary/20 text-accent-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-body text-xl font-semibold text-white tracking-[-0.01em]">
                  {c.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {c.body}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
