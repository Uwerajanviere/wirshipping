import Link from "next/link"
import { Facebook, Instagram, Heart, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto">
      <div className="bg-blue-600 py-12 px-4">
        <div className="container mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="text-3xl font-bold text-white">
              Worship
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-white">
            <Link href="/#listen-section" className="hover:underline">
              LISTEN
            </Link>
            <span className="hidden md:inline text-white/50">|</span>
            <Link href="/about" className="hover:underline">
              ABOUT
            </Link>
            <span className="hidden md:inline text-white/50">|</span>
            <Link href="/contact" className="hover:underline">
              CONTACT US
            </Link>
            <span className="hidden md:inline text-white/50">|</span>
            <Link href="/privacy" className="hover:underline">
              PRIVACY POLICY
            </Link>
          </div>

          {/* Donate Button - Mobile */}
          <div className="flex justify-center mb-6 md:hidden">
            <form action="https://www.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="hosted_button_id" value="Z4UPJDXNDFCQJ" />
              <input 
                type="image" 
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" 
                name="submit" 
                title="PayPal - The safer, easier way to pay online!" 
                alt="Donate with PayPal button"
                className="h-10" 
              />
              <img alt="" src="https://www.paypal.com/en_RW/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-4 mb-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:opacity-90 transition"
            >
              <Facebook className="h-6 w-6 text-blue-600" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:opacity-90 transition"
            >
              <Instagram className="h-6 w-6 text-blue-600" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:opacity-90 transition"
            >
              <Youtube className="h-6 w-6 text-blue-600" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-white/80 text-sm px-4">
            <p>
              © {new Date().getFullYear()} Atlantic Gateway Communications, Inc. Atlantic Gateway Communications, Inc.
              serves and ministers to people globally through its ministries – Giramahoro, Worship, Hymns &
              Favorites.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
