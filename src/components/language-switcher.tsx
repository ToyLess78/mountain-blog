"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { Globe, ChevronDown } from "lucide-react"
import { useTranslations } from "next-intl"
import { cn } from "~/lib/utils"

export default function LanguageSwitcher() {
    const t = useTranslations("languageSwitcher")
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const handleLocaleChange = (newLocale: string) => {
        // Create the new path with the updated locale
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
        router.push(newPath)
        setIsOpen(false)
    }

    const localeNames: Record<string, string> = {
        en: t("en"),
        de: t("de"),
        pl: t("pl"),
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-white hover:text-yellow font-semibold transition-colors"
                aria-label={t("label")}
            >
                <Globe className="h-5 w-5 mr-2" />
                <span className="hidden md:inline">{localeNames[locale]}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-background backdrop-blur-sm rounded-sm shadow-lg z-50 overflow-hidden">
                    <div className="py-1">
                        {["en", "de", "pl"].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => handleLocaleChange(lang)}
                                className={cn(
                                    "block w-full text-left px-4 py-2 text-sm",
                                    locale === lang ? "text-yellow font-semibold" : "text-white hover:text-yellow font-semibold",
                                )}
                            >
                                {localeNames[lang]}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

