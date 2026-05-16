'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PHASES } from '@/lib/site-data'

const PHASE_COLORS = ['#D9B040', '#60a5fa', '#c084fc', '#4ade80']

function PhaseSegment({
  phase,
  index,
  total,
  color,
}: {
  phase: (typeof PHASES)[number]
  index: number
  total: number
  color: string
}) {
  const isLast = index === total - 1
  const spacerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0.35, 0.85], [1, isLast ? 1 : 0.94])
  const opacity = useTransform(scrollYProgress, [0.35, 0.85], [1, isLast ? 1 : 0.78])

  return (
    <>
      <motion.div
        className="approche-stack-card"
        style={{
          scale,
          opacity,
          position: 'sticky',
          top: 88,
          zIndex: index + 1,
          transformOrigin: 'top center',
          borderLeftColor: color,
        }}
      >
        <div className="approche-card-body">
          <div className="approche-card-left">
            <div className="approche-card-num" style={{ color }}>
              {phase.num}
            </div>
            <div className="approche-card-duration">{phase.duration}</div>
            <h3 className="approche-card-title">{phase.t}</h3>
          </div>
          <div className="approche-card-right">
            <p className="approche-card-desc">{phase.d}</p>
            <div className="approche-card-delivgrid">
              <div>
                <b>Délivrables</b>
                <ul>
                  {phase.deliv.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <b>Format</b>
                <ul>
                  <li>Consultant senior dédié</li>
                  <li>Revue hebdo · 2h</li>
                  <li>Documentation continue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div ref={spacerRef} style={{ height: '10vh' }} />
    </>
  )
}

export default function ApproacheTimeline() {
  return (
    <section id="approche" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Approche</span>
          <div>
            <h2 className="section-title">
              De l&apos;audit au scale, en quatre temps{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                strictement orchestrés.
              </span>
            </h2>
            <p className="section-sub" style={{ marginTop: 20 }}>
              Une méthodologie éprouvée sur +120 projets. Chaque phase a sa durée,
              ses délivrables et son contrat de sortie.
            </p>
          </div>
        </div>

        <div className="approche-stack">
          {PHASES.map((phase, i) => (
            <PhaseSegment
              key={phase.num}
              phase={phase}
              index={i}
              total={PHASES.length}
              color={PHASE_COLORS[i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
