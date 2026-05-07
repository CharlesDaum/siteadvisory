import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'pill'
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2',
          {
            'border-transparent bg-accent-primary/10 text-accent-primary': variant === 'default',
            'border-border-accent text-accent-primary': variant === 'outline',
            'border-transparent bg-white/5 text-text-secondary': variant === 'pill',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
