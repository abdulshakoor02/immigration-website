"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  type?: "button" | "submit" | "reset"
}

export function GlassButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  type = "button",
}: GlassButtonProps) {
  const baseClasses = cn(
    "relative overflow-hidden transition-all duration-300 font-medium",
    "border backdrop-blur-md rounded-xl",
    "flex items-center justify-center gap-2",
    "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
    {
      // Variants
      "bg-blue-500/20 border-blue-400/30 text-white hover:bg-blue-500/30 hover:border-blue-400/50 shadow-lg shadow-blue-500/25": 
        variant === "primary",
      "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30": 
        variant === "secondary",
      "bg-transparent border-transparent text-white hover:bg-white/10": 
        variant === "ghost",
      
      // Sizes
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md", 
      "px-8 py-4 text-lg": size === "lg",
      
      // States
      "opacity-50 cursor-not-allowed": disabled,
      "cursor-pointer": !disabled,
    },
    className
  )

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled ? { 
        scale: 1.02,
        y: -1,
      } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-xl scale-0"
        whileTap={{ scale: 1, opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === "left" && (
          <span className={loading ? "animate-spin" : ""}>{icon}</span>
        )}
        
        {loading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          children
        )}
        
        {icon && iconPosition === "right" && !loading && (
          <span>{icon}</span>
        )}
      </div>
    </motion.button>
  )
}