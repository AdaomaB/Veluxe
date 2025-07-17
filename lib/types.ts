// lib/types.ts
export interface Product {
  id: string
  name: string
  price: string // Keeping price as string as per user's example "$35"
  image: string
}

export interface NewsletterSubscription {
  email: string
  timestamp: string
}
