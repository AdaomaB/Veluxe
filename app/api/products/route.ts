// app/api/products/route.ts
import { NextResponse } from "next/server"
import type { Product } from "@/lib/types"

export async function GET() {
  // Static array of product objects
  const products: Product[] = [
    { id: "1", name: "Classic White Shirt", price: "$35.00", image: "/images/product-shirt.png" },
    { id: "2", name: "Denim Jacket", price: "$89.99", image: "/images/product-jacket.png" },
    { id: "3", name: "Elegant Black Dress", price: "$120.00", image: "/images/product-dress.png" },
    { id: "4", name: "Casual Hoodie", price: "$49.50", image: "/images/product-hoodie.png" },
    { id: "5", name: "Slim Fit Jeans", price: "$65.00", image: "/images/product-jeans.png" },
    { id: "6", name: "Summer Floral Skirt", price: "$42.75", image: "/images/product-skirt.png" },
    { id: "7", name: "Leather Boots", price: "$150.00", image: "/placeholder.svg?height=400&width=300" },
    { id: "8", name: "Striped T-Shirt", price: "$25.00", image: "/placeholder.svg?height=400&width=300" },
  ]

  return NextResponse.json(products)
}
