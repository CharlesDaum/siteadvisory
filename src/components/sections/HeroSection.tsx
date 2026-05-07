'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Compass, TrendingUp, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/animations'
import GlowOrb from '@/components/ui/GlowOrb'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Card from '@/components/ui/Card'
import { METRICS } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 pb-32">

      {/* Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto flex flex-col items-center px-6 text-center"
      >
        <motion.div variants={staggerItem} className="mb-8 relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary opacity-40 blur transition duration-1000 group-hover:opacity-100 animate-pulse-glow" />
          <Badge variant="pill" className="relative px-5 py-2 text-sm bg-bg-card backdrop-blur-xl border-white/10">
            <span className="mr-2 text-accent-primary animate-pulse">●</span> NEXIA ADVISORY · CONSULTING IA
          </Badge>
        </motion.div>

        <motion.h1 
          variants={staggerItem}
          className="mx-auto max-w-5xl font-display text-4xl sm:text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-[1.1]"
        >
          Propulsez votre Croissance <br className="hidden md:block" />
          grâce à la <span className="gradient-text">Puissance de l'IA</span>
        </motion.h1>

        <motion.p 
          variants={staggerItem}
          className="mx-auto mt-8 max-w-2xl text-lg text-text-secondary md:text-xl leading-relaxed"
        >
          Transformez l'IA en moteur de croissance durable. Nous orchestrons votre 
          stratégie, de l'audit à l'automatisation, pour sécuriser votre avantage 
          compétitif et maximiser votre performance opérationnelle.
        </motion.p>

        <motion.div 
          variants={staggerItem}
          className="mt-12 flex flex-col gap-6 sm:flex-row items-center justify-center"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Discutons de votre projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Explorer nos Solutions
            </Button>
          </Link>
        </motion.div>

        {/* Inline Metrics */}
        <motion.div 
          variants={staggerItem}
          className="mt-24 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-10 w-full max-w-5xl rounded-3xl"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center pt-8 md:pt-0">
                <AnimatedCounter 
                  end={metric.value} 
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  className="text-4xl md:text-5xl font-display font-bold text-white mb-2"
                />
                <span className="text-sm font-medium text-text-secondary tracking-widest uppercase">{metric.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pillars */}
        <motion.div 
          variants={staggerItem}
          className="mt-16 grid grid-cols-1 gap-6 text-left sm:grid-cols-3 w-full max-w-5xl"
        >
          <Card hoverable className="flex flex-col items-start bg-white/[0.02]">
            <div className="mb-6 p-3 rounded-xl bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-xl text-white mb-2">Stratégie Sur-Mesure</h3>
            <p className="text-sm text-text-secondary leading-relaxed">Solutions alignées sur votre ADN d'entreprise et vos objectifs à long terme.</p>
          </Card>
          
          <Card hoverable className="flex flex-col items-start bg-white/[0.02]">
            <div className="mb-6 p-3 rounded-xl bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-xl text-white mb-2">Performance Durable</h3>
            <p className="text-sm text-text-secondary leading-relaxed">Automatisation intelligente et gains de productivité concrets à tous les niveaux.</p>
          </Card>
          
          <Card hoverable className="flex flex-col items-start bg-white/[0.02]">
            <div className="mb-6 p-3 rounded-xl bg-accent-tertiary/10 text-accent-tertiary border border-accent-tertiary/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-xl text-white mb-2">Souveraineté</h3>
            <p className="text-sm text-text-secondary leading-relaxed">Conformité RGPD, sécurité de vos données et modèles hébergés localement.</p>
          </Card>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "loop" }}
        className="absolute bottom-8 z-10 text-text-secondary"
      >
        <ArrowDown className="h-6 w-6 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
      </motion.div>
    </section>
  )
}
