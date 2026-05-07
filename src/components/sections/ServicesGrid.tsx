'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface ServicesGridProps {
  preview?: boolean
}

export default function ServicesGrid({ preview = false }: ServicesGridProps) {
  const displayedServices = preview ? SERVICES.slice(0, 6) : SERVICES

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Nos Solutions IA"
          subtitle="Des offres structurées pour vous accompagner de la réflexion stratégique jusqu'au déploiement technique."
          badge="EXPERTISE"
          className="mb-16"
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedServices.map((service) => {
            // @ts-ignore
            const Icon = Icons[service.icon] || Icons.Star
            return (
              <motion.div variants={staggerItem} key={service.slug} className="h-full">
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <Card hoverable className="h-full flex flex-col overflow-hidden relative">
                    {/* Background gradient hint */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-bl-full opacity-20 transition-opacity group-hover:opacity-40`} />
                    
                    <div className="mb-6 h-14 w-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white relative z-10 group-hover:border-accent-primary group-hover:text-accent-primary transition-colors">
                      <Icon className="h-7 w-7" />
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-white mb-3 relative z-10">
                      {service.title}
                    </h3>
                    
                    <p className="text-text-secondary leading-relaxed flex-grow relative z-10 mb-6">
                      {service.shortDesc}
                    </p>
                    
                    <div className="mt-auto flex items-center text-sm font-semibold text-accent-primary relative z-10">
                      Découvrir la solution
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {preview && (
          <div className="mt-16 flex justify-center">
            <Link href="/services" className="inline-flex items-center text-text-secondary hover:text-white transition-colors">
              Voir tous nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
