// components/newsletter-signup.tsx
"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast" // Assuming useToast is available

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Use NEXT_PUBLIC_VERCEL_URL for the base URL, falling back to localhost for development
      const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
      const apiUrl = `${baseUrl}/api/subscribe/` // Added trailing slash here

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Success!",
          description: data.message,
          variant: "default",
        })
        setEmail("") // Clear email on success
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Subscription error:", error)
      toast({
        title: "Error",
        description: "Failed to connect to the server.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="subscribe" className="py-12 md:py-20 bg-gray-100">
      <div className="container px-4 md:px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Join Our Newsletter</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Stay updated with our latest collections, exclusive offers, and fashion tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <Button type="submit" className="px-6 py-2" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <p className="text-sm text-gray-500">We respect your privacy. You can unsubscribe at any time.</p>
      </div>
    </section>
  )
}
