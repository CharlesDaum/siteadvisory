'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface AnimatedCounterProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: duration * 1000,
  })
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(end)
    }
  }, [motionValue, isInView, end])

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('fr-FR').format(Math.floor(latest))
      }
    })
  }, [springValue])

  return (
    <span className={cn('inline-flex items-center font-display font-bold', className)}>
      {prefix && <span>{prefix}</span>}
      <span ref={ref}>0</span>
      {suffix && <span>{suffix}</span>}
    </span>
  )
}
