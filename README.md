# ?? Vesper — Undetectable AI Copilot Landing Page

[![Live Demo](https://img.shields.io/badge/Demo-vesper--one--brown.vercel.app-2B73EB?style=for-the-badge&logo=vercel&logoColor=white)](https://vesper-one-brown.vercel.app)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.2-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Bun](https://img.shields.io/badge/Bun-1.2-fbf0df?style=for-the-badge&logo=bun&logoColor=black)](https://bun.sh/)

> A modern, high-craft landing page for **Vesper**, an undetectable AI copilot concept engineered for live technical interviews, algorithm optimization, and system design challenges.

?? **Live Demo:** [vesper-one-brown.vercel.app](https://vesper-one-brown.vercel.app)

---

## ?? About The Project & Motivation

This project was built as an intensive exercise in **practicing and mastering modern frontend engineering**. The goal was to elevate UI craftsmanship beyond static templates by creating a production-grade web experience featuring:

- **Stateful Interactive Simulators**: Emulating real desktop software inside the browser with live scenario switching, streaming text effects, and keyboard event listeners.
- **Physics-Based Micro-Interactions**: Integrating spring-loaded 3D tilt tracking with Framer Motion that responds dynamically to cursor coordinates.
- **Scroll-Driven Entrances**: Utilizing the browser's native `IntersectionObserver` API for buttery-smooth staggered entrances without layout shift.
- **Refined Design Systems**: Harmonizing typography (classic serif editorial headings, crisp grotesque sans body, and clean monospaced code blocks), subtle gradient glows, and razor-sharp border highlights.

---

## ?? Design Inspiration

The visual identity and art direction of this project were heavily inspired by the stunning aesthetic of **[Cluely](https://cluely.com)**.

Special appreciation goes to Cluely's clean execution:
- **Typographic Polish**: Pairing high-elegance serif typography (*EB Garamond*) with functional sans-serif (*Inter*) and technical monospace (*JetBrains Mono*).
- **Subtle Layering & Depth**: Utilizing semi-translucent backdrop blurs, delicate borders (`border-[#19191D]/10`), and deep radial ambient glows to evoke modern high-end software.
- **Micro-Copy & Information Density**: Presenting intricate technical benchmarks and product features through digestible, clean card layouts and comparison matrices.

---

## ??? Tech Stack

| Technology | Role | Details |
| :--- | :--- | :--- |
| **[React 19](https://react.dev/)** | Core Library | Modern UI components, hooks, and streamlined state handling |
| **[TypeScript](https://www.typescriptlang.org/)** | Language | Strict static typing, custom interface definitions, and type safety |
| **[Vite 6](https://vitejs.dev/)** | Build Tool | Lightning-fast HMR (Hot Module Replacement) and optimized bundling |
| **[Bun](https://bun.sh/)** | Runtime & Package Manager | High-performance dependency management and script execution |
| **[Tailwind CSS v3](https://tailwindcss.com/)** | Styling | Utility-first CSS architecture with custom themes and animation utilities |
| **[Framer Motion](https://www.framer.com/motion/)** | Animation | Spring animations, interactive 3D perspective tilts, and smooth transitions |
| **[Lucide React](https://lucide.dev/)** | Icons | Minimalist, consistent iconography across all interface modules |

---

## ? Key Features & Highlights

### 1. ??? Interactive HUD Code Assistant Demo (`HudDemo.tsx`)
- **Live Scenario Runner**: Switch between multiple interview situations (*Optimal Two Pointers*, *Fast-Track Refactor*, *Complexity Analysis*) with real-time code typing simulation.
- **3D Parallax Tilt**: Real-time 3D spring transformation responding to mouse movement with fluid physics damping (`useSpring`, `useTransform`).
- **Hotkey Controls**: Press <kbd>Esc</kbd> or <kbd>Cmd</kbd> + <kbd>H</kbd> / <kbd>Ctrl</kbd> + <kbd>H</kbd> to toggle the HUD communication box on and off.

### 2. ??? Undetectability Comparison Matrix (`Undetectability.tsx`)
- Detailed breakdown comparing traditional AI tools vs. Vesper across screen-share isolation, process invisibility, zero-audio footprint, and virtual audio loopback drivers.

### 3. ?? Performance & Accuracy Benchmarks (`Benchmarks.tsx`)
- Technical telemetry and empirical pass-rate metrics against standard LeetCode Hard, Codeforces, and HackerRank question sets.

### 4. ?? Expandable Accordion FAQ (`Faq.tsx`)
- Smooth disclosure states addressing security, screen-recorder invisibility, latency metrics, and setup requirements.

### 5. ?? Responsive & Accessible Architecture
- Fully responsive across desktop, tablet, and mobile screens with accessible ARIA semantics and high-contrast color balances.

---

## ?? Project Structure

```text
vesper/
+-- public/               # Static assets & icons
+-- src/
¦   +-- components/       # Modular UI components
¦   ¦   +-- Benchmarks.tsx      # Empirical metrics & pass rates
¦   ¦   +-- BrandIcons.tsx      # Custom SVG brand assets
¦   ¦   +-- Faq.tsx             # Collapsible FAQ accordion
¦   ¦   +-- Features.tsx        # Grid of core product capabilities
¦   ¦   +-- Footer.tsx          # Site footer & navigation links
¦   ¦   +-- Hero.tsx            # Hero banner & primary CTA
¦   ¦   +-- HudDemo.tsx         # Interactive 3D HUD simulator
¦   ¦   +-- Navbar.tsx          # Navigation bar with action buttons
¦   ¦   +-- Undetectability.tsx # Stealth & isolation comparison
¦   +-- data/
¦   ¦   +-- content.ts          # Mock data, scenarios, and benchmarks
¦   +-- App.tsx           # Main application root & scroll observer
¦   +-- main.tsx          # DOM mount entry point
¦   +-- style.css         # Tailwind directives & custom keyframe animations
+-- .gitignore            # Git exclusion rules (dependencies, builds, agents)
+-- index.html            # HTML shell with Google Fonts
+-- package.json          # Project metadata & dependencies
+-- tailwind.config.js    # Tailwind theme configuration
+-- tsconfig.json         # TypeScript configuration
+-- vite.config.js        # Vite configuration
```

---

## ?? Getting Started

### Prerequisites

You will need **[Bun](https://bun.sh/)** installed on your machine.

> [!NOTE]
> This project uses **Bun** as its package manager and runtime.

### 1. Clone the Repository

```bash
git clone https://github.com/mahmudbuilds/vesper.git
cd vesper
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Start Development Server

```bash
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for Production

```bash
bun run build
```

To preview the production build locally:

```bash
bun run preview
```

---

## ?? Deployment

This project is deployed on **Vercel**:

- **Production URL**: [https://vesper-one-brown.vercel.app](https://vesper-one-brown.vercel.app)
- Build Command: `bun run build`
- Output Directory: `dist`

---

## ????? Author & Connect

Crafted with dedication by **Mahmud**:

- **GitHub**: [@mahmudbuilds](https://github.com/mahmudbuilds)
- **X (Twitter)**: [@mahmudbuilds](https://x.com/mahmudbuilds)

---

## ?? Disclaimer & License

This project is created strictly for **educational, portfolio, and frontend practice purposes**. Design inspiration is credited to [Cluely](https://cluely.com). All trademarks and brand names belong to their respective owners.
