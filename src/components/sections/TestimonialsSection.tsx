'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="L'impact sur nos clients"
          subtitle="Des résultats concrets et mesurables pour les leaders de l'industrie."
          badge="RÉFÉRENCES"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.2 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col p-8 bg-white/[0.02] border-white/5 relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-white/5" />
                
                <p className="text-lg text-text-primary italic leading-relaxed mb-8 flex-grow relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="mt-auto flex items-center gap-4 relative z-10 border-t border-border-subtle pt-6">
                  {testimonial.avatar ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover grayscale opacity-80"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-text-secondary font-display font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-text-muted">{testimonial.role}, <span className="text-text-secondary">{testimonial.company}</span></p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
