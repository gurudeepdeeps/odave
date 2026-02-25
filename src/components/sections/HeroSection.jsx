import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../ui/Button.jsx'
import homeHero from '../../assets/images/home-hero.png'
import jbl from '../../assets/images/jbl.png'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-od-border">
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(10,8,4,0.86), rgba(10,8,4,0.4)), url(${jbl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </motion.div>

      <div className="relative mx-auto grid min-h-screen max-w-[1440px] items-center gap-10 px-6 py-20 lg:grid-cols-[60%_40%] lg:px-10">
        <div>
          <p className="text-xs uppercase tracking-luxe text-od-gold">The Art Of Adornment</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-light leading-[0.95] italic md:text-7xl lg:text-[96px]">
            Wear the Extraordinary
            <span className="block not-italic">For Every Occasion</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light text-od-ivory-muted">
            Discover ODAVE&apos;s curated collection of fine jewellery — available to rent for your most unforgettable moments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/collections"><Button>Explore Collections</Button></Link>
            <a href="#how-it-works"><Button variant="ghost">How It Works</Button></a>
          </div>
        </div>

        <div className="relative">
          <img
            src={homeHero}
            alt="Jewellery editorial"
            className="h-[560px] w-full object-cover"
          />
          <div className="sparkle absolute -left-4 top-8 border border-od-border bg-od-surface/80 px-3 py-2 text-xs uppercase tracking-luxe text-od-gold">500+ Pieces</div>
          <div className="sparkle absolute -right-4 top-24 border border-od-border bg-od-surface/80 px-3 py-2 text-xs uppercase tracking-luxe text-od-gold" style={{ animationDelay: '1s' }}>4.9★ Rating</div>
          <div className="sparkle absolute -bottom-4 left-10 border border-od-border bg-od-surface/80 px-3 py-2 text-xs uppercase tracking-luxe text-od-gold" style={{ animationDelay: '2s' }}>48hr Delivery</div>
        </div>
      </div>
    </section>
  )
}
