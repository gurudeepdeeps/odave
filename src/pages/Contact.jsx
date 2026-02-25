import { useState } from 'react'
import Button from '../components/ui/Button.jsx'

const faqs = [
  ['How quickly can I receive my rental?', 'Most metro orders dispatch within 48 hours with insured delivery.'],
  ['Do you provide styling support?', 'Yes, our concierge team can assist with occasion-based selections.'],
  ['Is the security deposit refundable?', 'Yes, it is fully refundable post quality check on return.'],
]

export default function Contact() {
  const [open, setOpen] = useState(faqs[0][0])
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    occasion: 'Wedding',
    message: '',
  })
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!formData.fullName || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setSubmitMessage('Please provide a valid name and email.')
      return
    }

    setSubmitMessage('Thank you. Our concierge will contact you shortly.')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredDate: '',
      occasion: 'Wedding',
      message: '',
    })
  }

  const whatsappMessage = [
    'Hello ODAVE team, I want to enquire about jewellery rental.',
    `Name: ${formData.fullName || '-'}`,
    `Email: ${formData.email || '-'}`,
    `Phone: ${formData.phone || '-'}`,
    `Preferred Date: ${formData.preferredDate || '-'}`,
    `Occasion: ${formData.occasion || '-'}`,
    `Message: ${formData.message || '-'}`,
  ].join('\n')

  const whatsappUrl = `https://wa.me/6363770057?text=${encodeURIComponent(whatsappMessage)}`
  const mapLink = 'https://maps.app.goo.gl/btY147ka7HZvZgtD7'
  const mapEmbedUrl = 'https://www.google.com/maps?q=Bengaluru%2C%20Karnataka&output=embed'

  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
      <section className="grid gap-8 lg:grid-cols-2">
        <form className="space-y-3 border border-od-border p-6" onSubmit={handleSubmit}>
          <h1 className="font-display text-5xl">Contact ODAVE</h1>
          <input name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" className="w-full border border-od-border bg-transparent px-4 py-3" />
          <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full border border-od-border bg-transparent px-4 py-3" />
          <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className="w-full border border-od-border bg-transparent px-4 py-3" />
          <input name="preferredDate" type="date" value={formData.preferredDate} onChange={handleInputChange} className="w-full border border-od-border bg-transparent px-4 py-3" />
          <select name="occasion" value={formData.occasion} onChange={handleInputChange} className="w-full border border-od-border bg-transparent px-4 py-3">
            <option className="bg-od-bg" value="Wedding">Wedding</option>
            <option className="bg-od-bg" value="Gala">Gala</option>
            <option className="bg-od-bg" value="Editorial">Editorial</option>
            <option className="bg-od-bg" value="Party">Party</option>
          </select>
          <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} placeholder="Message" className="w-full border border-od-border bg-transparent px-4 py-3" />
          <Button type="submit">Send Message</Button>
          {submitMessage ? <p className="text-sm text-od-ivory-muted">{submitMessage}</p> : null}
        </form>

        <aside className="space-y-4 border border-od-border p-6">
          <h2 className="font-display text-5xl">Visit Our Atelier</h2>
          <p className="text-od-ivory-muted">16 Altamount Road, Mumbai · hello@odave.in · +91 63637 70057 · @odaveatelier</p>
          <Button variant="ghost" onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}>Chat on WhatsApp</Button>
          <div className="overflow-hidden border border-od-border bg-od-surface">
            <iframe
              title="ODAVE location map"
              src={mapEmbedUrl}
              className="h-[280px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-od-border px-4 py-2 text-xs uppercase tracking-luxe text-od-ivory-muted transition hover:border-od-gold hover:text-od-gold"
          >
            Open map location
          </a>
        </aside>
      </section>

      <section className="mt-12" id="faq">
        <h3 className="font-display text-4xl">FAQ</h3>
        <div className="mt-4 space-y-2">
          {faqs.map(([question, answer]) => (
            <div key={question} className="border border-od-border">
              <button type="button" className="w-full px-4 py-3 text-left" onClick={() => setOpen((prev) => (prev === question ? '' : question))}>
                {question}
              </button>
              {open === question ? <p className="border-t border-od-border px-4 py-3 text-sm text-od-ivory-muted">{answer}</p> : null}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
