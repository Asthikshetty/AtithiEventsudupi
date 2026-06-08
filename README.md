# Atithi Events & Caters - Production Website

Welcome to the official codebase for **Atithi Events & Caters**, a premium event management and catering website tailored to coastal Karnataka (Udupi & Kundapura). The website features cinematic styling, glassmorphism cards, auto-playing video reels, and a custom animated backdrop.

---

## 🚀 Tech Stack & Core Libraries

*   **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite 8](https://vite.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS
*   **Animations:** [Framer Motion](https://www.framer.com/motion/) (smooth transitions, slide-in mobile drawers, and loading sparkles)
*   **Slider/Reels:** [Swiper.js](https://swiperjs.com/) (touch-friendly carousels for reviews and video glimpses)
*   **Form Handling:** [React Hook Form](https://react-hook-form.com/) (form verification and WhatsApp pre-filled redirection)
*   **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Project Architecture

```text
atithi-events-website/
├── public/
│   └── logo.svg                # Scalable vector branding logo
├── src/
│   ├── assets/                 # Local optimized images and videos
│   │   ├── videos/             # MP4 background video loops
│   │   ├── Stagedecoration.jpeg
│   │   ├── Wedding-Catering.webp
│   │   ├── djlights.jpg
│   │   ├── haldi.jpg
│   │   ├── makeover.jpg
│   │   └── opengardenwedding.jpg
│   ├── components/             # Reusable UI Blocks & Sections
│   │   ├── About.tsx           # About Us heritage text + dynamic stats counter
│   │   ├── AnimatedBackground.tsx # Backdrop rendering floating orbs & sparkles
│   │   ├── ClientReviews.tsx   # Auto-sliding reviews carousel
│   │   ├── Contact.tsx         # Booking form + checkbox lists + WhatsApp trigger
│   │   ├── Footer.tsx          # Navigation links + contact directories
│   │   ├── Hero.tsx            # Cinematic typography and scrolling buttons
│   │   ├── Navbar.tsx          # Sticky glassmorphic header & slide-in drawer
│   │   ├── RecentGlimpses.tsx  # Swiper image & video highlight loop
│   │   └── Splash.tsx          # 3-second entry loader
│   ├── data/
│   │   └── servicesData.ts     # Configuration for the 11 signature services
│   ├── pages/                  # Top-level Page Views
│   │   ├── Gallery.tsx         # Photo Lightbox + Video Modals
│   │   ├── Home.tsx            # Main page sections coordinator
│   │   └── Services.tsx        # Services grid + Detail Modals + Masonry gallery
│   ├── App.css                 # Reset stylesheet
│   ├── App.tsx                 # App router, page state, and scroll queue
│   ├── index.css               # Core styling tokens, scrollbars & keyframes
│   └── main.tsx                # React entry mountpoint
├── index.html                  # SEO head metadata + JSON-LD local schema
├── tsconfig.json               # TypeScript configuration compiler rules
├── vite.config.ts              # Vite configurations
└── package.json                # Project dependencies
```

---

## 💎 Design System & Aesthetic Tokens

The website implements a luxury coastal palette styled directly through Tailwind v4 theme variables:
*   **Primary Maroon (`#800020`):** Used for brand typography, focus borders, primary buttons, and the active drawer indicators.
*   **Accompanying Gold (`#D4AF37`):** Represents royalty and celebrations. Applied as text gradients, active sliders, and card accents.
*   **Luxury Cream Base (`#FDFBF7`):** A soft, premium backdrop alternative to standard white that minimizes eye strain and increases contrast.
*   **Glassmorphism Cards (`.glass-card`):** Uses `backdrop-filter: blur(8px)` and semi-transparent white borders. Shifting background particles and colors bleed through cards as you scroll, creating a parallax feel.

---

## 📱 Mobile Responsiveness & Touch Target Guidelines

The layout is built mobile-first and optimized from narrow mobile widths (`320px`) up to `4K` displays:
1.  **Grid Steps:** Layouts automatically shift columns:
    *   *Mobile (`<768px`):* 1 column.
    *   *Tablet (`768px` to `1024px`):* 2 columns.
    *   *Desktop (`>1024px`):* 3 columns (or 4 columns in the Gallery grid).
2.  **Typography scaling:** Section headers dynamically scale down to `text-3xl` on mobile devices to prevent layout clipping and text-wrapping overflows.
3.  **Tap Target Sizes:** Crucial interactive elements (modal close buttons, drawer navigation links, form items, and checkboxes) are formatted to a minimum target size of `44px` to `48px` for comfortable thumb-scrolling usability.
4.  **Mobile Header:** The mobile navbar contains ONLY the branding logo (left) and the hamburger button (right). All phone icons are moved inside the slide-in drawer to keep the viewport clean.

---

## 🌀 State Coordination & Scroll Queue

Due to the 3-second entrance splash page-load, a custom queue state is used in `App.tsx` to handle page scrolling:
*   **Problem:** If a user clicks a section link (e.g. "About Us") from the Services or Gallery page, the app must route back to Home and scroll to that section. However, the homepage is unmounted during the transition, meaning `document.getElementById` is null.
*   **Solution:** `App.tsx` hosts a `pendingScrollTarget` state queue. When transitioning pages, the scroll target is saved. Once the splash screen fades out and the homepage mounts, a short timeout fires to scroll smoothly to the target offset.

---

## 🛠️ Developer Commands

### Installation
Install project dependencies:
```bash
npm install
```

### Run Locally (Dev Server)
Start the hot-reload Vite server:
```bash
npm run dev
```

### Production Build
Compile TypeScript and bundle assets:
```bash
npm run build
```
The compiled output is saved in the `/dist` directory.

### Preview Build
Preview the built production bundle locally:
```bash
npm run preview
```
