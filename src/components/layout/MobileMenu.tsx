'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { mobileMenuVariants } from '@/lib/animations'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: { label: string; href: string }[]
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileMenuVariants}
          className="fixed inset-0 z-50 flex flex-col bg-bg-primary/95 backdrop-blur-md"
        >
          <div className="flex h-20 items-center justify-between px-6">
            <span className="font-display text-xl font-bold tracking-tight text-white">
              NEXIA<span className="text-accent-primary">.</span>
            </span>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-text-secondary transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex flex-1 flex-col justify-center px-6">
            <ul className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="font-display text-3xl font-bold text-text-secondary transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="mt-12"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-md bg-accent-primary px-8 py-4 font-medium text-black transition-colors hover:bg-accent-secondary"
              >
                Démarrer votre projet →
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
