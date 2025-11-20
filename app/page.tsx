import { Hero } from "@/app/components/hero"
import { TechMarquee } from "@/app/components/tech-marquee"
import { Features } from "@/app/components/features"
import { SalaryCalculator } from "@/app/components/salary-calculator"
import { HowItWorks } from "@/app/components/how-it-works"
import { Testimonials } from "@/app/components/testimonials"
import { FAQ } from "@/app/components/faq"
import { CTA } from "@/app/components/cta"
import { Footer } from "@/app/components/footer"

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
