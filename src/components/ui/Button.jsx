export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-od-gold text-black hover:bg-od-gold-light',
    ghost: 'border border-od-gold text-od-gold hover:bg-od-gold hover:text-black',
    outline: 'border border-od-border text-od-ivory hover:border-od-gold hover:text-od-gold',
  }

  return (
    <button
      type="button"
      className={`px-5 py-3 text-xs uppercase tracking-luxe transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
