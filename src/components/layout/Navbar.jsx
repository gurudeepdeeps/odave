import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import { useWishlist } from '../../context/WishlistContext.jsx'

const navItems = [
  { label: 'Collections', to: '/collections' },
  { label: 'Inspiration', to: '/inspiration' },
  { label: 'Occasions', to: '/occasions' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function CounterBadge({ count }) {
  if (!count) return null
  return (
    <span className="absolute -right-2 -top-2 min-w-4 rounded-full bg-od-gold px-1 text-center text-[10px] text-black">
      {count}
    </span>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { cartCount } = useCart()
  const { wishlistIds } = useWishlist()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-od-bg/95 backdrop-blur-md border-b border-od-border' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group" onClick={scrollToTop}>
          <p className="font-display text-3xl tracking-[0.24em]">ODAVE</p>
          <span className="block h-px w-12 bg-od-gold transition-all duration-300 group-hover:w-full" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-luxe text-od-ivory-muted lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={scrollToTop}
              className="group relative"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-od-gold transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" aria-label="Search" onClick={() => setSearchOpen(true)} className="relative border border-transparent p-2 text-od-ivory-muted transition hover:border-od-border hover:text-od-gold">
            <Search size={18} />
          </button>
          <Link to="/wishlist" onClick={scrollToTop} className="relative border border-transparent p-2 text-od-ivory-muted transition hover:border-od-border hover:text-od-gold">
            <Heart size={18} />
            <CounterBadge count={wishlistIds.length} />
          </Link>
          <Link to="/cart" onClick={scrollToTop} className="relative border border-transparent p-2 text-od-ivory-muted transition hover:border-od-border hover:text-od-gold">
            <ShoppingBag size={18} />
            <CounterBadge count={cartCount} />
          </Link>
          <button type="button" onClick={() => setMobileOpen(true)} className="border border-transparent p-2 text-od-ivory-muted lg:hidden">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[70] bg-od-gold/15 backdrop-blur-sm lg:hidden">
          <div className="ml-auto flex h-full w-4/5 flex-col bg-od-surface px-8 py-8">
            <button type="button" onClick={() => setMobileOpen(false)} className="ml-auto text-od-gold">
              <X size={24} />
            </button>
            <div className="mt-10 flex flex-col gap-6 text-xl font-display">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => {
                    scrollToTop()
                    setMobileOpen(false)
                  }}
                  className="reveal-item"
                  data-reveal
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[80] flex items-start justify-center bg-black/70 p-6 backdrop-blur-sm" onClick={() => setSearchOpen(false)}>
          <div className="mt-20 w-full max-w-2xl border border-od-border bg-od-surface p-4" onClick={(event) => event.stopPropagation()}>
            <input
              autoFocus
              className="w-full border border-od-border bg-transparent px-4 py-3 text-od-ivory outline-none placeholder:text-od-ivory-muted"
              placeholder="Search exquisite pieces..."
            />
          </div>
        </div>
      )}
    </header>
  )
}
