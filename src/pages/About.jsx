import { Gem, Leaf, Heart } from 'lucide-react'

const pillars = [
  { name: 'Craftsmanship', icon: Gem },
  { name: 'Sustainability', icon: Leaf },
  { name: 'Accessibility', icon: Heart },
]

export default function About() {
  return (
    <main>
      <section className="relative h-[65vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=2000&q=80"
          alt="ODAVE atelier"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <h1 className="absolute inset-0 m-auto flex items-center justify-center text-center font-display text-6xl">The Story of ODAVE</h1>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80" alt="Brand story" className="h-full w-full object-cover" />
        <div>
          <h2 className="font-display text-5xl">Born from a belief</h2>
          <p className="mt-4 text-lg text-od-ivory-muted">
            Every woman deserves to wear extraordinary jewellery — without compromise. ODAVE reimagines access to heirloom aesthetics through curated rentals and atelier-level service.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.name} className="border border-od-border p-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-od-gold text-od-gold">
                  <Icon size={28} />
                </div>
                <h3 className="font-display text-4xl">{pillar.name}</h3>
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {['Mira Shah', 'Ananya Rao', 'Naina Khanna'].map((name) => (
            <article key={name} className="border border-od-border p-5 text-center">
              <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80" alt={name} className="mx-auto h-64 w-full object-cover" />
              <p className="mt-4 font-display text-3xl">{name}</p>
              <p className="text-xs uppercase tracking-luxe text-od-ivory-muted">Founder / Curator</p>
            </article>
          ))}
        </div>

        <div className="mt-14 border border-od-border p-5 text-center text-sm uppercase tracking-luxe text-od-ivory-muted">
          Vogue India · Femina · Harper&apos;s Bazaar · Elle
        </div>
        <div className="mt-4 border border-od-border p-5 text-center text-sm uppercase tracking-luxe text-od-gold">
          500+ Pieces · 10,000+ Rentals · 4.9★ Average · Est. 2022
        </div>
      </section>
    </main>
  )
}
