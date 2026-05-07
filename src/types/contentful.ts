/**
 * Contentful CMS TypeScript types
 * Maps to the 'blogPost' Content Type in Contentful
 */
import type { Document } from '@contentful/rich-text-types'

/** Blog post as consumed by components (transformed from Contentful entry) */
export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content: Document
  coverImage: {
    url: string
    alt: string
    width: number
    height: number
  }
  category: string
  readingTime: number
  author: string
  publishedAt: string
  featured: boolean
}

/** Raw Contentful entry fields for a Blog Post */
export interface BlogPostFields {
  title: string
  slug: string
  excerpt: string
  content: Document
  coverImage: {
    fields: {
      file: {
        url: string
        details: {
          image: {
            width: number
            height: number
          }
        }
      }
      title: string
    }
  }
  category: string
  readingTime: number
  author: string
  publishedAt: string
  featured: boolean
}
