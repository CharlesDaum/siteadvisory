import { PAIN_POINTS, DIFFERENTIATORS } from '@/lib/site-data'

export default function ProblemSection() {
  return (
    <section id="manifeste">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Manifeste</span>
          <div>
            <h2 className="section-title">
              L&apos;IA ne délivre pas d&apos;elle-même. Sans méthode, elle coûte.
            </h2>
          </div>
        </div>

        <div className="problem-grid">
          <div className="problem-col" data-reveal>
            <span
              className="eyebrow"
              style={{ '--eyebrow-color': 'var(--danger)' } as React.CSSProperties}
            >
              <style>{`.problem-col .eyebrow::before, .problem-col .eyebrow::after { background: var(--danger); }`}</style>
              Problèmes constatés
            </span>
            <h3>
              Pourquoi la plupart des projets IA{' '}
              <em>échouent.</em>
            </h3>
            <p className="lede">
              Les ESN survendent. Les POC s&apos;enlisent. Les équipes résistent.
              Trois patterns que nous voyons chaque semaine — et que nous avons appris à éviter.
            </p>
            <div data-reveal-stagger>
              {PAIN_POINTS.map((p) => (
                <div className="pain-item" key={p.n}>
                  <div className="pain-num">{p.n}</div>
                  <div className="pain-body">
                    <strong>{p.t}</strong>
                    <p>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="problem-col right" data-reveal style={{ transitionDelay: '0.15s' }}>
            <span className="eyebrow">Notre réponse</span>
            <h3>
              Un cabinet 100% IA,{' '}
              <em>100% résultats.</em>
            </h3>
            <p className="lede">
              Un cabinet construit uniquement autour de l&apos;IA. Pas de digitalisation
              généraliste, pas de rebadge. Cinq engagements qui structurent chaque
              mission — du premier appel à la mise en production.
            </p>
            <div data-reveal-stagger>
              {DIFFERENTIATORS.map((p) => (
                <div className="pain-item" key={p.n}>
                  <div className="pain-num">{p.n}</div>
                  <div className="pain-body">
                    <strong>{p.t}</strong>
                    <p>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
