// components/hero-section.tsx
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden"
    >
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Fashion brand hero background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 z-0 brightness-75"
      />
      <div className="relative z-10 text-white px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">Veluxe Threads</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Style Redefined. Discover timeless elegance and modern sophistication.
        </p>
        <Link href="#products">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-colors">
            Shop Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
