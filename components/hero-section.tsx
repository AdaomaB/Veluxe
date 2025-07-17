import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <Image
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-full"
        height={1080}
        src="/placeholder.jpg"
        style={{
          aspectRatio: "1920/1080",
          objectFit: "cover",
        }}
        width={1920}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Veluxe Threads</h1>
        <p className="mt-4 max-w-[700px] text-lg md:text-xl">
          Elevate your style with our exquisite collection of fashion-forward apparel.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="#products">
            <Button className="bg-white text-black hover:bg-gray-200">Shop Now</Button>
          </Link>
          <Link href="#newsletter">
            <Button
              className="border border-white text-white hover:bg-white hover:text-black bg-transparent"
              variant="outline"
            >
              Join Newsletter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
