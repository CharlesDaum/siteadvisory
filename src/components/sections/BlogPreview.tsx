'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'
import { BlogPost } from '@/types/contentful'
import { formatDate } from '@/lib/utils'

interface BlogPreviewProps {
  posts: BlogPost[]
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Dernières Insights"
          subtitle="Analyses, décryptages et retours d'expérience de nos experts sur l'impact de l'IA dans le monde de l'entreprise."
          badge="BLOG"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <Card hoverable className="h-full flex flex-col p-0 overflow-hidden bg-bg-card border-border-subtle">
                  <div className="relative h-48 w-full overflow-hidden">
                    {/* Placeholder image if not connected to Contentful yet */}
                    <div className="absolute inset-0 bg-accent-primary/20 transition-transform duration-500 group-hover:scale-105" />
                    {post.coverImage && (
                      <img 
                        src={post.coverImage.url} 
                        alt={post.coverImage.alt || post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge variant="default" className="bg-bg-primary/80 backdrop-blur-md border-transparent text-accent-primary">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readingTime} min</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-text-secondary text-sm leading-relaxed flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-6 flex items-center text-sm font-semibold text-accent-primary">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/blog" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/5 text-white hover:bg-white/10 transition-colors font-medium">
            Voir tous les articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
