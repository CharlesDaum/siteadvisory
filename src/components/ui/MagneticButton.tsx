'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
  primary?: boolean
  href?: string
  className?: string
}

export default function MagneticButton({ children, primary = false, href = '#contact', className = '' }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${dx * 0.18}px, ${dy * 0.25}px)`
    }
    const onLeave = () => { el.style.transform = '' }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <Link
      ref={ref}
      href={href}
      className={`btn ${primary ? 'primary' : ''} ${className}`}
    >
      {children}
    </Link>
  )
}
