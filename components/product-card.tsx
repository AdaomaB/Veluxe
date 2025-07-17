import { Button } from "@/components/ui/button"
import Link from "next/link"
// components/product-card.tsx
import Image from "next/image"
import type { Product } from "@/lib/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View {product.name}</span>
      </Link>
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={300}
        height={400}
        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <CardContent className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-700 text-xl font-bold mt-1">{product.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 bg-white">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
