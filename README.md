# Veluxe Threads E-commerce Landing Page

This is a simple full-stack e-commerce landing page for a fashion brand, "Veluxe Threads," built with Next.js 15 and Tailwind CSS.

## Features

- **Hero Section**: A prominent hero section to showcase the brand.
- **Product Grid**: Displays a grid of products with names, prices, and images. Product data is served from a Next.js API Route.
- **About Section**: Information about the brand.
- **Newsletter Signup**: A form to subscribe to the newsletter.
- **Sticky Navigation Bar**: A navigation bar that stays at the top of the page.
- **Next.js API Routes**: Backend endpoints for serving product data and handling newsletter subscriptions.

## Getting Started

1.  **Clone the repository**:
    \`\`\`bash
    git clone <repository-url>
    cd veluxe-threads
    \`\`\`
2.  **Install dependencies**:
    \`\`\`bash
    npm install
    # or
    yarn install
    \`\`\`
3.  **Run the development server**:
    \`\`\`bash
    npm run dev
    # or
    yarn dev
    \`\`\`
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `app/`: Contains the Next.js App Router pages and API routes.
    -   `api/products/route.ts`: API route to serve static product data.
    -   `api/subscribe/route.ts`: API route to handle newsletter subscriptions (currently in-memory).
    -   `page.tsx`: The main landing page component.
    -   `layout.tsx`: The root layout for the application.
    -   `globals.css`: Global CSS styles.
-   `components/`: Reusable React components.
    -   `hero-section.tsx`: The hero section component.
    -   `product-grid.tsx`: Displays a grid of `ProductCard` components.
    -   `product-card.tsx`: Displays individual product details.
    -   `about-section.tsx`: The about section component.
    -   `newsletter-signup.tsx`: The newsletter signup form.
    -   `site-header.tsx`: The sticky navigation bar.
    -   `site-footer.tsx`: The footer component.
    -   `ui/`: Shadcn/ui components.
-   `lib/`: Utility functions and types.
    -   `types.ts`: TypeScript type definitions.
    -   `utils.ts`: General utility functions.
-   `public/`: Static assets like images.
-   `styles/`: Additional CSS files (if any).
-   `tailwind.config.ts`: Tailwind CSS configuration.
-   `next.config.mjs`: Next.js configuration.

## Deployment

This project can be easily deployed to Vercel.

\`\`\`bash
npm run build
npm start
