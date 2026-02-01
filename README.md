# Edwin Leong - Singapore Real Estate Advisory

A modern, editorial-style landing page for Edwin Leong, a Singapore real estate advisor with 30 years of experience. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎨 Design Philosophy

This website embraces an **anti-guru aesthetic** with:
- Clean, editorial typography (Playfair Display, Inter, Space Mono)
- Paper texture backgrounds with subtle patterns
- Polaroid-style image frames with tape effects
- Handwritten accents (Nothing You Could Do font)
- Scrapbook-inspired timeline layouts

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter, Space Mono, Nothing You Could Do)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, custom utilities
│   ├── layout.tsx       # Root layout with font configuration
│   └── page.tsx         # Main page (composes all sections)
├── components/
│   ├── index.ts         # Barrel exports
│   ├── Navbar.tsx       # Floating navigation with scroll effect
│   ├── HeroSection.tsx  # Editorial hero with frames & memo card
│   ├── ScarsSection.tsx # Timeline of lessons learned
│   ├── ReceiptsSection.tsx # Ledger-style track record
│   ├── PartnershipSection.tsx # Family/lifestyle collage
│   ├── ContactSection.tsx # Contact form with stamp effect
│   ├── Footer.tsx       # Footer with navigation & socials
│   └── ui/
│       └── Polaroid.tsx # Reusable polaroid image frame
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/usama-1998/edwin-leon.git
cd edwin-leon
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach with smooth transitions
- **Editorial Layout**: Magazine-style hero with overlapping frames
- **Interactive Timeline**: Scroll-based scars/lessons section
- **Ledger Track Record**: Financial table with status indicators
- **Contact Form**: Styled as a "contract" with stamp effect
- **Smooth Scroll**: Navigation anchor links

## 📄 License

This project is private and proprietary.

---

Built with ❤️ for Edwin Leong
