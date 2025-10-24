# HOLD - Memecoin Website

A cinematic memecoin website featuring Teacher Siziy and a dark black-gold matrix aesthetic. Built with React, TypeScript, Tailwind CSS, and Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd hold-memecoin-website
```

2. Install dependencies:
```bash
npm install
```

3. **IMPORTANT: Add Images**
   - Add all 22 required images to `/public/images/` folder
   - See `/public/images/README.md` for the complete list
   - Make sure filenames use underscores (e.g., `cz_orbital.png`)

4. Start development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🌐 Deploy

### Deploy to Netlify

#### Option 1: Deploy via Git
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build settings are auto-detected from `netlify.toml`
6. Click "Deploy site"

#### Option 2: Deploy via Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### Deploy to Vercel

#### Via Git
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Build settings are auto-detected from `vercel.json`
6. Click "Deploy"

#### Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://<username>.github.io/<repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
├── public/
│   └── images/          # All 22 image assets (YOU MUST ADD THESE)
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   └── figma/          # Figma-specific utilities
├── styles/
│   └── globals.css     # Global styles & Tailwind config
├── App.tsx             # Main app component
├── main.tsx            # App entry point
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration
```

## ⚠️ Important: Images Required

Before deploying, you MUST add all 22 images to `/public/images/`:

1. hold_logo.png
2. anndy_lian.png
3. **cz.png** (for "Who Accepted HOLD" section)
4. **cz_orbital.png** (for "Orbital Quotes" section)
5. saylor.png
6. binance_logo.png
7. vitalik.png
8. masayoshi_son.png
9. elon_musk.png
10. bruce_lee.png
11. ronaldo.png
12. jack_ma.png
13. musashi.png
14. michael_jordan.png
15. son_goku.png
16. saitama.png
17. socrates.png
18. confucius.png
19. leonardo.png
20. walt_disney.png
21. naruto.png
22. neo.png

See `/public/images/README.md` for more details.

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS 4.0** - Utility-first CSS
- **Motion** (Framer Motion) - Animations
- **Shadcn/UI** - Component library
- **Lucide React** - Icons
- **Recharts** - Charts & visualizations

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Features

- Cinematic dark black-gold matrix aesthetic
- Fully responsive mobile design
- Advanced animations with Motion
- Teacher Siziy narrative journey
- Interactive sections:
  - Entry Screen
  - Hero Section
  - What is HOLD
  - The Choice
  - The Rules
  - Orbital Quotes
  - Who Accepted HOLD
  - Our Mission
  - The Path
  - Tokenomics
  - Security
  - Roadmap
  - The Community

## 📄 License

All rights reserved.

## 🤝 Contributing

This is a private project for the HOLD memecoin community.
