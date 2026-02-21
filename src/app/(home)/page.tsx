// src/app/(home)/page.tsx
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import AboutSection from "@/components/sections/AboutSection"
import ContactSection from "@/components/sections/ContactSection"
import HeroSection from "@/components/sections/HeroSection"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import ServicesSection from "@/components/sections/ServicesSection"
import StatsSection from "@/components/sections/StatsSection"
import { setTimeout } from "timers/promises"

export default async function Home() {
  await setTimeout(3000)
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
