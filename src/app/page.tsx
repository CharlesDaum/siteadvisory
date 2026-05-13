import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import BlogPreview from '@/components/sections/BlogPreview'
import LeadMagnetSection from '@/components/sections/LeadMagnetSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ApproacheTimeline from '@/components/sections/ApproacheTimeline'
import TechnologiesSection from '@/components/sections/TechnologiesSection'
import CasUsageGrid from '@/components/sections/CasUsageGrid'
import CommitmentsSection from '@/components/sections/CommitmentsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactCTA from '@/components/sections/ContactCTA'
import { FAQ_APPROCHE } from '@/lib/constants'
import { BlogPost } from '@/types/contentful'

const mockPosts: BlogPost[] = [
  {
    title: 'Comment l\'IA Générative redéfinit le service client en 2025',
    slug: 'ia-generative-service-client',
    excerpt: 'Découvrez comment les LLMs permettent d\'automatiser jusqu\'à 80% des requêtes de niveau 1 tout en améliorant la satisfaction client.',
    category: 'Cas Client',
    readingTime: 5,
    author: 'Jean Dupont',
    publishedAt: '2025-04-02T10:00:00Z',
    featured: true,
    content: {} as any,
    coverImage: {
      url: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=800&auto=format&fit=crop',
      alt: 'Service client IA',
      width: 800,
      height: 600,
    },
  },
  {
    title: 'AI Act européen : ce que chaque DSI doit savoir en 2025',
    slug: 'gouvernance-ia-piliers',
    excerpt: 'Face au AI Act européen, quelles sont les étapes indispensables pour sécuriser vos données et garantir l\'éthique de vos modèles ?',
    category: 'Réglementation',
    readingTime: 8,
    author: 'Sophie Martin',
    publishedAt: '2025-03-28T14:30:00Z',
    featured: false,
    content: {} as any,
    coverImage: {
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      alt: 'Gouvernance IA',
      width: 800,
      height: 600,
    },
  },
  {
    title: 'RAG vs Fine-tuning : Quelle approche pour vos données métiers ?',
    slug: 'rag-vs-fine-tuning',
    excerpt: 'Comprendre les différences techniques et économiques entre le Retrieval-Augmented Generation et le ré-entraînement de modèles.',
    category: 'Technique',
    readingTime: 6,
    author: 'Marc Leroy',
    publishedAt: '2025-03-15T09:15:00Z',
    featured: false,
    content: {} as any,
    coverImage: {
      url: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
      alt: 'Code et architecture',
      width: 800,
      height: 600,
    },
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
       * TOFU — Top of the Funnel : prise de conscience
       * Objectif : capter l'attention, faire prendre conscience du problème,
       * positionner Nexia comme la réponse adaptée via du contenu pédagogique.
       * ───────────────────────────────────────────────────────────── */}

      {/* Accroche — capter l'attention */}
      <HeroSection />

      {/* Prise de conscience du problème — pourquoi les projets IA échouent */}
      <ProblemSection />

      {/* Contenu pédagogique — positionner notre expertise éditoriale */}
      <BlogPreview posts={mockPosts} />

      {/* Lead Magnet — capturer les emails des prospects pas encore prêts au RDV */}
      <LeadMagnetSection />

      {/* ─────────────────────────────────────────────────────────────
       * MOFU — Middle of the Funnel : sélection / évaluation
       * Objectif : prouver l'expertise et le savoir-faire technique,
       * montrer la valeur ajoutée, faire évaluer Nexia parmi d'autres options.
       * ───────────────────────────────────────────────────────────── */}

      {/* Nos solutions — réponse concrète au problème */}
      <ServicesGrid preview />

      {/* Notre méthode — comment on délivre */}
      <ApproacheTimeline preview />

      {/* Notre stack technique — preuve d'expertise */}
      <TechnologiesSection />

      {/* Cas d'usage — exemples concrets pour évaluer le fit */}
      <CasUsageGrid preview />

      {/* Nos engagements — différenciation vs. la concurrence */}
      <CommitmentsSection />

      {/* ─────────────────────────────────────────────────────────────
       * BOFU — Bottom of the Funnel : décision d'achat
       * Objectif : lever les derniers freins, déclencher l'action commerciale
       * (prise de RDV / consultation gratuite).
       * ───────────────────────────────────────────────────────────── */}

      {/* Témoignages — preuve sociale pour rassurer */}
      <TestimonialsSection />

      {/* FAQ — lever les dernières objections */}
      <FAQSection
        items={FAQ_APPROCHE}
        badge="FAQ"
        title="Vos questions, nos réponses."
        subtitle="Tout ce que les dirigeants nous demandent avant de démarrer une mission."
      />

      {/* CTA final — déclencher la prise de contact */}
      <ContactCTA />
    </>
  )
}
