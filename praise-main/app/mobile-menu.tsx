"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-black/95 border-white/10 p-0">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-white/10 flex justify-end">
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>
          <nav className="flex flex-col p-4 gap-4">
            <a
              href="#listen-section"
              className="text-white text-lg py-2 hover:text-white/80 transition"
              onClick={() => setOpen(false)}
            >
              Listen
            </a>
            <Link
              href="/about"
              className="text-white text-lg py-2 hover:text-white/80 transition"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white text-lg py-2 hover:text-white/80 transition"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/support"
              className="text-white text-lg py-2 hover:text-white/80 transition"
              onClick={() => setOpen(false)}
            >
              Support Us
            </Link>
          </nav>
          <div className="mt-auto p-4 flex flex-col gap-4">
            <Link href="/#listen-section" onClick={() => setOpen(false)}>
              <Button className="w-full bg-white text-blue-900 hover:bg-white/90">Listen Live</Button>
            </Link>
            <Link href="/support" onClick={() => setOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Give Now</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
