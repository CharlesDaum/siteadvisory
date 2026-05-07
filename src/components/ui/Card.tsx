'use client'

import { forwardRef, useState, MouseEvent } from 'react'
import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps, useMotionTemplate, useMotionValue } from 'framer-motion'
import { cardHover } from '@/lib/animations'

export interface CardProps extends HTMLMotionProps<"div"> {
  hoverable?: boolean
  glass?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, glass = true, children, ...props }, ref) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const [isHovered, setIsHovered] = useState(false)

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
      const { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    return (
      <motion.div
        ref={ref}
        variants={hoverable ? cardHover : undefined}
        initial={hoverable ? "rest" : undefined}
        whileHover={hoverable ? "hover" : undefined}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'group relative rounded-2xl p-6 transition-all duration-500',
          glass ? 'glass-card' : 'bg-bg-card border border-white/5',
          className
        )}
        {...props}
      >
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(139, 92, 246, 0.1),
                transparent 40%
              )
            `,
          }}
        />
        
        {/* Content wrapper to stay above spotlight */}
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export default Card
