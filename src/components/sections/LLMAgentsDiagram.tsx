'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/* ─── Layout constants (matching design prototype) ────────────────────────── */
const NY = 100
const AW = 106, AH = 60

const SEGS = [
  { x1: 66,  x2: 126, c: '#D9B040', lbl: 'requête'   },
  { x1: 202, x2: 287, c: '#D9B040', lbl: 'dispatch'  },
  { x1: 393, x2: 413, c: '#60a5fa', lbl: 'données'   },
  { x1: 519, x2: 539, c: '#c084fc', lbl: 'insights'  },
  { x1: 645, x2: 665, c: '#4ade80', lbl: 'structure' },
  { x1: 771, x2: 882, c: '#D9B040', lbl: 'livrable'  },
]

const AGENT_SVG = [
  { label: 'Recherche', sub: 'RAG · Vectorstore',   c: '#D9B040', cx: 340 },
  { label: 'Analyse',   sub: 'Données · Métriques', c: '#60a5fa', cx: 466 },
  { label: 'Rédaction', sub: 'Contenu · Docs',      c: '#c084fc', cx: 592 },
  { label: 'Code',      sub: 'Python · SQL · APIs', c: '#4ade80', cx: 718 },
]

const AGENT_CARDS = [
  {
    c: '#D9B040',
    cDim: 'oklch(82% 0.16 85 / 0.25)',
    cBg:  'oklch(82% 0.16 85 / 0.08)',
    icon: 'search',
    name: 'Agent Recherche',
    desc: 'Interroge le vectorstore et les bases documentaires pour collecter les sources pertinentes à la requête.',
    tools: ['RAG', 'Vectorstore', 'Embeddings', 'Retrieval'],
    in:   'query + contexte',
    out:  'top-k sources scorées',
  },
  {
    c: '#60a5fa',
    cDim: 'oklch(68% 0.18 255 / 0.25)',
    cBg:  'oklch(68% 0.18 255 / 0.08)',
    icon: 'chart',
    name: 'Agent Analyse',
    desc: 'Extrait les métriques clés, identifie les patterns et structure les insights à partir des données brutes.',
    tools: ['Données', 'Métriques', 'NLP', 'Clustering'],
    in:   'sources + requête',
    out:  'insights structurés',
  },
  {
    c: '#c084fc',
    cDim: 'oklch(70% 0.18 300 / 0.25)',
    cBg:  'oklch(70% 0.18 300 / 0.08)',
    icon: 'pen',
    name: 'Agent Rédaction',
    desc: 'Génère la structure narrative, rédige le contenu et formate les documents selon les standards définis.',
    tools: ['Contenu', 'Docs', 'Markdown', 'Templating'],
    in:   'insights + plan',
    out:  'brouillon formaté',
  },
  {
    c: '#4ade80',
    cDim: 'oklch(72% 0.18 145 / 0.25)',
    cBg:  'oklch(72% 0.18 145 / 0.08)',
    icon: 'code',
    name: 'Agent Code',
    desc: 'Produit et valide les scripts Python, les requêtes SQL et les appels API nécessaires au livrable technique.',
    tools: ['Python', 'SQL', 'APIs', 'Tests'],
    in:   'spécifications techniques',
    out:  'code + tests validés',
  },
]

const LOG = [
  { tag: 'INFO', msg: 'Requête reçue → orchestrateur LLM' },
  { tag: 'PLAN', msg: 'Planification: 4 sous-tâches identifiées' },
  { tag: 'CALL', msg: '→ Agent Recherche  [RAG, Vectorstore]' },
  { tag: 'DONE', msg: '← Recherche: 7 sources (score > 0.82)' },
  { tag: 'CALL', msg: '→ Agent Analyse  [Données, Métriques]' },
  { tag: 'DONE', msg: '← Analyse: 4 insights, 2 alertes' },
  { tag: 'CALL', msg: '→ Agent Rédaction  [Contenu, Markdown]' },
  { tag: 'DONE', msg: '← Rédaction: 3 sections, structure OK' },
  { tag: 'CALL', msg: '→ Agent Code  [Python, SQL, APIs]' },
  { tag: 'DONE', msg: '← Code: 2 scripts, pytest 12/12 OK' },
  { tag: 'INFO', msg: '✓ Livrable structuré — 4/4 complétés' },
]
const SEG_SHOWS = [[0], [1, 2], [3, 4], [5, 6], [7, 8], [9], [10]] as const

const STEP_LABELS = [
  { x: 48,  c: '#D9B040', t: '① requête',   n: 0 },
  { x: 164, c: '#D9B040', t: '② plan',       n: 1 },
  { x: 340, c: '#D9B040', t: '③ recherche',  n: 2 },
  { x: 466, c: '#60a5fa', t: '④ analyse',    n: 3 },
  { x: 592, c: '#c084fc', t: '⑤ rédaction',  n: 4 },
  { x: 718, c: '#4ade80', t: '⑥ code',       n: 5 },
  { x: 916, c: '#D9B040', t: '⑦ livrable',   n: 6 },
]

const TAG_CLS: Record<string, string> = {
  INFO: 'bg-[oklch(82%_0.16_85_/_0.12)] text-[oklch(82%_0.16_85)]',
  PLAN: 'bg-[oklch(60%_0.15_260_/_0.14)] text-[#93c5fd]',
  CALL: 'bg-[oklch(65%_0.16_310_/_0.13)] text-[#c084fc]',
  DONE: 'bg-[oklch(65%_0.16_145_/_0.14)] text-[#4ade80]',
}

/* ─── Helpers ─────────────────────────────────────────────────────────────── */

function sleep(ms: number) { return new Promise<void>(r => setTimeout(r, ms)) }

function nowTs() {
  const n = new Date()
  return `${String(n.getHours()).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')}:${String(n.getSeconds()).padStart(2, '0')}`
}

/* ─── SVG Icons ──────────────────────────────────────────────────────────── */

function AgentIcon({ type, color }: { type: string; color: string }) {
  switch (type) {
    case 'search': return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="6.5" cy="6.5" r="4.5" stroke={color} strokeWidth="1.4"/>
        <line x1="10" y1="10" x2="14" y2="14" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    )
    case 'chart': return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2"   y="9" width="3" height="5"  rx="0.8" fill={color}/>
        <rect x="6.5" y="5" width="3" height="9"  rx="0.8" fill={color}/>
        <rect x="11"  y="2" width="3" height="12" rx="0.8" fill={color}/>
      </svg>
    )
    case 'pen': return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 13 L10 4 L13 7 L6 16 Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
        <line x1="1" y1="15" x2="3"  y2="13"  stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="8.5" y1="5.5" x2="11.5" y2="8.5" stroke={color} strokeWidth="1.2"/>
      </svg>
    )
    case 'code': return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <polyline points="4,4 1,8 4,12"   stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="12,4 15,8 12,12" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="6" y1="13" x2="10" y2="3" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    )
    default: return null
  }
}

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface LogEntry { id: number; ts: string; tag: string; msg: string; visible: boolean }

/* ─── Live Badge ─────────────────────────────────────────────────────────── */

function LiveBadge() {
  return (
    <span className="flex items-center gap-[5px] font-mono text-[10px] tracking-[0.08em] text-[#4ade80]">
      <span className="w-[5px] h-[5px] rounded-full bg-[#4ade80]"
        style={{ animation: 'blink-green 1.8s ease-in-out infinite' }}/>
      LIVE
    </span>
  )
}

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function LLMAgentsDiagram() {
  const [step,        setStep]        = useState(-1)
  const [activeAgent, setActiveAgent] = useState(-1)
  const [logEntries,  setLogEntries]  = useState<LogEntry[]>([])

  const ballRef    = useRef<SVGCircleElement>(null)
  const rafRef     = useRef<number | null>(null)
  const liveRef    = useRef(false)
  const runningRef = useRef(false)
  const sectionRef = useRef<HTMLElement>(null)
  const logIdRef   = useRef(0)

  /* Ball: direct DOM setAttribute → zero React re-renders per frame */
  const moveBall = useCallback((x1: number, x2: number, color: string, dur: number): Promise<void> => {
    return new Promise(resolve => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      const ball = ballRef.current
      if (!ball) { resolve(); return }
      ball.setAttribute('fill', color)
      ball.setAttribute('opacity', '1')
      const start = performance.now()
      function frame(now: number) {
        const b = ballRef.current
        if (!b) { resolve(); return }
        const t = Math.min((now - start) / dur, 1)
        const e = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t  // ease in-out quad
        b.setAttribute('cx', String(x1 + (x2 - x1) * e))
        b.setAttribute('cy', String(NY))
        if (t < 1) rafRef.current = requestAnimationFrame(frame)
        else { rafRef.current = null; resolve() }
      }
      rafRef.current = requestAnimationFrame(frame)
    })
  }, [])

  const hideBall = useCallback(() => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
    ballRef.current?.setAttribute('opacity', '0')
  }, [])

  const appendLog = useCallback((idx: number) => {
    const l = LOG[idx]
    if (!l) return
    const id = logIdRef.current++
    const entry: LogEntry = { id, ts: nowTs(), tag: l.tag, msg: l.msg, visible: false }
    setLogEntries(prev => [...prev, entry])
    setTimeout(() => setLogEntries(prev => prev.map(e => e.id === id ? { ...e, visible: true } : e)), 16)
  }, [])

  const showTrace = useCallback((segIdx: number) => {
    const indices = SEG_SHOWS[segIdx as keyof typeof SEG_SHOWS] ?? []
    ;(indices as readonly number[]).forEach((li, i) => setTimeout(() => appendLog(li), i * 300))
  }, [appendLog])

  useEffect(() => {
    async function run() {
      runningRef.current = true
      while (liveRef.current) {
        hideBall()
        setStep(-1); setActiveAgent(-1); setLogEntries([])
        await sleep(500)

        for (let i = 0; i < SEGS.length; i++) {
          if (!liveRef.current) break
          setStep(i)
          setActiveAgent(i >= 2 ? i - 2 : -1)
          await moveBall(SEGS[i].x1, SEGS[i].x2, SEGS[i].c, 920)
          showTrace(i)
          await sleep(60)
        }

        if (!liveRef.current) break
        setStep(6); hideBall(); showTrace(6); setActiveAgent(3)
        await sleep(1900)
      }
      runningRef.current = false
    }

    const startRun = () => {
      if (runningRef.current) return
      liveRef.current = true
      run()
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startRun()
        } else {
          liveRef.current = false
        }
      },
      { threshold: 0.1 }
    )

    const section = sectionRef.current
    if (section) {
      io.observe(section)
      const rect = section.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) startRun()
    }

    return () => {
      io.disconnect()
      liveRef.current = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [hideBall, moveBall, showTrace])

  const segLit = (i: number) => step >= 0 && step >= i
  const nodeOn = (n: number) => step >= 0 && step >= n

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* ══ Header ══════════════════════════════════════════════════════════ */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-[14px] py-[5px] rounded-full border border-white/[0.13] bg-white/[0.04] mb-7">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
              style={{ animation: 'pulse-dot 2.4s ease-in-out infinite' }}
            />
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--accent)]">
              Architecture multi-agents
            </span>
          </div>
          <h2 className="text-[clamp(28px,3.6vw,46px)] font-bold tracking-[-0.03em] leading-[1.08] text-white mb-[18px] max-w-[580px]">
            Un LLM orchestre.<br/>
            Des agents{' '}
            <em className="not-italic text-[var(--accent)]">spécialisés</em>{' '}
            exécutent.
          </h2>
          <p className="text-base leading-[1.65] text-[var(--ink-3)] max-w-[500px]">
            Chaque requête est planifiée par le LLM orchestrateur, qui délègue séquentiellement
            à quatre agents spécialisés, puis synthétise un livrable structuré.
          </p>
        </div>

        {/* ══ Diagram panel ═══════════════════════════════════════════════════ */}
        <div className="rounded-[12px] border border-white/[0.13] bg-[var(--bg-2)] overflow-hidden flex flex-col mb-2.5">
          <div className="flex items-center justify-between px-4 py-[10px] border-b border-white/[0.07] shrink-0">
            <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--ink-4)]">
              Flux d&apos;exécution
            </span>
            <LiveBadge/>
          </div>
          <div className="px-5 py-6">
            <svg
              viewBox="0 0 960 200"
              width="100%"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Workflow séquentiel multi-agents"
              style={{ display: 'block', overflow: 'visible' }}
            >
              <defs>
                <pattern id="dp2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.7" fill="#fff" opacity="0.04"/>
                </pattern>
                <filter id="ball-glow2" x="-120%" y="-120%" width="340%" height="340%">
                  <feGaussianBlur stdDeviation="5" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="llm-glow2" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="8" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <radialGradient id="llm-halo2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#D9B040" stopOpacity="0.18"/>
                  <stop offset="100%" stopColor="#D9B040" stopOpacity="0"/>
                </radialGradient>
              </defs>

              <rect width="960" height="200" fill="#0c0b09"/>
              <rect width="960" height="200" fill="url(#dp2)"/>

              {/* Segments */}
              {SEGS.map((s, i) => {
                const lit = segLit(i)
                return (
                  <g key={i}>
                    <line
                      x1={s.x1} y1={NY} x2={s.x2} y2={NY}
                      stroke={s.c} strokeWidth="1.8"
                      style={{ strokeOpacity: lit ? 0.8 : 0.1, transition: 'stroke-opacity 0.35s ease' }}
                    />
                    <polygon
                      points={`${s.x2},${NY} ${s.x2 - 8},${NY - 4.5} ${s.x2 - 8},${NY + 4.5}`}
                      fill={s.c}
                      style={{ opacity: lit ? 0.85 : 0.12, transition: 'opacity 0.35s ease' }}
                    />
                    <text
                      x={(s.x1 + s.x2) / 2} y={NY - 68}
                      textAnchor="middle" fontSize="10" fontWeight="600"
                      letterSpacing="0.04em" fontFamily="ui-monospace,monospace"
                      fill={s.c}
                      style={{ fillOpacity: lit ? 1 : 0.52, transition: 'fill-opacity 0.35s ease' }}
                    >
                      {s.lbl}
                    </text>
                  </g>
                )
              })}

              {/* Ball */}
              <circle ref={ballRef} r="8" fill="#D9B040" opacity="0" filter="url(#ball-glow2)"
                style={{ pointerEvents: 'none' }}/>

              {/* User node */}
              <g style={{ opacity: nodeOn(0) ? 1 : 0.35, transition: 'opacity 0.3s' }}>
                <circle cx="48" cy={NY} r="28" fill="#D9B040" fillOpacity="0.06"/>
                <circle cx="48" cy={NY} r="18" fill="#0c0b09" stroke="#D9B040" strokeWidth="1.2" strokeOpacity="0.45"/>
                <circle cx="48" cy={NY - 4} r="4.5" fill="none" stroke="#D9B040" strokeWidth="1.3" strokeOpacity="0.8"/>
                <path d={`M41,${NY + 10} C41,${NY + 3} 55,${NY + 3} 55,${NY + 10}`}
                  fill="none" stroke="#D9B040" strokeWidth="1.3" strokeOpacity="0.8"/>
              </g>
              <text x="48" y="133" textAnchor="middle" fontSize="9"
                fontFamily="ui-monospace,monospace" fill="#D9B040"
                style={{ fillOpacity: nodeOn(0) ? 0.55 : 0.25, transition: 'fill-opacity 0.3s' }}>
                Utilisateur
              </text>

              {/* LLM node */}
              <g style={{ opacity: nodeOn(1) ? 1 : 0.35, transition: 'opacity 0.35s' }}>
                <circle cx="164" cy={NY} r="80" fill="url(#llm-halo2)"/>
                <circle cx="164" cy={NY} r="58" fill="none" stroke="#D9B040" strokeWidth="0.5" strokeOpacity="0.12"/>
                <circle cx="164" cy={NY} r="48" fill="none" stroke="#D9B040" strokeWidth="0.4"
                  strokeOpacity="0.1" strokeDasharray="4,10"/>
                <circle cx="164" cy={NY} r="38" fill="#D9B04018" stroke="#D9B040" strokeWidth="1.4"
                  filter="url(#llm-glow2)"/>
                <circle cx="164" cy={NY} r="28" fill="#D9B04015" stroke="#D9B040"
                  strokeWidth="0.5" strokeOpacity="0.3"/>
                <text x="164" y={NY - 5} textAnchor="middle" fontSize="13" fontWeight="700"
                  fontFamily="system-ui,sans-serif" fill="#D9B040">LLM</text>
                <text x="164" y={NY + 10} textAnchor="middle" fontSize="9"
                  fontFamily="ui-monospace,monospace" fill="#D9B040" fillOpacity="0.6">Orchestrateur</text>
              </g>
              <text x="164" y="155" textAnchor="middle" fontSize="8.5"
                fontFamily="ui-monospace,monospace" fill="#D9B040"
                style={{ fillOpacity: nodeOn(1) ? 0.35 : 0.15, transition: 'fill-opacity 0.35s' }}>
                planification
              </text>

              {/* Agent mini-cards */}
              {AGENT_SVG.map((a, i) => {
                const on = nodeOn(i + 2)
                const ax = a.cx - AW / 2
                const ay = NY - AH / 2
                return (
                  <g key={i} style={{ opacity: on ? 1 : 0.28, transition: 'opacity 0.35s ease' }}>
                    <rect x={ax + 3} y={ay + 4} width={AW} height={AH} rx="9"
                      fill={a.c} fillOpacity="0.06"/>
                    <rect x={ax} y={ay} width={AW} height={AH} rx="9"
                      fill="#0f0e0b" stroke={a.c}
                      style={{
                        strokeWidth: on ? 1.3 : 0.8,
                        strokeOpacity: on ? 0.55 : 0.22,
                        transition: 'stroke-opacity 0.35s, stroke-width 0.35s',
                      }}/>
                    <rect x={ax + 1} y={ay + 1} width={AW - 2} height="3" rx="8"
                      fill={a.c}
                      style={{ fillOpacity: on ? 0.7 : 0.22, transition: 'fill-opacity 0.35s' }}/>
                    <text x={ax + 14} y={ay + 24} fontSize="11" fontWeight="600"
                      fontFamily="system-ui,sans-serif" fill="#fff" fillOpacity="0.9">
                      {a.label}
                    </text>
                    <text x={ax + 14} y={ay + 38} fontSize="8"
                      fontFamily="ui-monospace,monospace" fill={a.c} fillOpacity="0.45">
                      {a.sub}
                    </text>
                    <circle cx={ax + AW - 16} cy={ay + 16} r="4" fill={a.c}
                      style={{ fillOpacity: on ? 0.9 : 0, transition: 'fill-opacity 0.35s' }}/>
                  </g>
                )
              })}

              {/* Output node */}
              <g style={{ opacity: nodeOn(6) ? 1 : 0.3, transition: 'opacity 0.35s' }}>
                <rect x="882" y="74" width="68" height="52" rx="10"
                  fill="#D9B04018" stroke="#D9B040"
                  style={{
                    strokeWidth: nodeOn(6) ? 1.5 : 0.8,
                    strokeOpacity: nodeOn(6) ? 0.8 : 0.3,
                    transition: 'stroke-width 0.35s, stroke-opacity 0.35s',
                  }}/>
                <rect x="882" y="74" width="68" height="3" rx="1.5"
                  fill="#D9B040" fillOpacity="0.5"/>
                <text x="916" y="104" textAnchor="middle" fontSize="11" fontWeight="700"
                  fontFamily="system-ui,sans-serif" fill="#D9B040">OUTPUT</text>
                <text x="916" y="118" textAnchor="middle" fontSize="8.5"
                  fontFamily="ui-monospace,monospace" fill="#D9B040" fillOpacity="0.5">livrable</text>
              </g>
              <text x="916" y="144" textAnchor="middle" fontSize="8.5"
                fontFamily="ui-monospace,monospace" fill="#D9B040"
                style={{ fillOpacity: nodeOn(6) ? 0.3 : 0.15, transition: 'fill-opacity 0.35s' }}>
                structuré
              </text>

              {/* Step labels */}
              {STEP_LABELS.map((d, i) => (
                <text key={i} x={d.x} y="188" textAnchor="middle" fontSize="8"
                  fontFamily="ui-monospace,monospace" fill={d.c}
                  style={{ fillOpacity: nodeOn(d.n) ? 0.55 : 0.2, transition: 'fill-opacity 0.35s' }}>
                  {d.t}
                </text>
              ))}
            </svg>
          </div>
        </div>

        {/* ══ Terminal strip ══════════════════════════════════════════════════ */}
        <div className="rounded-[12px] border border-white/[0.13] bg-[oklch(12%_0.004_70)] overflow-hidden mb-2.5">
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.07]">
            <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--ink-4)]">
              Trace d&apos;exécution
            </span>
            <LiveBadge/>
          </div>
          <div className="px-4 py-[10px] font-mono text-[11.5px] leading-[1.75] flex flex-col gap-0.5 min-h-[80px]">
            {logEntries.map(entry => (
              <div
                key={entry.id}
                className="flex gap-[9px] items-baseline"
                style={{
                  opacity: entry.visible ? 1 : 0,
                  transform: entry.visible ? 'none' : 'translateX(-4px)',
                  transition: 'opacity 0.25s ease, transform 0.25s ease',
                }}
              >
                <span className="text-[var(--ink-4)] shrink-0 text-[10.5px]">{entry.ts}</span>
                <span className={`shrink-0 text-[9.5px] font-semibold px-1.5 py-px rounded-[3px] tracking-[0.06em] ${TAG_CLS[entry.tag] ?? ''}`}>
                  {entry.tag}
                </span>
                <span className="text-[var(--ink-2)]">{entry.msg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Agent cards ═════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {AGENT_CARDS.map((card, i) => {
            const lit = activeAgent === i
            return (
              <div
                key={i}
                className="rounded-[12px] border bg-[var(--bg-2)] p-5 relative overflow-hidden"
                style={{
                  borderColor: lit ? card.cDim : 'oklch(100% 0 0 / 0.13)',
                  transition: 'border-color 0.25s',
                }}
              >
                {/* top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1.5px]"
                  style={{ background: card.c, opacity: lit ? 1 : 0.5, transition: 'opacity 0.25s' }}
                />
                {/* radial glow on active */}
                <div
                  className="absolute inset-0 rounded-[12px] pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${card.c} 0%, transparent 70%)`,
                    opacity: lit ? 0.06 : 0,
                    transition: 'opacity 0.3s',
                  }}
                />
                {/* icon */}
                <div
                  className="w-[34px] h-[34px] rounded-[8px] border border-white/[0.10] flex items-center justify-center mb-[14px] relative"
                  style={{
                    background: card.cBg,
                    boxShadow: lit ? `0 0 14px ${card.cBg}` : 'none',
                    transition: 'box-shadow 0.3s',
                  }}
                >
                  <AgentIcon type={card.icon} color={card.c}/>
                </div>
                {/* name */}
                <div className="text-[14px] font-semibold tracking-[-0.015em] text-white mb-[7px]">
                  {card.name}
                </div>
                {/* desc */}
                <div className="text-[12.5px] leading-[1.55] mb-4" style={{ color: 'var(--ink-3)' }}>
                  {card.desc}
                </div>
                {/* tool tags */}
                <div className="flex flex-wrap gap-[5px] mb-4">
                  {card.tools.map(t => (
                    <span
                      key={t}
                      className="text-[10.5px] font-mono px-2 py-[2px] rounded-[4px] border"
                      style={{ color: card.c, borderColor: card.cDim, background: card.cBg }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {/* I/O */}
                <div className="border-t border-white/[0.07] pt-3 text-[11px] font-mono">
                  <div className="flex gap-[7px] mb-1">
                    <span style={{ color: 'var(--ink-4)' }}>IN:</span>
                    <span style={{ color: 'var(--ink-3)' }}>{card.in}</span>
                  </div>
                  <div className="flex gap-[7px]">
                    <span style={{ color: 'var(--ink-4)' }}>OUT:</span>
                    <span style={{ color: 'var(--ink-3)' }}>{card.out}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
