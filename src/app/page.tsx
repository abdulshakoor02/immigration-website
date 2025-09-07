import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { BlogSection } from "@/components/sections/BlogSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
