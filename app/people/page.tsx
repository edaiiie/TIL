import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"
import { currentMembers, alumni } from "@/data/people"
import { getPeople } from "@/lib/notion"

export const revalidate = 0

export const metadata: Metadata = {
  title: "People",
  description: "Meet the members of the Tumor Immunology Lab at Yonsei University.",
}

export default async function PeoplePage() {
  let current = currentMembers
  let alums = alumni
  try {
    const result = await getPeople()
    if (result.current.length > 0 || result.alumni.length > 0) {
      current = result.current
      alums = result.alumni
    }
  } catch (e) {
    console.error("[People] Notion fetch failed:", e)
  }
  return (
    <div className="pt-20">
      {/* Hero Section - Light theme */}
      <section className="relative overflow-hidden bg-[#f0f2f5] py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a5f]">Our Team</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
              People
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555]">
              Meet our dedicated team of researchers working at the forefront of cancer immunology.
            </p>
          </div>
        </div>
      </section>

      {/* Current Members */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f]">Current Members</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {current.map((member, index) => (
              <div
                key={member.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl hover:border-[#1e3a5f]/30"
              >
                {/* Photo */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-slate-100">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      loading={index < 4 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-6xl font-light text-[#1e3a5f]/30">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-[#1e3a5f]">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[#1e3a5f]">{member.role}</p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#888] transition-colors hover:text-[#1e3a5f]"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni — only shown when there are alumni */}
      {alums.length > 0 && (
        <section className="bg-[#f8f9fa] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f]">Alumni</h2>
            <p className="mt-2 text-[#555]">
              Former lab members who have moved on to exciting opportunities
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {alums.map((member) => (
                <div
                  key={member.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-medium text-[#1e3a5f]">{member.name}</h3>
                  <p className="mt-1 text-sm text-[#555]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join Us CTA */}
      <section className="relative overflow-hidden bg-[#1e3a5f] py-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('/images/lab-3.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#1e3a5f]/80 via-[#1e3a5f]/60 to-[#1e3a5f]/40" />
        {/* Decorative elements */}
        <div className="absolute -top-32 right-1/3 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Join Our Team
              </h2>
              <p className="mt-4 max-w-xl text-lg text-white/70">
                We are always looking for motivated students and researchers to join our lab.
                If you are interested in tumor immunology and cancer immunotherapy, please contact
                us with your CV and a brief statement of research interests.
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
