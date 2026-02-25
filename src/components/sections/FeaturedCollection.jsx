import { Link } from 'react-router-dom'
import { products } from '../../data/products.js'
import ProductCard from '../ui/ProductCard.jsx'

export default function FeaturedCollection() {
  const featured = products.filter((product) => product.featured).slice(0, 4)

  return (
    <section className="bg-od-surface px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-display text-5xl italic">The Bridal Edit</h2>
        <p className="mt-3 text-od-ivory-muted">Handpicked for your most radiant day</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <Link to="/collections" className="mt-8 inline-block text-sm uppercase tracking-luxe text-od-gold">
          View Full Collection →
        </Link>
      </div>
    </section>
  )
}
