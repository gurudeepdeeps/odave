export default function Badge({ label }) {
  if (!label) return null
  return (
    <span className="inline-block border border-od-gold bg-od-bg/80 px-2 py-1 text-[10px] uppercase tracking-luxe text-od-gold">
      {label}
    </span>
  )
}
