import HeroSection from '../components/sections/HeroSection.jsx'
import CategorySection from '../components/sections/CategorySection.jsx'
import FeaturedCollection from '../components/sections/FeaturedCollection.jsx'
import HowItWorks from '../components/sections/HowItWorks.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'

import useScrollReveal from '../hooks/useScrollReveal.js'

export default function Home() {
  useScrollReveal()

  return (
    <main className="bg-od-bg">
      <HeroSection />

      <section className="overflow-hidden border-y border-od-gold/40 bg-gradient-to-r from-od-surface via-od-card to-od-surface py-3 text-xs uppercase tracking-luxe text-od-gold">
        <div className="marquee-track flex min-w-max gap-10">
          {Array.from({ length: 2 }).map((_, index) => (
            <p key={index}>
              WEDDINGS · GALAS · EDITORIAL · EVENTS · CELEBRATIONS · ODAVE · WEDDINGS · GALAS · EDITORIAL · EVENTS · CELEBRATIONS · ODAVE ·
            </p>
          ))}
        </div>
      </section>

      <div data-reveal className="reveal-item"><CategorySection /></div>
      <div data-reveal className="reveal-item"><FeaturedCollection /></div>
      <div data-reveal className="reveal-item"><HowItWorks /></div>
      <div data-reveal className="reveal-item"><Testimonials /></div>

    </main>
  )
}
