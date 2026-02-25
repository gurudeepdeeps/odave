import { Link } from 'react-router-dom'
import Button from '../ui/Button.jsx'
import necklaceCover from '../../assets/images/necklace-cover.png'
import earringsCover from '../../assets/images/earrings-cover.png'
import ringCover from '../../assets/images/ring-cover.png'
import braceletsCover from '../../assets/images/bracelets-cover.png'
import setsCover from '../../assets/images/sets-cover.png'
import tiarasCover from '../../assets/images/tiaras-cover.png'

const categoryCards = [
  ['Necklaces', necklaceCover],
  ['Earrings', earringsCover],
  ['Rings', ringCover],
  ['Bracelets', braceletsCover],
  ['Sets', setsCover],
  ['Tiaras', tiarasCover],
]

export default function CategorySection() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
      <div className="border border-od-border bg-od-surface/60 p-6 md:p-8">
        <p className="text-xs uppercase tracking-luxe text-od-gold">Browse By Category</p>
        <h2 className="mt-4 font-display text-5xl">Find Your Perfect Adornment</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
        </div>

        <div className="mt-10">
          <Link to="/categories"><Button variant="ghost">View All</Button></Link>
        </div>
      </div>
    </section>
  )
}
