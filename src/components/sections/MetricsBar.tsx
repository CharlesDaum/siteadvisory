'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'

const METRICS = [
  {
    value: '+120',
    label: 'Projets déployés',
    detail: 'en production, pas en POC',
  },
  {
    value: '€2.4M',
    label: 'ROI cumulé',
    detail: 'généré pour nos clients',
  },
  {
    value: '98%',
    label: 'Satisfaction client',
    detail: 'mesuré post-mission',
  },
  {
    value: '< 8 sem.',
    label: 'Délai moyen',
    detail: 'du brief à la mise en prod.',
  },
]

export default function MetricsBar() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="flex flex-col gap-1 border-l border-accent-primary/30 pl-6 first:border-l-0 first:pl-0 md:first:border-l md:first:pl-6"
            >
              <span className="font-display text-4xl font-bold text-white md:text-5xl">
                {metric.value}
              </span>
              <span className="text-sm font-semibold text-text-primary">{metric.label}</span>
              <span className="text-xs text-text-muted">{metric.detail}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
