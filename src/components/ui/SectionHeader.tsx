import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  badge?: string
  align?: 'left' | 'center'
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, badge, align = 'center', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col gap-5',
          {
            'items-center text-center': align === 'center',
            'items-start text-left': align === 'left',
          },
          className
        )}
        {...props}
      >
        {badge && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
            {badge}
          </span>
        )}
        <h2 className="font-body text-white text-3xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-2xl text-base md:text-lg text-text-secondary leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'

export default SectionHeader
