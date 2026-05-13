/**
 * Global TypeScript interfaces for NexIA Advisory
 * Used across components, pages, and data constants
 */

/** Navigation link item */
export interface NavItem {
  label: string
  href: string
}

/** Service offering */
export interface Service {
  slug: string
  icon: string
  title: string
  shortDesc: string
  longDesc: string
  problem: string
  solution: string
  deliverables: string[]
  tags: string[]
  duration: string
  color: string
}

/** Use case entry */
export interface CasUsage {
  id: string
  category: string
  categoryLabel: string
  icon: string
  title: string
  tags: string[]
  description: string
  benefits: string[]
}

/** Use case category */
export interface CasUsageCategory {
  id: string
  label: string
  icon: string
}

/** Methodology phase */
export interface Phase {
  number: string
  title: string
  duration: string
  description: string
  deliverables: string[]
  methods: string[]
  outcome: string
}

/** Training format */
export interface Formation {
  icon: string
  title: string
  duration: string
  audience: string
  description: string
  modules: string[]
  price: string
}

/** Client testimonial */
export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  avatar?: string
  /** Couleur d'accent pour le monogramme de l'entreprise (CSS color) */
  companyColor?: string
  /** Initiales affichées dans le badge entreprise (par défaut auto-générées) */
  companyInitials?: string
}

/** Metric display item */
export interface Metric {
  value: number
  prefix?: string
  suffix: string
  label: string
}

/** FAQ entry */
export interface FAQItem {
  question: string
  answer: string
}

/** Contact form data */
export interface ContactFormData {
  name: string
  email: string
  company: string
  position?: string
  sector?: string
  companySize?: string
  budget?: string
  message: string
  gdpr: boolean
}
