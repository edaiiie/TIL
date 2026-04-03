import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react"

import { announcements } from "@/data/announcements"
import { publications } from "@/data/publications"
import { getPeople, getAnnouncements, getFeaturedPublication } from "@/lib/notion"

export const revalidate = 0

export default async function HomePage() {
  let recentAnnouncements = announcements.slice(0, 3)
  let featuredPublication = publications[0]

  try {
    const [notionAnnouncements, notionFeatured, notionPeople] = await Promise.all([
      getAnnouncements(3),
      getFeaturedPublication(),
    ])

    if (notionAnnouncements.length > 0) recentAnnouncements = notionAnnouncements
    if (notionFeatured) featuredPublication = notionFeatured
    }
  } catch (e) {
    console.error("[Home] Notion fetch failed:", e)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section - Split layout */}
      <section className="min-h-screen bg-white pt-20">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Left - Text content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1e3a5f]/10 bg-[#f8f9fa] px-4 py-2 text-sm">
              <Image
                src="/images/yonsei-logo.png"
                alt="Yonsei University"
                width={22}
                height={22}
                className="shrink-0"
              />
              <span className="font-medium text-[#1e3a5f]">Integrated Science &amp; Engineering Division, Yonsei University</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl lg:text-6xl">
              Tumor Immunology
              <br />
              Laboratory
            </h1>
            
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#555]">
              Investigating trogocytosis-mediated immune evasion in cancer
              and developing novel immunotherapies to restore anti-tumor immunity.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1e3a5f] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#2a4a73]"
              >
                Explore Research
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#1e3a5f] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#1e3a5f] transition-all hover:bg-[#1e3a5f] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Right - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] min-h-[300px] overflow-hidden rounded-2xl shadow-2xl lg:aspect-square">
              <Image
                src="/images/research-1.jpg"
                alt="Tumor Immunology Lab"
                fill
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-[#1e3a5f]/20" />
          </div>
        </div>
      </section>

      {/* Research Keywords Strip */}
      <section className="border-y border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-2xl font-bold tracking-tight text-[#1e3a5f] sm:text-3xl lg:text-4xl">
            <span>Trogocytosis</span>
            <span className="mx-4 text-[#1e3a5f]/30 sm:mx-6">·</span>
            <span>Cancer Immune Evasion</span>
            <span className="mx-4 text-[#1e3a5f]/30 sm:mx-6">·</span>
            <span>Immunotherapy Development</span>
          </p>
        </div>
      </section>

      {/* Two Column Section - News + Publication */}
      <section className="bg-[#f8f9fa] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Latest News */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#1e3a5f]">Latest News</h2>
                <Link
                  href="/achievement"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#1e3a5f] hover:underline"
                >
                  View all
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="mt-6 space-y-4">
                {recentAnnouncements.map((announcement) => (
                  <Link
                    key={announcement.id}
                    href="/achievement"
                    className="group block rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-[#1e3a5f]/30 hover:shadow-md"
                  >
                    <time 
                      dateTime={announcement.date}
                      className="text-xs font-medium uppercase tracking-wide text-[#888]"
                    >
                      {new Date(announcement.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <h3 className="mt-2 font-semibold text-[#1e3a5f] transition-colors group-hover:text-[#2a4a73]">
                      {announcement.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#555] line-clamp-2">
                      {announcement.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Right - Featured Publication */}
            <div>
              <h2 className="text-xl font-bold text-[#1e3a5f]">Featured Publication</h2>
              
              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#1e3a5f] px-3 py-1 text-xs font-semibold text-white">
                  {featuredPublication.journal}
                </div>
                <p className="mt-4 text-sm text-[#888]">{featuredPublication.year}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-[#1e3a5f]">
                  {featuredPublication.title}
                </h3>
                <p className="mt-3 text-sm text-[#555]">
                  {featuredPublication.authors}
                </p>
                {featuredPublication.doi && (
                  <a
                    href={`https://doi.org/${featuredPublication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#1e3a5f] hover:underline"
                  >
                    View Publication
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
              
              <Link
                href="/publications"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1e3a5f] hover:underline"
              >
                See all publications
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#1e3a5f] py-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('/images/lab-2.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/80 via-[#1e3a5f]/60 to-[#1e3a5f]/40" />
        {/* Decorative elements */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Interested in joining our team?
              </h2>
              <p className="mt-2 max-w-lg text-white/70">
                We are always looking for talented and motivated researchers passionate about cancer immunology.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1e3a5f] shadow-lg transition-all hover:bg-slate-100 hover:shadow-xl"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
