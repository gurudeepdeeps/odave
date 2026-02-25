import { Link } from 'react-router-dom'
import necklaceCover from '../assets/images/necklace-cover.png'
import earringsCover from '../assets/images/earrings-cover.png'
import ringCover from '../assets/images/ring-cover.png'
import braceletsCover from '../assets/images/bracelets-cover.png'
import setsCover from '../assets/images/sets-cover.png'
import tiarasCover from '../assets/images/tiaras-cover.png'

const categoryCards = [
  ['Necklaces', necklaceCover],
  ['Earrings', earringsCover],
  ['Rings', ringCover],
  ['Bracelets', braceletsCover],
  ['Sets', setsCover],
  ['Tiaras', tiarasCover],
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
