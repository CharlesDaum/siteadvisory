'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
}

export default function Counter({ value, prefix = '', suffix = '', decimals = 0, duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          const t0 = performance.now()
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / duration)
            setShown(value * easeOut(p))
            if (p < 1) requestAnimationFrame(tick)
            else setShown(value)
          }
          requestAnimationFrame(tick)
        }
      })
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  const formatted = decimals > 0 ? shown.toFixed(decimals) : Math.round(shown).toString()
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>
}
