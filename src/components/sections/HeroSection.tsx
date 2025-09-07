"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Star, Shield, Users, CheckCircle } from "lucide-react"
import { GlassCard } from "../GlassCard"
import { GlassButton } from "../GlassButton"
import { FloatingElements } from "../FloatingElements"
import { AnimatedSection } from "../AnimatedSection"
import { useTypewriter, useParallax } from "@/hooks/useAnimations"

export function HeroSection() {
  const parallaxY = useParallax()
  const typewriterText = useTypewriter("Your Journey to a New Life Starts Here", 80)

  const stats = [
    { icon: Users, value: "2,500+", label: "Successful Cases" },
    { icon: Star, value: "98%", label: "Success Rate" },
    { icon: Shield, value: "15+", label: "Years Experience" },
  ]

  const trustIndicators = [
    "Licensed Immigration Lawyers",
    "BBB A+ Rating",
    "Free Initial Consultation",
    "Multilingual Support"
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-800/20"
          style={{
            transform: `translateY(${parallaxY * 0.1}px)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <FloatingElements count={8} className="opacity-60" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <AnimatedSection animation="fadeInLeft" className="space-y-8">
            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-1 px-3 py-1 bg-green-500/20 
                           border border-green-400/30 rounded-full backdrop-blur-sm"
                >
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span className="text-green-100 text-xs font-medium">{indicator}</span>
                </div>
              ))}
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="text-white">Immigration Dreams</span>
                <br />
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Into Reality
                </span>
              </motion.h1>

              {/* Typewriter Effect */}
              <motion.div
                className="h-16 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <p className="text-xl md:text-2xl text-blue-100 font-medium">
                  {typewriterText}
                  <motion.span
                    className="inline-block w-0.5 h-6 bg-blue-400 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-200 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Expert immigration legal services with personalized guidance. From visa applications 
              to family reunification, we make your immigration journey smooth and successful.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <GlassButton
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="group"
              >
                Start Your Journey
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </GlassButton>
              
              <GlassButton
                variant="secondary"
                size="lg"
                className="group"
              >
                Free Consultation
              </GlassButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <GlassCard key={index} className="p-4 text-center group">
                    <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </GlassCard>
                )
              })}
            </motion.div>
          </AnimatedSection>

          {/* Right Column - Hero Visual */}
          <AnimatedSection animation="fadeInRight" className="relative">
            <GlassCard className="p-8 lg:p-12 max-w-md mx-auto">
              {/* Success Story Card */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Success Story</h3>
                    <p className="text-green-200 text-sm">Case Approved in 6 months</p>
                  </div>
                </div>

                <blockquote className="text-gray-200 italic leading-relaxed">
                  "ImmigrationPro made our family reunion possible. Their expertise and 
                  dedication turned our complex case into a success story."
                </blockquote>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">MR</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Maria Rodriguez</p>
                    <p className="text-gray-400 text-sm">Family Reunification Case</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400">6</div>
                    <div className="text-xs text-gray-400">Months</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400">98%</div>
                    <div className="text-xs text-gray-400">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400">24/7</div>
                    <div className="text-xs text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Floating Achievement Badges */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Shield className="w-6 h-6 text-white" />
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <p className="text-white/60 text-sm mt-2 text-center">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  )
}