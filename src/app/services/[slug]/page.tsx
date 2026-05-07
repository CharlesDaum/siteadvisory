import { Metadata } from 'next'
import { SERVICES, CAS_USAGE } from '@/lib/constants'
import { notFound } from 'next/navigation'
import SectionHeader from '@/components/ui/SectionHeader'
import ContactCTA from '@/components/sections/ContactCTA'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    return { title: 'Service Non Trouvé' }
  }

  return {
    title: `${service.title} | Services IA`,
    description: service.shortDesc,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  // @ts-ignore
  const Icon = Icons[service.icon] || Icons.Star
  
  // Find related use cases based on matching tags or fallback
  const relatedCasUsage = CAS_USAGE.filter(cas => 
    cas.tags.some(tag => service.tags.includes(tag))
  ).slice(0, 3)

  return (
    <>
      <section className="relative pt-32 pb-24 bg-bg-primary overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-30 mix-blend-screen" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <Link href="/services" className="inline-flex items-center text-sm font-medium text-text-muted hover:text-white transition-colors mb-8">
              ← Retour aux services
            </Link>
            
            <div className="mb-6 h-16 w-16 rounded-2xl bg-bg-secondary border border-border-accent flex items-center justify-center text-accent-primary">
              <Icon className="h-8 w-8" />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              {service.longDesc}
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-sm px-4 py-1.5">{service.duration}</Badge>
              {service.tags.map(tag => (
                <Badge key={tag} variant="pill" className="text-sm px-4 py-1.5">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary border-b border-border-subtle">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center text-sm mr-3">01</span>
                Le Défi
              </h2>
              <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle">
                <p className="text-text-secondary leading-relaxed text-lg">
                  {service.problem}
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary flex items-center justify-center text-sm mr-3">02</span>
                Notre Solution
              </h2>
              <div className="p-8 rounded-2xl bg-bg-card border border-accent-primary/30 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-bl-full opacity-20`} />
                <p className="text-text-primary leading-relaxed text-lg relative z-10">
                  {service.solution}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                title="Livrables Concrets"
                subtitle="Ce que vous obtenez à l'issue de notre accompagnement."
                align="left"
              />
              <ul className="mt-10 space-y-6">
                {service.deliverables.map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="h-6 w-6 text-accent-primary mr-4 shrink-0" />
                    <span className="text-lg text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 lg:p-12">
              <h3 className="text-xl font-bold text-white mb-8">Cas d'usage associés</h3>
              
              <div className="flex flex-col gap-4">
                {relatedCasUsage.length > 0 ? (
                  relatedCasUsage.map(cas => (
                    <Link href="/cas-usage" key={cas.id} className="group">
                      <div className="p-4 rounded-xl border border-border-subtle bg-bg-secondary hover:border-accent-primary/50 transition-colors flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-accent-primary transition-colors">{cas.title}</h4>
                          <p className="text-sm text-text-muted mt-1">{cas.categoryLabel}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-text-muted group-hover:text-accent-primary transition-colors" />
                      </div>
                    </Link>
                  ))
                ) : (
                   <p className="text-text-muted">Consultez notre bibliothèque pour voir les cas d'usage.</p>
                )}
              </div>
              
              <div className="mt-8 pt-8 border-t border-border-subtle">
                <Link href="/cas-usage" className="text-sm font-medium text-text-secondary hover:text-white transition-colors flex items-center">
                  Voir tous les cas d'usage <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
