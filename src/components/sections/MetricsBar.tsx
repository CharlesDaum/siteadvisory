'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { METRICS } from '@/lib/constants'

export default function MetricsBar() {
  return (
    <section className="py-32 relative z-10 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="font-display text-4xl font-bold md:text-5xl lg:text-6xl text-white mb-4">
                <AnimatedCounter 
                  end={metric.value} 
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>
              <p className="text-lg font-medium text-text-secondary uppercase tracking-wider">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
