'use client'

import { useEffect, useState } from 'react'

/* ─── Layout ─────────────────────────────────────────────────────────────── */
const W  = 1040
const H  = 370
const NY = 152   // all node centers at this Y

const UX = 44, UR = 18          // User
const LX = 150, LR = 40         // LLM
const AW = 118, AH = 64         // Agent cards

/* Sequential flow: Recherche → Analyse → Rédaction → Code */
const AGENTS = [
  { label: 'Recherche', sub: 'RAG · Vectorstore',   c: '#D9B040', icon: 'search', cx: 282 },
  { label: 'Analyse',   sub: 'Données · Métriques', c: '#60a5fa', icon: 'chart',  cx: 430 },
  { label: 'Rédaction', sub: 'Contenu · Docs',      c: '#c084fc', icon: 'pen',    cx: 578 },
  { label: 'Code',      sub: 'Python · SQL · APIs', c: '#4ade80', icon: 'code',   cx: 726 },
]

const OX = 912  // Output center

/* 6 connection segments */
const SEGS = [
  { x1: UX + UR,              x2: LX - LR,              c: '#60a5fa', lbl: 'requête'  },
  { x1: LX + LR,              x2: AGENTS[0].cx - AW/2,  c: '#D9B040', lbl: 'dispatch' },
  { x1: AGENTS[0].cx + AW/2,  x2: AGENTS[1].cx - AW/2,  c: '#60a5fa', lbl: 'données'  },
  { x1: AGENTS[1].cx + AW/2,  x2: AGENTS[2].cx - AW/2,  c: '#c084fc', lbl: 'insights' },
  { x1: AGENTS[2].cx + AW/2,  x2: AGENTS[3].cx - AW/2,  c: '#4ade80', lbl: 'structure'},
  { x1: AGENTS[3].cx + AW/2,  x2: OX - 32,              c: '#D9B040', lbl: 'livrable' },
]

/* Animation */
const STEP_MS  = 1100   // ms per segment
const PAUSE_MS = 2000   // ms "all lit" pause
const IDLE_MS  = 600    // ms before restart

function sleep(ms: number) { return new Promise<void>(r => setTimeout(r, ms)) }

/* ─── Icons ──────────────────────────────────────────────────────────────── */
function Ico({ t, c }: { t: string; c: string }) {
  switch (t) {
    case 'search': return (
      <g stroke={c} strokeWidth="1.4" fill="none">
        <circle cx="0" cy="-2" r="4.5"/>
        <line x1="3.2" y1="2.5" x2="6" y2="5.5"/>
      </g>
    )
    case 'chart': return (
      <g fill={c}>
        <rect x="-6" y="1" width="3.5" height="5" rx=".6"/>
        <rect x="-1.5" y="-3" width="3.5" height="9" rx=".6"/>
        <rect x="3.5" y="-5" width="3.5" height="11" rx=".6"/>
      </g>
    )
    case 'pen': return (
      <g stroke={c} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-3,5 L4,-5 L7,-2 L0,8 Z"/>
        <line x1="-5" y1="6.5" x2="-3" y2="5"/>
      </g>
    )
    case 'code': return (
      <g stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round">
        <polyline points="-4,-3.5 -8.5,0 -4,3.5"/>
        <polyline points="4,-3.5 8.5,0 4,3.5"/>
        <line x1="-2" y1="5" x2="2" y2="-5"/>
      </g>
    )
    default: return null
  }
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function LLMAgentsDiagram() {
  /* step: -1=idle, 0-5=ball on segment i, 6=all lit pause */
  const [step, setStep] = useState(-1)

  useEffect(() => {
    let live = true
    async function run() {
      while (live) {
        setStep(-1)
        await sleep(IDLE_MS)
        for (let s = 0; s <= 5; s++) {
          if (!live) return
          setStep(s)
          await sleep(STEP_MS)
        }
        if (!live) return
        setStep(6)
        await sleep(PAUSE_MS)
      }
    }
    run()
    return () => { live = false }
  }, [])

  /* Helpers */
  const segLit  = (i: number) => step >= 0 && step >= i
  const nodeOn  = (n: number) => step >= 0 && step >= n
  /* node indices: 0=User, 1=LLM, 2-5=Agents, 6=Output */

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* header */}
        <div className="text-center mb-14">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-text-secondary tracking-wider uppercase mb-5">
            Architecture multi-agents
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            Comment fonctionne un système d&apos;agents IA
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Une requête entre dans le LLM orchestrateur. Il planifie, délègue à chaque agent dans l&apos;ordre, et produit un livrable structuré.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0a0a0f]">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Workflow séquentiel multi-agents"
          >
            <defs>
              {/* dot grid */}
              <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.8" fill="#fff" opacity="0.05"/>
              </pattern>
              {/* vignette */}
              <radialGradient id="vig" cx="50%" cy="50%" r="70%">
                <stop offset="0%"   style={{ stopColor: '#0a0a0f', stopOpacity: 0 }}/>
                <stop offset="100%" style={{ stopColor: '#0a0a0f', stopOpacity: 0.85 }}/>
              </radialGradient>
              {/* glow filters */}
              <filter id="fglow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="6" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="fball" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="4" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="fblur" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="3"/>
              </filter>
              {/* LLM halo */}
              <radialGradient id="llm-halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   style={{ stopColor: '#D9B040', stopOpacity: 0.2 }}/>
                <stop offset="100%" style={{ stopColor: '#D9B040', stopOpacity: 0 }}/>
              </radialGradient>
              {/* animateMotion paths — one per segment */}
              {SEGS.map((s, i) => (
                <path key={i} id={`seg-${i}`}
                  d={`M${s.x1},${NY} L${s.x2},${NY}`}
                  fill="none"
                />
              ))}
            </defs>

            {/* Background */}
            <rect width={W} height={H} fill="#0a0a0f"/>
            <rect width={W} height={H} fill="url(#dots)"/>
            <rect width={W} height={H} fill="url(#vig)"/>

            {/* ══ CONNECTIONS ══════════════════════════════════════════════ */}
            {SEGS.map((s, i) => {
              const lit = segLit(i)
              return (
                <g key={i}>
                  {/* track line (always dim) */}
                  <line
                    x1={s.x1} y1={NY} x2={s.x2} y2={NY}
                    style={{
                      stroke: s.c,
                      strokeWidth: 2,
                      strokeOpacity: lit ? 0.85 : 0.1,
                      transition: 'stroke-opacity 0.35s ease',
                    }}
                  />
                  {/* arrowhead */}
                  <polygon
                    points={`${s.x2},${NY} ${s.x2-9},${NY-5} ${s.x2-9},${NY+5}`}
                    style={{
                      fill: s.c,
                      opacity: lit ? 0.9 : 0.15,
                      transition: 'opacity 0.35s ease',
                    }}
                  />
                  {/* label below */}
                  <text
                    x={(s.x1 + s.x2) / 2} y={NY + 26}
                    textAnchor="middle" fontSize="8" fontFamily="monospace"
                    style={{
                      fill: s.c,
                      fillOpacity: lit ? 0.65 : 0.18,
                      transition: 'fill-opacity 0.35s ease',
                    }}
                  >
                    {s.lbl}
                  </text>
                </g>
              )
            })}

            {/* ══ BALL ═════════════════════════════════════════════════════ */}
            {step >= 0 && step <= 5 && (
              <circle
                key={`ball-${step}`}
                r="7"
                style={{ fill: SEGS[step].c }}
                filter="url(#fball)"
              >
                <animateMotion
                  dur={`${STEP_MS / 1000}s`}
                  fill="freeze"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href={`#seg-${step}`}/>
                </animateMotion>
              </circle>
            )}

            {/* ══ USER NODE ════════════════════════════════════════════════ */}
            <g style={{
              opacity: nodeOn(0) ? 1 : 0.4,
              transition: 'opacity 0.35s ease',
            }}>
              <circle cx={UX} cy={NY} r={UR + 8}
                style={{ fill: '#60a5fa', fillOpacity: nodeOn(0) ? 0.08 : 0.03, transition: 'fill-opacity 0.35s' }}/>
              <circle cx={UX} cy={NY} r={UR}
                style={{ fill: '#0a0a0f', stroke: '#60a5fa', strokeWidth: 1.2,
                  strokeOpacity: nodeOn(0) ? 0.7 : 0.3, transition: 'stroke-opacity 0.35s' }}/>
              {/* person icon */}
              <circle cx={UX} cy={NY - 4} r="4" fill="none" stroke="#60a5fa" strokeWidth="1.3" strokeOpacity="0.85"/>
              <path d={`M${UX-6},${NY+8} C${UX-6},${NY+2} ${UX+6},${NY+2} ${UX+6},${NY+8}`}
                fill="none" stroke="#60a5fa" strokeWidth="1.3" strokeOpacity="0.85"/>
            </g>
            <text x={UX} y={NY + UR + 14}
              textAnchor="middle" fontSize="9" fontFamily="monospace"
              style={{ fill: '#60a5fa', fillOpacity: nodeOn(0) ? 0.7 : 0.3, transition: 'fill-opacity 0.35s' }}>
              Utilisateur
            </text>

            {/* ══ LLM NODE ═════════════════════════════════════════════════ */}
            <g style={{ opacity: nodeOn(1) ? 1 : 0.35, transition: 'opacity 0.4s ease' }}>
              {/* halo */}
              <circle cx={LX} cy={NY} r={LR + 42} fill="url(#llm-halo)"
                style={{ opacity: nodeOn(1) ? 1 : 0.3, transition: 'opacity 0.4s' }}/>
              {/* rings */}
              {[LR + 10, LR + 20, LR + 32].map((r, i) => (
                <circle key={i} cx={LX} cy={NY} r={r}
                  fill="none" stroke="#D9B040"
                  strokeWidth={i === 0 ? 0.6 : 0.3}
                  strokeOpacity={nodeOn(1) ? (0.2 - i * 0.05) : 0.06}
                  style={{ transition: 'stroke-opacity 0.4s' }}
                  strokeDasharray={i === 1 ? '3,8' : undefined}
                />
              ))}
              {/* rotating scan arc */}
              <circle cx={LX} cy={NY} r={LR + 16}
                fill="none"
                strokeLinecap="round"
                style={{
                  stroke: '#D9B040',
                  strokeWidth: nodeOn(1) ? 2 : 0.8,
                  strokeOpacity: nodeOn(1) ? 0.6 : 0.15,
                  strokeDasharray: '72,380',
                  transition: 'stroke-width 0.4s, stroke-opacity 0.4s',
                }}>
                <animateTransform
                  attributeName="transform" type="rotate"
                  from={`0 ${LX} ${NY}`} to={`360 ${LX} ${NY}`}
                  dur="5s" repeatCount="indefinite"/>
              </circle>
              {/* blur ring */}
              <circle cx={LX} cy={NY} r={LR + 5} fill="#D9B040" fillOpacity="0.04" filter="url(#fblur)"/>
              {/* main */}
              <circle cx={LX} cy={NY} r={LR}
                fill="#D9B04018"
                style={{ stroke: '#D9B040', strokeWidth: nodeOn(1) ? 1.8 : 0.8, strokeOpacity: nodeOn(1) ? 1 : 0.3, transition: 'stroke-width 0.4s, stroke-opacity 0.4s' }}
                filter="url(#fglow)"/>
              <circle cx={LX} cy={NY} r={LR - 11}
                fill="#D9B04022" stroke="#D9B040" strokeWidth="0.5" strokeOpacity="0.3"/>
              {/* pulse on activation */}
              {nodeOn(1) && (
                <circle cx={LX} cy={NY} r={LR} fill="none" stroke="#D9B040" strokeWidth="1" strokeOpacity="0">
                  <animate attributeName="r"             values={`${LR};${LR+26};${LR}`} dur="2.8s" repeatCount="indefinite"/>
                  <animate attributeName="stroke-opacity" values="0.3;0;0.3"             dur="2.8s" repeatCount="indefinite"/>
                </circle>
              )}
              <text x={LX} y={NY - 7}  textAnchor="middle" fill="#D9B040" fontSize="12" fontWeight="700" fontFamily="sans-serif">LLM</text>
              <text x={LX} y={NY + 8}  textAnchor="middle" fill="#D9B040" fillOpacity="0.65" fontSize="8.5" fontFamily="monospace">Orchestrateur</text>
            </g>
            <text x={LX} y={NY + LR + 16}
              textAnchor="middle" fontSize="8" fontFamily="monospace"
              style={{ fill: '#D9B040', fillOpacity: nodeOn(1) ? 0.5 : 0.15, transition: 'fill-opacity 0.4s' }}>
              planification
            </text>

            {/* ══ AGENT CARDS ══════════════════════════════════════════════ */}
            {AGENTS.map((a, i) => {
              const on  = nodeOn(i + 2)
              const ax  = a.cx - AW / 2
              const ay  = NY - AH / 2
              return (
                <g key={i} style={{ opacity: on ? 1 : 0.32, transition: 'opacity 0.4s ease' }}>
                  {/* shadow */}
                  <rect x={ax+3} y={ay+4} width={AW} height={AH} rx="10"
                    style={{ fill: a.c, fillOpacity: on ? 0.07 : 0.02, transition: 'fill-opacity 0.4s' }}/>
                  {/* card */}
                  <rect x={ax} y={ay} width={AW} height={AH} rx="10"
                    style={{
                      fill: '#0e0e1a',
                      stroke: a.c,
                      strokeWidth: on ? 1.2 : 0.6,
                      strokeOpacity: on ? 0.5 : 0.2,
                      transition: 'stroke-width 0.4s, stroke-opacity 0.4s',
                    }}/>
                  {/* top bar */}
                  <rect x={ax+1} y={ay+1} width={AW-2} height="3" rx="9"
                    style={{ fill: a.c, fillOpacity: on ? 0.65 : 0.2, transition: 'fill-opacity 0.4s' }}/>
                  {/* icon box */}
                  <rect x={ax+10} y={ay+11} width="24" height="24" rx="6"
                    style={{ fill: a.c, fillOpacity: 0.14, stroke: a.c, strokeWidth: 0.6, strokeOpacity: 0.3 }}/>
                  <g transform={`translate(${ax+22},${ay+23})`}>
                    <Ico t={a.icon} c={a.c}/>
                  </g>
                  {/* text */}
                  <text x={ax+42} y={ay+21}
                    fill="#fff" fillOpacity="0.92" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                    {a.label}
                  </text>
                  <text x={ax+42} y={ay+33}
                    fill={a.c} fillOpacity="0.5" fontSize="7.5" fontFamily="monospace">
                    {a.sub}
                  </text>
                  {/* live dot */}
                  {on && (
                    <>
                      <circle cx={ax+AW-13} cy={ay+14} r="4.5" fill={a.c} fillOpacity="0.12">
                        <animate attributeName="r"            values="4.5;7;4.5"   dur="2.2s" repeatCount="indefinite"/>
                        <animate attributeName="fill-opacity" values="0.12;0;0.12" dur="2.2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx={ax+AW-13} cy={ay+14} r="3" fill={a.c} fillOpacity="0.9"/>
                    </>
                  )}
                  {/* progress bar */}
                  <rect x={ax+10} y={ay+AH-14} width={AW-20} height="3.5" rx="2"
                    fill="#fff" fillOpacity="0.05"/>
                  {on && (
                    <rect x={ax+10} y={ay+AH-14} width={(AW-20)*0.7} height="3.5" rx="2"
                      fill={a.c} fillOpacity="0.4">
                      <animate
                        attributeName="width"
                        values={`${(AW-20)*0.3};${(AW-20)*0.95};${(AW-20)*0.7}`}
                        dur="2.8s" repeatCount="indefinite"/>
                    </rect>
                  )}
                </g>
              )
            })}

            {/* Agent labels below */}
            {AGENTS.map((a, i) => (
              <text key={i} x={a.cx} y={NY + AH/2 + 14}
                textAnchor="middle" fontSize="8" fontFamily="monospace"
                style={{ fill: a.c, fillOpacity: nodeOn(i+2) ? 0.55 : 0.18, transition: 'fill-opacity 0.4s' }}>
                Agent {a.label}
              </text>
            ))}

            {/* ══ OUTPUT ═══════════════════════════════════════════════════ */}
            <g style={{ opacity: nodeOn(6) ? 1 : 0.32, transition: 'opacity 0.4s ease' }}>
              {/* pulse border */}
              {nodeOn(6) && (
                <rect x={OX-32} y={NY-25} width="64" height="50" rx="14"
                  fill="none" stroke="#D9B040" strokeWidth="1" strokeOpacity="0">
                  <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="rx"             values="14;18;14"  dur="2s" repeatCount="indefinite"/>
                </rect>
              )}
              <rect x={OX-30} y={NY-23} width="60" height="46" rx="12"
                style={{
                  fill: '#D9B04020',
                  stroke: '#D9B040',
                  strokeWidth: nodeOn(6) ? 1.5 : 0.6,
                  strokeOpacity: nodeOn(6) ? 0.65 : 0.2,
                  transition: 'stroke-width 0.4s, stroke-opacity 0.4s',
                }}/>
              <text x={OX} y={NY-5}  textAnchor="middle" fill="#D9B040" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">OUTPUT</text>
              <text x={OX} y={NY+10} textAnchor="middle" fill="#D9B040" fillOpacity="0.5" fontSize="8" fontFamily="monospace">livrable</text>
            </g>

            {/* ══ STEP INDICATOR BAR ════════════════════════════════════════ */}
            <g>
              {/* labels at bottom */}
              {[
                { x: UX,  label: '① requête',     c: '#60a5fa' },
                { x: LX,  label: '② planification',c: '#D9B040' },
                { x: AGENTS[0].cx, label: '③ recherche', c: '#D9B040' },
                { x: AGENTS[1].cx, label: '④ analyse',   c: '#60a5fa' },
                { x: AGENTS[2].cx, label: '⑤ rédaction', c: '#c084fc' },
                { x: AGENTS[3].cx, label: '⑥ code',      c: '#4ade80' },
                { x: OX,  label: '⑦ livrable',    c: '#D9B040' },
              ].map((item, i) => (
                <text key={i} x={item.x} y={H - 18}
                  textAnchor="middle" fontSize="8" fontFamily="monospace"
                  style={{
                    fill: item.c,
                    fillOpacity: nodeOn(i) ? 0.55 : 0.18,
                    transition: 'fill-opacity 0.4s',
                  }}>
                  {item.label}
                </text>
              ))}
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
