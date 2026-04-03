import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Research",
  description: "Research areas and projects at the Tumor Immunology Lab, Yonsei University.",
}

const researchTracks = [
  {
    number: "01",
    title: "Trogocytosis Library",
    oneLiner:
      "Building comprehensive repositories of trogocytosis candidates using mass spectrometry, RNA-seq, and CRISPR/Cas9 knockout organoids across normal, adenoma, and carcinoma stages.",
    keywords: ["Mass Spectrometry", "RNA-seq", "CRISPR/Cas9", "Organoids"],
  },
  {
    number: "02",
    title: "Trogocytosis Screening System",
    oneLiner:
      "Cancer cell–T cell co-culture and in vivo metastatic colon cancer models using patient-derived organoids and reporter mice to evaluate immune evasion.",
    keywords: ["Co-culture", "In vivo Model", "Reporter Mice", "Metastatic Cancer"],
  },
  {
    number: "03",
    title: "Immunotherapeutic Target Identification",
    oneLiner:
      "Identifying actionable immunotherapeutic targets in metastatic cancers by integrating the trogocytosis library with the screening system.",
    keywords: ["Target Discovery", "Metastatic Cancer", "Immune Evasion", "Biomarkers"],
  },
  {
    number: "04",
    title: "Therapeutic Development",
    oneLiner:
      "Developing novel cancer immunotherapies based on validated trogocytosis targets, including mRNA-LNP delivery platforms and in vivo CAR-T cell strategies.",
    keywords: ["mRNA-LNP", "CAR-T Cells", "Immunotherapy", "Translational Research"],
  },
]

export default function ResearchPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f0f2f5] py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a5f]">Our Research</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
              Understanding Cancer Immune Evasion through Trogocytosis
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555]">
              Our laboratory investigates how cancer cells acquire immune regulatory molecules from
              T cells through a membrane-transfer process called trogocytosis — and how disrupting
              this mechanism can restore anti-tumor immunity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concept Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f]">What is Trogocytosis?</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#555]">
                Trogocytosis is a process by which cancer cells physically extract fragments of
                membrane — including immune regulatory proteins — from tumor-infiltrating T cells
                during direct contact. By acquiring these molecules, cancer cells can masquerade as
                immune cells, suppressing anti-tumor responses and escaping immune surveillance.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#555]">
                Our landmark 2021 PNAS paper demonstrated that colon cancer cells acquire immune
                regulatory molecules from tumor-infiltrating lymphocytes by trogocytosis, opening
                a new avenue for therapeutic intervention.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/research-diagram.png"
                  alt="Trogocytosis research pipeline diagram"
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-[#1e3a5f]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Research Tracks */}
      <section className="bg-[#f8f9fa] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f]">Four Investigative Tracks</h2>
          <div className="mt-10 space-y-4">
            {researchTracks.map((track) => (
              <div
                key={track.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
              >
                <div className="flex items-baseline gap-4">
                  <span className="shrink-0 text-4xl font-bold text-[#1e3a5f]/20">{track.number}</span>
                  <h3 className="text-xl font-bold text-[#1e3a5f]">{track.title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-[#555]">{track.oneLiner}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {track.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-[#1e3a5f]/20 bg-[#f8f9fa] px-4 py-1.5 text-sm font-medium text-[#1e3a5f]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timelapse Video Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f]">Trogocytosis in Action</h2>
          <p className="mt-2 text-[#555]">Live imaging analysis for 6 h</p>
          <div className="mt-8 overflow-hidden rounded-2xl shadow-xl">
            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
              poster="/images/lab-2.png"
            >
              <source src="/videos/Trogovideo20x.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-4 space-y-1 text-sm text-[#888]">
            <p>Cell trackers (undiffusable to adjacent cells) were used to stain T cells as follow</p>
            <p>Cytosol: CMFDA (Green)</p>
            <p>Membrane: DiD (Red)</p>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="relative overflow-hidden bg-[#1e3a5f] py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('/images/lab-3.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/80 via-[#1e3a5f]/60 to-[#1e3a5f]/40" />
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Interested in Collaboration?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              We welcome collaborations with academic institutions and industry partners.
              Contact us to discuss potential research partnerships.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1e3a5f] shadow-lg transition-all hover:bg-slate-100 hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
