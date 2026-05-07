import HeroSection from '@/components/sections/HeroSection'
import MetricsBar from '@/components/sections/MetricsBar'
import ApproacheTimeline from '@/components/sections/ApproacheTimeline'
import ServicesGrid from '@/components/sections/ServicesGrid'
import CasUsageGrid from '@/components/sections/CasUsageGrid'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BlogPreview from '@/components/sections/BlogPreview'
import ContactCTA from '@/components/sections/ContactCTA'
import { BlogPost } from '@/types/contentful'

// Mocking some posts until Contentful is fully connected
const mockPosts: BlogPost[] = [
  {
    title: 'Comment l\'IA Générative redéfinit le service client en 2024',
    slug: 'ia-generative-service-client',
    excerpt: 'Découvrez comment les LLMs permettent d\'automatiser jusqu\'à 80% des requêtes de niveau 1 tout en améliorant la satisfaction client.',
    category: 'Cas Client',
    readingTime: 5,
    author: 'Jean Dupont',
    publishedAt: '2024-05-02T10:00:00Z',
    featured: true,
    content: {} as any,
    coverImage: {
      url: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=800&auto=format&fit=crop',
      alt: 'Service client IA',
      width: 800,
      height: 600
    }
  },
  {
    title: 'Gouvernance de l\'IA : Les 5 piliers pour un déploiement sécurisé',
    slug: 'gouvernance-ia-piliers',
    excerpt: 'Face au AI Act européen, quelles sont les étapes indispensables pour sécuriser vos données et garantir l\'éthique de vos modèles ?',
    category: 'Réglementation',
    readingTime: 8,
    author: 'Sophie Martin',
    publishedAt: '2024-04-28T14:30:00Z',
    featured: false,
    content: {} as any,
    coverImage: {
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      alt: 'Gouvernance IA',
      width: 800,
      height: 600
    }
  },
  {
    title: 'RAG vs Fine-tuning : Quelle approche pour vos données métiers ?',
    slug: 'rag-vs-fine-tuning',
    excerpt: 'Comprendre les différences techniques et économiques entre le Retrieval-Augmented Generation et le ré-entraînement de modèles.',
    category: 'Technique',
    readingTime: 6,
    author: 'Marc Leroy',
    publishedAt: '2024-04-15T09:15:00Z',
    featured: false,
    content: {} as any,
    coverImage: {
      url: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
      alt: 'Code et architecture',
      width: 800,
      height: 600
    }
  }
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsBar />
      <ApproacheTimeline preview />
      <ServicesGrid preview />
      <CasUsageGrid preview />
      <TestimonialsSection />
      <BlogPreview posts={mockPosts} />
      <ContactCTA />
    </>
  )
}
