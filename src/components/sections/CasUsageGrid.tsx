'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CAS_USAGE, CAS_USAGE_CATEGORIES } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { ArrowRight, Search as SearchIcon, X, CheckCircle2, ChevronRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import Link from 'next/link'

interface CasUsageGridProps {
  preview?: boolean
}

export default function CasUsageGrid({ preview = false }: CasUsageGridProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCase, setSelectedCase] = useState<string | null>(null)

  const filteredCases = CAS_USAGE.filter((cas) => {
    const matchesCategory = activeCategory === 'all' || cas.category === activeCategory
    const matchesSearch = cas.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cas.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cas.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const displayedCases = preview ? filteredCases.slice(0, 8) : filteredCases

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Bibliothèque de Cas d'Usage"
          subtitle="Explorez comment nos clients transforment leurs opérations avec l'Intelligence Artificielle à travers différents secteurs."
          badge="APPLICATIONS"
          className="mb-16"
        />

        {!preview && (
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {CAS_USAGE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-white text-black'
                      : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="h-4 w-4 text-text-muted" />
              </div>
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bg-card border border-border-subtle rounded-md py-2 pl-10 pr-4 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
              />
            </div>
          </div>
        )}

        <div className="mb-6 flex justify-between items-center">
          <p className="text-sm text-text-muted">
            Affichage de {displayedCases.length} cas d'usage {activeCategory !== 'all' && `pour "${CAS_USAGE_CATEGORIES.find(c => c.id === activeCategory)?.label}"`}
          </p>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {displayedCases.map((cas) => {
              // @ts-ignore
              const Icon = Icons[cas.icon] || Icons.FileText
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={cas.id}
                >
                  <Card 
                    hoverable 
                    className="h-full flex flex-col cursor-pointer bg-bg-card hover:bg-bg-card-hover border-border-subtle"
                    onClick={() => setSelectedCase(cas.id)}
                  >
                    <div className="mb-4 text-text-muted">
                      <span className="text-xs font-medium uppercase tracking-wider">{cas.categoryLabel}</span>
                    </div>
                    
                    <div className="mb-4 h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center text-accent-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-white mb-3">
                      {cas.title}
                    </h3>
                    
                    <p className="text-sm text-text-secondary mb-6 flex-grow line-clamp-3">
                      {cas.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {cas.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="pill" className="text-[10px] bg-white/5 text-text-muted border-none">
                          {tag}
                        </Badge>
                      ))}
                      {cas.tags.length > 2 && (
                        <Badge variant="pill" className="text-[10px] bg-white/5 text-text-muted border-none">
                          +{cas.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {preview && (
          <div className="mt-16 flex justify-center">
            <Link href="/cas-usage" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/5 text-white hover:bg-white/10 transition-colors font-medium">
              Voir toute la bibliothèque
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}

        {/* Modal for Case Details */}
        <AnimatePresence>
          {selectedCase && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedCase(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-bg-card border border-border-subtle rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border-subtle">
                  {(() => {
                    const cas = CAS_USAGE.find(c => c.id === selectedCase)
                    return (
                      <>
                        <div>
                          <span className="text-xs font-medium text-accent-primary uppercase tracking-wider mb-1 block">
                            {cas?.categoryLabel}
                          </span>
                          <h2 className="text-2xl font-display font-bold text-white pr-8">
                            {cas?.title}
                          </h2>
                        </div>
                        <button 
                          onClick={() => setSelectedCase(null)}
                          className="absolute top-6 right-6 text-text-muted hover:text-white transition-colors"
                        >
                          <X className="h-6 w-6" />
                        </button>
                      </>
                    )
                  })()}
                </div>
                
                {/* Body */}
                <div className="p-6 overflow-y-auto">
                  {(() => {
                    const cas = CAS_USAGE.find(c => c.id === selectedCase)
                    if (!cas) return null
                    
                    // @ts-ignore
                    const Icon = Icons[cas.icon] || Icons.FileText
                    
                    return (
                      <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                           <div className="h-12 w-12 shrink-0 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                            <p className="text-text-secondary leading-relaxed">
                              {cas.description}
                            </p>
                          </div>
                        </div>
                        
                        <div>
                           <h3 className="text-lg font-semibold text-white mb-4">Bénéfices attendus</h3>
                           <ul className="space-y-3">
                             {cas.benefits.map((benefit, i) => (
                               <li key={i} className="flex items-start text-text-secondary">
                                 <CheckCircle2 className="h-5 w-5 text-accent-primary mr-3 shrink-0 mt-0.5" />
                                 <span>{benefit}</span>
                               </li>
                             ))}
                           </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            {cas.tags.map(tag => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  })()}
                </div>
                
                {/* Footer */}
                <div className="p-6 border-t border-white/5 bg-white/[0.02] mt-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="text-sm text-text-muted text-center sm:text-left">
                    Intéressé par ce cas d'usage pour votre entreprise ?
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-accent-primary text-black font-medium hover:bg-accent-secondary transition-colors w-full sm:w-auto shrink-0"
                    onClick={() => setSelectedCase(null)}
                  >
                    En savoir plus
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
