import { Heart, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../../context/WishlistContext.jsx'
import { useCart } from '../../context/CartContext.jsx'
import Badge from './Badge.jsx'
import Button from './Button.jsx'

export default function ProductCard({ product }) {
  const { isWishlisted, toggleWishlist } = useWishlist()
  const { addToCart } = useCart()

  return (
    <article className="group overflow-hidden border border-od-border bg-od-card transition duration-300 hover:-translate-y-1 hover:border-od-gold hover:shadow-luxe">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Link to={`/collections/${product.id}`} aria-label={`View details for ${product.name}`} className="absolute inset-0">
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-500"
          />
          <img
            src={product.images[1]}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
          />
        </Link>

        <div className="absolute left-3 top-3">
          <Badge label={product.badge} />
        </div>
        <button
          onClick={() => toggleWishlist(product.id)}
          className="absolute right-3 top-3 border border-od-border bg-od-bg/80 p-2 text-od-gold"
        >
          <Heart size={16} fill={isWishlisted(product.id) ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="space-y-2 px-4 py-4">
        <p className="text-[10px] uppercase tracking-luxe text-od-ivory-muted">{product.category}</p>
        <h3 className="font-display text-2xl leading-tight">
          <Link to={`/collections/${product.id}`} className="transition hover:text-od-gold">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-od-ivory-muted">{product.material} · {product.stone}</p>
        <p className="font-medium text-od-gold">₹ {product.pricePerDay.toLocaleString('en-IN')} / day</p>
        <p className="text-xs text-od-ivory-muted">Min rental period applies</p>
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div>
            <Button variant="ghost" className="w-full" onClick={() => addToCart(product)}>
              <span className="inline-flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Add to Cart
              </span>
            </Button>
          </div>
          <div>
            <Link to={`/collections/${product.id}`} className="block w-full">
              <Button variant="ghost" className="w-full">Details</Button>
            </Link>
          </div>
          <div className="col-span-2">
            <Button className="flex w-full items-center justify-center text-center" onClick={() => addToCart(product)}>Rent Now</Button>
          </div>
        </div>
      </div>
    </article>
  )
}
