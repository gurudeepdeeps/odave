import { useState } from 'react'
import Button from '../ui/Button.jsx'

export default function NewsletterBanner() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setEmail('')
  }

  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(rgba(10,8,4,0.75), rgba(10,8,4,0.75)), url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1800&q=80)' }}
      />
      <div className="relative mx-auto max-w-3xl border border-od-border bg-od-bg/45 p-6 text-center md:p-8">
        <h2 className="font-display text-5xl">Be The First To Know</h2>
        <p className="mt-4 text-od-ivory-muted">New arrivals, exclusive offers, and styling inspiration</p>
        <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
          <input
            className="w-full border border-od-border bg-od-bg/60 px-4 py-3 text-sm outline-none placeholder:text-od-ivory-muted"
            placeholder="Your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button type="submit">Subscribe</Button>
        </form>
        {error ? <p className="mt-3 text-sm text-od-error">{error}</p> : null}
      </div>
    </section>
  )
}
