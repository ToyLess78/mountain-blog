"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const footer = useTranslations("footer");

  return (
    <footer className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Link
              href="/"
              className="text-white text-2xl font-bold tracking-wider mb-4 inline-block"
            >
              MNTN
            </Link>
            <p className="text-white/70 mt-4 max-w-xs">{footer("tagline")}</p>
            <p className="text-white/40 text-sm mt-8">{footer("copyright")}</p>
          </div>

          <div>
            <h3 className="text-white mb-6">{footer("blog.title")}</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-yellow font-semibold transition-colors"
                >
                  {footer("blog.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-yellow font-semibold transition-colors"
                >
                  {footer("blog.contributors")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-yellow font-semibold transition-colors"
                >
                  {footer("blog.writeForUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-yellow font-semibold transition-colors"
                >
                  {footer("blog.contactUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-yellow font-semibold transition-colors"
                >
                  {footer("blog.privacy")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-6">{footer("more.title")}</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-yellow font-semibold transition-colors"
                >
                  {footer("more.team")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-yellow font-semibold transition-colors"
                >
                  {footer("more.jobs")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-yellow font-semibold transition-colors"
                >
                  {footer("more.press")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
