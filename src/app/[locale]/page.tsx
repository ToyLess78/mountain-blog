"use client"

import Link from "next/link"
import {ChevronDown, Facebook, Instagram, Youtube} from "lucide-react"
import HeroCarousel from "~/components/hero-carousel"
import Clouds from "~/components/clouds"
import {ContentArticle} from "~/components/content-article"
import MobileMenu from "~/components/mobile-menu"
import LanguageSwitcher from "~/components/language-switcher"
import {useTranslations} from "next-intl"

export default function Home() {
  const nav = useTranslations("navigation")
  const hero = useTranslations("hero")
  const footer = useTranslations("footer")
  const content = useTranslations("content")

  const contentSections = [
    {
      number: content("section1.number"),
      badge: content("section1.badge"),
      title: content("section1.title"),
      subtitle: content("section1.subtitle"),
      description: content("section1.description"),
      linkHref: "#",
      linkText: content("section1.linkText"),
      image: "/blog/blog-01.png",
      imageAlt: "Hiker on mountain trail",
      reverse: true,
    },
    {
      number: content("section2.number"),
      badge: content("section2.badge"),
      title: content("section2.title"),
      subtitle: content("section2.subtitle"),
      description: content("section2.description"),
      linkHref: "/equipment",
      linkText: content("section2.linkText"),
      image: "/blog/blog-02.png",
      imageAlt: "Hiker with backpack looking at mountains",
      reverse: false,
    },
    {
      number: content("section3.number"),
      badge: content("section3.badge"),
      title: content("section3.title"),
      subtitle: content("section3.subtitle"),
      description: content("section3.description"),
      linkHref: "#",
      linkText: content("section3.linkText"),
      image: "/blog/blog-03.png",
      imageAlt: "Hand holding compass with mountain view",
      reverse: true,
    },
  ]

  return (
      <div className="relative text-white">
        <Clouds />
        {/* Hero Section with Carousel */}
        <section className="relative min-h-screen overlay-gradient bg-linear-to-b from-cyan-100 to-background">
          {/* Navigation */}
          <header className="relative z-20 px-6 md:px-12 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <Link href="/" className="text-white text-2xl font-bold tracking-wider">
                MNTN
              </Link>

              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/equipment" className="text-white hover:text-yellow font-semibold transition-colors">
                  {nav("equipment")}
                </Link>
                <Link href="#about" className="text-white hover:text-yellow font-semibold transition-colors">
                  {nav("about")}
                </Link>
                <Link href="#blog" className="text-white hover:text-yellow font-semibold transition-colors">
                  {nav("blog")}
                </Link>
              </nav>

              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <MobileMenu />
              </div>
            </div>
          </header>

          {/* Social Sidebar */}
          <div className="absolute left-6 top-5/9 -translate-y-1/2 z-20 hidden md:flex flex-col items-center">
            <div className="text-white text-sm tracking-widest transform rotate-90 origin-left translate-x-8 w-14 text-nowrap">
              {hero("followUs")}
            </div>
            <div className="flex flex-col space-y-4 mt-26">
              <Link href="#" className="text-white hover:text-yellow font-semibold transition-colors">
                <Youtube className="size-5" />
              </Link>
              <Link href="#" className="text-white hover:text-yellow font-semibold transition-colors">
                <Facebook className="size-5" />
              </Link>
              <Link href="#" className="text-white hover:text-yellow font-semibold transition-colors">
                <Instagram className="size-5" />
              </Link>
            </div>
          </div>

          {/* Hero Carousel */}
          <HeroCarousel />

          {/* Static Hero Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
            <div className="max-w-4xl mx-auto text-center md:text-left px-6 md:px-30 lg:px-12">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-10 h-[2px] bg-yellow mr-4"></div>
                <span className="text-yellow font-bold uppercase tracking-widest text-sm">{hero("badge")}</span>
              </div>

              <h1 className="text-4xl lg:text-6xl lg:text-7xl text-white leading-tight mb-8">
                {hero("title")}
              </h1>

              <div className="flex items-center justify-center md:justify-start text-white mt-12">
                <span className="mr-2">{hero("scrollDown")}</span>
                <ChevronDown className="size-5 animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-25 pt-20 overflow-hidden z-50">
          {contentSections.map((article, index) => (
              <ContentArticle key={index} {...article} />
          ))}
        </section>

        {/* Footer */}
        <footer className="py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <Link href="/" className="text-white text-2xl font-bold tracking-wider mb-4 inline-block">
                  MNTN
                </Link>
                <p className="text-white/70 mt-4 max-w-xs">{footer("tagline")}</p>
                <p className="text-white/40 text-sm mt-8">{footer("copyright")}</p>
              </div>

              <div>
                <h3 className="text-white mb-6">{footer("blog.title")}</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow font-semibold transition-colors">
                      {footer("blog.about")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow font-semibold transition-colors">
                      {footer("blog.contributors")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow font-semibold transition-colors">
                      {footer("blog.writeForUs")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow font-semibold transition-colors">
                      {footer("blog.contactUs")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow font-semibold transition-colors">
                      {footer("blog.privacy")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white mb-6">{footer("more.title")}</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow font-semibold transition-colors">
                      {footer("more.team")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow font-semibold transition-colors">
                      {footer("more.jobs")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow font-semibold transition-colors">
                      {footer("more.press")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}

