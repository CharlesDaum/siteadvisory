'use client'

import { useState } from 'react'
import { SERVICES, SERVICE_DEMOS } from '@/lib/site-data'

type AuditItem   = { l: string; v: string; t: number; accent?: boolean }
type RoadmapQ    = { q: string; items: string[] }
type LogRow      = { t: string; text: string }
type CurrModule  = { l: string; d: string; for: string }
type StackLayer  = { l: string }

function ServicePreview({ id }: { id: string }) {
  const demo = SERVICE_DEMOS[id]
  if (!demo) return null

  if (demo.kind === 'audit') {
    const items = demo.items as AuditItem[]
    return (
      <div className="svc-preview">
        <div className="svc-preview-head"><span>diagnostic.audit.scan</span><span className="pulse" /></div>
        <div className="audit-rows">
          {items.map((it, i) => (
            <div key={i} className={`audit-row${it.accent ? ' accent' : ''}`} style={{ animationDelay: `${it.t}ms` }}>
              <span className="dot" />
              <span className="l">{it.l}</span>
              <span className="v">{it.v}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (demo.kind === 'roadmap') {
    const quarters = demo.quarters as RoadmapQ[]
    return (
      <div className="svc-preview">
        <div className="svc-preview-head"><span>roadmap.12_mois.v3</span><span className="pulse" /></div>
        <div className="roadmap-grid">
          {quarters.map((q, i) => (
            <div className="q-col" key={q.q} style={{ animationDelay: `${i * 120}ms` }}>
              <div className="q-label">{q.q}</div>
              {q.items.map((it) => <div className="q-item" key={it}>{it}</div>)}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (demo.kind === 'agent') {
    const log = demo.log as LogRow[]
    return (
      <div className="svc-preview">
        <div className="svc-preview-head"><span>agent.runtime.live</span><span className="pulse" /></div>
        <div className="log-rows">
          {log.map((l, i) => (
            <div className={`log-row r-${l.t}`} key={i} style={{ animationDelay: `${i * 380}ms` }}>
              <span className="log-tag">{l.t.toUpperCase()}</span>
              <span className="log-text">{l.text}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (demo.kind === 'flow') {
    const nodes = demo.nodes as string[]
    return (
      <div className="svc-preview">
        <div className="svc-preview-head"><span>workflow.auto.compta_v2</span><span className="pulse" /></div>
        <div className="flow-nodes">
          {nodes.map((n, i) => (
            <span key={n}>
              <div className="flow-node" style={{ animationDelay: `${i * 200}ms` }}>
                <span className="flow-idx">0{i + 1}</span>{n}
              </div>
              {i < nodes.length - 1 && <div className="flow-arrow" style={{ animationDelay: `${i * 200 + 100}ms` }}>→</div>}
            </span>
          ))}
        </div>
      </div>
    )
  }

  if (demo.kind === 'curriculum') {
    const modules = demo.modules as CurrModule[]
    return (
      <div className="svc-preview">
        <div className="svc-preview-head"><span>programme.formation</span><span className="pulse" /></div>
        <div className="curr-rows">
          {modules.map((m, i) => (
            <div className="curr-row" key={m.l} style={{ animationDelay: `${i * 140}ms` }}>
              <div className="curr-num">M.0{i + 1}</div>
              <div>
                <div className="curr-l">{m.l}</div>
                <div className="curr-meta">{m.d} · pour {m.for}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (demo.kind === 'stack') {
    const layers = demo.layers as StackLayer[]
    return (
      <div className="svc-preview">
        <div className="svc-preview-head"><span>solution.stack.custom</span><span className="pulse" /></div>
        <div className="stack-layers">
          {layers.map((l, i) => (
            <div className="stack-layer" key={l.l} style={{ animationDelay: `${i * 120}ms` }}>
              <span className="stack-idx">L{layers.length - i}</span>
              {l.l}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

export default function ServicesGrid() {
  const [active, setActive] = useState(SERVICES[0].n)
  const current = SERVICES.find((s) => s.n === active)!

  return (
    <section id="services">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Services</span>
          <div>
            <h2 className="section-title">
              Six façons de mettre l&apos;IA{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>en production.</span>
            </h2>
            <p className="section-sub" style={{ marginTop: 20 }}>
              Chaque service est livré par un consultant senior, avec délivrables actionnables,
              KPIs mesurés et transfert de compétences intégré.
            </p>
          </div>
        </div>

        <div data-reveal>
          <div className="services-explorer">
            <div className="svc-list" role="tablist">
              {SERVICES.map((s) => (
                <button
                  key={s.n}
                  role="tab"
                  aria-selected={s.n === active}
                  className={`svc-tab${s.n === active ? ' active' : ''}`}
                  onClick={() => setActive(s.n)}
                  onMouseEnter={() => setActive(s.n)}
                >
                  <span className="svc-tab-num">{s.n}</span>
                  <span className="svc-tab-title">{s.t}</span>
                  <span className="svc-tab-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>

            <div className="svc-detail" key={active}>
              <div className="svc-detail-meta">
                <span className="label">SERVICE / {current.n}</span>
                <span className="label" style={{ color: 'var(--accent)' }}>{current.duration}</span>
              </div>
              <h3 className="svc-detail-title">{current.t}</h3>
              <p className="svc-detail-desc">{current.d}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                {current.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              <ServicePreview id={current.n} />
              <a href="#contact" className="btn primary" style={{ marginTop: 28 }}>
                Démarrer ce service <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
