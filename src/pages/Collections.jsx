import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterBar from '../components/ui/FilterBar.jsx'
import ProductCard from '../components/ui/ProductCard.jsx'
import { categories, products } from '../data/products.js'
import Button from '../components/ui/Button.jsx'

export default function Collections() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: 'All',
    occasion: 'All',
    maxPrice: 10000,
    sortBy: 'Featured',
  })
  const [visibleCount, setVisibleCount] = useState(9)

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (!categoryParam || !categories.includes(categoryParam)) return

    setFilters((prev) => {
      if (prev.category === categoryParam) return prev
      return { ...prev, category: categoryParam }
    })
    setVisibleCount(9)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (filters.category !== 'All') {
      result = result.filter((product) => product.category === filters.category)
    }
    if (filters.occasion !== 'All') {
      result = result.filter((product) => product.occasion.includes(filters.occasion))
    }
    result = result.filter((product) => product.pricePerDay <= filters.maxPrice)

    if (filters.sortBy === 'PriceLowHigh') result.sort((a, b) => a.pricePerDay - b.pricePerDay)
    if (filters.sortBy === 'PriceHighLow') result.sort((a, b) => b.pricePerDay - a.pricePerDay)
    if (filters.sortBy === 'Newest') result.sort((a, b) => b.id.localeCompare(a.id))
    if (filters.sortBy === 'Featured') result.sort((a, b) => Number(b.featured) - Number(a.featured))

    return result
  }, [filters])

  const clearFilter = (key) => {
    if (key === 'maxPrice') {
      setFilters((prev) => ({ ...prev, maxPrice: 10000 }))
      return
    }
    setFilters((prev) => ({ ...prev, [key]: 'All' }))
  }

  return (
    <main className="pb-20">
      <section className="mx-auto max-w-[1440px] px-6 pb-8 pt-16 lg:px-10">
        <h1 className="font-display text-6xl">Our Collections</h1>
        <span className="mt-4 block h-px w-40 bg-od-gold" />
      </section>

      <FilterBar filters={filters} setFilters={setFilters} clearFilter={clearFilter} />

      <section className="mx-auto mt-10 max-w-[1440px] px-6 lg:px-10">
        {filteredProducts.length === 0 ? (
          <div className="border border-od-border p-16 text-center">
            <p className="font-display text-4xl">No pieces found</p>
            <p className="mt-3 text-od-ivory-muted">Try widening filters to discover more ODAVE selections.</p>
          </div>
        ) : (
          <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.slice(0, visibleCount).map((product) => (
              <motion.div key={product.id} layout>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {visibleCount < filteredProducts.length ? (
          <div className="mt-10 text-center">
            <Button variant="ghost" onClick={() => setVisibleCount((prev) => prev + 6)}>
              Load More
            </Button>
          </div>
        ) : null}
      </section>
    </main>
  )
}
