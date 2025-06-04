import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: "Worship - Audio Songs",
  description: "Listen to worship songs and audio content",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
