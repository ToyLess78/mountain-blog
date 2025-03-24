import Link from "next/link"
import {Instagram, Youtube, Facebook, User, ArrowRight, ChevronDown} from "lucide-react"
import HeroCarousel from "~/components/hero-carousel"
import Clouds from "~/components/clouds";
import content from "~/lib/data/content.json"
import { ContentArticle } from "~/components/content-article"
import {MobileMenu} from "~/components/mobile-menu";

export default function Home() {
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
                <Link href="/equipment" className="text-white hover:text-yellow transition-colors">
                  Equipment
                </Link>
                <Link href="#about" className="text-white hover:text-yellow transition-colors">
                  About us
                </Link>
                <Link href="#blog" className="text-white hover:text-yellow transition-colors">
                  Blog
                </Link>
              </nav>
              <MobileMenu />
            </div>
          </header>

          {/* Social Sidebar */}
          <div className="absolute left-6 top-5/9 -translate-y-1/2 z-20 hidden md:flex flex-col items-center">
            <div className="text-white text-sm tracking-widest transform rotate-90 origin-left translate-x-9 mb-12">
              Follow us
            </div>
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="#" className="text-white hover:text-yellow transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-yellow transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-yellow transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Hero Carousel */}
          <HeroCarousel />

          {/* Static Hero Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
            <div className="max-w-4xl mx-auto text-center md:text-left px-6 md:px-12">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-10 h-[2px] bg-[#fbd784] mr-4"></div>
                <span className="text-yellow uppercase tracking-widest text-sm">A Hiking Guide</span>
              </div>

              <h1 className="text-4xl lg:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Be Prepared For The
                <br />
                Mountains And Beyond!
              </h1>

              <div className="flex items-center justify-center md:justify-start text-white mt-12">
                <span className="mr-2">scroll down</span>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-15 md:-mt-5 lg:mt-0 overflow-hidden z-1">
          {content.map((article) => (
              <ContentArticle key={article.number} {...article} />
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
                <p className="text-white/70 mt-4 max-w-xs">
                  Get out there & discover your next slope, mountain & destination!
                </p>
                <p className="text-white/40 text-sm mt-8">Copyright 2023 MNTN, Inc. Terms & Privacy</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-6">More on The Blog</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow transition-colors">
                      About MNTN
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow transition-colors">
                      Contributors & Writers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow transition-colors">
                      Write For Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-6">More on MNTN</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow transition-colors">
                      The Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow transition-colors">
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-yellow transition-colors">
                      Press
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

