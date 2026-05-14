'use client'

import { useState, useMemo } from 'react'
import { USAGE_CATS, USAGES } from '@/lib/site-data'

export default function CasUsageGrid() {
  const [active, setActive] = useState('all')
  const filtered = useMemo(
    () => (active === 'all' ? USAGES : USAGES.filter((u) => u.cat === active)),
    [active]
  )

  return (
    <section id="cas-usage">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Cas d&apos;usage</span>
          <div>
            <h2 className="section-title">
              Plus de 40 cas d&apos;usage IA{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>déjà déployés.</span>
            </h2>
            <p className="section-sub" style={{ marginTop: 20 }}>
              Filtrez par fonction métier. Chaque cas est documenté avec ROI mesuré
              et architecture technique livrée en production.
            </p>
          </div>
        </div>

        <div className="usage-tabs" data-reveal>
          {USAGE_CATS.map((c) => (
            <button
              key={c.id}
              className={`usage-tab ${active === c.id ? 'active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.l}
            </button>
          ))}
        </div>

        <div className="usage-grid">
          {filtered.map((u, i) => (
            <div className="usage-card" key={u.id} style={{ animationDelay: `${i * 30}ms` }}>
              <div className="cat">{USAGE_CATS.find((c) => c.id === u.cat)?.l}</div>
              <h4>{u.t}</h4>
              <p>{u.d}</p>
              <div className="tags">
                {u.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
