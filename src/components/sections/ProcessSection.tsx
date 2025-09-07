"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar, 
  FileSearch, 
  Users, 
  Send, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Phone,
  FileText,
  MessageSquare
} from "lucide-react"
import { GlassCard } from "../GlassCard"
import { GlassButton } from "../GlassButton"
import { AnimatedSection } from "../AnimatedSection"

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  
  const processSteps = [
    {
      id: 1,
      icon: Calendar,
      title: "Initial Consultation",
      duration: "30-60 minutes",
      description: "Free consultation to assess your case and discuss your immigration goals.",
      details: [
        "Comprehensive case evaluation",
        "Discussion of immigration options",
        "Timeline and cost estimation",
        "Document requirements overview"
      ],
      actions: [
        { icon: Phone, text: "Schedule call" },
        { icon: MessageSquare, text: "Video meeting" },
        { icon: Users, text: "In-person visit" }
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      icon: FileSearch,
      title: "Case Assessment & Strategy",
      duration: "1-2 weeks",
      description: "Detailed analysis of your situation and development of a customized strategy.",
      details: [
        "Eligibility verification",
        "Risk assessment",
        "Strategy development",
        "Alternative pathway analysis"
      ],
      actions: [
        { icon: FileText, text: "Document review" },
        { icon: Users, text: "Strategy meeting" },
        { icon: CheckCircle, text: "Plan approval" }
      ],
      color: "from-green-400 to-green-600"
    },
    {
      id: 3,
      icon: FileText,
      title: "Document Preparation",
      duration: "2-4 weeks",
      description: "Comprehensive preparation and review of all required documentation.",
      details: [
        "Document collection guidance",
        "Form completion assistance",
        "Supporting evidence compilation",
        "Quality assurance review"
      ],
      actions: [
        { icon: FileText, text: "Document checklist" },
        { icon: CheckCircle, text: "Review process" },
        { icon: Send, text: "Final approval" }
      ],
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      icon: Send,
      title: "Application Submission",
      duration: "1-2 weeks",
      description: "Professional submission of your application with ongoing tracking and updates.",
      details: [
        "Application filing",
        "Receipt confirmation",
        "Case number tracking",
        "Regular status updates"
      ],
      actions: [
        { icon: Send, text: "Submit application" },
        { icon: Clock, text: "Track progress" },
        { icon: CheckCircle, text: "Confirmation" }
      ],
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 5,
      icon: Clock,
      title: "Processing & Follow-up",
      duration: "Variable",
      description: "Ongoing case management until successful resolution of your immigration matter.",
      details: [
        "Regular progress monitoring",
        "Government correspondence handling",
        "Interview preparation (if required)",
        "Final approval and next steps"
      ],
      actions: [
        { icon: Clock, text: "Monitor status" },
        { icon: MessageSquare, text: "Interview prep" },
        { icon: CheckCircle, text: "Case closure" }
      ],
      color: "from-emerald-400 to-emerald-600"
    }
  ]

  const timelineData = [
    { phase: "Consultation", weeks: "Week 1", status: "complete" },
    { phase: "Assessment", weeks: "Week 2-3", status: "complete" },
    { phase: "Preparation", weeks: "Week 4-7", status: "current" },
    { phase: "Submission", weeks: "Week 8-9", status: "upcoming" },
    { phase: "Processing", weeks: "Week 10+", status: "upcoming" }
  ]

  return (
    <section id="process" className="relative py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Clock className="w-4 h-4 text-purple-400" />
            <span className="text-purple-200 text-sm font-medium">Our Process</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Step-by-Step Immigration Process
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We guide you through every step of your immigration journey with a proven, 
            systematic approach that maximizes your chances of success.
          </p>
        </AnimatedSection>

        {/* Interactive Timeline */}
        <AnimatedSection animation="fadeInUp" className="mb-16">
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Typical Case Timeline
            </h3>
            
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-1 text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <div className="relative mb-4">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white font-bold ${
                      item.status === "complete" ? "bg-green-500" :
                      item.status === "current" ? "bg-blue-500 animate-pulse" :
                      "bg-gray-600"
                    }`}>
                      {index + 1}
                    </div>
                    
                    {/* Connector Line */}
                    {index < timelineData.length - 1 && (
                      <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-600 transform translate-x-6">
                        <div className={`h-full ${
                          item.status === "complete" ? "bg-green-500 w-full" :
                          item.status === "current" ? "bg-blue-500 w-1/2" :
                          "w-0"
                        } transition-all duration-1000`} />
                      </div>
                    )}
                  </div>
                  
                  <h4 className="text-white font-semibold mb-1">{item.phase}</h4>
                  <p className="text-gray-400 text-sm">{item.weeks}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Detailed Process Steps */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Step Navigation */}
          <AnimatedSection animation="fadeInLeft">
            <GlassCard className="p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Process Steps</h3>
              
              <div className="space-y-4">
                {processSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeStep === index
                          ? "bg-blue-500/20 border border-blue-400/30"
                          : "hover:bg-white/5 border border-transparent"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${step.color}`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium">{step.title}</h4>
                          <p className="text-gray-400 text-sm">{step.duration}</p>
                        </div>
                        <ArrowRight className={`w-4 h-4 transition-transform ${
                          activeStep === index ? "text-blue-400 rotate-90" : "text-gray-600"
                        }`} />
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Step Details */}
          <AnimatedSection animation="fadeInRight">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-8">
                  {(() => {
                    const step = processSteps[activeStep]
                    const Icon = step.icon
                    
                    return (
                      <div>
                        {/* Step Header */}
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.color}`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                            <p className="text-gray-400">Duration: {step.duration}</p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Details */}
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                          <ul className="space-y-2">
                            {step.details.map((detail, index) => (
                              <motion.li
                                key={index}
                                className="flex items-center space-x-3 text-gray-300"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span>{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Actions */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Available Actions:</h4>
                          <div className="flex flex-wrap gap-3">
                            {step.actions.map((action, index) => {
                              const ActionIcon = action.icon
                              return (
                                <motion.div
                                  key={index}
                                  className="flex items-center space-x-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.1 }}
                                >
                                  <ActionIcon className="w-4 h-4" />
                                  <span>{action.text}</span>
                                </motion.div>
                              )
                            })}
                          </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between">
                          <GlassButton
                            variant="secondary"
                            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                            disabled={activeStep === 0}
                            className="disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Previous Step
                          </GlassButton>
                          
                          <GlassButton
                            variant="primary"
                            onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                            disabled={activeStep === processSteps.length - 1}
                            className="disabled:opacity-50 disabled:cursor-not-allowed"
                            icon={<ArrowRight className="w-4 h-4" />}
                            iconPosition="right"
                          >
                            Next Step
                          </GlassButton>
                        </div>
                      </div>
                    )
                  })()}
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </AnimatedSection>
        </div>

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
                Ready to Begin Your Process?
              </h3>
              
              <p className="text-lg text-gray-300 mb-8">
                Schedule your free consultation today and let our experienced team 
                guide you through each step of your immigration journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <GlassButton
                  variant="primary"
                  size="lg"
                  icon={<Calendar className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Schedule Consultation
                </GlassButton>
                
                <GlassButton
                  variant="secondary"
                  size="lg"
                  icon={<Phone className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Call Now: (555) 123-4567
                </GlassButton>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Transparent pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No obligation assessment</span>
                </div>
              </div>
            </motion.div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}