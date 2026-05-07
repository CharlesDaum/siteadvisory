import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import Badge from './Badge'

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
          'flex flex-col gap-4',
          {
            'items-center text-center': align === 'center',
            'items-start text-left': align === 'left',
          },
          className
        )}
        {...props}
      >
        {badge && (
          <Badge variant="pill" className="mb-2">
            <span className="mr-2 text-accent-primary">●</span> {badge}
          </Badge>
        )}
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-2xl text-lg text-text-secondary">
            {subtitle}
          </p>
        )}
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'

export default SectionHeader
