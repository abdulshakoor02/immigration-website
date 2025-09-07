"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Users, 
  Flag,
  Calendar,
  CheckCircle,
  Award
} from "lucide-react"
import { GlassCard } from "../GlassCard"
import { GlassButton } from "../GlassButton"
import { AnimatedSection } from "../AnimatedSection"

interface Testimonial {
  id: number
  name: string
  location: string
  country: string
  flag: string
  visaType: string
  rating: number
  quote: string
  fullStory: string
  caseDetails: {
    duration: string
    complexity: "Simple" | "Complex" | "Very Complex"
    outcome: string
  }
  image: string
  date: string
  featured: boolean
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria Rodriguez",
      location: "Toronto, Canada",
      country: "Mexico",
      flag: "🇲🇽",
      visaType: "Family Reunification",
      rating: 5,
      quote: "ImmigrationPro made our family reunion possible. Their expertise and dedication turned our complex case into a success story.",
      fullStory: "After being separated from my family for over 3 years, I thought reunification was impossible. The ImmigrationPro team not only handled all the complex paperwork but also provided emotional support throughout the process. They explained every step clearly and kept me informed. Thanks to their expertise, my family is finally together in Canada.",
      caseDetails: {
        duration: "8 months",
        complexity: "Complex",
        outcome: "Family reunified successfully"
      },
      image: "/api/placeholder/80/80",
      date: "2024-01-15",
      featured: true
    },
    {
      id: 2,
      name: "Dr. Rajesh Patel",
      location: "San Francisco, USA",
      country: "India",
      flag: "🇮🇳",
      visaType: "H-1B to Green Card",
      rating: 5,
      quote: "Professional, knowledgeable, and incredibly supportive. They guided me through the entire green card process seamlessly.",
      fullStory: "As a software engineer, I was worried about the H-1B lottery and green card process. ImmigrationPro developed a comprehensive strategy that included backup options. Their attention to detail and proactive communication made all the difference. I received my green card approval faster than expected.",
      caseDetails: {
        duration: "14 months",
        complexity: "Complex",
        outcome: "Green card approved"
      },
      image: "/api/placeholder/80/80",
      date: "2024-01-10",
      featured: false
    },
    {
      id: 3,
      name: "Sarah Chen",
      location: "Sydney, Australia",
      country: "China",
      flag: "🇨🇳",
      visaType: "Student to Work Visa",
      rating: 5,
      quote: "From student visa to permanent residency, they supported me every step of the way. Couldn't have done it without them!",
      fullStory: "Starting as an international student, I was unsure about my path to permanent residency. ImmigrationPro created a clear roadmap from my student visa to work visa and finally to permanent residency. Their strategic planning and expert guidance made my Australian dream come true.",
      caseDetails: {
        duration: "2.5 years",
        complexity: "Very Complex",
        outcome: "Permanent residency granted"
      },
      image: "/api/placeholder/80/80",
      date: "2024-01-08",
      featured: false
    },
    {
      id: 4,
      name: "Ahmed Al-Mansouri",
      location: "Dubai, UAE",
      country: "Syria",
      flag: "🇸🇾",
      visaType: "Asylum to Citizenship",
      rating: 5,
      quote: "They provided hope when I had none. Their compassionate approach and legal expertise helped me build a new life.",
      fullStory: "Fleeing conflict in my home country, I arrived with nothing but hope. ImmigrationPro handled my asylum case with incredible compassion and professionalism. They not only helped me gain asylum but also guided me through the path to citizenship. Today, I'm a proud citizen building a new life.",
      caseDetails: {
        duration: "3 years",
        complexity: "Very Complex",
        outcome: "Citizenship granted"
      },
      image: "/api/placeholder/80/80",
      date: "2024-01-05",
      featured: true
    },
    {
      id: 5,
      name: "Elena Volkov",
      location: "Berlin, Germany",
      country: "Russia",
      flag: "🇷🇺",
      visaType: "Investment Visa",
      rating: 5,
      quote: "Exceptional service for my EB-5 investment visa. They made the complex process straightforward and stress-free.",
      fullStory: "As an entrepreneur looking to invest in the US, the EB-5 process seemed overwhelming. ImmigrationPro's expertise in investment visas was evident from our first meeting. They handled due diligence, documentation, and government filings with precision. My investment visa was approved without any issues.",
      caseDetails: {
        duration: "18 months",
        complexity: "Complex",
        outcome: "EB-5 visa approved"
      },
      image: "/api/placeholder/80/80",
      date: "2024-01-03",
      featured: false
    }
  ]

  const stats = [
    { value: "2,500+", label: "Happy Clients", icon: Users },
    { value: "98%", label: "Success Rate", icon: Award },
    { value: "50+", label: "Countries", icon: Flag },
    { value: "15+", label: "Years Experience", icon: Calendar }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-200 text-sm font-medium">Client Success Stories</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Stories, Real Success
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped thousands of individuals and families achieve 
            their immigration dreams with expert legal guidance and personalized support.
          </p>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection animation="stagger" className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20, scale: 0.9 },
                  animate: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <GlassCard className="p-6 text-center group">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </GlassCard>
              </motion.div>
            )
          })}
        </AnimatedSection>

        {/* Main Testimonial Carousel */}
        <AnimatedSection animation="fadeInUp" className="mb-16">
          <GlassCard className="overflow-hidden">
            <div className="relative p-8 lg:p-12">
              {/* Navigation Controls */}
              <div className="absolute top-6 right-6 flex items-center space-x-4">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-colors ${
                    isAutoPlaying ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-gray-400"
                  }`}
                >
                  {isAutoPlaying ? "⏸" : "▶"}
                </button>
                
                <div className="flex space-x-2">
                  <motion.button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid lg:grid-cols-3 gap-8"
                >
                  {/* Testimonial Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Quote */}
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-400/30" />
                      <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed pl-6">
                        "{currentTestimonial.quote}"
                      </blockquote>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < currentTestimonial.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-gray-300 text-sm">
                        {currentTestimonial.rating}/5 stars
                      </span>
                    </div>

                    {/* Full Story */}
                    <p className="text-gray-300 leading-relaxed">
                      {currentTestimonial.fullStory}
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">
                          {currentTestimonial.flag}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-gray-400">
                          {currentTestimonial.location} • From {currentTestimonial.country}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Case Details */}
                  <div className="space-y-6">
                    <GlassCard variant="light" className="p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Case Details</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="text-gray-400 text-sm mb-1">Visa Type</div>
                          <div className="text-white font-medium">{currentTestimonial.visaType}</div>
                        </div>
                        
                        <div>
                          <div className="text-gray-400 text-sm mb-1">Duration</div>
                          <div className="text-white font-medium">{currentTestimonial.caseDetails.duration}</div>
                        </div>
                        
                        <div>
                          <div className="text-gray-400 text-sm mb-1">Complexity</div>
                          <div className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                            currentTestimonial.caseDetails.complexity === "Simple" ? "bg-green-500/20 text-green-400" :
                            currentTestimonial.caseDetails.complexity === "Complex" ? "bg-yellow-500/20 text-yellow-400" :
                            "bg-red-500/20 text-red-400"
                          }`}>
                            {currentTestimonial.caseDetails.complexity}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-gray-400 text-sm mb-1">Outcome</div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-white font-medium">{currentTestimonial.caseDetails.outcome}</span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-gray-400 text-sm mb-1">Date Completed</div>
                          <div className="text-white font-medium">
                            {new Date(currentTestimonial.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </GlassCard>

                    {/* Featured Badge */}
                    {currentTestimonial.featured && (
                      <motion.div
                        className="text-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full">
                          <Award className="w-4 h-4 text-yellow-400" />
                          <span className="text-yellow-200 text-sm font-medium">Featured Success Story</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pagination Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-emerald-400 w-8" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Additional Testimonials Grid */}
        <AnimatedSection animation="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.filter((_, index) => index !== currentIndex).slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="cursor-pointer"
              onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === testimonial.id))}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-white mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{testimonial.flag}</span>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.visaType}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fadeInUp" className="text-center">
          <GlassCard className="p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have achieved their immigration goals 
              with our expert legal guidance and personalized support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton
                variant="primary"
                size="lg"
                icon={<Users className="w-5 h-5" />}
                iconPosition="left"
              >
                Start Your Journey
              </GlassButton>
              
              <GlassButton
                variant="secondary"
                size="lg"
              >
                Read More Stories
              </GlassButton>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}