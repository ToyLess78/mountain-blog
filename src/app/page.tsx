import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, ChevronDown, User, ArrowRight } from "lucide-react"
import HeroCarousel from "~/components/hero-carousel"

export default function Home() {
  return (
      <div className="relative bg-black text-white">
        {/* Hero Section with Carousel */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Navigation */}
          <header className="relative z-20 px-6 md:px-12 py-6 bg-black/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <Link href="/" className="text-white text-2xl font-bold tracking-wider">
                MNTN
              </Link>

              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/equipment" className="text-white hover:text-[#fbd784] transition-colors">
                  Equipment
                </Link>
                <Link href="#about" className="text-white hover:text-[#fbd784] transition-colors">
                  About us
                </Link>
                <Link href="#blog" className="text-white hover:text-[#fbd784] transition-colors">
                  Blog
                </Link>
              </nav>

              <Link href="/account" className="flex items-center text-white hover:text-[#fbd784] transition-colors">
                <User className="mr-2 h-5 w-5" />
                <span>Account</span>
              </Link>
            </div>
          </header>

          {/* Social Sidebar */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center">
            <div className="text-white text-xs tracking-widest transform rotate-90 origin-left translate-x-6 mb-12">
              Follow us
            </div>
            <div className="flex flex-col space-y-6">
              <Link href="#" className="text-white hover:text-[#fbd784] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#fbd784] transition-colors">
                <Twitter className="h-5 w-5" />
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
                <span className="text-[#fbd784] uppercase tracking-widest text-sm">A Hiking Guide</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
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

        {/* Section 01 - What level of hiker */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 md:px-12">
            <div className="relative z-10">
              <div className="absolute -left-4 top-0 text-[180px] font-bold text-gray-800/20 leading-none z-0">01</div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-[2px] bg-[#fbd784] mr-4"></div>
                  <span className="text-[#fbd784] uppercase tracking-widest text-sm">Get Started</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                  What level of hiker
                  <br />
                  are you?
                </h2>

                <p className="text-white/80 mb-8 max-w-md">
                  Determining what level of hiker you are can be an important tool when planning future hikes. This hiking
                  level guide will help you plan hikes according to different hike ratings set by various websites like
                  All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert,
                  or expert backpacker?
                </p>

                <Link href="#" className="inline-flex items-center text-[#fbd784] hover:underline">
                  <span className="mr-2">read more</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Hiker on mountain trail"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover h-full"
              />
            </div>
          </div>
        </section>

        {/* Section 02 - Hiking Gear */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 md:px-12">
            <div className="relative order-2 md:order-1">
              <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Hiker with backpack looking at mountains"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover h-full"
              />
            </div>

            <div className="relative z-10 order-1 md:order-2">
              <div className="absolute -right-4 top-0 text-[180px] font-bold text-gray-800/20 leading-none z-0">02</div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-[2px] bg-[#fbd784] mr-4"></div>
                  <span className="text-[#fbd784] uppercase tracking-widest text-sm">Hiking Essentials</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                  Picking the right
                  <br />
                  Hiking Gear!
                </h2>

                <p className="text-white/80 mb-8 max-w-md">
                  The nice thing about beginning hiking is that you don't really need any special gear, you can probably
                  get away with things you already have. Let's start with clothing. A typical mistake hiking beginners
                  make is wearing jeans and regular clothes, which will get heavy and chafe when they get sweaty or wet.
                </p>

                <Link href="/equipment" className="inline-flex items-center text-[#fbd784] hover:underline">
                  <span className="mr-2">read more</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03 - Map & Timing */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 md:px-12">
            <div className="relative z-10">
              <div className="absolute -left-4 top-0 text-[180px] font-bold text-gray-800/20 leading-none z-0">03</div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-[2px] bg-[#fbd784] mr-4"></div>
                  <span className="text-[#fbd784] uppercase tracking-widest text-sm">Where you go is the key</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                  Understand Your
                  <br />
                  Map & Timing
                </h2>

                <p className="text-white/80 mb-8 max-w-md">
                  To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over
                  the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark
                  is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the
                  junction.
                </p>

                <Link href="#" className="inline-flex items-center text-[#fbd784] hover:underline">
                  <span className="mr-2">read more</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Hand holding compass with mountain view"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover h-full"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-16 border-t border-white/10">
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
                    <Link href="#" className="text-white/70 hover:text-[#fbd784] transition-colors">
                      About MNTN
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-[#fbd784] transition-colors">
                      Contributors & Writers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-[#fbd784] transition-colors">
                      Write For Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-[#fbd784] transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-[#fbd784] transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-6">More on MNTN</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="text-white/70 hover:text-[#fbd784] transition-colors">
                      The Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-[#fbd784] transition-colors">
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white/70 hover:text-[#fbd784] transition-colors">
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

