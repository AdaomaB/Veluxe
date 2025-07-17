// app/api/subscribe/route.ts
import { NextResponse } from "next/server"
import type { NewsletterSubscription } from "@/lib/types"

// In-memory storage for subscribed emails.
// NOTE: This array will reset every time the server restarts (e.g., on code changes or deployment).
// For a production application, you would use a persistent database.
const subscribedEmails: NewsletterSubscription[] = []

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 })
    }

    if (subscribedEmails.some((sub) => sub.email === email)) {
      return NextResponse.json({ message: "Email already subscribed" }, { status: 409 })
    }

    const newSubscription: NewsletterSubscription = {
      email,
      timestamp: new Date().toISOString(),
    }
    subscribedEmails.push(newSubscription)

    console.log("New subscription:", newSubscription)
    console.log("Current subscribers:", subscribedEmails)

    return NextResponse.json({ message: "Subscription successful!" }, { status: 200 })
  } catch (error) {
    console.error("Error subscribing email:", error)
    return NextResponse.json({ message: "Failed to subscribe email" }, { status: 500 })
  }
}
