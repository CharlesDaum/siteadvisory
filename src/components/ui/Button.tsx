import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    
    // Base styles
    const baseStyles = 'relative inline-flex items-center justify-center font-display font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary disabled:pointer-events-none disabled:opacity-50 overflow-hidden group'
    
    // Size styles
    const sizeStyles = {
      'sm': 'h-10 px-5 text-sm rounded-full',
      'md': 'h-12 px-8 text-base rounded-full',
      'lg': 'h-14 px-10 text-lg rounded-full',
    }

    // Variant specific content
    if (variant === 'primary') {
      return (
        <button
          ref={ref}
          className={cn(baseStyles, sizeStyles[size], 'bg-bg-secondary text-white shadow-glow-sm hover:shadow-glow-md hover:-translate-y-1', className)}
          disabled={isLoading || props.disabled}
          {...props}
        >
          {/* Animated Gradient Border Layer */}
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E879F9_0%,#8B5CF6_50%,#06B6D4_100%)] opacity-70 transition-opacity group-hover:opacity-100" />
          
          {/* Inner dark background */}
          <span className="absolute inset-[1.5px] rounded-full bg-bg-primary transition-colors group-hover:bg-bg-secondary" />
          
          {/* Content */}
          <span className="relative flex items-center justify-center gap-2 z-10">
            {isLoading && (
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            )}
            {children}
          </span>
        </button>
      )
    }

    if (variant === 'secondary') {
      return (
        <button
          ref={ref}
          className={cn(
            baseStyles, 
            sizeStyles[size], 
            'border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-accent-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]',
            className
          )}
          disabled={isLoading || props.disabled}
          {...props}
        >
          {isLoading && (
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          )}
          {children}
        </button>
      )
    }

    // Ghost
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles, 
          sizeStyles[size], 
          'bg-transparent text-text-secondary hover:text-white hover:bg-white/5',
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
