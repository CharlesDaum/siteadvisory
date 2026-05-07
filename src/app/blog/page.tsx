import { Metadata } from 'next'
import { getAllPosts } from '@/lib/contentful'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import ContactCTA from '@/components/sections/ContactCTA'

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

  // Get unique categories
  const categories = Array.from(new Set(posts.map(p => p.category)))

  return (
    <>
      <section className="relative pt-32 pb-16 bg-bg-primary overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 z-0 bg-dot-pattern opacity-30 mix-blend-screen" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Insights & <span className="text-accent-primary">Analyses</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            Décryptage des tendances IA, conseils stratégiques et retours d'expérience pour éclairer vos décisions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-6">
          
          {/* Categories Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <Link 
              href="/blog"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!category ? 'bg-white text-black' : 'bg-white/5 text-text-secondary hover:text-white'}`}
            >
              Tous
            </Link>
            {categories.map(cat => (
              <Link 
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === cat ? 'bg-white text-black' : 'bg-white/5 text-text-secondary hover:text-white'}`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="block group h-full">
                  <Card hoverable className="h-full flex flex-col p-0 overflow-hidden bg-bg-card border-border-subtle">
                    <div className="relative h-56 w-full overflow-hidden">
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
                      
                      <h2 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-6 flex items-center text-sm font-semibold text-accent-primary">
                        Lire l'article
                        <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg">Aucun article trouvé pour cette catégorie.</p>
              <Link href="/blog" className="text-accent-primary hover:underline mt-4 inline-block">Voir tous les articles</Link>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
