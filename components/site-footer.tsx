// components/site-footer.tsx
import Link from "next/link"
import { MountainIcon } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6 text-white" />
          <span className="text-lg font-semibold text-white">Veluxe Threads</span>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Veluxe Threads. All rights reserved.</p>
      </div>
    </footer>
  )
}
