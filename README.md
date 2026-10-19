# LUMIÈRE SKIN — Premium Skincare E-Commerce Storefront

> *"Your skin, in its own light."*

A luxury, editorial botanical skincare e-commerce storefront crafted for the modern conscious consumer. Built with **React 18**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**, LUMIÈRE SKIN blends rich editorial aesthetics, micro-interactions, full shopping journey state management, and accessibility into an internship-grade presentation.

---

## 🌿 Brand Identity & Design System

### 1. Palette & Atmosphere
- **Warm Ivory Background (`#F8F5EF`)**: Calming, editorial canvas evoking natural stone and botanical tranquility.
- **Deep Forest Green (`#263B32`)**: Grounding, luxurious tone conveying botanical science and trust.
- **Soft Sage Green (`#A8B5A0`)**: Muted organic accent signifying purity and plant life.
- **Muted Terracotta (`#C98570`)**: Warm clay accent for calls to action, discounts, and notifications.
- **Charcoal Typography (`#282A27`)**: Crisp, readable editorial contrast avoiding harsh pure black.
- **Porcelain Card White (`#FFFFFF`)**: Seamless presentation with soft borders (`#E7E2D8`).

### 2. Typography
- **Headlines**: Elegant serif typography featuring *Cormorant Garamond* & *Playfair Display* for high-fashion editorial presence.
- **Body & Controls**: Clean, legible, contemporary sans-serif (*Plus Jakarta Sans*) with proportional letter-spacing and hierarchy.

---

## 🛍️ Features & Shopping Journey

### 1. Header & Navigation
- **Rotating Announcement Bar**: Smooth animated messages (promotions, complimentary shipping thresholds, welcome codes) with pause-on-hover.
- **Sticky Glassmorphic Header**: Elevated backdrop blur on scroll, active route indicators, and mobile drawer menu.
- **Instant Search Overlay**: Fullscreen search modal searching across names, categories, concerns, and botanical ingredients.
- **Member Account Modal**: Simulated member portal displaying profile details, glow loyalty points, and order history with live delivery tracking.
- **Wishlist Quick Drawer**: Toggle saved items with instant "Move to Bag" capability.
- **Slide-out Mini-Cart Drawer**: Live bag item counter, free-shipping milestone progress bar, item quantity adjustment, and checkout shortcuts.

### 2. Homepage Editorial Flow
- **Asymmetrical Editorial Hero**: Staggered typography reveals, organic campaign photography, and floating active ingredient tags.
- **Brand Pillars Strip**: Four core commitments (Thoughtfully Selected Botanicals, Cruelty-Free, Everyday Skin Rituals, Conscious Packaging).
- **Shop by Concern Cards**: Interactive zoom cards for *Hydration*, *Uneven Tone*, *Barrier Care*, and *Daily Glow*.
- **Curated Bestsellers Grid**: Four-column desktop grid with image hover crossfading, quick-add, and interactive wishlist hearts.
- **Brand Story Banner**: "Good skin days begin with good rituals" with link to Our Story.
- **Interactive Routine Builder**: Switch between Morning Radiance, Evening Restoration, and Deep Barrier rituals, view step-by-step instructions, bundle pricing, and click **"Add Ritual to Bag"**.
- **Ingredient Spotlight**: Deep-dives into 4D Hyaluronic Acid, Purified Niacinamide, and Bio-Identical Ceramides.
- **Customer Reflections**: Star-rated reviews labeled as illustrative sample content.
- **Newsletter Subscription**: Instant simulated subscription with validation and promo code delivery.

### 3. Shop All Page (`/shop`)
- **Dual Filter Interface**: Responsive desktop sidebar + mobile slide-out filter drawer.
- **Comprehensive Filtering**: Filter by Category, Skin Concern, Skin Type, and Price Range slider (₹399 – ₹1,500).
- **Dynamic Sorting**: Featured, Price: Low to High, Price: High to Low, Highest Rated.
- **Active Filter Chips**: Dismiss individual filters or click "Clear All".
- **Empty State**: Friendly reset prompt when no products match.

### 4. Product Detail Experience (`/product/:id`)
- **Image Gallery**: Primary photography with thumbnail selector and zoom effects.
- **Pricing & Discounts**: Strikethrough pricing, calculateDiscountPercent, and Indian Rupee (₹) formatting.
- **Size Selector**: Choose between standard and luxury volumes (e.g. 30 ml / 50 ml).
- **Pincode Delivery Estimator**: Enter any 6-digit Indian PIN code for realistic simulated delivery estimate calculation.
- **Interactive Accordions**: Key Actives & Full INCI Ingredients list, The Application Ritual, Skin Compatibility & FAQs.
- **Direct Actions**: "Add to Bag", "Buy It Now" (direct to checkout), and Wishlist heart.
- **Harmonious Pairings**: "Complete Your Ritual" related products.

### 5. Dedicated Shopping Bag (`/cart`)
- Line-item table with product thumbnails, size, item price, and line totals.
- Quantity increment / decrement with stock cap safeguards.
- Working Promo Codes:
  - `LUMIERE10` — 10% off entire order
  - `GLOW20` — 20% off welcome discount
  - `RITUAL150` — Flat ₹150 off on orders over ₹1,000
- Free shipping progress bar indicating exact amount remaining to unlock free delivery.

### 6. Checkout & Confirmation (`/checkout` & `/order-confirmation`)
- **Contact & Indian Shipping Address Form**: Validation for required fields, valid email format, 10-digit Indian phone numbers, and 6-digit PIN codes.
- **Courier Selection**: Standard Courier (Free > ₹999) or Express Priority Air.
- **Payment Simulation**: UPI / QR Code, Credit/Debit Card Sandbox, or Cash on Delivery.
- **Demo Order Confirmation**: Generates unique reference code (`LUM-XXXXXX`), customer receipt breakdown, delivery timeline, and printable receipt.
- **Cart Reset**: Automatic cart clearing upon successful checkout simulation.

---

## 💻 Tech Stack & Architecture

- **Core**: React 18 (Functional components, Hooks)
- **Bundler & Dev Server**: Vite 5
- **Styling**: Tailwind CSS 3.4 with custom theme tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM 6
- **Global State**: React Context API (`CartContext`, `WishlistContext`, `ToastContext`)
- **Persistence**: Browser `localStorage` for cart items, active coupons, and wishlist

### Directory Structure
```
src/
├── assets/
├── components/
│   ├── AccountModal.jsx
│   ├── AnnouncementBar.jsx
│   ├── CartDrawer.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   ├── ProductGallery.jsx
│   ├── ProductGrid.jsx
│   ├── QuantitySelector.jsx
│   ├── SearchOverlay.jsx
│   ├── Toast.jsx
│   └── WishlistDrawer.jsx
├── context/
│   ├── CartContext.jsx
│   ├── ToastContext.jsx
│   └── WishlistContext.jsx
├── data/
│   ├── products.js
│   ├── reviews.js
│   └── routines.js
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── About.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── OrderConfirmation.jsx
│   ├── ProductDetail.jsx
│   └── Shop.jsx
├── utils/
│   ├── cartHelpers.js
│   └── currency.js
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm or pnpm

### Installation
```bash
# Clone or navigate to the directory
cd Lumiere

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory.

---

## ☁️ Deployment Instructions

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel` (or connect your GitHub repository to [vercel.com](https://vercel.com)).
2. Run `vercel` in the project root.
3. Accept default Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Deploy to Netlify
1. Connect repository on [netlify.com](https://netlify.com) or run `npx netlify deploy --prod`.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. For client-side routing, add a `_redirects` file in `public/` containing `/* /index.html 200`.

---

## 🔒 Notes & Demo Notice
- All product pricing, descriptions, star ratings, customer reviews, and order placements are simulated for demonstration purposes.
- No real financial transactions are executed, and no card numbers are collected.
