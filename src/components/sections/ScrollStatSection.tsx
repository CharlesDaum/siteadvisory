'use client'

import { useEffect, useRef, useState } from 'react'

export default function ScrollStatSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let rafPending = false
    const onScroll = () => {
      if (rafPending) return
      rafPending = true
      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect()
        const totalScroll = container.offsetHeight - window.innerHeight
        const scrolled = -rect.top
        setProgress(Math.max(0, Math.min(1, scrolled / totalScroll)))
        rafPending = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scale = 0.35 + progress * 0.65
  const numOpacity = Math.min(1, progress * 2.5)

  const lineProgress = Math.max(0, (progress - 0.35) / 0.35)
  const lineOpacity = Math.min(1, lineProgress * 2)
  const lineY = (1 - Math.min(1, lineProgress)) * 40

  const subOpacity = Math.min(1, Math.max(0, (progress - 0.65) / 0.25) * 2)

  return (
    <div ref={containerRef} className="scroll-stat-container">
      <div className="scroll-stat-stage">
        <div className="scroll-stat-bg" />
        <div className="scroll-stat-content">
          <div
            className="scroll-stat-num"
            style={{ transform: `scale(${scale})`, opacity: numOpacity }}
          >
            73<span>%</span>
          </div>
          <div
            className="scroll-stat-line"
            style={{ opacity: lineOpacity, transform: `translateY(${lineY}px)` }}
          >
            n&apos;atteignent jamais la production
          </div>
          <div className="scroll-stat-sub" style={{ opacity: subOpacity }}>
            <span>Gartner · 2024</span>
            <span className="scroll-stat-sep">—</span>
            <span>Analyse sur 1 200 projets IA en Europe</span>
            <span className="scroll-stat-sep">—</span>
            <span>Confirmé par 73 audits NexIA</span>
          </div>
        </div>
      </div>
    </div>
  )
}
