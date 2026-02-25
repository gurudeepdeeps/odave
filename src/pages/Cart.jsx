import { ArrowLeft, Trash2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const navigate = useNavigate()
  const { items, removeFromCart, calculateDays, subtotal, securityDeposit, deliveryFee, total } = useCart()

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }
    navigate('/collections')
  }

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-[960px] px-6 py-24 text-center">
        <h1 className="font-display text-6xl italic">Your Rental Cart</h1>
        <p className="mt-4 text-od-ivory-muted">Your cart is currently empty. Discover statement pieces for your next moment.</p>
        <Link to="/collections" className="mt-8 inline-block"><Button>Discover Our Collections</Button></Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
      <button
        type="button"
        onClick={handleBack}
        className="mb-6 inline-flex items-center gap-2 border border-od-border px-4 py-2 text-xs uppercase tracking-luxe text-od-ivory-muted transition hover:border-od-gold hover:text-od-gold"
      >
        <ArrowLeft size={14} /> Back
      </button>
      <h1 className="font-display text-6xl italic">Your Rental Cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[65%_35%]">
        <div className="space-y-4">
          {items.map((item) => {
            const days = calculateDays(item.rentalStart, item.rentalEnd)
            const itemTotal = item.product.pricePerDay * days * item.quantity
            return (
              <article key={item.key} className="grid gap-4 border border-od-border p-4 md:grid-cols-[120px_1fr_auto]">
                <img src={item.product.images[0]} alt={item.product.name} className="h-[120px] w-[120px] object-cover" />
                <div>
                  <h3 className="font-display text-3xl">{item.product.name}</h3>
                  <p className="text-sm text-od-ivory-muted">{item.product.category}</p>
                  <p className="mt-2 text-sm text-od-ivory-muted">Dates: {item.rentalStart || 'TBD'} → {item.rentalEnd || 'TBD'}</p>
                  <p className="text-sm text-od-ivory-muted">{days} days · ₹{item.product.pricePerDay.toLocaleString('en-IN')}/day</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <p className="text-od-gold">₹{itemTotal.toLocaleString('en-IN')}</p>
                  <button onClick={() => removeFromCart(item.key)} className="text-od-ivory-muted hover:text-od-error">
                    <Trash2 size={16} />
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <aside className="h-fit border border-od-border bg-od-surface p-5">
          <h2 className="font-display text-4xl">Order Summary</h2>
          <div className="mt-4 space-y-2 text-sm text-od-ivory-muted">
            <p className="flex justify-between"><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></p>
            <p className="flex justify-between"><span>Security Deposit</span><span>₹{securityDeposit.toLocaleString('en-IN')}</span></p>
            <p className="flex justify-between"><span>Delivery Fee</span><span>{deliveryFee === 0 ? 'Waived' : `₹${deliveryFee}`}</span></p>
            <p className="flex justify-between border-t border-od-border pt-3 text-od-gold"><span>Total</span><span>₹{total.toLocaleString('en-IN')}</span></p>
          </div>
          <input placeholder="Promo code" className="mt-5 w-full border border-od-border bg-transparent px-3 py-2 text-sm" />
          <Link to="/contact" className="block">
            <Button className="mt-4 w-full">Proceed to Checkout</Button>
          </Link>
          <p className="mt-4 text-xs uppercase tracking-luxe text-od-ivory-muted">Insured Delivery · Authenticity Guaranteed · Easy Returns</p>
        </aside>
      </div>
    </main>
  )
}
