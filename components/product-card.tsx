import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-60">
        <Image
          alt={product.name}
          className="object-cover w-full h-full"
          height={400}
          src={product.image || "/placeholder.svg"}
          style={{
            aspectRatio: "300/400",
            objectFit: "cover",
          }}
          width={300}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-1">{product.price}</p>
        <Button className="mt-4 w-full">Add to Cart</Button>
      </CardContent>
    </Card>
  )
}
