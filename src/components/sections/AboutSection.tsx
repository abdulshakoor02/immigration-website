"use client"

import React from "react"
import { motion } from "framer-motion"
import { Award, Users, Globe, Clock, CheckCircle, Star } from "lucide-react"
import { GlassCard } from "../GlassCard"
import { AnimatedSection } from "../AnimatedSection"

export function AboutSection() {
  const achievements = [
    {
      icon: Users,
      value: "2,500+",
      label: "Successful Cases",
      description: "Families and individuals helped",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries",
      description: "We handle immigration to",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      description: "In visa approvals",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Clock,
      value: "15+",
      label: "Years Experience",
      description: "In immigration law",
      color: "from-orange-400 to-orange-600"
    }
  ]

  const timeline = [
    {
      year: "2008",
      title: "Founded",
      description: "Started with a mission to help families reunite through immigration"
    },
    {
      year: "2012",
      title: "Expanded Services",
      description: "Added business immigration and investor visa programs"
    },
    {
      year: "2016",
      title: "Digital Innovation",
      description: "Launched online case tracking and virtual consultations"
    },
    {
      year: "2020",
      title: "Global Reach",
      description: "Expanded to serve clients in 50+ countries worldwide"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Implemented AI-powered case analysis for faster processing"
    }
  ]

  const certifications = [
    "American Immigration Lawyers Association",
    "State Bar Certified Immigration Specialist",
    "BBB A+ Rating",
    "ISO 9001:2015 Certified",
    "HIPAA Compliant"
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-blue-200 text-sm font-medium">About ImmigrationPro</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Trusted Immigration Partners
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been helping individuals and families navigate the complex 
            world of immigration law with expertise, compassion, and unwavering dedication.
          </p>
        </AnimatedSection>

        {/* Statistics Grid */}
        <AnimatedSection animation="stagger" className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20, scale: 0.9 },
                  animate: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <GlassCard className="p-6 text-center group h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <motion.div
                    className="text-3xl lg:text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      delay: index * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    {achievement.value}
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {achievement.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </GlassCard>
              </motion.div>
            )
          })}
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Company Story */}
          <AnimatedSection animation="fadeInLeft">
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2008 by a team of experienced immigration attorneys, 
                  ImmigrationPro was born from a simple belief: everyone deserves 
                  the opportunity to build a better life, regardless of where they come from.
                </p>
                
                <p>
                  What started as a small practice focused on family reunification 
                  has grown into a comprehensive immigration law firm serving clients 
                  across 50+ countries. Our success is measured not just in cases won, 
                  but in families reunited, dreams realized, and communities strengthened.
                </p>
                
                <p>
                  Today, we combine cutting-edge technology with personalized service 
                  to deliver exceptional results. Our AI-powered case analysis, 
                  virtual consultation platform, and 24/7 client portal ensure 
                  you're always connected to your case progress.
                </p>
              </div>

              {/* Certifications */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Certifications & Memberships
                </h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-200 text-xs"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="inline w-3 h-3 mr-1" />
                      {cert}
                    </motion.span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Timeline */}
          <AnimatedSection animation="fadeInRight">
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-8">Our Journey</h3>
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div className="relative">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
                      {index < timeline.length - 1 && (
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-500 to-transparent" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded text-blue-200 text-sm font-bold">
                          {item.year}
                        </span>
                        <h4 className="text-lg font-semibold text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>

        {/* Mission Statement */}
        <AnimatedSection animation="fadeInUp">
          <GlassCard className="p-8 lg:p-12 text-center">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h3>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                To provide exceptional immigration legal services that transform lives, 
                reunite families, and build stronger communities. We believe that everyone 
                deserves the opportunity to pursue their dreams, and we're here to make 
                that journey as smooth and successful as possible.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2 text-blue-200">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Personalized Service</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-200">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Expert Legal Guidance</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-200">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Transparent Communication</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-200">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Proven Results</span>
                </div>
              </div>
            </motion.div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}