import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for the Tumor Immunology Lab at Yonsei University.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: (
      <address className="not-italic">
        연세대학교 국제캠퍼스 진리관 B439/B440<br />
        인천광역시 연수구 송도과학로 85<br />
        (21983)
      </address>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <div className="space-y-3">
        <div>
          <p className="text-sm text-[#888]">Principal Investigator</p>
          <a href="mailto:jaehun.shin@yonsei.ac.kr" className="font-medium text-[#1e3a5f] hover:text-[#2a4a73]">
            jaehun.shin@yonsei.ac.kr
          </a>
        </div>
      </div>
    ),
  },
  {
    icon: Phone,
    title: "Phone",
    content: <p className="font-medium text-[#1e3a5f]">+82-32-749-3020</p>,
  },
  {
    icon: Clock,
    title: "Office",
    content: <p>Veritas B 433</p>,
  },
]

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f0f2f5] py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a5f]">Get in Touch</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555]">
              We welcome inquiries about our research, collaboration opportunities, and joining our team.
            </p>
          </div>
        </div>
      </section>

      {/* Lab Photos */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {["/images/lab-1.png", "/images/lab-2.png", "/images/lab-3.png"].map((src, i) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={`Lab photo ${i + 1}`}
                  fill
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#f8f9fa] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f]/10">
                    <item.icon className="h-6 w-6 text-[#1e3a5f]" />
                  </div>
                  <h2 className="mt-4 font-semibold text-[#1e3a5f]">{item.title}</h2>
                  <div className="mt-3 text-sm text-[#555]">{item.content}</div>
                </div>
              ))}
            </div>

            {/* Map Embed */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8f9fa] p-6">
              <h2 className="font-semibold text-[#1e3a5f]">Location</h2>
              <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl">
                <iframe
                  src="https://maps.google.com/maps?q=인천광역시+연수구+송도과학로+85+연세대학교+국제캠퍼스&output=embed&hl=en"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yonsei University International Campus"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-medium text-[#1e3a5f]">Directions</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#555]">
                  <li className="flex gap-2">
                    <span className="font-medium text-[#1e3a5f]">Subway:</span>
                    Incheon Subway Line 1, Technopark Station — 10 min walk
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-[#1e3a5f]">Bus:</span>
                    Routes 순환버스 or Songdo shuttle — Yonsei International Campus stop
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-[#1e3a5f]">Building:</span>
                    Veritas B, Room 433
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="relative overflow-hidden bg-[#1e3a5f] py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('/images/lab-2.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-[#1e3a5f]/60 to-[#1e3a5f]/40" />
        <div className="absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Interested in Collaboration?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              We welcome collaborations with researchers in academia and industry who share our
              interest in advancing cancer immunology and immunotherapy. Please reach out to discuss
              potential opportunities.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:jaehun.shin@yonsei.ac.kr"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1e3a5f] shadow-lg transition-all hover:bg-slate-100 hover:shadow-xl"
              >
                Email Prof. Shin
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                View Our Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
