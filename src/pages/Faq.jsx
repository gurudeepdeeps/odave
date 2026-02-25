import { useState } from 'react'

const faqs = [
  {
    question: 'How quickly can I receive my rental?',
    answer: 'Most metro deliveries are dispatched within 48 hours, securely packaged and insured.'
  },
  {
    question: 'Can I book jewellery in advance?',
    answer: 'Yes. You can reserve pieces ahead of your event date, subject to availability.'
  },
  {
    question: 'What if the piece does not fit?',
    answer: 'Our team offers pre-booking sizing guidance and support options for fit-related issues.'
  },
  {
    question: 'Are all pieces authentic?',
    answer: 'Every ODAVE piece is quality-checked, cataloged, and delivered with authenticity assurance.'
  },
]

export default function Faq() {
  const [open, setOpen] = useState(faqs[0].question)

  return (
    <main className="mx-auto max-w-[1000px] px-6 py-16 lg:px-10">
      <p className="text-xs uppercase tracking-luxe text-od-gold">Customer Care</p>
      <h1 className="mt-3 font-display text-6xl">FAQ</h1>
      <p className="mt-4 text-od-ivory-muted">Answers to common questions about rentals, booking timelines, and support.</p>

      <section className="mt-10 space-y-3">
        {faqs.map((item) => (
          <article key={item.question} className="border border-od-border">
            <button
              type="button"
              onClick={() => setOpen((prev) => (prev === item.question ? '' : item.question))}
              className="w-full px-5 py-4 text-left font-medium"
            >
              {item.question}
            </button>
            {open === item.question ? (
              <p className="border-t border-od-border px-5 py-4 text-sm text-od-ivory-muted">{item.answer}</p>
            ) : null}
          </article>
        ))}
      </section>
    </main>
  )
}
