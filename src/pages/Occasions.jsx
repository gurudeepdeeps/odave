import { Link } from 'react-router-dom'
import ProductCard from '../components/ui/ProductCard.jsx'
import { products } from '../data/products.js'

const occasionGroups = ['Wedding', 'Gala', 'Party', 'Editorial', 'Casual']

export default function Occasions() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
      <section className="border border-od-border bg-gradient-to-b from-od-surface/80 to-od-card/70 p-6 md:p-8">
        <p className="text-xs uppercase tracking-luxe text-od-gold">Occasion Edit</p>
        <h1 className="mt-3 font-display text-6xl">Shop By Occasion</h1>
        <p className="mt-3 max-w-2xl text-od-ivory-muted">
          Curated jewellery recommendations for weddings, galas, parties, editorials, and everyday elegance.
        </p>
      </section>

      <section className="mt-12 space-y-24">
        {occasionGroups.map((occasion) => {
          const occasionProducts = products.filter((product) => product.occasion.includes(occasion)).slice(0, 4)

          return (
            <section key={occasion} className="border border-od-border bg-od-surface/50 p-6 md:p-8">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-od-border pb-3">
                <h2 className="font-display text-4xl">{occasion}</h2>
                <Link
                  to="/collections"
                  className="text-xs uppercase tracking-luxe text-od-gold transition hover:text-od-gold-light"
                >
                  View all collections
                </Link>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {occasionProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}
