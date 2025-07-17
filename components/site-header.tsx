// components/site-header.tsx
import Link from "next/link"
import { MountainIcon } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <MountainIcon className="h-6 w-6" />
          <span>Veluxe Threads</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#home" className="hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="#products" className="hover:underline underline-offset-4">
            Products
          </Link>
          <Link href="#about" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#subscribe" className="hover:underline underline-offset-4">
            Subscribe
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile navigation can be added here, e.g., a Sheet/Drawer component */}
          <span className="text-sm">Menu</span>
        </div>
      </div>
    </header>
  )
}
