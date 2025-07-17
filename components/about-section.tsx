// components/about-section.tsx
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Veluxe Threads</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Veluxe Threads blends luxury and simplicity to redefine modern fashion. We believe in crafting garments that
            are not just clothes, but an extension of your unique style and personality. Our commitment to quality,
            sustainability, and timeless design ensures that every piece tells a story of elegance and comfort.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded on the principle of accessible luxury, Veluxe Threads is dedicated to bringing you exquisite fashion
            that stands the test of time, empowering you to express yourself with confidence and grace.
          </p>
        </div>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="About Veluxe Threads"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
