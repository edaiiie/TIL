import type { Metadata } from "next"
import Image from "next/image"
import { Mail, GraduationCap, Briefcase, FlaskConical, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Professor",
  description: "Principal Investigator of the Tumor Immunology Lab at Yonsei University.",
}

const education = [
  { degree: "Ph.D. in Immunobiology", institution: "Yale University", year: "2014" },
  { degree: "M.S. in Biotechnology", institution: "Yonsei University", year: "2007" },
  { degree: "B.S. in Biotechnology", institution: "Yonsei University", year: "2005" },
]

const positions = [
  {
    title: "Associate Professor",
    institution: "Bio-Convergence, Integrated Science & Engineering Division, Yonsei University",
    period: "2019 - Present",
  },
  {
    title: "Assistant Professor Adjunct",
    institution: "Section of Endocrinology, Internal Medicine, Yale University",
    period: "Current",
  },
  {
    title: "Postdoctoral Associate",
    institution: "Yale University",
    period: "2014 - 2019",
  },
  {
    title: "Research Associate",
    institution: "National Cancer Center, Korea",
    period: "2007 - 2009",
  },
]

const researchFocus = [
  {
    title: "Trogocytosis in Cancer Immune Evasion",
    description:
      "Investigating how cancer cells acquire immune regulatory molecules from T cells via trogocytosis to evade anti-tumor immunity.",
  },
  {
    title: "Immunotherapeutic Target Identification",
    description:
      "Identifying novel targets for immunotherapy in metastatic cancers using mass spectrometry, RNA-seq, and CRISPR/Cas9 screening.",
  },
  {
    title: "Therapeutic Development",
    description:
      "Developing next-generation cancer immunotherapies including mRNA-LNP and in vivo CAR-T approaches.",
  },
]

export default function ProfessorPage() {
  return (
    <div className="pt-20">
      {/* Hero Section - Light theme */}
      <section className="bg-[#f8f9fa] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-3">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
                  <Image
                    src="/images/professor-shin.png"
                    alt="Prof. Jae Hun Shin"
                    fill
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-[#1e3a5f]/10" />
              </div>
            </div>

            {/* Basic Info */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a5f]">Principal Investigator</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
                Jae Hun Shin
              </h1>
              <p className="mt-2 text-xl text-[#555]">Ph.D.</p>
              <p className="text-lg text-[#888]">
                Associate Professor, Bio-Convergence
                <br />
                Integrated Science &amp; Engineering Division, Yonsei University
              </p>
              <p className="mt-1 text-base text-[#aaa]">
                Assistant Professor Adjunct, Internal Medicine (Endocrinology), Yale University
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:jaehun.shin@yonsei.ac.kr"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-[#1e3a5f] shadow-sm transition-all hover:shadow-md"
                >
                  <Mail className="h-4 w-4 text-[#888]" />
                  jaehun.shin@yonsei.ac.kr
                </a>
                <a
                  href="https://scholar.google.com/citations?user=Jae+Hun+Shin+Yonsei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-[#1e3a5f] shadow-sm transition-all hover:shadow-md"
                >
                  Google Scholar
                  <ExternalLink className="h-4 w-4 text-[#888]" />
                </a>
              </div>

              <div className="mt-10">
                <h2 className="text-lg font-semibold text-[#1e3a5f]">Biography</h2>
                <div className="mt-4 space-y-4 leading-relaxed text-[#555]">
                  <p>
                    Dr. Jae Hun Shin is an Associate Professor in the Integrated Science &amp; Engineering Division at
                    Yonsei University, where he leads the Tumor Immunology Lab. He also serves as an Adjunct Assistant
                    Professor in the Section of Endocrinology, Internal Medicine at Yale University.
                  </p>
                  <p>
                    Dr. Shin received his Ph.D. in Immunobiology from Yale University and subsequently completed
                    postdoctoral training there. His research focuses on a process called trogocytosis — the transfer of
                    membrane fragments between cells — and how cancer cells exploit this mechanism to acquire immune
                    regulatory molecules from T cells, thereby evading anti-tumor immunity.
                  </p>
                  <p>
                    His laboratory employs a multidisciplinary approach combining mass spectrometry, RNA sequencing,
                    CRISPR/Cas9 screening, organoid models, and in vivo systems to identify immunotherapeutic targets
                    and develop novel cancer immunotherapies including mRNA-LNP and CAR-T cell strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Sections */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Education */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8f9fa] p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f]/10">
                  <GraduationCap className="h-6 w-6 text-[#1e3a5f]" />
                </div>
                <h2 className="text-xl font-semibold text-[#1e3a5f]">Education</h2>
              </div>
              <ul className="mt-8 space-y-6">
                {education.map((item) => (
                  <li key={item.degree} className="relative border-l-2 border-[#1e3a5f]/20 pl-6">
                    <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#1e3a5f]" />
                    <p className="font-medium text-[#1e3a5f]">{item.degree}</p>
                    <p className="mt-0.5 text-sm text-[#555]">{item.institution}</p>
                    <p className="text-sm font-medium text-[#1e3a5f]">{item.year}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Positions */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8f9fa] p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f]/10">
                  <Briefcase className="h-6 w-6 text-[#1e3a5f]" />
                </div>
                <h2 className="text-xl font-semibold text-[#1e3a5f]">Positions</h2>
              </div>
              <ul className="mt-8 space-y-6">
                {positions.map((item) => (
                  <li key={item.title + item.period} className="relative border-l-2 border-[#1e3a5f]/20 pl-6">
                    <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#1e3a5f]" />
                    <p className="font-medium text-[#1e3a5f]">{item.title}</p>
                    <p className="mt-0.5 text-sm text-[#555]">{item.institution}</p>
                    <p className="text-sm font-medium text-[#1e3a5f]">{item.period}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Focus */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8f9fa] p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f]/10">
                  <FlaskConical className="h-6 w-6 text-[#1e3a5f]" />
                </div>
                <h2 className="text-xl font-semibold text-[#1e3a5f]">Research Focus</h2>
              </div>
              <ul className="mt-8 space-y-6">
                {researchFocus.map((item) => (
                  <li key={item.title} className="relative border-l-2 border-[#1e3a5f]/20 pl-6">
                    <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#1e3a5f]" />
                    <p className="font-medium text-[#1e3a5f]">{item.title}</p>
                    <p className="mt-0.5 text-sm text-[#555]">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
