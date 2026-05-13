import { Metadata } from 'next'
import { getAllPosts } from '@/lib/contentful'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import ContactCTA from '@/components/sections/ContactCTA'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Analyses, décryptages et retours d\'expérience de nos experts sur l\'impact de l\'IA.',
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const posts = await getAllPosts()

  const filteredPosts = category
    ? posts.filter(p => p.category === category)
    : posts

  const categories = Array.from(new Set(posts.map(p => p.category)))

  return (
    <>
      <PageHero
        badge="Insights & Analyses"
        title="Décryptages IA"
        titleAccent="par des praticiens"
        subtitle="Tendances, conseils stratégiques et retours d'expérience pour éclairer vos décisions et garder une longueur d'avance."
        align="center"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">

          {/* Categories Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!category ? 'bg-accent-primary text-white' : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10'}`}
            >
              Tous
            </Link>
            {categories.map(cat => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === cat ? 'bg-accent-primary text-white' : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10'}`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="block group h-full">
                  <article className="h-full flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.07] overflow-hidden hover:border-accent-primary/20 transition-colors">
                    <div className="relative h-52 overflow-hidden">
                      {post.coverImage && (
                        <img
                          src={post.coverImage.url}
                          alt={post.coverImage.alt || post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
                      <span className="absolute top-4 left-4 rounded-full bg-bg-primary/80 backdrop-blur-md border border-white/10 px-3 py-1 text-xs font-medium text-accent-primary">
                        {post.category}
                      </span>
                    </div>

                    <div className="flex flex-col flex-grow p-6">
                      <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readingTime} min
                        </span>
                      </div>

                      <h2 className="font-display text-lg font-bold text-white mb-3 leading-snug group-hover:text-accent-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-text-secondary text-sm leading-relaxed flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-accent-primary">
                        Lire l'article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg mb-4">Aucun article trouvé pour cette catégorie.</p>
              <Link href="/blog" className="text-accent-primary hover:text-white transition-colors text-sm font-medium">
                Voir tous les articles
              </Link>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
