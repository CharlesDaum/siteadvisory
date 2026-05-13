'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'
import MobileMenu from './MobileMenu'
import Button from '../ui/Button'
import { navbarVariants } from '@/lib/animations'

const NAV_ITEMS = [
  { label: 'Approche', href: '/approche' },
  { label: 'Services', href: '/services' },
  { label: 'Cas d\'usage', href: '/cas-usage' },
  { label: 'Formation', href: '/formation' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const isScrolled = useScrollPosition(80)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        initial="top"
        animate={isScrolled ? 'scrolled' : 'top'}
        variants={navbarVariants}
        className={cn(
          'fixed inset-x-0 top-0 z-40 h-20 transition-colors duration-300',
          isScrolled ? 'glass' : 'bg-transparent'
        )}
      >
        {/* Grid 3 colonnes : logo | nav centré | CTA */}
        <div className="grid grid-cols-[1fr_auto_1fr] h-full items-center px-6 lg:px-12 gap-6">
          {/* Logo — justifié à gauche */}
          <div className="justify-self-start">
            <Link href="/" className="group inline-flex items-center">
              <span className="font-display text-xl font-bold tracking-tight text-white transition-colors group-hover:text-accent-primary">
                NEXIA<span className="text-accent-primary group-hover:text-white">.</span>
              </span>
            </Link>
          </div>

          {/* Nav — strictement centré */}
          <nav className="hidden lg:block justify-self-center">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-text-secondary transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA — justifié à droite */}
          <div className="hidden lg:flex items-center gap-4 justify-self-end">
            <Link
              href="/contact"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-white"
            >
              Contact
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Consultation gratuite →
              </Button>
            </Link>
          </div>

          {/* Hamburger mobile — occupe la colonne droite sur petit écran */}
          <button
            className="lg:hidden justify-self-end rounded-full p-2 text-text-secondary hover:bg-white/5 hover:text-white col-start-3"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  )
}
