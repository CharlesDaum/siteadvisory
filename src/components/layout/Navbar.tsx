'use client'

import Link from 'next/link'
import { NAV_LINKS } from '@/lib/site-data'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function Navbar() {
  return (
    <>
      <ScrollProgress />
      <nav className="nav">
        <Link href="/" className="brand">
          <span className="logo-mark" />
          NexIA
        </Link>
        <div className="links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <a href="#contact" className="cta-btn">
          Consultation
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </nav>
    </>
  )
}
