"use client"

import React from "react"
import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/useAnimations"
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerItem } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "stagger"
  delay?: number
  duration?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  once = true,
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollReveal()

  const getAnimationVariant = () => {
    const baseVariants = {
      fadeInUp: { ...fadeInUp, transition: { ...fadeInUp.transition, delay, duration } },
      fadeInLeft: { ...fadeInLeft, transition: { ...fadeInLeft.transition, delay, duration } },
      fadeInRight: { ...fadeInRight, transition: { ...fadeInRight.transition, delay, duration } },
      scaleIn: { ...scaleIn, transition: { ...scaleIn.transition, delay, duration } },
      stagger: staggerContainer,
    }
    return baseVariants[animation]
  }

  if (animation === "stagger") {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={staggerItem}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getAnimationVariant()}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      {children}
    </motion.div>
  )
}