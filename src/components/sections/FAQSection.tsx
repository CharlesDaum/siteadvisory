'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { staggerContainer, staggerItem } from '@/lib/animations'
import type { FAQItem } from '@/types'

interface FAQSectionProps {
  items: FAQItem[]
  badge?: string
  title?: string
  subtitle?: string
}

export default function FAQSection({
  items,
  badge = 'FAQ',
  title = 'Questions fréquentes.',
  subtitle = 'Les réponses aux interrogations les plus courantes de nos prospects.',
}: FAQSectionProps) {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader
          badge={badge}
          title={title}
          subtitle={subtitle}
          align="center"
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col gap-3"
        >
          {items.map((faq, idx) => (
            <motion.details
              key={idx}
              variants={staggerItem}
              className="group rounded-2xl bg-white/[0.03] border border-white/[0.07] [&_summary::-webkit-details-marker]:hidden hover:border-accent-primary/20 transition-colors"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-medium text-white">
                <span className="text-base md:text-lg">{faq.question}</span>
                <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition-colors group-open:border-accent-primary group-open:text-accent-primary">
                  <svg
                    className="h-3 w-3 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-text-secondary leading-relaxed text-sm md:text-base">
                {faq.answer}
              </div>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
