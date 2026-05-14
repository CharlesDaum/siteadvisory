import { COMMITMENTS } from '@/lib/site-data'

function GlyphSVG({ kind }: { kind: string }) {
  const s = 'currentColor'
  if (kind === 'network') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.4">
      <circle cx="12" cy="6" r="2.5"/>
      <circle cx="5" cy="18" r="2.5"/>
      <circle cx="19" cy="18" r="2.5"/>
      <path d="M12 8.5v3M10.5 16l-3.5-5.5M13.5 16l3.5-5.5"/>
    </svg>
  )
  if (kind === 'shield') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.4">
      <path d="M12 3 L20 6 V12 C20 17 16 20 12 21 C8 20 4 17 4 12 V6 Z"/>
      <path d="M9 12 L11 14 L15 10"/>
    </svg>
  )
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.4">
      <path d="M2 9 L12 4 L22 9 L12 14 Z"/>
      <path d="M6 11 V16 C6 17 9 19 12 19 C15 19 18 17 18 16 V11"/>
    </svg>
  )
}

export default function CommitmentsSection() {
  return (
    <section>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Engagements</span>
          <div>
            <h2 className="section-title">
              Trois principes{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>non négociables.</span>
            </h2>
            <p className="section-sub" style={{ marginTop: 20 }}>
              Ces trois engagements guident chaque décision, chaque architecture et chaque livrable — sans exception.
            </p>
          </div>
        </div>

        <div className="commit-grid" data-reveal-stagger>
          {COMMITMENTS.map((c) => (
            <div className="commit-card" key={c.t}>
              <div className="glyph" style={{ color: 'var(--accent)' }}>
                <GlyphSVG kind={c.glyph} />
              </div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
