import necklace1 from '../assets/images/necklace-1.png'
import necklace2 from '../assets/images/necklace-2.png'
import necklace3 from '../assets/images/necklace-3.png'
import necklace4 from '../assets/images/necklace-4.png'
import earrings1 from '../assets/images/earrings-1.png'
import earrings2 from '../assets/images/earrings-2.png'
import earrings3 from '../assets/images/earrings-3.png'
import earrings4 from '../assets/images/earrings-4.png'
import earrings5 from '../assets/images/earrings-5.png'
import ring1 from '../assets/images/ring-1.png'
import ring2 from '../assets/images/ring-2.png'
import ring3 from '../assets/images/ring-3.png'
import ring4 from '../assets/images/ring-4.png'
import bracelets1 from '../assets/images/bracelets-1.png'
import bracelets2 from '../assets/images/bracelets-2.png'
import bracelets3 from '../assets/images/bracelets-3.png'
import sets1 from '../assets/images/sets-1.png'
import sets2 from '../assets/images/sets-2.png'
import tiaras1 from '../assets/images/tiaras-1.png'

const imageSets = {
  necklaces: [necklace1, necklace2, necklace3, necklace4],
  earrings: [earrings1, earrings2, earrings3, earrings4, earrings5],
  rings: [ring1, ring2, ring3, ring4],
  bracelets: [bracelets1, bracelets2, bracelets3],
  sets: [sets1, sets2],
  tiaras: [tiaras1],
}

const baseProducts = [
  ['odave-001', 'Celestial Star Choker', 'Necklaces', ['Wedding', 'Gala'], 1200, 'Bestseller', true],
  ['odave-002', 'Moonlit Pearl Collar', 'Necklaces', ['Wedding', 'Editorial'], 1400, 'Limited', true],
  ['odave-003', 'Étoile Cascade Necklace', 'Necklaces', ['Gala', 'Party'], 1100, 'New', false],
  ['odave-004', 'Regal Vine Necklace', 'Necklaces', ['Wedding', 'Party'], 1000, null, false],
  ['odave-005', 'Noir Crystal Torque', 'Necklaces', ['Editorial', 'Gala'], 1600, 'Limited', true],
  ['odave-006', 'Aurora Drop Earrings', 'Earrings', ['Wedding', 'Gala'], 900, 'Bestseller', true],
  ['odave-007', 'Parisian Pearl Threads', 'Earrings', ['Casual', 'Party'], 700, 'New', false],
  ['odave-008', 'Opaline Halo Studs', 'Earrings', ['Wedding', 'Casual'], 650, null, false],
  ['odave-009', 'Velvet Night Chandeliers', 'Earrings', ['Gala', 'Editorial'], 1300, 'Limited', true],
  ['odave-010', 'Roselight Fringe Drops', 'Earrings', ['Party', 'Wedding'], 950, 'Bestseller', false],
  ['odave-011', 'Imperial Crown Ring', 'Rings', ['Wedding', 'Gala'], 800, 'Bestseller', true],
  ['odave-012', 'Starlit Open Ring', 'Rings', ['Party', 'Casual'], 550, 'New', false],
  ['odave-013', 'Monarch Oval Ring', 'Rings', ['Wedding', 'Editorial'], 900, null, false],
  ['odave-014', 'Eclipse Signet Ring', 'Rings', ['Gala', 'Editorial'], 1000, 'Limited', true],
  ['odave-015', 'Gilded Bloom Bracelet', 'Bracelets', ['Wedding', 'Party'], 850, 'Bestseller', true],
  ['odave-016', 'Champagne Tennis Bracelet', 'Bracelets', ['Gala', 'Wedding'], 1250, 'New', true],
  ['odave-017', 'Luna Charm Cuff', 'Bracelets', ['Casual', 'Party'], 700, null, false],
  ['odave-018', 'The Bridal Symphony Set', 'Sets', ['Wedding', 'Editorial'], 2200, 'Bestseller', true],
  ['odave-019', 'Metropolitan Gala Set', 'Sets', ['Gala', 'Party'], 2500, 'Limited', true],
  ['odave-020', 'Auric Veil Tiara', 'Tiaras', ['Wedding', 'Editorial'], 2800, 'Limited', true],
]

const categoryImageKey = {
  Necklaces: 'necklaces',
  Earrings: 'earrings',
  Rings: 'rings',
  Bracelets: 'bracelets',
  Sets: 'sets',
  Tiaras: 'tiaras',
}

function buildImages(category, index) {
  const key = categoryImageKey[category]
  const images = imageSets[key]
  const base = images[index % images.length]
  return [base, base, base, base, base]
}

export const products = baseProducts.map(([id, name, category, occasion, pricePerDay, badge, featured], index) => ({
  id,
  name,
  category,
  occasion,
  material: '18k Gold Plated',
  stone: 'Cubic Zirconia',
  pricePerDay,
  securityDeposit: 5000,
  rating: Number((4.6 + (index % 4) * 0.1).toFixed(1)),
  reviewCount: 72 + index * 7,
  badge,
  description:
    'A meticulously crafted statement piece that captures atelier-level detailing, designed to elevate weddings, galas, and unforgettable evenings.',
  specs: {
    length: `${14 + (index % 4)} inches`,
    weight: `${26 + (index % 9)}g`,
    plating: '18k Gold',
    stone: 'Cubic Zirconia AAA Grade',
    closure: 'Lobster Clasp',
  },
  images: buildImages(category, index),
  inStock: true,
  featured,
}))

export const categories = ['All', 'Necklaces', 'Earrings', 'Rings', 'Bracelets', 'Sets', 'Tiaras']
export const occasions = ['All', 'Wedding', 'Gala', 'Casual', 'Party', 'Editorial']
