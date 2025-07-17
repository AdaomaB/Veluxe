// app/page.tsx
import HeroSection from "@/components/hero-section"
import ProductGrid from "@/components/product-grid"
import AboutSection from "@/components/about-section"
import NewsletterSignup from "@/components/newsletter-signup"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import type { Product } from "@/lib/types"

export default async function Home() {
  // Static array of product objects, replacing the backend fetch
  const products: Product[] = [
    { id: "1", name: "Classic White Shirt", price: "$35.00", image: "/placeholder.svg?height=400&width=300" },
    { id: "2", name: "Denim Jacket", price: "$89.99", image: "/placeholder.svg?height=400&width=300" },
    { id: "3", name: "Elegant Black Dress", price: "$120.00", image: "/placeholder.svg?height=400&width=300" },
    { id: "4", name: "Casual Hoodie", price: "$49.50", image: "/placeholder.svg?height=400&width=300" },
    { id: "5", name: "Slim Fit Jeans", price: "$65.00", image: "/placeholder.svg?height=400&width=300" },
    { id: "6", name: "Summer Floral Skirt", price: "$42.75", image: "/placeholder.svg?height=400&width=300" },
    { id: "7", name: "Leather Boots", price: "$150.00", image: "/placeholder.svg?height=400&width=300" },
    { id: "8", name: "Striped T-Shirt", price: "$25.00", image: "/placeholder.svg?height=400&width=300" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        {/* ProductGrid now directly uses the static products array */}
        <ProductGrid products={products} />
        <AboutSection />
        <NewsletterSignup />
      </main>
      <SiteFooter />
    </div>
  )
}
