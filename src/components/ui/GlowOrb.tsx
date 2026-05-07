'use client'

import { cn } from '@/lib/utils'

export interface GlowOrbProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string // Optional override
  animationDelay?: string
}

export default function GlowOrb({
  className,
  size = 'md',
  color,
  animationDelay = '0s',
}: GlowOrbProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob',
        color || 'bg-gradient-to-tr from-accent-primary via-accent-secondary to-accent-tertiary',
        {
          'h-32 w-32': size === 'sm',
          'h-64 w-64': size === 'md',
          'h-96 w-96': size === 'lg',
          'h-[600px] w-[600px]': size === 'xl',
        },
        className
      )}
      style={{
        animationDelay,
      }}
    />
  )
}
