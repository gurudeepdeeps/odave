import { useState } from 'react'

const WHATSAPP_NUMBER = '6363770057'

const inspirationLooks = [
  {
    id: 1,
    rawImage: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
    modelImages: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1620336655055-b57986f7f795?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 2,
    rawImage: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80',
    modelImages: [
      'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 3,
    rawImage: 'https://images.unsplash.com/photo-1627293509201-0ff91f3d1d2f?auto=format&fit=crop&w=900&q=80',
    modelImages: [
      'https://images.unsplash.com/photo-1617038260687-4f2f9702f3dd?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80',
    ],
  },
]

export default function Inspiration() {
  const [activeIndexes, setActiveIndexes] = useState(() =>
    Object.fromEntries(inspirationLooks.map((look) => [look.id, 0])),
  )

  const showPreviousModel = (id) => {
    setActiveIndexes((current) => {
      const look = inspirationLooks.find((item) => item.id === id)
      const totalModels = look?.modelImages.length ?? 0
      const previousIndex = (current[id] - 1 + totalModels) % totalModels
      return { ...current, [id]: previousIndex }
    })
  }

  const showNextModel = (id) => {
    setActiveIndexes((current) => {
      const look = inspirationLooks.find((item) => item.id === id)
      const totalModels = look?.modelImages.length ?? 0
      const nextIndex = (current[id] + 1) % totalModels
      return { ...current, [id]: nextIndex }
    })
  }

  const getLookCode = (id) => `ODV-INSP-${String(id).padStart(3, '0')}`

  const buildWhatsAppLink = (look, activeModelImage) => {
    const lookCode = getLookCode(look.id)
    const message = [
      'Hello ODAVE team, I want this inspiration look.',
      `Look Code: ${lookCode}`,
      `Raw Jewellery Image: ${look.rawImage}`,
      `Model Look Image: ${activeModelImage}`,
    ].join('\n')

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  return (
    <main className="min-h-screen bg-od-bg px-6 py-12 text-od-ivory lg:px-10">
      <section className="mx-auto max-w-[900px] border border-od-border bg-gradient-to-b from-od-surface/80 to-od-card/70 p-6 text-center md:p-8">
        <p className="text-xs uppercase tracking-luxe text-od-gold">Styling Inspiration</p>
        <h1 className="mt-4 font-display text-5xl font-light italic text-od-ivory md:text-7xl">
          Find Your Perfect Look
        </h1>
      </section>

      <section className="mx-auto mt-8 grid max-w-[900px] gap-5">
        {inspirationLooks.map((look) => {
          const activeModelIndex = activeIndexes[look.id] ?? 0
          const activeModelImage = look.modelImages[activeModelIndex]

          return (
            <article key={look.id} className="border border-od-border bg-gradient-to-r from-od-surface to-od-card p-[2px]">
              <div className="grid gap-[2px] md:grid-cols-2">
                <div className="group relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={look.rawImage}
                    alt="Raw jewellery reference"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </div>

                <div className="group relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={activeModelImage}
                    alt="Model wearing jewellery"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

                  <button
                    type="button"
                    onClick={() => showPreviousModel(look.id)}
                    className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-od-border bg-od-surface/90 text-lg text-od-gold transition hover:border-od-gold"
                    aria-label="Show previous model image"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => showNextModel(look.id)}
                    className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-od-border bg-od-surface/90 text-lg text-od-gold transition hover:border-od-gold"
                    aria-label="Show next model image"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-od-border bg-od-bg/40 px-4 py-3">
                <p className="text-xs uppercase tracking-luxe text-od-gold">Code: {getLookCode(look.id)}</p>
                <a
                  href={buildWhatsAppLink(look, activeModelImage)}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-od-gold px-4 py-2 text-xs uppercase tracking-luxe text-od-gold transition hover:bg-od-gold hover:text-black"
                >
                  Send on WhatsApp
                </a>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}
