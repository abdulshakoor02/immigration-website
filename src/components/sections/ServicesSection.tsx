"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  FileText, 
  Globe, 
  Users, 
  Building, 
  Heart, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign
} from "lucide-react"
import { GlassCard } from "../GlassCard"
import { GlassButton } from "../GlassButton"
import { AnimatedSection } from "../AnimatedSection"

export function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Visa Applications",
      description: "Comprehensive visa application services for work, study, tourist, and family visas.",
      features: ["Document preparation", "Application filing", "Interview coaching", "Status tracking"],
      duration: "2-6 months",
      successRate: "98%",
      startingPrice: "From $500",
      color: "from-blue-400 to-blue-600",
      popular: false
    },
    {
      icon: Globe,
      title: "Immigration Consulting",
      description: "Expert guidance on immigration pathways and strategic planning for your future.",
      features: ["Eligibility assessment", "Strategy development", "Document review", "Ongoing support"],
      duration: "1-3 months",
      successRate: "95%",
      startingPrice: "From $200",
      color: "from-green-400 to-green-600",
      popular: true
    },
    {
      icon: Users,
      title: "Family Reunification",
      description: "Helping families reunite through spouse, parent, and dependent visa programs.",
      features: ["Relationship documentation", "Sponsor qualification", "Application support", "Interview prep"],
      duration: "6-12 months",
      successRate: "96%",
      startingPrice: "From $800",
      color: "from-purple-400 to-purple-600",
      popular: false
    },
    {
      icon: Building,
      title: "Business Immigration",
      description: "Corporate immigration solutions for businesses and international professionals.",
      features: ["Work permits", "Investor visas", "Corporate transfers", "Compliance support"],
      duration: "3-8 months",
      successRate: "97%",
      startingPrice: "From $1,200",
      color: "from-orange-400 to-orange-600",
      popular: false
    },
    {
      icon: Heart,
      title: "Asylum & Refugee Services",
      description: "Compassionate legal support for asylum seekers and refugee status applications.",
      features: ["Case preparation", "Legal representation", "Court proceedings", "Appeal support"],
      duration: "12-24 months",
      successRate: "89%",
      startingPrice: "From $1,500",
      color: "from-red-400 to-red-600",
      popular: false
    },
    {
      icon: GraduationCap,
      title: "Student Visas",
      description: "Complete support for international students pursuing education abroad.",
      features: ["School selection", "Application guidance", "Financial documentation", "Visa interviews"],
      duration: "2-4 months",
      successRate: "99%",
      startingPrice: "From $300",
      color: "from-indigo-400 to-indigo-600",
      popular: false
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation",
      description: "Discuss your case and explore options"
    },
    {
      step: "02", 
      title: "Case Assessment",
      description: "Comprehensive evaluation of your situation"
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "Create a personalized immigration plan"
    },
    {
      step: "04",
      title: "Application Process",
      description: "Handle all paperwork and submissions"
    }
  ]

  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM12%2086c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm28-65c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm23-11c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-6%2060c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm29%2022c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zM32%2063c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm57-13c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-9-21c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM60%2091c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM35%2041c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2060c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-blue-200 text-sm font-medium">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Immigration Solutions
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From visa applications to citizenship, we provide expert legal services 
            tailored to your unique immigration needs and goals.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection animation="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 30, scale: 0.9 },
                  animate: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <GlassCard className="p-6 h-full flex flex-col">
                  {/* Popular Badge */}
                  {service.popular && (
                    <motion.div
                      className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-bold text-white shadow-lg"
                      initial={{ scale: 0, rotate: 12 }}
                      animate={{ scale: 1, rotate: 12 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      Most Popular
                    </motion.div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-lg">
                      <div className="text-center">
                        <Clock className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                        <div className="text-xs text-gray-400">Duration</div>
                        <div className="text-sm font-semibold text-white">{service.duration}</div>
                      </div>
                      <div className="text-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mx-auto mb-1" />
                        <div className="text-xs text-gray-400">Success Rate</div>
                        <div className="text-sm font-semibold text-white">{service.successRate}</div>
                      </div>
                      <div className="text-center">
                        <DollarSign className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                        <div className="text-xs text-gray-400">Pricing</div>
                        <div className="text-sm font-semibold text-white">{service.startingPrice}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <GlassButton
                    variant="secondary"
                    className="w-full group-hover:bg-blue-500/20 group-hover:border-blue-400/40"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Learn More
                  </GlassButton>
                </GlassCard>
              </motion.div>
            )
          })}
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection animation="fadeInUp" className="mb-16">
          <GlassCard className="p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Our Proven Process
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We follow a systematic approach to ensure the best possible outcome for your case
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    
                    {/* Connector Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 transform translate-x-8" />
                    )}
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fadeInUp" className="text-center">
          <GlassCard className="p-8 lg:p-12">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Start Your Immigration Journey?
              </h3>
              
              <p className="text-lg text-gray-300 mb-8">
                Schedule a free consultation with our expert immigration lawyers 
                and take the first step towards achieving your dreams.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Schedule Free Consultation
                </GlassButton>
                
                <GlassButton
                  variant="secondary"
                  size="lg"
                >
                  View All Services
                </GlassButton>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-white/10 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No upfront fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>30-minute consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Expert guidance</span>
                </div>
              </div>
            </motion.div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}