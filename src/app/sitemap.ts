import { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/constants'
import { getAllPosts } from '@/lib/contentful'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexia-advisory.fr'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static Routes
  const staticRoutes = [
    '',
    '/approche',
    '/services',
    '/cas-usage',
    '/formation',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic Routes - Services
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic Routes - Blog Posts
  const posts = await getAllPosts()
  const blogRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes]
}
