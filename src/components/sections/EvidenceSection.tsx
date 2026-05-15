const STATEMENTS = [
  {
    eyebrow: 'Résultats mesurés',
    num: '3 sur 4',
    headline: 'entreprises observent déjà un ROI concret grâce à l\'IA.',
    body: 'Le ROI de l\'IA n\'est plus théorique : il est aujourd\'hui mesurable à grande échelle. La vraie question n\'est plus d\'utiliser l\'IA, mais à quelle vitesse vous l\'intégrez — car l\'écart se creuse chaque trimestre entre les entreprises qui automatisent et celles qui attendent.',
    source: 'Deloitte — State of Generative AI Report',
    sourceUrl: 'https://www2.deloitte.com/us/en/pages/about-deloitte/articles/press-releases/state-of-generative-ai.html',
    color: 'var(--accent)',
    colorHex: '#D9B040',
    visual: 'pills' as const,
  },
  {
    eyebrow: 'Performance terrain',
    num: '+15%',
    headline: 'de productivité en moyenne pour les équipes assistées par IA.',
    body: 'L\'assistance IA améliore significativement la performance opérationnelle, en libérant les collaborateurs des tâches répétitives pour les concentrer sur le travail à haute valeur. L\'IA ne remplace pas vos équipes : elle multiplie leur impact.',
    source: 'MIT & Stanford — Generative AI at Work',
    sourceUrl: 'https://arxiv.org/abs/2304.11771',
    color: '#60a5fa',
    colorHex: '#60a5fa',
    visual: 'bars' as const,
  },
] as const

function PillViz({ color }: { color: string }) {
  return (
    <div className="ev-pills" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="ev-pill"
          style={i < 3 ? { background: color } : { background: 'oklch(1 0 0 / 0.10)' }}
        />
      ))}
    </div>
  )
}

function BarViz({ color }: { color: string }) {
  const bars = [
    { h: 28, highlight: false },
    { h: 40, highlight: false },
    { h: 54, highlight: false },
    { h: 70, highlight: false },
    { h: 90, highlight: true },
  ]
  return (
    <div className="ev-bars" aria-hidden>
      {bars.map((b, i) => (
        <div
          key={i}
          className="ev-bar-fill"
          style={{
            height: b.h,
            background: b.highlight ? color : 'oklch(1 0 0 / 0.12)',
          }}
        />
      ))}
    </div>
  )
}

export default function EvidenceSection() {
  return (
    <section className="evidence-section">
      <div className="container">
        {STATEMENTS.map((s, i) => (
          <div
            key={i}
            className={`stat-row${i % 2 === 1 ? ' stat-row-reversed' : ''}`}
            data-reveal
          >
            <div className="stat-viz">
              {s.visual === 'pills'
                ? <PillViz color={s.colorHex} />
                : <BarViz color={s.colorHex} />
              }
            </div>
            <div className="stat-text">
              <span className="eyebrow">{s.eyebrow}</span>
              <h2 className="stat-headline">
                <span style={{ color: s.color }}>{s.num}</span>{' '}{s.headline}
              </h2>
              <p className="stat-body">{s.body}</p>
              <div className="evidence-source" style={{ paddingTop: 20, borderTop: '1px solid var(--line)', marginTop: 8 }}>
                <span className="evidence-dot" style={{ background: s.colorHex }} />
                <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="evidence-source-link">
                  {s.source}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
