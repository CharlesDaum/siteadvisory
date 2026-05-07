/**
 * Framer Motion animation variants
 * Reusable across all components for consistent animation behavior
 */
import { type Variants } from 'framer-motion'

/** Fade in from below — default section reveal */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

/** Simple fade in */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

/** Fade in from left */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

/** Fade in from right */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

/** Container for staggered children animations */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

/** Individual stagger item */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

/** Card hover animation variants */
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
    borderColor: 'rgba(255,255,255,0.06)',
  },
  hover: {
    y: -6,
    boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 20px rgba(0,212,255,0.1)',
    borderColor: 'rgba(0,212,255,0.3)',
  },
}

/** Navbar background transition on scroll */
export const navbarVariants: Variants = {
  top: { backgroundColor: 'rgba(8,12,20,0)', backdropFilter: 'blur(0px)' },
  scrolled: { backgroundColor: 'rgba(8,12,20,0.85)', backdropFilter: 'blur(20px)' },
}

/** Mobile menu slide in/out */
export const mobileMenuVariants: Variants = {
  closed: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
  open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

/** SVG path drawing animation */
export const lineDrawVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
}

/** Scale up on appear */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}
