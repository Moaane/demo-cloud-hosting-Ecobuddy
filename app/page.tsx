import FAQ from "@/components/faq"
import Features from "@/components/features"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import { Navbar } from "@/components/navbar"
import Testimonial from "@/components/testimonial"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Testimonial />
      <Footer />
    </>
  )
}
