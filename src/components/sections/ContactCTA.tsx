import MagneticButton from '@/components/ui/MagneticButton'

export default function ContactCTA() {
  return (
    <section className="cta" id="contact" style={{ background: 'var(--bg-2)' }}>
      <div className="cta-orb"><div className="glow" /></div>
      <div className="container">
        <div className="cta-inner" data-reveal>
          <span className="eyebrow" style={{ marginBottom: 32, display: 'inline-flex' }}>
            Prochaine étape
          </span>
          <h2>
            Ne laissez pas l&apos;IA rester{' '}
            <em>un simple sujet de veille.</em>
          </h2>
          <p>
            Identifions ensemble vos opportunités à plus fort ROI. En 30 minutes, nos experts
            évaluent vos enjeux métiers, la faisabilité technique et l&apos;impact de vos futures
            solutions IA.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <MagneticButton primary href="#contact">
              Évaluer mon potentiel IA <span className="arrow">→</span>
            </MagneticButton>
          </div>
          <div className="hero-guarantees" style={{ justifyContent: 'center', marginTop: 40 }}>
            <span className="g"><span className="dot" />Réponse sous 24h</span>
            <span className="g"><span className="dot" />NDA sur demande</span>
            <span className="g"><span className="dot" />Sans engagement</span>
          </div>
        </div>
        <div className="huge-mark" aria-hidden="true">NexIA</div>
      </div>
    </section>
  )
}
