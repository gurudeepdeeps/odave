export default function Returns() {
  return (
    <main className="mx-auto max-w-[1000px] px-6 py-16 lg:px-10">
      <p className="text-xs uppercase tracking-luxe text-od-gold">Customer Care</p>
      <h1 className="mt-3 font-display text-6xl">Returns</h1>
      <p className="mt-4 text-od-ivory-muted">Returning your rental is designed to be simple and stress-free after your event.</p>

      <section className="mt-10 grid gap-4">
        <article className="border border-od-border p-5">
          <h2 className="font-display text-3xl">Return Timeline</h2>
          <p className="mt-2 text-sm text-od-ivory-muted">Use the scheduled return date selected at booking. Pickup slots are shared in advance.</p>
        </article>
        <article className="border border-od-border p-5">
          <h2 className="font-display text-3xl">Packaging</h2>
          <p className="mt-2 text-sm text-od-ivory-muted">Please return items in original ODAVE packaging for secure transit and faster processing.</p>
        </article>
        <article className="border border-od-border p-5">
          <h2 className="font-display text-3xl">Deposit Settlement</h2>
          <p className="mt-2 text-sm text-od-ivory-muted">Security deposits are refunded after quality verification, typically within 3–5 business days.</p>
        </article>
      </section>
    </main>
  )
}
