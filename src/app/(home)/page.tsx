// src/app/(home)/page.tsx
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import AboutSection from "@/components/sections/AboutSection"
import ContactSection from "@/components/sections/ContactSection"
import HeroSection from "@/components/sections/HeroSection"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import ServicesSection from "@/components/sections/ServicesSection"
import StatsSection from "@/components/sections/StatsSection"

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <HowItWorksSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
