export default function Divider({ label = '' }) {
  return (
    <div className="my-6 flex items-center gap-3">
      <span className="h-px flex-1 bg-od-gold/60" />
      {label ? <span className="text-[10px] uppercase tracking-luxe text-od-gold">{label}</span> : null}
      <span className="h-px flex-1 bg-od-gold/60" />
    </div>
  )
}
