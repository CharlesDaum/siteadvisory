import { Metadata } from 'next'
import { getPostBySlug, getAllPosts } from '@/lib/contentful'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { Calendar, Clock, User, ArrowLeft, Share2, MessageCircle, Link as LinkIcon } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import RichTextRenderer from '@/components/blog/RichTextRenderer'
import ContactCTA from '@/components/sections/ContactCTA'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: 'Article Non Trouvé' }
  }

  return {
    title: `${post.title} | Blog NexIA`,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage?.url || '/images/og-image.jpg'],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Related posts (same category, excluding current)
  const allPosts = await getAllPosts()
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2)

  return (
    <>
      <article className="pt-20">
        {/* Header Section */}
        <header className="bg-bg-primary pt-16 pb-16 relative overflow-hidden border-b border-border-subtle">
          <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-30 mix-blend-screen" />
          
          <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-text-muted hover:text-white transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Link>

            <div className="mb-6">
              <Badge variant="outline" className="border-accent-primary text-accent-primary">
                {post.category}
              </Badge>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-accent-primary" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent-primary" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-primary" />
                <span>{post.readingTime} min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="container mx-auto px-6 max-w-5xl -mt-8 relative z-20">
            <div className="rounded-2xl overflow-hidden border border-border-subtle shadow-2xl bg-bg-card aspect-[21/9]">
              <img 
                src={post.coverImage.url} 
                alt={post.coverImage.alt || post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="container mx-auto px-6 max-w-6xl py-20">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <RichTextRenderer content={post.content} />
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/3 space-y-12">
              
              {/* Share */}
              <div className="p-6 rounded-2xl bg-bg-secondary border border-border-subtle">
                <h3 className="text-lg font-bold text-white mb-4">Partager l'article</h3>
                <div className="flex gap-4">
                  <button className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-primary transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-primary transition-colors">
                    <MessageCircle className="h-4 w-4" />
                  </button>
                  <button className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-accent-primary transition-colors">
                    <LinkIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-border-subtle pb-2">Articles similaires</h3>
                  <div className="space-y-6">
                    {relatedPosts.map(related => (
                      <Link href={`/blog/${related.slug}`} key={related.slug} className="block group">
                        <div className="flex flex-col gap-2">
                          <h4 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <span className="text-xs text-text-muted">{formatDate(related.publishedAt)}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>

          </div>
        </div>
      </article>

      <ContactCTA />
    </>
  )
}
