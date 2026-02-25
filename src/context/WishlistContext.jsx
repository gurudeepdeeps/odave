import { createContext, useContext, useMemo, useState } from 'react'

const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
  const [wishlistIds, setWishlistIds] = useState([])

  const toggleWishlist = (productId) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const value = useMemo(
    () => ({
      wishlistIds,
      toggleWishlist,
      isWishlisted: (productId) => wishlistIds.includes(productId),
    }),
    [wishlistIds],
  )

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider')
  }
  return context
}
