import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "~/lib/utils"

export interface ContentArticleProps {
    number: string
    title: string
    subtitle: string
    description: string
    image: string
    imageAlt: string
    linkHref: string
    linkText: string
    badge: string
    reverse?: boolean
    className?: string
}

export const ContentArticle = ({
                                   number,
                                   title,
                                   subtitle,
                                   description,
                                   image,
                                   imageAlt,
                                   linkHref,
                                   linkText,
                                   badge,
                                   reverse = false,
                                   className,
                               }: ContentArticleProps) => {
    return (
        <article
            className={cn(
                "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-6 px-6 md:px-12 mb-16",
                reverse && "lg:flex-row-reverse",
                className,
            )}
        >

            {/* Text */}
            <div className={cn("relative flex items-center", reverse ? "order-1" : "order-2")}>
                <div
                    className={cn(
                        "absolute -top-12 md:top-12 text-[180px] font-bold text-gray-400/20 leading-none -left-6",
                    )}
                >
                    {number}
                </div>

                <div className="relative  z-10 pl-18">
                    <div className="flex items-center mb-6">
                        <div className="w-10 h-[2px] bg-[#fbd784] mr-4" />
                        <span className="text-yellow font-bold uppercase tracking-widest text-sm">{badge}</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl text-white leading-tight mb-8">
                        {title}
                        <br />
                        {subtitle}
                    </h2>

                    <p className="text-white/80 mb-8 max-w-md">{description}</p>

                    <Link href={linkHref} className="inline-flex items-center text-yellow font-semibold hover:underline">
                        <span className="mr-2">{linkText}</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
            {/* Image */}
            <div className={cn("relative lg:w-2/3", reverse ? "lg:order-2 lg:ml-auto" : "lg:order-1")}>
                <Image
                    src={image || "/placeholder.svg"}
                    alt={imageAlt}
                    width={800}
                    height={600}
                    className="rounded-xs object-cover h-full"
                />
            </div>
        </article>
    )
}

