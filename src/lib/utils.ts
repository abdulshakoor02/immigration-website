import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Glassmorphism utility classes
export const glassVariants = {
  light: "bg-white/5 backdrop-blur-sm border border-white/10",
  medium: "bg-white/10 backdrop-blur-md border border-white/20", 
  heavy: "bg-white/15 backdrop-blur-lg border border-white/30",
  dark: "bg-black/20 backdrop-blur-md border border-white/10"
}

export const glassHover = {
  light: "hover:bg-white/10 hover:border-white/20",
  medium: "hover:bg-white/15 hover:border-white/30",
  heavy: "hover:bg-white/20 hover:border-white/40",
  dark: "hover:bg-black/30 hover:border-white/20"
}

// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}

export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.2 }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
}