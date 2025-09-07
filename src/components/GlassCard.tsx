"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn, glassVariants, glassHover } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  variant?: "light" | "medium" | "heavy" | "dark"
  hover?: boolean
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl"
  shadow?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
  onClick?: () => void
}

export function GlassCard({
  children,
  className,
  variant = "medium",
  hover = true,
  rounded = "xl",
  shadow = "lg",
  animated = true,
  onClick,
}: GlassCardProps) {
  const baseClasses = cn(
    "relative overflow-hidden transition-all duration-300",
    glassVariants[variant],
    hover && glassHover[variant],
    {
      "rounded-sm": rounded === "sm",
      "rounded-md": rounded === "md", 
      "rounded-lg": rounded === "lg",
      "rounded-xl": rounded === "xl",
      "rounded-2xl": rounded === "2xl",
      "shadow-sm": shadow === "sm",
      "shadow-md": shadow === "md",
      "shadow-lg": shadow === "lg",
      "shadow-xl": shadow === "xl",
      "cursor-pointer": onClick,
    },
    className
  )

  const MotionDiv = animated ? motion.div : "div"

  const animationProps = animated ? {
    whileHover: { 
      scale: 1.02,
      y: -4,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    whileTap: { scale: 0.98 }
  } : {}

  return (
    <MotionDiv
      className={baseClasses}
      onClick={onClick}
      {...animationProps}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-inherit border border-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </MotionDiv>
  )
}