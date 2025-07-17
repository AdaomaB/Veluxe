import { NextResponse } from "next/server"

// In-memory storage for demonstration purposes
const subscribers: string[] = []

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 })
    }

    if (subscribers.includes(email)) {
      return NextResponse.json({ message: "Email already subscribed" }, { status: 409 })
    }

    subscribers.push(email)
    console.log("New subscriber:", email)
    console.log("Current subscribers:", subscribers)

    return NextResponse.json({ message: "Subscription successful!" }, { status: 200 })
  } catch (error) {
    console.error("Error subscribing:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
