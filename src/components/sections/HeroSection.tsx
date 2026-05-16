'use client'

import { useState, useEffect, useRef } from 'react'
import Counter from '@/components/ui/Counter'
import MagneticButton from '@/components/ui/MagneticButton'
import { METRICS } from '@/lib/site-data'

const SCRIPT = {
  user: "Quel est le pourcentage moyen de POC IA qui n'atteignent jamais la production en France ?",
  bot:  "D'après Gartner 2024, 73% des projets IA restent bloqués en POC. Le levier principal d'échec est l'absence de méthodologie de mise en production.",
  src:  ['Gartner.2024', 'McKinsey.AI', 'NexIA.audit'],
}

function AgentDemo() {
  const [step, setStep] = useState(0)
  const [userTyped, setUserTyped] = useState('')
  const [botTyped, setBotTyped] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>
    let t2: ReturnType<typeof setTimeout>
    let alive = true

    const stop = () => { alive = false; clearTimeout(t1); clearTimeout(t2) }

    const run = () => {
      if (!alive) return
      setUserTyped('')
      setBotTyped('')
      setStep(0)
      const u = SCRIPT.user
      let i = 0
      const typeUser = () => {
        if (!alive) return
        if (i <= u.length) {
          setUserTyped(u.slice(0, i))
          i++
          t1 = setTimeout(typeUser, 22 + Math.random() * 28)
        } else {
          setStep(1)
          t2 = setTimeout(() => {
            if (!alive) return
            setStep(2)
            const b = SCRIPT.bot
            let j = 0
            const typeBot = () => {
              if (!alive) return
              if (j <= b.length) {
                setBotTyped(b.slice(0, j))
                j++
                t1 = setTimeout(typeBot, 14 + Math.random() * 22)
              } else {
                setStep(3)
                t2 = setTimeout(run, 5000)
              }
            }
            typeBot()
          }, 700)
        }
      }
      typeUser()
    }

    const el = containerRef.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !alive) { alive = true; run() }
        else if (!entry.isIntersecting) stop()
      },
      { threshold: 0.1 }
    )
    if (el) io.observe(el)
    run()

    return () => { io.disconnect(); stop() }
  }, [])

  return (
    <div className="agent" ref={containerRef}>
      <div className="agent-head">
        <div className="dots"><span /><span /><span /></div>
        <div className="title">Agent.NexIA · RAG.audit_v3</div>
        <div className="pulse" />
      </div>
      <div className="agent-body">
        <div className="agent-msg user">
          <span>{userTyped}</span>
          {step === 0 && <span className="cursor" />}
        </div>
        {step >= 2 && (
          <div className="agent-msg bot">
            <span>{botTyped}</span>
            {step === 2 && <span className="cursor" />}
            {step === 3 && (
              <div className="src">
                {SCRIPT.src.map((s) => <span key={s}>{s}</span>)}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="agent-foot">
        <div className="field">Posez une question à votre data…</div>
        <button className="send" aria-label="send">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="bg-grid" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-top" data-reveal>
          <span className="eyebrow">Cabinet IA · Paris</span>
          <div className="hero-meta">
            <div><strong>2026.05</strong> — Bookings ouverts Q3</div>
            <div>48.8566° N · 2.3522° E</div>
          </div>
        </div>

        <h1>
          <span className="word-reveal"><span>L'IA qui livre</span></span>{' '}
          <span className="word-reveal"><span><em>vraiment</em></span></span>{' '}
          <span className="word-reveal"><span>des résultats.</span></span>
        </h1>

        <div className="hero-grid">
          <div data-reveal>
            <p className="hero-lede">
              Du diagnostic stratégique au premier agent déployé : nous accélérons
              votre transformation en alignant le potentiel de l&apos;IA sur vos enjeux
              métiers. Fini les POCs sans lendemain, nous construisons des architectures
              souveraines avec une intégration fluide dans votre écosystème.
            </p>
            <div className="hero-cta-row">
              <MagneticButton primary href="#contact">
                Consultation gratuite
                <span className="arrow">→</span>
              </MagneticButton>
              <MagneticButton href="#cas-usage">
                Voir les cas d'usage
              </MagneticButton>
            </div>
            <div className="hero-guarantees">
              <span className="g"><span className="dot" />Réponse sous 24h</span>
              <span className="g"><span className="dot" />NDA sur demande</span>
              <span className="g"><span className="dot" />Consultation gratuite</span>
            </div>
          </div>

          <div data-reveal style={{ transitionDelay: '0.2s' }}>
            <div className="agent-slot">
              <AgentDemo />
            </div>
          </div>
        </div>

        <div className="hero-strip" data-reveal-stagger>
          {METRICS.map((m, i) => (
            <div className="cell" key={i}>
              <div className="v">
                <Counter
                  value={m.v}
                  prefix={'prefix' in m ? m.prefix : ''}
                  suffix={'suffix' in m ? m.suffix : ''}
                  decimals={'decimals' in m ? m.decimals : 0}
                />
              </div>
              <div className="l">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
