import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const DELIVERY_THRESHOLD = 2000
const DELIVERY_FEE = 300

function calculateDays(startDate, endDate) {
  if (!startDate || !endDate) return 1
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
  return Number.isNaN(diff) || diff < 1 ? 1 : diff
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [promoCode, setPromoCode] = useState('')
  const [promoDiscount, setPromoDiscount] = useState(0)

  const addToCart = (product, rentalStart, rentalEnd, size = '') => {
    const key = `${product.id}-${rentalStart || ''}-${rentalEnd || ''}-${size}`
    setItems((prev) => {
      const existing = prev.find((item) => item.key === key)
      if (existing) {
        return prev.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [
        ...prev,
        {
          key,
          product,
          rentalStart,
          rentalEnd,
          size,
          quantity: 1,
        },
      ]
    })
  }

  const removeFromCart = (key) => {
    setItems((prev) => prev.filter((item) => item.key !== key))
  }

  const updateDates = (key, rentalStart, rentalEnd) => {
    setItems((prev) =>
      prev.map((item) =>
        item.key === key
          ? {
              ...item,
              rentalStart,
              rentalEnd,
            }
          : item,
      ),
    )
  }

  const subtotal = useMemo(
    () =>
      items.reduce((sum, item) => {
        const days = calculateDays(item.rentalStart, item.rentalEnd)
        return sum + item.product.pricePerDay * days * item.quantity
      }, 0),
    [items],
  )

  const securityDeposit = useMemo(
    () => items.reduce((sum, item) => sum + item.product.securityDeposit * item.quantity, 0),
    [items],
  )

  const deliveryFee = subtotal >= DELIVERY_THRESHOLD || subtotal === 0 ? 0 : DELIVERY_FEE
  const discount = Math.floor(subtotal * (promoDiscount / 100))
  const total = subtotal + securityDeposit + deliveryFee - discount

  const applyPromoCode = (code) => {
    const upperCode = code.trim().toUpperCase()
    const promoCodes = {
      'ODAVE10': 10,
      'ODAVE15': 15,
      'ODAVE50': 50,
      'WEDDING25': 25,
    }
    
    if (promoCodes[upperCode]) {
      setPromoCode(upperCode)
      setPromoDiscount(promoCodes[upperCode])
      return { success: true, discount: promoCodes[upperCode] }
    }
    return { success: false, discount: 0 }
  }

  const removePromoCode = () => {
    setPromoCode('')
    setPromoDiscount(0)
  }

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateDates,
      calculateDays,
      subtotal,
      securityDeposit,
      deliveryFee,
      discount,
      total,
      cartCount: items.reduce((sum, item) => sum + item.quantity, 0),
      promoCode,
      promoDiscount,
      applyPromoCode,
      removePromoCode,
    }),
    [items, subtotal, securityDeposit, deliveryFee, discount, total, promoCode, promoDiscount],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
