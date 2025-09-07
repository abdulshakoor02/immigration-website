"use client"

import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Hook for scroll-triggered animations
export function useScrollReveal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  })
  
  return { ref, isInView }
}

// Hook for parallax effect
export function useParallax() {
  const [offsetY, setOffsetY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset)
    window.addEventListener("scroll", handleScroll)
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return offsetY
}

// Hook for typewriter effect
export function useTypewriter(text: string, speed: number = 50) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, speed)
      
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])
  
  return displayText
}

// Hook for mouse position tracking
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])
  
  return mousePosition
}

// Hook for responsive breakpoints
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("desktop")
  
  useEffect(() => {
    const updateBreakpoint = () => {
      if (window.innerWidth < 768) {
        setBreakpoint("mobile")
      } else if (window.innerWidth < 1024) {
        setBreakpoint("tablet")
      } else {
        setBreakpoint("desktop")
      }
    }
    
    updateBreakpoint()
    window.addEventListener("resize", updateBreakpoint)
    return () => window.removeEventListener("resize", updateBreakpoint)
  }, [])
  
  return breakpoint
}