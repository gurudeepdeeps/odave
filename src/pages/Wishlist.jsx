import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ui/ProductCard.jsx'
import { products } from '../data/products.js'
import { useWishlist } from '../context/WishlistContext.jsx'

export default function Wishlist() {
  const navigate = useNavigate()
  const { wishlistIds } = useWishlist()
  const wishlistProducts = products.filter((product) => wishlistIds.includes(product.id))

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }
    navigate('/collections')
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
      <h1 className="font-display text-6xl">Your Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <p className="mt-6 text-od-ivory-muted">No saved pieces yet. Tap the heart icon on any product to shortlist it.</p>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {wishlistProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </main>
  )
}
