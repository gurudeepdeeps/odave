import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import PageWrapper from './components/layout/PageWrapper.jsx'
import Home from './pages/Home.jsx'
import Collections from './pages/Collections.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import Shipping from './pages/Shipping.jsx'
import Returns from './pages/Returns.jsx'
import SizingGuide from './pages/SizingGuide.jsx'
import Inspiration from './pages/Inspiration.jsx'
import Occasions from './pages/Occasions.jsx'
import Categories from './pages/Categories.jsx'

function App() {
  const location = useLocation()
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false })

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isDesktop) return undefined

    const onMove = (event) => setCursor((prev) => ({ ...prev, x: event.clientX, y: event.clientY }))
    const onOver = (event) => {
      const isInteractive = event.target.closest('a, button, input, select, textarea')
      setCursor((prev) => ({ ...prev, active: Boolean(isInteractive) }))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <div className="min-h-screen bg-od-bg text-od-ivory">
      <div className="cursor-dot" style={{ left: `${cursor.x}px`, top: `${cursor.y}px` }} />
      <div
        className="cursor-ring"
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 1.5 : 1})`,
        }}
      />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/collections" element={<PageWrapper><Collections /></PageWrapper>} />
          <Route path="/categories" element={<PageWrapper><Categories /></PageWrapper>} />
          <Route path="/occasions" element={<PageWrapper><Occasions /></PageWrapper>} />
          <Route path="/collections/:productId" element={<PageWrapper><ProductDetail /></PageWrapper>} />
          <Route path="/inspiration" element={<PageWrapper><Inspiration /></PageWrapper>} />
          <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
          <Route path="/wishlist" element={<PageWrapper><Wishlist /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><Faq /></PageWrapper>} />
          <Route path="/shipping" element={<PageWrapper><Shipping /></PageWrapper>} />
          <Route path="/returns" element={<PageWrapper><Returns /></PageWrapper>} />
          <Route path="/sizing-guide" element={<PageWrapper><SizingGuide /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
