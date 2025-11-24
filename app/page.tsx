import dynamic from 'next/dynamic'
import { Hero } from "@/app/components/hero"
import { TechMarquee } from "@/app/components/tech-marquee"

// Dynamic imports for components below the fold
const Features = dynamic(() => import("@/app/components/features").then(mod => mod.Features))
const SalaryCalculator = dynamic(() => import("@/app/components/salary-calculator").then(mod => mod.SalaryCalculator))
const HowItWorks = dynamic(() => import("@/app/components/how-it-works").then(mod => mod.HowItWorks))
const Testimonials = dynamic(() => import("@/app/components/testimonials").then(mod => mod.Testimonials))
const FAQ = dynamic(() => import("@/app/components/faq").then(mod => mod.FAQ))
const CTA = dynamic(() => import("@/app/components/cta").then(mod => mod.CTA))
const Footer = dynamic(() => import("@/app/components/footer").then(mod => mod.Footer))

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <TechMarquee />
      <Features />
      <SalaryCalculator />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
