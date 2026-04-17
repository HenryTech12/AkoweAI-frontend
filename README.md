# AkoweAI Frontend

> AI Business Co-Pilot for Nigerian Traders - Frontend Application

## Overview

The AkoweAI frontend is a mobile-first landing page and web application built with Next.js, Tailwind CSS, and Framer Motion. The primary goal is to convert traders to WhatsApp and provide a seamless experience on all devices.

## Features

-   ✨ **Modern Design** - Beautiful, responsive UI with Framer Motion animations
-   📱 **Mobile-First** - Optimized for all devices, especially mobile
-   ⚡ **Fast Performance** - Optimized for slow connections (2G/3G)
-   🎤 **WhatsApp Integration** - Direct integration with WhatsApp CTA
-   📊 **Analytics** - Built-in Google Analytics tracking
-   🔒 **Privacy** - GDPR-compliant privacy policy and terms
-   🌐 **SEO Optimized** - Full SEO configuration with next-seo

## Tech Stack

-   **Framework**: Next.js 14
-   **Styling**: Tailwind CSS
-   **Animation**: Framer Motion
-   **Forms**: React Hook Form
-   **Analytics**: Google Analytics
-   **Deployment**: Vercel/Netlify

## Project Structure

```
akowe-landing/
├── public/              # Static assets
│   ├── images/
│   ├── videos/
│   └── favicon.ico
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/          # Next.js pages
│   │   ├── _app.jsx
│   │   ├── _document.jsx
│   │   ├── index.jsx
│   │   ├── about.jsx
│   │   ├── privacy.jsx
│   │   └── terms.jsx
│   ├── hooks/          # Custom React hooks
│   │   └── useWhatsApp.js
│   ├── utils/          # Utility functions
│   │   ├── analytics.js
│   │   ├── whatsapp.js
│   │   ├── helpers.js
│   │   └── constants.js
│   └── styles/         # Global styles
│       ├── globals.css
│       └── variables.css
├── .env.local          # Environment variables
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS config
├── tsconfig.json       # TypeScript config
└── package.json        # Dependencies
```

## Getting Started

### Prerequisites

-   Node.js 16+ and npm/yarn
-   Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AkoweAI/frontend.git
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=2349012345678
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_API_BASE_URL=https://api.akowe.ai
```

4. Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application running.

## Development

### Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm start` - Start production server
-   `npm run lint` - Run ESLint
-   `npm run export` - Export static site

### Styling

This project uses **Tailwind CSS** for styling. Customize the theme in `tailwind.config.js`.

### Components

All reusable components are in `src/components/`. Each component is self-contained and can be reused across pages.

### Pages

Next.js pages are in `src/pages/`. Each file automatically becomes a route.

### Analytics

Google Analytics is automatically initialized in `_app.jsx`. Track custom events using:

```javascript
import { trackEvent } from "@/utils/analytics";

trackEvent("category", "action", "label");
```

### WhatsApp Integration

To customize WhatsApp messaging, edit `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=234XXXXXXXXXX
```

Use the `WhatsAppButton` component:

```jsx
<WhatsAppButton
    label="Start Free"
    message="Hi AkoweAI! I want to get started"
    ctaType="primary"
/>
```

## Performance Optimization

### Image Optimization

Images are automatically optimized using Next.js Image component. Place images in `public/` directory.

### Code Splitting

Dynamic imports are used for large components to reduce initial bundle size.

### Caching

-   Static pages are cached by default
-   API responses are cached appropriately
-   CDN cacheing is configured in `next.config.js`

## SEO

SEO is configured with `next-seo`. Update default SEO in `src/pages/_app.jsx`.

For page-specific SEO:

```jsx
<NextSeo title="Page Title" description="Page description" />
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically deploys on each push

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`

### Custom Server

```bash
npm run build
npm start
```

## Environment Variables

Required environment variables:

| Variable                      | Description                        |
| ----------------------------- | ---------------------------------- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp business number (Nigeria) |
| `NEXT_PUBLIC_GA_ID`           | Google Analytics ID                |
| `NEXT_PUBLIC_API_BASE_URL`    | Backend API URL                    |

## Troubleshooting

### WhatsApp Link Not Opening

-   Check phone number format (should be 234XXXXXXXXXX)
-   Ensure wa.me is not blocked
-   Use an actual device (WhatsApp Web has limitations)

### Slow Performance

-   Check Core Web Vitals in PageSpeed Insights
-   Optimize images - use Next.js Image component
-   Reduce JavaScript bundle size

### Analytics Not Tracking

-   Verify GA ID in `.env.local`
-   Check browser console for errors
-   Ensure gtag library is loaded

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open a Pull Request

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Support

For support:

-   Email: support@akowe.ai
-   WhatsApp: See `.env.local`
-   Issues: GitHub Issues

## Changelog

### v1.0.0 (April 2026)

-   Initial release
-   Landing page with hero, features, and CTA sections
-   WhatsApp integration
-   Mobile-responsive design
-   Analytics setup
-   Privacy policy and terms of service pages

---

**Made with ❤️ for African traders**
