"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, User, Instagram, Twitter } from "lucide-react"
import { cn } from "~/lib/utils"

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", handleEsc)

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      {/* Burger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center p-2 text-white hover:text-[#fbd784] transition-colors"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-[#fbd784] transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full pb-20">
          <div className="text-center space-y-8">
            <Link
              href="/"
              className="block text-white text-2xl font-bold tracking-wider mb-12"
              onClick={() => setIsOpen(false)}
            >
              MNTN
            </Link>

            <nav className="flex flex-col space-y-6">
              <Link
                href="/equipment"
                className="text-white text-xl hover:text-[#fbd784] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Equipment
              </Link>
              <Link
                href="#about"
                className="text-white text-xl hover:text-[#fbd784] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About us
              </Link>
              <Link
                href="#blog"
                className="text-white text-xl hover:text-[#fbd784] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/account"
                className="flex items-center justify-center text-white text-xl hover:text-[#fbd784] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="mr-2 h-5 w-5" />
                <span>Account</span>
              </Link>
            </nav>

            <div className="flex justify-center space-x-6 mt-12">
              <Link href="#" className="text-white hover:text-[#fbd784] transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-[#fbd784] transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

