'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'
import { BlogPost } from '@/types/contentful'
import { formatDate } from '@/lib/utils'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface BlogPreviewProps {
  posts: BlogPost[]
}

const CATEGORY_COLORS: Record<string, string> = {
  'Cas Client': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'Réglementation': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  'Technique': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="py-28 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
              Insights & Analyses
            </span>
            <h2 className="font-body text-4xl font-semibold text-white md:text-5xl tracking-[-0.02em] leading-[1.1]">
              L'IA expliquée par{' '}
              <span className="italic font-normal text-accent-primary">des praticiens.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors group shrink-0"
          >
            Tous les articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Posts grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {posts.map((post, idx) => (
            <motion.div key={post.slug} variants={staggerItem} className="h-full">
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <article className="h-full flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.07] overflow-hidden hover:border-accent-primary/20 transition-colors">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    {post.coverImage && (
                      <img
                        src={post.coverImage.url}
                        alt={post.coverImage.alt || post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
                    <span className={`absolute top-4 left-4 inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${CATEGORY_COLORS[post.category] || 'text-accent-primary bg-accent-primary/10 border-accent-primary/20'}`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime} min de lecture
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug group-hover:text-accent-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 flex-grow mb-5">
                      {post.excerpt}
                    </p>

                    <span className="flex items-center gap-1.5 text-sm font-semibold text-accent-primary mt-auto">
                      Lire l'article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
