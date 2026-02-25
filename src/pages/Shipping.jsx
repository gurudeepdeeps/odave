export default function Shipping() {
  return (
    <main className="mx-auto max-w-[1000px] px-6 py-16 lg:px-10">
      <p className="text-xs uppercase tracking-luxe text-od-gold">Customer Care</p>
      <h1 className="mt-3 font-display text-6xl">Shipping</h1>
      <p className="mt-4 text-od-ivory-muted">Our delivery process is built for premium handling, timeline clarity, and insured transit.</p>

      <section className="mt-10 grid gap-4">
        <article className="border border-od-border p-5">
          <h2 className="font-display text-3xl">Dispatch Window</h2>
          <p className="mt-2 text-sm text-od-ivory-muted">Orders are usually dispatched within 24–48 hours after rental confirmation.</p>
        </article>
        <article className="border border-od-border p-5">
          <h2 className="font-display text-3xl">Delivery Coverage</h2>
          <p className="mt-2 text-sm text-od-ivory-muted">Pan-India delivery is available in major cities with insured shipping partners.</p>
        </article>
        <article className="border border-od-border p-5">
          <h2 className="font-display text-3xl">Tracking & Support</h2>
          <p className="mt-2 text-sm text-od-ivory-muted">You receive tracking updates and concierge support from dispatch to return pickup.</p>
        </article>
      </section>
    </main>
  )
}
