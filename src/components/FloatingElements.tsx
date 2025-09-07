"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface FloatingElement {
  size: number
  color: string
  x: number
  y: number
  delay: number
}

interface FloatingElementsProps {
  count?: number
  className?: string
  speed?: number
}

export function FloatingElements({ 
  count = 6, 
  className = "", 
  speed = 1 
}: FloatingElementsProps) {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [isClient, setIsClient] = useState(false)

  // Generate random floating elements only on client side
  useEffect(() => {
    setIsClient(true)
    const generatedElements: FloatingElement[] = Array.from({ length: count }, (_, i) => ({
      size: Math.random() * 100 + 50,
      color: `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`, // Blue with random opacity
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 0.2,
    }))
    setElements(generatedElements)
  }, [count])

  // Don't render floating elements during SSR
  if (!isClient) {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Static geometric shapes that don't use random values */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/3 w-3 h-3 border border-white/20 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-2/3 w-1 h-8 bg-gradient-to-t from-blue-400/20 to-transparent"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-sm"
          style={{
            width: element.size,
            height: element.size,
            background: `radial-gradient(circle, ${element.color} 0%, transparent 70%)`,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}
      
      {/* Additional geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/3 w-3 h-3 border border-white/20 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-2/3 w-1 h-8 bg-gradient-to-t from-blue-400/20 to-transparent"
        animate={{
          scaleY: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}