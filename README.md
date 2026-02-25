# Odave

Odave is a luxury jewelry rental storefront built with React + Vite. It includes category discovery, featured collections, product details, wishlist and cart flows, and informational pages for shipping, returns, and sizing.

## Overview

- **Brand style:** dark luxury aesthetic with gold accents
- **Framework:** React 19 with React Router
- **Build tool:** Vite 7
- **Styling:** Tailwind CSS + custom CSS variables + reusable UI components
- **Motion:** Framer Motion page/section animations
- **State:** React Context for cart and wishlist
- **Data source:** local mock catalog in `src/data/products.js`

## Features

- Home page with hero, category highlights, featured collection, testimonials, and newsletter section
- Product catalog browsing by category and occasion
- Product detail page with image slider and rental-related metadata
- Cart management with date-aware rental pricing
- Wishlist toggling and dedicated wishlist page
- Utility/information pages (About, Contact, FAQ, Shipping, Returns, Sizing Guide)
- Route transitions and subtle UI animations

## Tech Stack

### Core

- `react` / `react-dom`
- `react-router-dom`
- `vite`

### UI & Motion

- `tailwindcss`
- `framer-motion`
- `swiper`
- `lucide-react`

### Quality Tooling

- `eslint`
- `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

## Project Structure

```text
.
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── textures/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer, PageWrapper
│   │   ├── sections/      # Home/marketing sections
│   │   └── ui/            # Reusable UI primitives
│   ├── context/           # Cart and Wishlist providers
│   ├── data/              # Product catalog and filters
│   ├── hooks/             # Custom hooks (e.g. scroll reveal)
│   ├── pages/             # Route-level pages
│   ├── styles/            # Global and animation styles
│   ├── App.jsx            # App shell + routes
│   └── main.jsx           # App entry and providers
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── vite.config.js
```

## Routing

Configured in `src/App.jsx`:

- `/` → Home
- `/collections` → Collections listing
- `/collections/:productId` → Product detail
- `/categories` → Categories page
- `/occasions` → Occasion-based browsing
- `/inspiration` → Inspiration page
- `/cart` → Cart
- `/wishlist` → Wishlist
- `/about` → About
- `/contact` → Contact
- `/faq` → FAQ
- `/shipping` → Shipping policy
- `/returns` → Returns policy
- `/sizing-guide` → Sizing guide

## State Management

### Cart Context (`src/context/CartContext.jsx`)

- Stores line items with composite keys (`product + dates + size`)
- Supports add/remove operations and rental date updates
- Computes:
	- `subtotal` = `pricePerDay × rentalDays × quantity`
	- `securityDeposit`
	- `deliveryFee` (waived above threshold)
	- `total`
	- `cartCount`

### Wishlist Context (`src/context/WishlistContext.jsx`)

- Stores product IDs in a local in-memory list
- Exposes `toggleWishlist` and `isWishlisted`

> Note: cart and wishlist are currently in-memory only and reset on page refresh.

## Data Model

Product data lives in `src/data/products.js` and includes:

- Product identity: `id`, `name`, `category`, `occasion`
- Commercial fields: `pricePerDay`, `securityDeposit`, `featured`, `badge`
- Experience fields: `rating`, `reviewCount`, `description`, `images`
- Technical specs: `length`, `weight`, `plating`, `stone`, `closure`

The same file also exports filter sets:

- `categories`
- `occasions`

## Styling System

- Tailwind theme is extended in `tailwind.config.js` with Odave design tokens:
	- `od-bg`, `od-surface`, `od-card`, `od-gold`, `od-ivory`, etc.
- Typography tokens:
	- `display`: Cormorant Garamond
	- `body`: Jost
- Additional utilities include custom letter spacing (`luxe`) and shadow (`luxe`)
- Global and animation styles live in:
	- `src/index.css`
	- `src/styles/globals.css`
	- `src/styles/animations.css`

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Deployment

This is a static Vite app and can be deployed to platforms such as Vercel, Netlify, GitHub Pages, or any static host/CDN.

Typical deployment flow:

1. Run `npm run build`
2. Publish the generated `dist/` folder

## Customization Guide

- **Catalog updates:** edit `src/data/products.js`
- **Add a page:** create `src/pages/NewPage.jsx` and register route in `src/App.jsx`
- **Theme tweaks:** update CSS variables/global styles and `tailwind.config.js`
- **Reusable UI:** add/extend primitives in `src/components/ui/`

## Current Limitations

- No backend or authentication
- No persistent storage for cart/wishlist
- Product catalog is mock/demo data
- No payment/checkout integration yet

## Future Enhancements

- API-backed catalog and inventory availability
- Persistent cart/wishlist (local storage or backend)
- Authenticated user profiles and order history
- Real checkout + payment gateway integration
- Search, sorting, and advanced filter UX

## Contributing

1. Create a feature branch
2. Commit focused changes with clear messages
3. Run `npm run lint` and `npm run build`
4. Open a pull request

## License

No license has been declared yet. Add a `LICENSE` file to define usage terms.
