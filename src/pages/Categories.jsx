import { Link } from 'react-router-dom'

const categoryCards = [
  ['Necklaces', 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80'],
  ['Earrings', 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80'],
  ['Rings', 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80'],
  ['Bracelets', 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=900&q=80'],
  ['Sets', 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=900&q=80'],
  ['Tiaras', 'https://images.unsplash.com/photo-1617038260687-4f2f9702f3dd?auto=format&fit=crop&w=900&q=80'],
]

export default function Categories() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
      <section className="border border-od-border bg-gradient-to-b from-od-surface/80 to-od-card/70 p-6 md:p-8">
        <p className="text-xs uppercase tracking-luxe text-od-gold">Browse By Category</p>
        <h1 className="mt-3 font-display text-6xl">All Categories</h1>
        <p className="mt-3 max-w-2xl text-od-ivory-muted">
          Explore curated categories and filter directly into matching collections.
        </p>
      </section>

      <section className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {categoryCards.map(([name, image]) => (
          <Link
            key={name}
            to={`/collections?category=${encodeURIComponent(name)}`}
            className="group relative block aspect-[4/5] overflow-hidden border border-od-border transition hover:border-od-gold"
          >
            <img src={image} alt={name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <p className="absolute bottom-5 left-5 font-display text-3xl transition group-hover:-translate-y-1">{name}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
