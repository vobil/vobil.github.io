# Vobil.com - AI Phone Agent Website

A modern, production-ready website for Vobil.com featuring a futuristic gaming UI that serves as the primary discovery and integration hub for AI agents seeking phone automation capabilities.

## 🚀 Features

- **Futuristic Gaming UI** - Dark theme with neon purple/cyan accents and glowing elements
- **Interactive Demo** - Live simulation of AI agent phone calls with real-time transcription
- **Dual-Audience Design** - Serves both human developers and AI agents discovering capabilities
- **Responsive Design** - Optimized for all devices from mobile to desktop
- **Production-Ready** - Built with performance, accessibility, and SEO in mind
- **Modern Tech Stack** - React 18, TypeScript, Tailwind CSS, and Vite

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn** (version 1.22 or higher)
- **Git** for version control

You can check your versions with:
```bash
node --version
npm --version
git --version
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vobil-website.git
   cd vobil-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   Or if you prefer yarn:
   ```bash
   yarn install
   ```

## 🏃‍♂️ Development

### Start Development Server

To start the development server with hot reload:

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

The development server will start at `http://localhost:5173` by default. The page will automatically reload when you make changes to the source files.

### Development Features

- **Hot Module Replacement (HMR)** - Instant updates without losing component state
- **TypeScript Support** - Full type checking and IntelliSense
- **ESLint Integration** - Code quality and consistency checking
- **Tailwind CSS** - Utility-first CSS framework with JIT compilation

### Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with interactive demo
│   ├── UseCases.tsx     # Three use case showcases
│   ├── AIAgentDiscovery.tsx  # AI agent integration section
│   ├── TechnicalCapabilities.tsx  # Technical specs grid
│   ├── Pricing.tsx      # Pricing tiers
│   ├── DeveloperResources.tsx  # Developer tools section
│   ├── SocialProof.tsx  # Testimonials and stats
│   └── Footer.tsx       # Footer with dual-audience content
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── index.css            # Global styles and Tailwind imports
└── vite-env.d.ts        # Vite type definitions
```

### Code Quality

Run ESLint to check for code quality issues:
```bash
npm run lint
```

Fix auto-fixable ESLint issues:
```bash
npm run lint -- --fix
```

## 🔍 Preview

To preview the production build locally:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

The preview server will start at `http://localhost:4173` by default.

## 🚀 Deployment

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This will:
- Bundle and minify all JavaScript and CSS
- Optimize images and assets
- Generate source maps for debugging
- Create a `dist/` folder with all production files

### Deployment Options

#### 1. Netlify (Recommended)

**Option A: Drag and Drop**
1. Run `npm run build`
2. Drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

**Option B: Git Integration**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on every push

**Netlify Configuration** (create `netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 2. Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

**Vercel Configuration** (create `vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

#### 3. GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Run `npm run build && npm run deploy`

#### 4. AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Upload `dist/` contents to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain and SSL certificate

#### 5. Docker Deployment

**Dockerfile**:
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Build and run**:
```bash
docker build -t vobil-website .
docker run -p 80:80 vobil-website
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
# API Configuration
VITE_API_BASE_URL=https://api.vobil.com
VITE_MCP_SERVER_URL=mcp://api.vobil.com/v1

# Analytics
VITE_GA_TRACKING_ID=GA_MEASUREMENT_ID
VITE_HOTJAR_ID=HOTJAR_SITE_ID

# Feature Flags
VITE_ENABLE_DEMO=true
VITE_ENABLE_ANALYTICS=true
```

### Tailwind CSS Configuration

Customize the design system in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom brand colors
        'vobil-purple': '#8B5CF6',
        'vobil-cyan': '#06B6D4',
      },
      fontFamily: {
        // Custom fonts
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

### Vite Configuration

Customize build settings in `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Customize build output
    outDir: 'dist',
    sourcemap: true,
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  // Development server configuration
  server: {
    port: 5173,
    host: true, // Allow external connections
  },
});
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Responsive Design**: Test on mobile, tablet, and desktop
- [ ] **Interactive Elements**: Verify all buttons, links, and animations work
- [ ] **Performance**: Check loading times and smooth scrolling
- [ ] **Accessibility**: Test keyboard navigation and screen reader compatibility
- [ ] **Cross-Browser**: Test on Chrome, Firefox, Safari, and Edge

### Performance Optimization

1. **Image Optimization**: Use WebP format and appropriate sizes
2. **Code Splitting**: Leverage Vite's automatic code splitting
3. **Bundle Analysis**: Use `npm run build -- --analyze` to analyze bundle size
4. **Lighthouse Audit**: Run Chrome DevTools Lighthouse for performance insights

## 🐛 Troubleshooting

### Common Issues

**Issue**: `npm run dev` fails with port already in use
```bash
# Solution: Use a different port
npm run dev -- --port 3000
```

**Issue**: Build fails with TypeScript errors
```bash
# Solution: Check and fix TypeScript errors
npm run lint
# Fix errors and rebuild
npm run build
```

**Issue**: Styles not loading correctly
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Images not loading in production
- Ensure images are in the `public/` directory
- Use absolute paths starting with `/`
- Check build output in `dist/` folder

### Performance Issues

If the site loads slowly:
1. Check network tab in browser DevTools
2. Optimize images (use WebP, appropriate sizes)
3. Enable gzip compression on your server
4. Use a CDN for static assets

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Lucide React Icons](https://lucide.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [troubleshooting section](#-troubleshooting)
2. Search existing [GitHub Issues](https://github.com/your-username/vobil-website/issues)
3. Create a new issue with detailed information
4. Contact the development team at dev@vobil.com

---

**Built with ❤️ for the AI agent community**