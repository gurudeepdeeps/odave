import { X } from 'lucide-react'
import { categories, occasions } from '../../data/products.js'

export default function FilterBar({ filters, setFilters, clearFilter }) {
  return (
    <div className="sticky top-[72px] z-40 border-y border-od-border bg-od-surface/95 px-4 py-4 backdrop-blur-md lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-wrap gap-3">
        <select
          value={filters.category}
          onChange={(event) => setFilters((prev) => ({ ...prev, category: event.target.value }))}
          className="border border-od-border bg-transparent px-3 py-2 text-sm"
        >
          {categories.map((option) => (
            <option key={option} value={option} className="bg-od-bg">
              {option}
            </option>
          ))}
        </select>

        <select
          value={filters.occasion}
          onChange={(event) => setFilters((prev) => ({ ...prev, occasion: event.target.value }))}
          className="border border-od-border bg-transparent px-3 py-2 text-sm"
        >
          {occasions.map((option) => (
            <option key={option} value={option} className="bg-od-bg">
              {option}
            </option>
          ))}
        </select>

        <div className="flex min-w-[240px] flex-col justify-center border border-od-border px-3 py-2 text-sm">
          <label htmlFor="price" className="text-xs uppercase tracking-luxe text-od-ivory-muted">Price up to ₹{filters.maxPrice}</label>
          <input
            id="price"
            type="range"
            min={500}
            max={10000}
            step={100}
            value={filters.maxPrice}
            onChange={(event) => setFilters((prev) => ({ ...prev, maxPrice: Number(event.target.value) }))}
          />
        </div>

        <select
          value={filters.sortBy}
          onChange={(event) => setFilters((prev) => ({ ...prev, sortBy: event.target.value }))}
          className="border border-od-border bg-transparent px-3 py-2 text-sm"
        >
          <option value="Featured" className="bg-od-bg">Featured</option>
          <option value="PriceLowHigh" className="bg-od-bg">Price Low-High</option>
          <option value="PriceHighLow" className="bg-od-bg">Price High-Low</option>
          <option value="Newest" className="bg-od-bg">Newest</option>
        </select>
      </div>

      <div className="mx-auto mt-3 flex max-w-[1440px] flex-wrap gap-2">
        {filters.category !== 'All' && (
          <button className="flex items-center gap-1 border border-od-gold px-2 py-1 text-xs text-od-gold" onClick={() => clearFilter('category')}>
            {filters.category} <X size={12} />
          </button>
        )}
        {filters.occasion !== 'All' && (
          <button className="flex items-center gap-1 border border-od-gold px-2 py-1 text-xs text-od-gold" onClick={() => clearFilter('occasion')}>
            {filters.occasion} <X size={12} />
          </button>
        )}
        {filters.maxPrice < 10000 && (
          <button className="flex items-center gap-1 border border-od-gold px-2 py-1 text-xs text-od-gold" onClick={() => clearFilter('maxPrice')}>
            Up to ₹{filters.maxPrice} <X size={12} />
          </button>
        )}
      </div>
    </div>
  )
}
