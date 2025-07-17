import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Veluxe Threads</h3>
          <p className="text-sm">Elevating your style with exquisite and sustainable fashion.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link className="hover:text-white transition-colors" href="#">
              Home
            </Link>
            <Link className="hover:text-white transition-colors" href="#products">
              Shop
            </Link>
            <Link className="hover:text-white transition-colors" href="#about">
              About Us
            </Link>
            <Link className="hover:text-white transition-colors" href="#newsletter">
              Newsletter
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="text-sm">
            123 Fashion Ave, Style City, ST 12345
            <br />
            Email: info@veluxethreads.com
            <br />
            Phone: (123) 456-7890
          </p>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Veluxe Threads. All rights reserved.</p>
      </div>
    </footer>
  )
}
