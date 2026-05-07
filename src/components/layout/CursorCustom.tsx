'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function CursorCustom() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches

    if (isTouchDevice) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleLinkHoverEnter = () => setIsHovering(true)
    const handleLinkHoverLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // Add listeners to all interactive elements
    const interactiveSelectors = 'a, button, input, select, textarea, [data-cursor="pointer"]'
    const interactives = document.querySelectorAll(interactiveSelectors)
    
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHoverEnter)
      el.addEventListener('mouseleave', handleLinkHoverLeave)
    })

    // Mutation observer for dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // ELEMENT_NODE
              const element = node as Element
              if (element.matches && element.matches(interactiveSelectors)) {
                element.addEventListener('mouseenter', handleLinkHoverEnter)
                element.addEventListener('mouseleave', handleLinkHoverLeave)
              }
              const children = element.querySelectorAll(interactiveSelectors)
              children.forEach(child => {
                child.addEventListener('mouseenter', handleLinkHoverEnter)
                child.addEventListener('mouseleave', handleLinkHoverLeave)
              })
            }
          })
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHoverEnter)
        el.removeEventListener('mouseleave', handleLinkHoverLeave)
      })
      observer.disconnect()
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className={cn(
        'pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference transition-transform duration-150 ease-out',
        isHovering
          ? 'h-10 w-10 -translate-x-5 -translate-y-5 bg-accent-primary/30 blur-[2px]'
          : 'h-3 w-3 -translate-x-1.5 -translate-y-1.5 bg-accent-primary'
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
      }}
    />
  )
}
