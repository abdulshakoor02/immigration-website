"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  User,
  MessageSquare,
  Calendar,
  Globe,
  Shield,
  Star
} from "lucide-react"
import { GlassCard } from "../GlassCard"
import { GlassButton } from "../GlassButton"
import { AnimatedSection } from "../AnimatedSection"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  visaType: string
  message: string
  urgency: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    visaType: "",
    message: "",
    urgency: "normal"
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Call us for immediate assistance",
      available: "24/7 Emergency Line",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@immigrationpro.com", "urgent@immigrationpro.com"],
      description: "Send us your questions anytime",
      available: "Response within 2 hours",
      color: "from-green-400 to-green-600"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Legal Street", "City, State 12345"],
      description: "Visit us for in-person consultation",
      available: "Mon-Fri 9AM-6PM",
      color: "from-purple-400 to-purple-600"
    }
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", type: "regular" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", type: "limited" },
    { day: "Sunday", hours: "Emergency Only", type: "emergency" },
    { day: "Holidays", hours: "By Appointment", type: "appointment" }
  ]

  const visaTypes = [
    "Family Reunification",
    "Work Visa (H-1B, L-1, etc.)",
    "Student Visa (F-1, M-1)",
    "Investment Visa (EB-5)",
    "Asylum/Refugee",
    "Green Card/Permanent Residency",
    "Citizenship",
    "Other"
  ]

  const urgencyLevels = [
    { value: "normal", label: "Normal (2-3 days)", color: "text-green-400" },
    { value: "urgent", label: "Urgent (Same day)", color: "text-yellow-400" },
    { value: "emergency", label: "Emergency (Immediate)", color: "text-red-400" }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        visaType: "",
        message: "",
        urgency: "normal"
      })
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h80v80H0V0zm20%2020v40h40V20H20zm20%2035a15%2015%200%201%201%200-30%2015%2015%200%200%201%200%2030z%22%20fill-rule%3D%22evenodd%22/%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-blue-200 text-sm font-medium">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Immigration Journey Today
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Schedule a free consultation with our expert immigration lawyers. 
            We're here to answer your questions and guide you through every step.
          </p>
        </AnimatedSection>

        {/* Contact Info Cards */}
        <AnimatedSection animation="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                  
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-2">{info.description}</p>
                  
                  <div className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full inline-block">
                    <span className="text-green-200 text-xs font-medium">{info.available}</span>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <AnimatedSection animation="fadeInLeft" className="lg:col-span-2">
            <GlassCard className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Schedule Free Consultation</h3>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                 text-white placeholder-gray-400 backdrop-blur-md
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                                 transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                 text-white placeholder-gray-400 backdrop-blur-md
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                                 transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                 text-white placeholder-gray-400 backdrop-blur-md
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                                 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                 text-white placeholder-gray-400 backdrop-blur-md
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                                 transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Immigration Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Current Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                 text-white placeholder-gray-400 backdrop-blur-md
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                                 transition-all duration-300"
                        placeholder="e.g., United Kingdom"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Visa Type Needed *
                      </label>
                      <select
                        name="visaType"
                        value={formData.visaType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                 text-white backdrop-blur-md
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                                 transition-all duration-300"
                      >
                        <option value="" className="bg-gray-800">Select visa type</option>
                        {visaTypes.map((type, index) => (
                          <option key={index} value={type} className="bg-gray-800">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Urgency Level */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Urgency Level
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {urgencyLevels.map((level) => (
                        <label
                          key={level.value}
                          className={`relative flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-300 ${
                            formData.urgency === level.value
                              ? "border-blue-400/50 bg-blue-500/20"
                              : "border-white/20 bg-white/5 hover:bg-white/10"
                          }`}
                        >
                          <input
                            type="radio"
                            name="urgency"
                            value={level.value}
                            checked={formData.urgency === level.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${
                              formData.urgency === level.value ? "bg-blue-400" : "bg-gray-600"
                            }`} />
                            <span className={`text-sm font-medium ${level.color}`}>
                              {level.label}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Tell us about your situation
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                               text-white placeholder-gray-400 backdrop-blur-md
                               focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                               transition-all duration-300 resize-none"
                      placeholder="Please provide details about your immigration goals, timeline, and any specific questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <GlassButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    icon={<Send className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    {isSubmitting ? "Scheduling..." : "Schedule Free Consultation"}
                  </GlassButton>
                </form>
              ) : (
                // Success State
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Consultation Scheduled!
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    Thank you for contacting us. We'll reach out within 2 hours to schedule 
                    your free consultation at a time that works for you.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Response within 2 hours</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Free 30-minute consultation</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>No obligation</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </GlassCard>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection animation="fadeInRight" className="space-y-6">
            {/* Office Hours */}
            <GlassCard className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Office Hours</h3>
              </div>
              
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{schedule.day}</span>
                    <span className={`text-sm font-medium ${
                      schedule.type === "regular" ? "text-green-400" :
                      schedule.type === "limited" ? "text-yellow-400" :
                      schedule.type === "emergency" ? "text-red-400" :
                      "text-blue-400"
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Why Choose Us */}
            <GlassCard className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold text-white">Why Choose Us</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">15+ years experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">98% success rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Licensed attorneys</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Multilingual support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Transparent pricing</span>
                </div>
              </div>
            </GlassCard>

            {/* Emergency Contact */}
            <GlassCard className="p-6 border-red-500/30">
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">Emergency Contact</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Urgent immigration matters requiring immediate attention
                </p>
                <GlassButton
                  variant="primary"
                  className="w-full bg-red-500/20 border-red-400/30 hover:bg-red-500/30"
                  icon={<Phone className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Call Emergency Line
                </GlassButton>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>

        {/* Map Section */}
        <AnimatedSection animation="fadeInUp">
          <GlassCard className="overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Map Placeholder */}
              <div className="lg:col-span-2 h-64 lg:h-96 bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white text-xl font-bold mb-2">Visit Our Office</h3>
                  <p className="text-gray-300">Interactive map integration would go here</p>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">Our Location</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Address</h4>
                    <p className="text-gray-300 text-sm">
                      123 Legal Street<br />
                      Suite 456<br />
                      City, State 12345
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Nearby Landmarks</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Downtown Metro Station (2 blocks)</li>
                      <li>• City Hall (5 minutes walk)</li>
                      <li>• Federal Building (10 minutes walk)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Parking</h4>
                    <p className="text-gray-300 text-sm">
                      Free client parking available in our building garage.
                    </p>
                  </div>
                  
                  <GlassButton
                    variant="secondary"
                    className="w-full"
                    icon={<MapPin className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    Get Directions
                  </GlassButton>
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}