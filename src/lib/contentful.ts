import { createClient } from 'contentful'
import { BlogPost, BlogPostFields } from '@/types/contentful'

// Mock Data Fallback
const MOCK_POSTS: BlogPost[] = [
  {
    title: 'Comment l\'IA Générative redéfinit le service client en 2024',
    slug: 'ia-generative-service-client',
    excerpt: 'Découvrez comment les LLMs permettent d\'automatiser jusqu\'à 80% des requêtes de niveau 1 tout en améliorant la satisfaction client.',
    category: 'Cas Client',
    readingTime: 5,
    author: 'Jean Dupont',
    publishedAt: '2024-05-02T10:00:00Z',
    featured: true,
    content: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [{ nodeType: 'text', value: 'Ceci est un article de démonstration. Configurez Contentful pour afficher le vrai contenu.', marks: [], data: {} }]
        }
      ]
    } as any,
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
    content: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [{ nodeType: 'text', value: 'Ceci est un article de démonstration. Configurez Contentful pour afficher le vrai contenu.', marks: [], data: {} }]
        }
      ]
    } as any,
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
    content: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [{ nodeType: 'text', value: 'Ceci est un article de démonstration. Configurez Contentful pour afficher le vrai contenu.', marks: [], data: {} }]
        }
      ]
    } as any,
    coverImage: {
      url: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
      alt: 'Code et architecture',
      width: 800,
      height: 600
    }
  }
]

const spaceId = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
const isConfigured = Boolean(spaceId && accessToken)

const client = isConfigured ? createClient({
  space: spaceId as string,
  accessToken: accessToken as string,
}) : null

// Transform Contentful raw entry to clean BlogPost interface
function mapContentfulPost(entry: any): BlogPost {
  const fields = entry.fields as BlogPostFields
  return {
    title: fields.title,
    slug: fields.slug,
    excerpt: fields.excerpt,
    content: fields.content,
    coverImage: {
      url: `https:${fields.coverImage.fields.file.url}`,
      alt: fields.coverImage.fields.title,
      width: fields.coverImage.fields.file.details.image.width,
      height: fields.coverImage.fields.file.details.image.height,
    },
    category: fields.category,
    readingTime: fields.readingTime,
    author: fields.author,
    publishedAt: fields.publishedAt,
    featured: fields.featured || false,
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!isConfigured || !client) return MOCK_POSTS

  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishedAt'],
    })
    return response.items.map(mapContentfulPost)
  } catch (error) {
    console.error('Error fetching posts from Contentful:', error)
    return MOCK_POSTS
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isConfigured || !client) {
    return MOCK_POSTS.find(p => p.slug === slug) || null
  }

  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    })
    
    if (response.items.length === 0) return null
    return mapContentfulPost(response.items[0])
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error)
    return MOCK_POSTS.find(p => p.slug === slug) || null
  }
}

export async function getLatestPosts(count: number): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.slice(0, count)
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(p => p.category === category)
}
