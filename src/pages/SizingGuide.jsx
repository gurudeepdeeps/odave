export default function SizingGuide() {
  return (
    <main className="mx-auto max-w-[1000px] px-6 py-16 lg:px-10">
      <p className="text-xs uppercase tracking-luxe text-od-gold">Customer Care</p>
      <h1 className="mt-3 font-display text-6xl">Sizing Guide</h1>
      <p className="mt-4 text-od-ivory-muted">Reference these guidelines to select a comfortable and secure fit before checkout.</p>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="border border-od-border p-5">
          <h2 className="font-display text-3xl">Necklaces</h2>
          <p className="mt-2 text-sm text-od-ivory-muted">Chokers: 14–15 in · Princess: 17–19 in · Opera: 28+ in.</p>
        </article>
        <article className="border border-od-border p-5">
          <h2 className="font-display text-3xl">Bracelets</h2>
          <p className="mt-2 text-sm text-od-ivory-muted">Measure wrist circumference and add 0.5–1 in for ideal comfort.</p>
        </article>
        <article className="border border-od-border p-5">
          <h2 className="font-display text-3xl">Rings</h2>
          <p className="mt-2 text-sm text-od-ivory-muted">Use inner diameter matching: S (16.5mm), M (17.3mm), L (18.1mm).</p>
        </article>
        <article className="border border-od-border p-5">
          <h2 className="font-display text-3xl">Need Help?</h2>
          <p className="mt-2 text-sm text-od-ivory-muted">For occasion-specific fit advice, contact our concierge via the Contact page.</p>
        </article>
      </section>
    </main>
  )
}
