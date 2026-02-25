const cdn = 'https://images.unsplash.com'

const imageSets = {
  necklaces: [
    'photo-1617038220319-276d3cfab638',
    'photo-1515562141207-7a88fb7ce338',
    'photo-1620336655055-b57986f7f795',
    'photo-1617038260897-41a1f14a8ca0',
    'photo-1612817288484-6f916006741a',
  ],
  earrings: [
    'photo-1635767798638-3e25273a8236',
    'photo-1635767798637-865aa37b8ca3',
    'photo-1573408301185-9146fe634ad0',
    'photo-1611095973763-414019e72400',
    'photo-1611085583191-a3b181a88401',
  ],
  rings: [
    'photo-1605100804763-247f67b3557e',
    'photo-1588444837495-c6cfeb53f32d',
    'photo-1599643477877-530eb83abc8e',
    'photo-1602173574767-37ac01994b2a',
  ],
  bracelets: [
    'photo-1619119069152-a2b331eb392a',
    'photo-1611652022419-a9419f74343d',
    'photo-1627293509201-0ff91f3d1d2f',
  ],
  sets: ['photo-1596944924616-7b38e7cfac36', 'photo-1611107683227-e9060eccd846'],
  tiaras: ['photo-1617038260687-4f2f9702f3dd'],
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

const makeImageUrl = (id) => `${cdn}/${id}?auto=format&fit=crop&w=1000&q=80`

function buildImages(category, index) {
  const key = categoryImageKey[category]
  const ids = imageSets[key]
  const base = ids[index % ids.length]
  return [
    makeImageUrl(base),
    makeImageUrl(base),
    makeImageUrl(base),
    makeImageUrl(base),
    makeImageUrl(base),
  ]
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
