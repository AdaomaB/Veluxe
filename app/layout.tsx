import type React from "react"
// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster" // Assuming shadcn toaster is available

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Veluxe Threads - Style Redefined",
  description: "Discover timeless elegance and modern sophistication with Veluxe Threads fashion.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
