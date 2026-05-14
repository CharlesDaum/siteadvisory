'use client'

import { useEffect, useRef } from 'react'

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf: number
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 3
    let x = tx, y = ty

    const onMove = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY }
    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      el.style.left = x + 'px'
      el.style.top = y + 'px'
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('pointermove', onMove)
    tick()
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="spotlight" />
}
