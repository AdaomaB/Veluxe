import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Veluxe Threads</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Veluxe Threads is a fashion brand dedicated to providing high-quality, stylish, and sustainable clothing
                for the modern individual. We believe in timeless designs that empower you to express your unique style.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>To create fashion that is both beautiful and responsible.</CardDescription>
              </CardHeader>
              <CardContent>
                We are committed to ethical sourcing, sustainable practices, and creating durable pieces that stand the
                test of time.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Values</CardTitle>
                <CardDescription>Quality, Sustainability, and Style.</CardDescription>
              </CardHeader>
              <CardContent>
                Every garment is crafted with attention to detail, ensuring comfort, fit, and longevity.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
