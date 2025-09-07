"use client"

import React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { GlassCard } from "./GlassCard"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Services",
      links: [
        "Visa Applications",
        "Immigration Consulting", 
        "Document Preparation",
        "Legal Representation",
        "Family Reunification",
        "Business Immigration"
      ]
    },
    {
      title: "Resources",
      links: [
        "Immigration Blog",
        "Country Guides",
        "Success Stories",
        "FAQ",
        "Legal Updates",
        "Free Assessment"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Testimonials",
        "Careers",
        "Contact",
        "Privacy Policy"
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">IM</span>
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-xl">ImmigrationPro</h2>
                    <p className="text-blue-200 text-sm">Legal Consulting</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Your trusted partner for immigration success. We provide expert legal guidance 
                  and personalized support for all your immigration needs.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>info@immigrationpro.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>123 Legal Street, City, State 12345</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold text-lg mb-6">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <motion.a
                          href="#"
                          className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stay Updated on Immigration News
                </h3>
                <p className="text-gray-300 mb-6">
                  Get the latest immigration updates, policy changes, and expert insights 
                  delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                             text-white placeholder-gray-400 backdrop-blur-md
                             focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-blue-500/20 border border-blue-400/30 text-white 
                                   rounded-lg hover:bg-blue-500/30 hover:border-blue-400/50 
                                   transition-all duration-300 backdrop-blur-md font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © {currentYear} ImmigrationPro Legal Consulting. All rights reserved.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 
                               rounded-lg flex items-center justify-center text-gray-400 
                               hover:text-white hover:bg-white/20 hover:border-white/30 
                               transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}