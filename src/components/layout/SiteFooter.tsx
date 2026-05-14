import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">NexIA Advisory.</div>
            <p style={{ color: 'var(--ink-2)', fontSize: 14, maxWidth: '36ch', margin: 0 }}>
              Cabinet de conseil spécialisé en intelligence artificielle.
              De l'audit au déploiement, nous livrons des résultats mesurables.
            </p>
          </div>
          <div>
            <h5>Cabinet</h5>
            <ul>
              <li><a href="#approche">Approche</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#manifeste">Manifeste</a></li>
              <li><Link href="#">Équipe</Link></li>
            </ul>
          </div>
          <div>
            <h5>Ressources</h5>
            <ul>
              <li><a href="#cas-usage">Cas d'usage</a></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Newsletter</Link></li>
              <li><Link href="#">Lead magnets</Link></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@nexia.fr">hello@nexia.fr</a></li>
              <li><Link href="#">Paris, 75009</Link></li>
              <li><Link href="#">LinkedIn</Link></li>
              <li><Link href="#">RSS</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NexIA Advisory · SAS au capital de 10 000€</span>
          <span>v3.1 · build 2026.05.14</span>
        </div>
      </div>
    </footer>
  )
}
