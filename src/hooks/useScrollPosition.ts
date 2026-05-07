/**
 * useScrollPosition — Tracks vertical scroll position
 * Used by Navbar to toggle glass/transparent background
 */
'use client'
import { useState, useEffect } from 'react'

export function useScrollPosition(threshold: number = 80): boolean {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isScrolled
}
