import Link from 'next/link'
import { Share2, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-secondary pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                NEXIA<span className="text-accent-primary">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-text-secondary leading-relaxed">
              Cabinet de conseil en Intelligence Artificielle B2B premium. Nous transformons l'IA en moteur de croissance durable pour les entreprises ambitieuses.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-3">
              {['Diagnostic Data & IA', 'Stratégie & Roadmap', 'Agents IA Intelligents', 'Automatisation', 'Formations & Culture', 'Solutions Sur-Mesure'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white tracking-wider uppercase">Ressources</h3>
            <ul className="mt-4 space-y-3">
              {['Bibliothèque Cas d\'usage', 'Blog', 'Études de cas', 'Webinaires', 'Newsletter'].map((item) => (
                <li key={item}>
                  <Link href="/cas-usage" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white tracking-wider uppercase">Cabinet</h3>
            <ul className="mt-4 space-y-3">
              {['Notre Approche', 'Équipe', 'Carrières', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="/approche" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-border-subtle pt-8 md:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} NexIA Advisory. Tous droits réservés.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <Link href="/mentions-legales" className="text-xs text-text-muted hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-xs text-text-muted hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
