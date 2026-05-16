'use client'

import { useState, useEffect } from 'react'
import { TESTIMONIALS } from '@/lib/site-data'

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 7000)
    return () => clearInterval(id)
  }, [paused])

  const t = TESTIMONIALS[idx]

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ background: 'var(--bg-2)' }}
    >
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Témoignages</span>
          <div>
            <h2 className="section-title">
              Ils ont arrêté les expérimentations{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Ils ont mis l'IA en production.</span>
            </h2>
          </div>
        </div>

        <div className="testi-carousel" data-reveal>
          <div className="testi-feature" key={idx}>
            <div className="testi-quote-mark">&ldquo;</div>
            <p className="testi-feature-quote">{t.quote}</p>
            <div className="testi-feature-who">
              <div className="avatar">{t.initials}</div>
              <div>
                <b>{t.name}</b>
                <span>{t.role} · {t.company}</span>
              </div>
            </div>
          </div>

          <div className="testi-thumbs">
            {TESTIMONIALS.map((tt, i) => (
              <button
                key={i}
                className={`testi-thumb ${i === idx ? 'active' : ''}`}
                onClick={() => { setIdx(i); setPaused(true) }}
                aria-label={`Lire le témoignage de ${tt.name}`}
              >
                <span className="testi-thumb-avatar">{tt.initials}</span>
                <span className="testi-thumb-info">
                  <b>{tt.name}</b>
                  <span>{tt.company}</span>
                </span>
                <span className="testi-thumb-progress">
                  <span
                    style={{
                      animationDuration: paused ? '0s' : '7s',
                      animationPlayState: i === idx ? 'running' : 'paused',
                    }}
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
