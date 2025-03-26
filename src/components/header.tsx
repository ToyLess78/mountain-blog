"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import MobileMenu from "./mobile-menu";
import LanguageSwitcher from "./language-switcher";

export default function Header() {
  const nav = useTranslations("navigation");

  return (
    <header className="relative z-100 px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold tracking-wider">
          MNTN
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/equipment"
            className="text-white hover:text-[#fbd784] transition-colors"
          >
            {nav("equipment")}
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-[#fbd784] transition-colors"
          >
            {nav("about")}
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-[#fbd784] transition-colors"
          >
            {nav("blog")}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
