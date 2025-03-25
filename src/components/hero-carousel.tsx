"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { cn } from "~/lib/utils"

interface SlideImage {
  id: number
  image: string
  alt: string
}

const slides: SlideImage[] = [
  {
    id: 1,
    image: "/hero/hero-01.png",
    alt: "Mountain landscape with hiking trails",
  },
  {
    id: 2,
    image: "/hero/hero-02.png",
    alt: "Alpine mountain peaks with snow",
  },
  {
    id: 3,
    image: "/hero/hero-03.png",
    alt: "Mountain summit with panoramic view",
  },
  {
    id: 4,
    image: "/hero/hero-04.png",
    alt: "Mountain summit with panoramic view",
  },  {
    id: 5,
    image: "/hero/hero-05.png",
    alt: "Mountain summit with panoramic view",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [nextSlide, setNextSlide] = useState<number | null>(null)

  const goToSlide = useCallback(
      (index: number) => {
        if (index === currentSlide || transitioning) return

        setTransitioning(true)
        setNextSlide(index)

        // After transition completes, update the current slide
        setTimeout(() => {
          setCurrentSlide(index)
          setTransitioning(false)
          setNextSlide(null)
        }, 1000) // Match this with the CSS transition duration
      },
      [currentSlide, transitioning],
  )

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (currentSlide + 1) % slides.length
      goToSlide(next)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [currentSlide, goToSlide])

  return (
      <div className="relative min-h-[110vh] overflow-visible">

        {/* Background Images with Fade Transition */}
        {slides.map((slide, index) => (
            <div
                key={slide.id}
                className={cn(
                    "absolute inset-0 z-1 transition-opacity duration-1000",
                    index === currentSlide ? "opacity-100" : index === nextSlide ? "opacity-0 animate-fadeIn" : "opacity-0",
                )}
            >
              <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover lg:object-fill lg:mt-15 overflow-visible"
              />
            </div>
        ))}

        {/* Pagination */}
        <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <div className="flex flex-col items-end space-y-4">
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                        "text-lg transition-all duration-300 focus:outline-none",
                        index === currentSlide ? "text-white font-bold" : "text-white/50 hover:text-white/80",
                    )}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
            ))}
          </div>
        </div>
      </div>
  )
}

