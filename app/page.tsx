// app/page.tsx
import HeroSection from "@/components/hero-section"
import ProductGrid from "@/components/product-grid"
import AboutSection from "@/components/about-section"
import NewsletterSignup from "@/components/newsletter-signup"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import type { Product } from "@/lib/types"

async function getProducts(): Promise<Product[]> {
  const res = await fetch("/api/products", { cache: "no-store" })
  if (!res.ok) {
    // It's good practice to throw an error if the fetch fails
    throw new Error("Failed to fetch products from API")
  }
  return res.json()
}

export default async function Home() {
  const products: Product[] = await getProducts()

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProductGrid products={products} />
        <AboutSection />
        <NewsletterSignup />
      </main>
      <SiteFooter />
    </div>
  )
}
