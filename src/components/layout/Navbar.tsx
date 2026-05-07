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
          'fixed inset-x-0 top-0 z-40 flex h-20 items-center justify-between px-6 lg:px-12 transition-colors duration-300',
          isScrolled ? 'glass' : 'bg-transparent'
        )}
      >
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-white transition-colors group-hover:text-accent-primary">
            NEXIA<span className="text-accent-primary group-hover:text-white">.</span>
          </span>
        </Link>

        <nav className="hidden lg:block">
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

        <div className="hidden lg:block">
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Démarrer →
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden rounded-full p-2 text-text-secondary hover:bg-white/5 hover:text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </motion.header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  )
}
