"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Menu, X, Youtube } from "lucide-react";
import { cn } from "~/lib/utils";
import { useTranslations } from "next-intl";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navigation");

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Burger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center p-2 text-white hover:text-yellow font-semibold transition-colors"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-yellow font-semibold transition-colors"
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
                className="text-white text-xl hover:text-yellow font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("equipment")}
              </Link>
              <Link
                href="#about"
                className="text-white text-xl hover:text-yellow font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("about")}
              </Link>
              <Link
                href="#blog"
                className="text-white text-xl hover:text-yellow font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("blog")}
              </Link>
            </nav>

            <div className="flex justify-center space-x-6 mt-12">
              <Link
                href="#"
                className="text-white hover:text-yellow font-semibold transition-colors"
              >
                <Youtube className="size-6" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-yellow font-semibold transition-colors"
              >
                <Facebook className="size-6" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-yellow font-semibold transition-colors"
              >
                <Instagram className="size-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
