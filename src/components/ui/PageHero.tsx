'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface PageHeroProps {
  badge?: string
  title: string
  titleAccent?: string
  subtitle?: string
  align?: 'center' | 'left'
}

export default function PageHero({ badge, title, titleAccent, subtitle, align = 'center' }: PageHeroProps) {
  const isCenter = align === 'center'

  return (
    <section className="relative pt-36 pb-20">
      <div className={`container mx-auto px-6 ${isCenter ? 'text-center' : ''}`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className={`${isCenter ? 'mx-auto' : ''} max-w-3xl`}
        >
          {badge && (
            <motion.div variants={staggerItem} className={`mb-6 ${isCenter ? 'flex justify-center' : ''}`}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={staggerItem}
            className="font-body text-white leading-[1.05] tracking-[-0.03em] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
          >
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="italic font-normal text-accent-primary">{titleAccent}</span>
              </>
            )}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={staggerItem}
              className="text-lg leading-relaxed text-text-secondary md:text-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
