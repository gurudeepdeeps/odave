import { motion } from 'framer-motion'
import { Calendar, Package, RotateCcw, Search } from 'lucide-react'

const steps = [
  { icon: Search, title: 'Browse & Select', description: 'Curate your preferred look from our atelier edit.' },
  { icon: Calendar, title: 'Choose Your Dates', description: 'Reserve the exact window for your occasion.' },
  { icon: Package, title: 'Doorstep Delivery', description: 'Insured and elegantly packaged delivery in 48 hours.' },
  { icon: RotateCcw, title: 'Return With Ease', description: 'Simple reverse pickup once your event is complete.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
      <div className="border border-od-border bg-gradient-to-b from-od-surface/80 to-od-card/70 p-6 md:p-8">
        <h2 className="font-display text-5xl">Renting Is Simple</h2>
        <div className="mt-10 grid gap-6 border-t border-od-border pt-8 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            className="relative border border-od-border bg-od-bg/30 p-6"
          >
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-od-gold text-od-gold">
              <step.icon size={16} />
            </span>
            <p className="text-xs uppercase tracking-luxe text-od-gold">Step {index + 1}</p>
            <h3 className="mt-2 font-display text-3xl">{step.title}</h3>
            <p className="mt-2 text-sm text-od-ivory-muted">{step.description}</p>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}
