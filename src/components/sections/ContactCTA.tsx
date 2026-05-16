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
            Identifions ensemble votre{' '}
            <em>première opportunité concrète.</em>
          </h2>
          <p>
            45 minutes, gratuites, sans engagement. Un consultant senior analyse votre
            contexte, identifie l&apos;opportunité IA la plus rentable et vous remet
            un plan d&apos;action exploitable dès le premier appel.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <MagneticButton primary href="#contact">
              Réserver 45 min <span className="arrow">→</span>
            </MagneticButton>
            <MagneticButton href="#manifeste">
              Lire le manifeste
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
