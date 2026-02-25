const testimonials = [
  {
    quote: 'Every detail felt couture. The necklace transformed my wedding look instantly.',
    name: 'A. Kapoor',
    occasion: 'Wedding Reception, Mumbai',
  },
  {
    quote: 'Flawless packaging, quick dispatch, and stunning pieces with true editorial quality.',
    name: 'R. Mehta',
    occasion: 'Fashion Gala, Delhi',
  },
  {
    quote: 'Luxury without ownership pressure — ODAVE made statement styling effortless.',
    name: 'S. Iyer',
    occasion: 'Cocktail Evening, Bengaluru',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-od-card to-od-surface px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-display text-5xl">What Clients Say</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="relative border border-od-border bg-od-bg/35 p-6">
              <p className="absolute left-4 top-1 font-display text-7xl text-od-gold/20">❝</p>
              <p className="relative z-10 mt-6 text-od-ivory-muted">{item.quote}</p>
              <p className="mt-4 text-od-gold">★★★★★</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 border border-od-gold text-center text-sm leading-10">{item.name.slice(0, 2)}</div>
                <div>
                  <p className="text-sm">{item.name}</p>
                  <p className="text-xs uppercase tracking-luxe text-od-ivory-muted">{item.occasion}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
