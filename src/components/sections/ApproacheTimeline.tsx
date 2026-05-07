'use client'

import { motion } from 'framer-motion'
import { PHASES } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import { CheckCircle2 } from 'lucide-react'

interface ApproacheTimelineProps {
  preview?: boolean
}

export default function ApproacheTimeline({ preview = false }: ApproacheTimelineProps) {
  const displayedPhases = preview ? PHASES.slice(0, 4) : PHASES

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="Notre Méthodologie"
          subtitle="Une approche structurée en 4 phases pour transformer vos défis métier en solutions IA opérationnelles et génératrices de valeur."
          badge="APPROCHE"
          align="center"
          className="mb-20"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-border-subtle md:left-1/2 md:-ml-[1px]" />
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-[2px] bg-accent-primary md:left-1/2 md:-ml-[1px] origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-10% 0px -20% 0px' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="flex flex-col gap-12">
            {displayedPhases.map((phase, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={phase.number} className="relative flex flex-col md:flex-row items-start">

                  {/* Timeline Dot */}
                  <div className="absolute left-8 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-primary -translate-x-[7px] mt-2 md:left-1/2 md:-ml-2 md:mt-6 z-10">
                    <motion.div
                      className="absolute inset-1 rounded-full bg-accent-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (idx * 0.2) }}
                    />
                  </div>

                  {/* Content Container */}
                  <div className={`w-full pl-20 md:w-1/2 md:pl-0 pt-1 md:pt-0 ${isEven ? 'md:pr-16 md:text-right md:ml-0' : 'md:pl-16 md:ml-auto'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: idx * 0.2 }}
                      className="glass-card rounded-2xl p-6 relative group"
                    >
                      <div className="flex flex-col gap-4">
                        <div className={`flex flex-col gap-1 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                          <span className="text-sm font-mono text-accent-primary mb-1">Phase {phase.number} — {phase.duration}</span>
                          <h3 className="text-2xl font-display font-bold text-white">{phase.title}</h3>
                        </div>

                        <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                          {phase.description}
                        </p>

                        {!preview && (
                          <div className={`mt-4 flex flex-col gap-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                            <div>
                              <h4 className="text-sm font-semibold text-white mb-2">Livrables clés :</h4>
                              <ul className="flex flex-col gap-2">
                                {phase.deliverables.map((item, i) => (
                                  <li key={i} className={`flex items-start text-sm text-text-secondary ${isEven ? 'md:flex-row-reverse md:text-right' : ''}`}>
                                    <CheckCircle2 className={`h-4 w-4 text-accent-primary mt-0.5 shrink-0 ${isEven ? 'md:ml-2 mr-2 md:mr-0' : 'mr-2'}`} />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>

        {preview && (
          <div className="mt-16 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a href="/approche" className="inline-flex items-center text-accent-primary hover:text-white transition-colors border-b border-accent-primary hover:border-white pb-1 font-medium">
                Découvrir notre méthodologie complète
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
