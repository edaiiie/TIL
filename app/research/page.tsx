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
    title: "Development of a Novel Platform for Evaluating T Cell–Mediated Anti-Tumor Immunity and Its Application to Organoid-Based Drug Screening",
    oneLiner:
      "This study aims to develop a recombinant fluorescent protein–based system that employs a mechanism distinct from conventional T cell activity assays. This system will enable rapid quantitative evaluation of T cell–mediated anti-tumor activity in an organoid co-culture–based drug screening platform. The ultimate goal is to establish a co-culture drug screening system using patient-derived organoids and immune cells, thereby providing a method for assessing T cell activity that recapitulates the patient-specific tumor microenvironment.",
    keywords: ["Recombinant protein reporter", "T cell cytotoxicity", "Drug screening"],
  },
  {
    number: "02",
    title: "Trogocytosis-Mediated CAR Transfer Activates CAR Signaling in B-Cell Lymphoma.",
    oneLiner:
      "This study focuses on trogocytosis in CAR-T cell therapy, investigating how CAR molecules are transferred to tumor cells and subsequently activate signaling pathways. It aims to uncover functional changes in tumor cells and identify novel therapeutic targets beyond conventional mechanisms of CAR-T dysfunction.",
    keywords: ["CAR-T cell therapy", "Trogocytosis", "CAR transfer", "Tumor cell signaling"],
  },
  {
    number: "03",
    title: "Integrated Computational Analysis and In Vivo Validation of Trogocytosis-Associated Cellular States in Colon Cancer Using CITE-seq data",
    oneLiner:
      "This study investigates the role of trogocytosis in shaping tumor–immune interactions in colon cancer through integrated single-cell transcriptomic analysis of patient samples. By characterizing trogocytosis-associated cellular states and their molecular signatures at single-cell resolution, we aim to uncover how intercellular membrane transfer influences immune cell identity and function within the tumor microenvironment. Key findings will be validated in mouse in vivo models to establish the functional relevance of trogocytosis in cancer progression and anti-tumor immunity.",
    keywords: ["Bioinformatics", "Tumor Immunology", "Trogocytosis", "Single-cell Transcriptomics"],
  },
  {
    number: "04",
    title: "Glucose Metabolism-mediated Anti-cancer Effect of Allulose in Colon Cancer",
    oneLiner:
      "Allulose, a rare sugar, suppresses the growth of colorectal cancer by inhibiting HIF1α-driven metabolic reprogramming. Treatment with allulose downregulates GLUT1 and key glycolytic genes, disrupting the Warburg effect that cancer cells depend on for survival. These findings suggest allulose as a promising dietary intervention targeting cancer metabolism.",
    keywords: ["Allulose", "Colorectal Cancer", "Glucose Metabolism", "Warburg Effect"],
  },
   {
    number: "05",
    title: "Development of Anti-Tumor Immune mRNA-LNP with Adjuvant Function via Lipid Composition Modification",
    oneLiner:
      "This research aims to develop next-generation mRNA-LNP vaccines by modifying lipid composition to endow intrinsic adjuvant properties, building on the success of COVID-19 mRNA vaccines. While current platforms are highly effective against infectious diseases, we focus on enhancing TH1 anti-tumor immunity by promoting CD4+ T cell responses w/ CD8+ T cells through RIPK3 pathway. This approach seeks to expand mRNA vaccine applications into cancer immunotherapy.",
    keywords: ["mRNA-LNP Vaccine", "Lipid Nanoparticle", "Anti-Tumor Vaccine,", "Gene Therapy"],
  },
   {
    number: "06",
    title: "Modeling of CRC liver metastasis",
    oneLiner:
      "In this research, we develop a non-surgical, orthotopic colorectal cancer (CRC) model that enables spontaneous liver metastasis. Using organoid-based transplantation, we track primary tumor growth, circulating tumor cells (CTCs), and metastatic progression. This platform provides a clinically relevant system to study tumor–immune interactions and identify therapeutic targets.",
    keywords: ["Colorectal Cancer,", "Liver Metastasis", "Surgery free model"],
  },
   {
    number: "07",
    title: "Reduced CH25H Expression Defines a High Membrane Fluidity, Trogocytosis Active State in Colon Cancer Stem Cells",
    oneLiner:
      "The following research focuses on cancer stem cells using spheroid models to better capture their functional states. I investigate how these cells interact with immune cells, particularly through trogocytosis-mediated membrane transfer. My work aims to understand the cellular mechanisms underlying these interactions.",
    keywords: ["Cancer Stem Cells", "Trogocytosis", "Spheroid"],
  },
    {
    number: "08",
    title: "Investigating the Impact of Environmental Pollutants (PM2.5 and Microplastics) on Immune Cell Senescence and Cancer Progression",
    oneLiner:
      "The following research investigates how environmental pollutants — particularly PM2.5 and microplastics — induce T cell immunosenescence and accelerate cancer metastasis. Using in vitro and in vivo models combined with multiomics analysis, I aim to uncover the underlying mechanisms and develop a biodetection and mitigation platform for emerging environmental threats.",
    keywords: ["Environmental Pollutants", "T Cell Immunosenescence", "Tumor Microenvironment", "PM2.5 & Microplastics"],
  },
  {
    number: "09",
    title: "Graphene Oxide Based Fluorescence Probe Platform for Detecting Colorectal Cancer Biomarkers",
    oneLiner:
      "The following research focuses on developing a blood-based liquid biopsy platform to detect tumor-derived nucleic acid biomarkers associated with colorectal cancer progression, metastasis, and recurrence. The goal of my research is to establish a fluorescence-based system using graphene oxide for the rapid and sensitive detection of colorectal cancer-derived RNA/DNA.",
    keywords: ["Colorectal cancer", "Graphene Oxide", "Liquid Biopsy", "Fluorescence Biosensor"],
  },
  {
    number: "10",
    title: "CD8⁺ T Cell Exhaustion in Tumor Immunity",
    oneLiner:
      "This research investigates CD8⁺ T cell exhaustion in tumor immunity. Using an antigen-driven in vitro model, I examine changes in T cell function and exhaustion-associated phenotypes. This work aims to improve anti-tumor immune responses and advance immunotherapy strategies.",
    keywords: ["CD8⁺ T cell exhaustion", "Tumor Immununology", "T cell function", "Immunotherapy"],
  },
  {
    number: "11",
    title: "Functional characterization of PM2.5-induced T-cell immunosenescence",
    oneLiner:
      "This study investigates how environmentally collected PM2.5 alters T-cell function and promotes senescence associated changes. Using murine splenocyte-based in vitro models, it analyzes functional and senescence related responses to better understand PM2.5 induced T cell immunosenescence.",
    keywords: ["PM2.5", "T cell", "Immunosenescence"],
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
          <h2 className="text-2xl font-bold text-[#1e3a5f]">Research Fields</h2>
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
