import { ArrowRight, Instagram, PinIcon, Youtube } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMessage('Enter a valid email.')
      return
    }

    setMessage('Subscribed successfully.')
    setEmail('')
  }

  return (
    <footer className="bg-[#0d0b08]">
      <div className="mx-auto max-w-[1440px] border-t border-od-gold/50 px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-3xl tracking-[0.2em]">ODAVE</h3>
            <p className="mt-4 max-w-xs text-sm text-od-ivory-muted">Curated heirloom-inspired jewellery rentals for weddings, soirées, and editorial moments.</p>
            <div className="mt-5 flex gap-3 text-od-gold">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest"><PinIcon size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-luxe text-od-gold">Quick Links</p>
            <div className="mt-4 space-y-2 text-od-ivory-muted">
              <Link to="/" onClick={scrollToTop}>Home</Link><br />
              <Link to="/collections" onClick={scrollToTop}>Collections</Link><br />
              <Link to="/inspiration" onClick={scrollToTop}>Inspiration</Link><br />
              <Link to="/about" onClick={scrollToTop}>About</Link><br />
              <Link to="/contact" onClick={scrollToTop}>Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-luxe text-od-gold">Customer Care</p>
            <div className="mt-4 space-y-2 text-od-ivory-muted">
              <Link to="/faq" onClick={scrollToTop}>FAQ</Link><br />
              <Link to="/shipping" onClick={scrollToTop}>Shipping</Link><br />
              <Link to="/returns" onClick={scrollToTop}>Returns</Link><br />
              <Link to="/sizing-guide" onClick={scrollToTop}>Sizing Guide</Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-luxe text-od-gold">Newsletter</p>
            <p className="mt-4 text-sm text-od-ivory-muted">Receive curated drops and private event edits.</p>
            <form className="mt-4 flex border border-od-border" onSubmit={handleNewsletterSubmit}>
              <input
                className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-od-ivory-muted"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" className="border-l border-od-border px-3 text-od-gold" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </form>
            {message ? <p className="mt-2 text-xs text-od-ivory-muted">{message}</p> : null}
          </div>
        </div>

        <div className="mt-12 border-t border-od-border pt-6 text-xs text-od-ivory-muted">
          © 2026 ODAVE · <Link to="/contact" onClick={scrollToTop}>Privacy Policy</Link> · <Link to="/contact" onClick={scrollToTop}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
