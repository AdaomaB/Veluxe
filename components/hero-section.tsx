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
        src="/images/spring-dresses-hero.png" // Updated image path
        alt="Little girl running with shopping bags, promoting spring dresses"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 z-0 brightness-75" // Slightly darken for text readability
      />
      <div className="relative z-10 text-white px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg text-pink-500 md:text-pink-600">
          SPRING DRESSES
          <br />
          <span className="text-white">UNDER $50</span> {/* Adjusted text and color */}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md text-white">
          Discover the perfect style for the season.
        </p>
        <Link href="#products">
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-200 transition-colors font-bold">
            SHOP NOW {/* Adjusted button text and color */}
          </Button>
        </Link>
      </div>
    </section>
  )
}
