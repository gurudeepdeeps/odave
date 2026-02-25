import { ArrowLeft, ChevronDown, Truck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ProductImageSlider from '../components/ui/ProductImageSlider.jsx'
import Button from '../components/ui/Button.jsx'
import Divider from '../components/ui/Divider.jsx'
import ProductCard from '../components/ui/ProductCard.jsx'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

const accordions = ['Rental Terms & Conditions', 'Care & Handling Instructions', 'Damage & Insurance Policy', 'Sizing Guide']

export default function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { addToCart, calculateDays } = useCart()
  const { toggleWishlist } = useWishlist()
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [size, setSize] = useState('M')
  const [openAccordion, setOpenAccordion] = useState(accordions[0])

  const product = products.find((item) => item.id === productId) || products[0]
  
  const handleRentNow = () => {
    addToCart(product, startDate, endDate, size)
    navigate('/cart')
  }
  
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4)
  const days = calculateDays(startDate, endDate)
  const rentalTotal = useMemo(() => product.pricePerDay * days, [product.pricePerDay, days])

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }
    navigate('/collections')
  }

  return (
    <main className="mx-auto max-w-[1440px] px-6 py-12 lg:px-10">
      <button
        type="button"
        onClick={handleBack}
        className="mb-6 inline-flex items-center gap-2 border border-od-border px-4 py-2 text-xs uppercase tracking-luxe text-od-ivory-muted transition hover:border-od-gold hover:text-od-gold"
      >
        <ArrowLeft size={14} /> Back
      </button>

      <div className="grid gap-10 lg:grid-cols-[60%_40%]">
        <ProductImageSlider images={product.images.slice(0, 5)} title={product.name} />

        <div>
          <p className="text-sm text-od-ivory-muted"><Link to="/">Home</Link> &gt; <Link to="/collections">Collections</Link> &gt; {product.category}</p>
          <p className="mt-4 text-xs uppercase tracking-luxe text-od-gold">{product.category}</p>
          <h1 className="mt-2 font-display text-6xl leading-tight">{product.name}</h1>
          <p className="mt-3 text-od-gold">★★★★★ ({product.rating}) · {product.reviewCount} reviews</p>
          <Divider />
          <p className="text-od-ivory-muted">{product.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3 border border-od-border p-4 text-sm">
            <div><dt className="text-od-ivory-muted">Base Metal</dt><dd>{product.material}</dd></div>
            <div><dt className="text-od-ivory-muted">Plating</dt><dd>{product.specs.plating}</dd></div>
            <div><dt className="text-od-ivory-muted">Stone Type</dt><dd>{product.specs.stone}</dd></div>
            <div><dt className="text-od-ivory-muted">Weight</dt><dd>{product.specs.weight}</dd></div>
            <div><dt className="text-od-ivory-muted">Length/Size</dt><dd>{product.specs.length}</dd></div>
            <div><dt className="text-od-ivory-muted">Closure</dt><dd>{product.specs.closure}</dd></div>
          </dl>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} className="border border-od-border bg-transparent px-4 py-3" />
            <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} className="border border-od-border bg-transparent px-4 py-3" />
          </div>
          <p className="mt-3 text-sm text-od-gold">{days} days = ₹{rentalTotal.toLocaleString('en-IN')}</p>
          <p className="text-xs text-od-ivory-muted">₹{product.securityDeposit.toLocaleString('en-IN')} fully refundable security deposit</p>

          <div className="mt-4 flex gap-2">
            {['XS', 'S', 'M', 'L'].map((sizeOption) => (
              <button
                key={sizeOption}
                className={`border px-3 py-2 text-xs uppercase tracking-luxe ${size === sizeOption ? 'border-od-gold text-od-gold' : 'border-od-border text-od-ivory-muted'}`}
                onClick={() => setSize(sizeOption)}
              >
                {sizeOption}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-2">
            <Button className="w-full" onClick={handleRentNow}>Rent Now</Button>
            <Button variant="ghost" className="w-full" onClick={() => addToCart(product, startDate, endDate, size)}>Add to Rental Cart</Button>
            <Button variant="ghost" className="w-full" onClick={() => toggleWishlist(product.id)}>Add to Wishlist</Button>
          </div>

          <div className="mt-6 flex items-center gap-2 border border-od-border px-4 py-3 text-sm text-od-ivory-muted">
            <Truck size={16} className="text-od-gold" /> Free delivery above ₹2,000 | 48hr dispatch
          </div>

          <Divider />

          <div className="space-y-2">
            {accordions.map((item) => (
              <div key={item} className="border border-od-border">
                <button
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => setOpenAccordion((prev) => (prev === item ? '' : item))}
                >
                  <span>{item}</span>
                  <ChevronDown size={16} className={openAccordion === item ? 'rotate-180 transition' : 'transition'} />
                </button>
                {openAccordion === item ? (
                  <p className="border-t border-od-border px-4 py-3 text-sm text-od-ivory-muted">
                    Our concierge team shares detailed guidance for this section upon rental confirmation.
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-4xl">You May Also Love</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>
    </main>
  )
}
