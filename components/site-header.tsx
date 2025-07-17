import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm dark:bg-gray-950/90 border-b border-gray-200 dark:border-gray-800">
      <div className="container h-16 flex items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" href="#">
          <ShirtIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Veluxe Threads</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors" href="#">
            Home
          </Link>
          <Link className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors" href="#products">
            Shop
          </Link>
          <Link className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors" href="#about">
            About
          </Link>
          <Link className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors" href="#newsletter">
            Newsletter
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden bg-transparent" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 p-4">
              <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50 transition-colors" href="#">
                Home
              </Link>
              <Link
                className="font-medium hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
                href="#products"
              >
                Shop
              </Link>
              <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50 transition-colors" href="#about">
                About
              </Link>
              <Link
                className="font-medium hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
                href="#newsletter"
              >
                Newsletter
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function ShirtIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84h16.28a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      <path d="M10 14v-2a4 4 0 0 1 4 0v2" />
      <path d="M8 22h8" />
      <path d="M12 14v8" />
    </svg>
  )
}
