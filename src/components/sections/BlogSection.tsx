"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  Filter,
  Search,
  TrendingUp,
  Globe,
  Users,
  FileText,
  Star
} from "lucide-react"
import { GlassCard } from "../GlassCard"
import { GlassButton } from "../GlassButton"
import { AnimatedSection } from "../AnimatedSection"

interface BlogArticle {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: number
  category: string
  image: string
  featured: boolean
  trending: boolean
  tags: string[]
}

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { name: "All", icon: BookOpen, count: 24 },
    { name: "Immigration News", icon: TrendingUp, count: 8 },
    { name: "Visa Updates", icon: Globe, count: 6 },
    { name: "Success Stories", icon: Users, count: 5 },
    { name: "Legal Changes", icon: FileText, count: 5 }
  ]

  const blogArticles: BlogArticle[] = [
    {
      id: 1,
      title: "New Immigration Policy Changes for 2024: What You Need to Know",
      excerpt: "Comprehensive overview of the latest immigration policy updates and how they affect various visa categories and application processes.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: 8,
      category: "Immigration News",
      image: "/api/placeholder/400/250",
      featured: true,
      trending: true,
      tags: ["Policy", "2024", "Updates", "Visas"]
    },
    {
      id: 2,
      title: "Family Reunification Success: The Rodriguez Case Study",
      excerpt: "How we helped the Rodriguez family navigate complex immigration requirements to successfully reunite after 3 years apart.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: 6,
      category: "Success Stories",
      image: "/api/placeholder/400/250",
      featured: false,
      trending: true,
      tags: ["Family", "Reunification", "Success", "Case Study"]
    },
    {
      id: 3,
      title: "H-1B Visa Processing Times: Current Updates and Predictions",
      excerpt: "Latest information on H-1B processing times, premium processing availability, and strategies for faster approval.",
      author: "Emily Davis",
      date: "2024-01-10",
      readTime: 5,
      category: "Visa Updates",
      image: "/api/placeholder/400/250",
      featured: false,
      trending: false,
      tags: ["H-1B", "Processing", "Timeline", "Work Visa"]
    },
    {
      id: 4,
      title: "Understanding the New EB-5 Investment Requirements",
      excerpt: "Detailed breakdown of updated EB-5 investor visa requirements, minimum investment amounts, and regional center programs.",
      author: "David Park",
      date: "2024-01-08",
      readTime: 10,
      category: "Legal Changes",
      image: "/api/placeholder/400/250",
      featured: false,
      trending: false,
      tags: ["EB-5", "Investment", "Requirements", "Investor Visa"]
    },
    {
      id: 5,
      title: "Student Visa Interview Tips: Ace Your F-1 Application",
      excerpt: "Expert advice on preparing for your F-1 student visa interview, common questions, and documentation requirements.",
      author: "Lisa Wong",
      date: "2024-01-05",
      readTime: 7,
      category: "Visa Updates",
      image: "/api/placeholder/400/250",
      featured: false,
      trending: true,
      tags: ["F-1", "Student Visa", "Interview", "Tips"]
    },
    {
      id: 6,
      title: "From Asylum to Citizenship: Maria's Journey",
      excerpt: "An inspiring story of how our legal team helped Maria navigate the asylum process and ultimately achieve U.S. citizenship.",
      author: "Robert Martinez",
      date: "2024-01-03",
      readTime: 9,
      category: "Success Stories",
      image: "/api/placeholder/400/250",
      featured: false,
      trending: false,
      tags: ["Asylum", "Citizenship", "Success Story", "Immigration"]
    }
  ]

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  const featuredArticle = blogArticles.find(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  return (
    <section id="blog" className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%2040l40-40h-40v40zm40%200v-40h-40l40%2040z%22/%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="text-purple-200 text-sm font-medium">Immigration Blog</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest Immigration News & Insights
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest immigration updates, success stories, and expert insights 
            from our experienced legal team.
          </p>
        </AnimatedSection>

        {/* Search and Filter Section */}
        <AnimatedSection animation="fadeInUp" className="mb-12">
          <GlassCard className="p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                             text-white placeholder-gray-400 backdrop-blur-md
                             focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent
                             transition-all duration-300"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => {
                  const Icon = category.icon
                  return (
                    <motion.button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeCategory === category.name
                          ? "bg-purple-500/30 border border-purple-400/50 text-white"
                          : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="px-1.5 py-0.5 bg-white/20 rounded text-xs">
                        {category.count}
                      </span>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Featured Article */}
        {featuredArticle && activeCategory === "All" && (
          <AnimatedSection animation="fadeInUp" className="mb-16">
            <GlassCard className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2">
                      <div className="px-3 py-1 bg-yellow-500/20 border border-yellow-400/30 rounded-full">
                        <Star className="w-4 h-4 text-yellow-400 inline mr-1" />
                        <span className="text-yellow-200 text-sm font-medium">Featured</span>
                      </div>
                      {featuredArticle.trending && (
                        <div className="px-3 py-1 bg-red-500/20 border border-red-400/30 rounded-full">
                          <TrendingUp className="w-4 h-4 text-red-400 inline mr-1" />
                          <span className="text-red-200 text-sm font-medium">Trending</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200 text-sm">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime} min read</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{featuredArticle.author}</p>
                        <p className="text-gray-400 text-sm">Immigration Attorney</p>
                      </div>
                    </div>

                    <GlassButton
                      variant="primary"
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      Read Full Article
                    </GlassButton>
                  </div>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        )}

        {/* Articles Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedSection animation="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={{
                    initial: { opacity: 0, y: 30, scale: 0.9 },
                    animate: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <GlassCard className="h-full overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded text-purple-200 text-xs">
                          {article.category}
                        </span>
                      </div>
                      {article.trending && (
                        <div className="absolute top-3 right-3">
                          <div className="px-2 py-1 bg-red-500/20 border border-red-400/30 rounded-full">
                            <TrendingUp className="w-3 h-3 text-red-400" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center space-x-4 mb-3 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime} min</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-purple-300 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Author and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-400 text-sm">{article.author}</span>
                        </div>

                        <motion.button
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatedSection>
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <AnimatedSection animation="fadeInUp" className="text-center py-16">
            <GlassCard className="p-12 max-w-md mx-auto">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Articles Found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or selecting a different category.
              </p>
              <GlassButton
                variant="secondary"
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("All")
                }}
              >
                Clear Filters
              </GlassButton>
            </GlassCard>
          </AnimatedSection>
        )}

        {/* Load More / Newsletter CTA */}
        <AnimatedSection animation="fadeInUp" className="text-center">
          <GlassCard className="p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Immigration News
              </h3>
              
              <p className="text-gray-300 mb-8">
                Subscribe to our newsletter for the latest immigration updates, 
                policy changes, and success stories delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <GlassButton
                  variant="primary"
                  size="lg"
                  icon={<BookOpen className="w-5 h-5" />}
                  iconPosition="left"
                >
                  View All Articles
                </GlassButton>
                
                <GlassButton
                  variant="secondary"
                  size="lg"
                >
                  Subscribe to Newsletter
                </GlassButton>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <span>📧 Weekly updates</span>
                <span>📰 Expert insights</span>
                <span>🎯 Personalized content</span>
                <span>🚫 No spam, unsubscribe anytime</span>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}