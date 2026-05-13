'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

/**
 * v13 a retiré les logos Microsoft (demande de la marque). On force v11
 * pour ces marques pour qu'elles s'affichent correctement.
 */
const LEGACY_VERSION_BRANDS = new Set([
  'microsoftteams',
  'microsoftexcel',
  'microsoftazure',
  'microsoftoutlook',
  'microsoftpowerpoint',
  'microsoftword',
  'microsoft365',
])

function svgUrlFor(slug: string) {
  const version = LEGACY_VERSION_BRANDS.has(slug) ? '11' : 'v13'
  return `https://cdn.jsdelivr.net/npm/simple-icons@${version}/icons/${slug}.svg`
}

type Tech = { slug: string; name: string }

const ROW_1: Tech[] = [
  { slug: 'openai', name: 'OpenAI' },
  { slug: 'anthropic', name: 'Anthropic' },
  { slug: 'googlegemini', name: 'Gemini' },
  { slug: 'mistralai', name: 'Mistral' },
  { slug: 'meta', name: 'Meta' },
  { slug: 'huggingface', name: 'Hugging Face' },
  { slug: 'langchain', name: 'LangChain' },
  { slug: 'pytorch', name: 'PyTorch' },
  { slug: 'tensorflow', name: 'TensorFlow' },
  { slug: 'python', name: 'Python' },
]

const ROW_2: Tech[] = [
  { slug: 'amazonwebservices', name: 'AWS' },
  { slug: 'microsoftazure', name: 'Azure' },
  { slug: 'googlecloud', name: 'GCP' },
  { slug: 'vercel', name: 'Vercel' },
  { slug: 'cloudflare', name: 'Cloudflare' },
  { slug: 'docker', name: 'Docker' },
  { slug: 'kubernetes', name: 'Kubernetes' },
  { slug: 'github', name: 'GitHub' },
  { slug: 'mongodb', name: 'MongoDB' },
  { slug: 'postgresql', name: 'PostgreSQL' },
]

const ROW_3: Tech[] = [
  { slug: 'microsoftteams', name: 'Teams' },
  { slug: 'microsoftexcel', name: 'Excel' },
  { slug: 'salesforce', name: 'Salesforce' },
  { slug: 'hubspot', name: 'HubSpot' },
  { slug: 'notion', name: 'Notion' },
  { slug: 'slack', name: 'Slack' },
  { slug: 'airtable', name: 'Airtable' },
  { slug: 'asana', name: 'Asana' },
  { slug: 'figma', name: 'Figma' },
  { slug: 'zapier', name: 'Zapier' },
]

/**
 * Pseudo-random déterministe pour les délais et durées d'animation —
 * évite les mismatches d'hydratation SSR.
 */
const FLOAT_PRESETS = [
  { duration: 3.2, delay: 0 },
  { duration: 4.1, delay: 0.5 },
  { duration: 3.7, delay: 1.0 },
  { duration: 4.4, delay: 0.3 },
  { duration: 3.9, delay: 0.8 },
  { duration: 4.6, delay: 0.2 },
  { duration: 3.5, delay: 1.2 },
  { duration: 4.2, delay: 0.6 },
]

function BrandLogo({ slug, name, index }: { slug: string; name: string; index: number }) {
  const url = svgUrlFor(slug)
  const preset = FLOAT_PRESETS[index % FLOAT_PRESETS.length]
  const drift = (index % 2 === 0) ? -6 : 6

  return (
    <motion.div
      className="group flex flex-col items-center gap-2.5 shrink-0 px-8"
      animate={{ y: [0, drift, 0, -drift, 0] }}
      transition={{
        duration: preset.duration,
        delay: preset.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      title={name}
    >
      <span
        aria-label={name}
        className="block w-12 h-12 bg-text-secondary/70 transition-all duration-300 group-hover:bg-accent-primary group-hover:scale-110"
        style={{
          maskImage: `url('${url}')`,
          WebkitMaskImage: `url('${url}')`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      />
      <span className="text-[11px] font-medium uppercase tracking-wider text-text-muted group-hover:text-text-primary transition-colors">
        {name}
      </span>
    </motion.div>
  )
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 60,
  indexOffset = 0,
}: {
  items: Tech[]
  reverse?: boolean
  duration?: number
  indexOffset?: number
}) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden">
      <div
        className="flex whitespace-nowrap py-3"
        style={{
          width: 'max-content',
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <BrandLogo
            key={`${item.slug}-${i}`}
            slug={item.slug}
            name={item.name}
            index={indexOffset + i}
          />
        ))}
      </div>
    </div>
  )
}

export default function TechnologiesSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16">
        <SectionHeader
          badge="Notre Stack"
          title="Maîtrise transversale, indépendance totale."
          subtitle="De la couche modèle aux applications métier, nous orchestrons l'intégralité de votre écosystème technologique. À chaque mission, la combinaison la plus adaptée à vos contraintes business, techniques et réglementaires — sans préférence d'éditeur, sans verrouillage propriétaire."
          align="center"
        />
      </div>

      {/* Marquee pleine largeur, fondu sur les bords */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col gap-4"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <MarqueeRow items={ROW_1} duration={70} indexOffset={0} />
        <MarqueeRow items={ROW_2} reverse duration={85} indexOffset={10} />
        <MarqueeRow items={ROW_3} duration={75} indexOffset={20} />
      </motion.div>

      {/* Footer note */}
      <div className="container mx-auto px-6 mt-16">
        <p className="text-center text-sm text-text-muted max-w-2xl mx-auto leading-relaxed">
          <span className="text-text-secondary">
            + l'ensemble des outils déjà déployés dans votre organisation.
          </span>{' '}
          Nos intégrations s'adaptent à votre environnement existant —
          aucune migration forcée, aucune dépendance technique imposée.
        </p>
      </div>
    </section>
  )
}
