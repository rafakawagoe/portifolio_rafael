# 🚀 Rafael Kawagoe's Portfolio

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-BR.md)

Professional portfolio built with React, TypeScript, and Vite, showcasing projects, skills, and professional experience. Supports multiple languages (Portuguese and English) and features complete Google Analytics integration.

🌐 **[View Live Site](https://rafakawagoe.github.io/portifolio_rafael/)**

## ✨ Features

- 🎨 **Modern & Responsive Design** - Clean, professional interface that works on all devices
- 🌍 **Bilingual** - Support for Portuguese (pt-BR) and English (en-US) with dynamic switching
- ⚡ **Optimized Performance** - Lazy loading, code splitting, and React.memo for fast loading
- 📊 **Google Analytics** - Comprehensive event and user behavior tracking
- ♿ **Accessible** - ARIA attributes and accessibility best practices
- 🎯 **SEO Optimized** - Open Graph and Twitter Card meta tags for better visibility
- 🔄 **Smooth Navigation** - Fluid transitions and animations between sections
- 🎪 **Interactive Carousels** - Showcase of projects and professional experiences

## 🛠️ Tech Stack

### Core

- **React 19.1.1** - UI library with latest features
- **TypeScript 5.9.3** - Type safety and better DX
- **Vite 7.1.14** - Ultra-fast build tool with Rolldown

### Routing & Internationalization

- **react-router-dom 7.9.5** - SPA navigation
- **i18next 25.6.2** - Internationalization system
- **react-i18next 16.3.1** - React integration with i18next

### SEO & Analytics

- **react-helmet-async 2.0.5** - Meta tags management
- **Google Analytics** - Custom event tracking

### UI & Icons

- **react-icons 5.5.0** - Icon library

### Code Quality

- **ESLint 9.36.0** - Linting and best practices
- **Prettier 3.6.2** - Consistent formatting
- **Husky 9.1.7** - Git hooks
- **lint-staged 16.2.6** - Commit validation

### Deploy

- **gh-pages 6.3.0** - Automated GitHub Pages deployment

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/rafakawagoe/portifolio_rafael.git

# Navigate to directory
cd portifolio_rafael

# Install dependencies (use --legacy-peer-deps for React 19)
npm install --legacy-peer-deps
```

## ⚙️ Configuration

Create a `.env.local` file in the project root with your settings:

```env
# Social Media Links
VITE_WHATSAPP_NUMBER=+5511999999999
VITE_LINKEDIN_URL=https://linkedin.com/in/your-profile
VITE_EMAIL=your.email@example.com
VITE_GITHUB_URL=https://github.com/your-username
VITE_PHONE=+5511999999999

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🚀 Available Scripts

```bash
# Development
npm run dev              # Start development server

# Build
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues automatically
npm run format           # Format code with Prettier

# Deploy
npm run deploy           # Build and deploy to GitHub Pages
```

## 📊 Analytics Tracking

The project includes comprehensive event tracking:

- **Page Views** - Automatic page view tracking
- **Scroll Tracking** - Scroll depth tracking (25%, 50%, 75%, 100%)
- **Time on Page** - Time spent on each page
- **Navigation Clicks** - Navigation link clicks
- **Social Media Clicks** - Social link clicks
- **Language Changes** - Language switch events
- **Button Interactions** - CTA button clicks
- **Project Clicks** - Project card interactions
- **Carousel Interactions** - Carousel navigation

## 🏗️ Project Structure

```
portifolio_rafa/
├── public/              # Static files
│   └── 404.html        # SPA redirect for GitHub Pages
├── src/
│   ├── assets/         # Images and resources
│   ├── components/     # React components
│   │   ├── Button/
│   │   ├── Navbar/
│   │   ├── ErrorBoundary/
│   │   ├── LoadingSpinner/
│   │   ├── SEO/
│   │   └── ...
│   ├── features/       # Features/pages
│   │   ├── HomePage/
│   │   └── AboutPage/
│   ├── hooks/          # Custom hooks
│   ├── locales/        # translation files
│   ├── services/       # API and services
│   ├── utils/          # Utilities and helpers
│   │   └── analytics.ts
│   ├── i18n/           # i18n configuration
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── .husky/             # Git hooks
├── .env.local          # Environment variables (not committed)
└── index.html          # HTML template
```

## 🎨 Best Practices Implemented

- ✅ **Error Boundaries** - Graceful error handling
- ✅ **Lazy Loading** - On-demand route loading
- ✅ **React.memo** - Re-render optimization
- ✅ **TypeScript Strict Mode** - Maximum type safety
- ✅ **CSS Variables** - Design tokens for consistency
- ✅ **Accessibility** - ARIA labels and semantic attributes
- ✅ **SEO** - Complete meta tags and Open Graph
- ✅ **Code Quality** - ESLint + Prettier + Husky
- ✅ **Conventional Commits** - Standardized commit history

## 🚢 Deploy

The project is configured for automated GitHub Pages deployment:

```bash
npm run deploy
```

This will:

1. Build the project (`npm run build`)
2. Deploy the `dist/` folder to the `gh-pages` branch
3. Make it available at `https://[username].github.io/portifolio_rafael/`

### GitHub Pages Configuration

1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Save settings

## 🔧 Troubleshooting

### React 19 and Dependencies

If you encounter peer dependency errors, use:

```bash
npm install --legacy-peer-deps
```

### Analytics not working in production

Make sure to configure `VITE_GA_MEASUREMENT_ID` in GitHub environment variables:

- Settings → Secrets and variables → Actions
- Add `VITE_GA_MEASUREMENT_ID` with your Google Analytics ID

## 📝 License

This project is for personal use and available as an open-source portfolio.

## 👤 Author

**Rafael Kawagoe**

- GitHub: [@rafakawagoe](https://github.com/rafakawagoe)
- LinkedIn: [Rafael Kawagoe](https://www.linkedin.com/in/rafaelkawagoe/)

---

⭐ If this project was helpful, consider giving it a star!
