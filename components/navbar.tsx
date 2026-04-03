"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/professor", label: "Professor" },
  { href: "/people", label: "People" },
  { href: "/publications", label: "Publications" },
  { href: "/gallery", label: "Gallery" },
  { href: "/protocol", label: "Protocol" },
  { href: "/achievement", label: "Achievement" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/yonsei-logo.png"
            alt="Yonsei University"
            width={48}
            height={48}
            className="shrink-0"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-tight text-[#1e3a5f]">
              Tumor Immunology Lab
            </p>
            <p className="text-xs text-[#666]">
              Yonsei University
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-[#666] transition-colors hover:text-[#1e3a5f]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2.5 text-[#1e3a5f] transition-colors hover:bg-slate-100 xl:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 xl:hidden",
          mobileMenuOpen ? "max-h-96 border-t border-slate-200 bg-white" : "max-h-0"
        )}
      >
        <ul className="space-y-1 px-6 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-[#666] transition-colors hover:bg-slate-100 hover:text-[#1e3a5f]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
