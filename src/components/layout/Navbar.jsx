import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import { useWishlist } from '../../context/WishlistContext.jsx'
import { products } from '../../data/products.js'

const navItems = [
  { label: 'Collections', to: '/collections' },
  { label: 'Inspiration', to: '/inspiration' },
  { label: 'Occasions', to: '/occasions' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Login', to: '/login' },
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
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount } = useCart()
  const { wishlistIds } = useWishlist()
  const navigate = useNavigate()

  const filteredProducts = searchQuery.trim()
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.occasion.some((occ) => occ.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 8)
    : []

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen) {
      setSearchQuery('')
    }
  }, [searchOpen])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (to) => {
    // Don't scroll to top if it's a hash link
    if (!to.includes('#')) {
      scrollToTop()
    }
  }

  const handleProductClick = (productId) => {
    setSearchOpen(false)
    setSearchQuery('')
    navigate(`/collections/${productId}`)
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
              onClick={() => handleNavClick(item.to)}
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
                    handleNavClick(item.to)
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
          <div className="mt-20 w-full max-w-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="border border-od-border bg-od-surface p-4">
              <input
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-od-border bg-transparent px-4 py-3 text-od-ivory outline-none placeholder:text-od-ivory-muted"
                placeholder="Search exquisite pieces..."
              />
            </div>
            
            {filteredProducts.length > 0 && (
              <div className="mt-2 max-h-[60vh] overflow-y-auto border border-od-border bg-od-surface">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => handleProductClick(product.id)}
                    className="flex w-full items-center gap-4 border-b border-od-border p-4 text-left transition hover:bg-od-card"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-16 w-16 object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-display text-lg text-od-ivory">{product.name}</p>
                      <p className="text-sm text-od-ivory-muted">{product.category} · ₹{product.pricePerDay}/day</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {searchQuery.trim() && filteredProducts.length === 0 && (
              <div className="mt-2 border border-od-border bg-od-surface p-8 text-center">
                <p className="text-od-ivory-muted">No products found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
