'use client'

import { useState, useEffect } from 'react'
import { PHASES } from '@/lib/site-data'

export default function ApproacheTimeline() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const p = PHASES[active]

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((a) => (a + 1) % PHASES.length), 5200)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section id="approche" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Approche</span>
          <div>
            <h2 className="section-title">
              De l&apos;audit au scale, en quatre temps{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>strictement orchestrés.</span>
            </h2>
            <p className="section-sub" style={{ marginTop: 20 }}>
              Une méthodologie éprouvée sur +120 projets. Chaque phase a sa durée,
              ses délivrables et son contrat de sortie.
            </p>
          </div>
        </div>

        <div
          className="approche-ruler"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          data-reveal
        >
          <div className="approche-ruler-line">
            <div
              className="approche-ruler-fill"
              style={{ width: `${((active + 0.5) / PHASES.length) * 100}%` }}
            />
          </div>
          {PHASES.map((ph, i) => (
            <button
              key={ph.num}
              className={`approche-node${i === active ? ' active' : ''}${i < active ? ' past' : ''}`}
              onClick={() => { setActive(i); setPaused(true) }}
            >
              <span className="node-dot" />
              <span className="node-num">PHASE / {ph.num}</span>
              <span className="node-label">{ph.t}</span>
              <span className="node-duration">{ph.duration}</span>
            </button>
          ))}
        </div>

        <div className="approche-panel" key={active}>
          <div className="approche-panel-left">
            <div className="ph-big-num">{p.num}</div>
            <div className="ph-big-duration">{p.duration}</div>
            <h3 className="ph-big-title">{p.t}</h3>
          </div>
          <div className="approche-panel-right">
            <p className="ph-big-desc">{p.d}</p>
            <div className="ph-deliv-grid">
              <div>
                <b>Délivrables</b>
                <ul>{p.deliv.map((d) => <li key={d}>{d}</li>)}</ul>
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
      </div>
    </section>
  )
}
