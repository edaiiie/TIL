import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

const quickLinks = [
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/protocol", label: "Protocol" },
  { href: "/achievement", label: "Achievement" },
]

export function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Lab Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1">
                <Image
                  src="/images/yonsei-logo.png"
                  alt="Yonsei University"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-white">Tumor Immunology Lab</p>
                <p className="text-sm text-slate-400">Integrated Science &amp; Engineering Division, Yonsei University</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400">
              Our laboratory investigates trogocytosis-mediated immune evasion in cancer and develops
              novel immunotherapies to restore anti-tumor immunity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-sky-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
                <span>
                  85 Songdogwahak-ro, Yeonsu-gu, Incheon 21983, Republic of Korea<br />
                  Veritas B (440)
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="h-4 w-4 shrink-0 text-sky-500" />
                <a href="mailto:jaehun.shin@yonsei.ac.kr" className="transition-colors hover:text-sky-400">
                  jaehun.shin@yonsei.ac.kr
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="h-4 w-4 shrink-0 text-sky-500" />
                <span>+82-32-749-3020</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Tumor Immunology Lab, Yonsei University. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://www.yonsei.ac.kr" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 transition-colors hover:text-sky-400">
              Yonsei University
            </Link>
            <Link href="https://ised.yonsei.ac.kr" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 transition-colors hover:text-sky-400">
              International Campus
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
