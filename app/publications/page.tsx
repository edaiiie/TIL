import type { Metadata } from "next"
import { ExternalLink, BookOpen } from "lucide-react"
import { publications } from "@/data/publications"
import { getPublications } from "@/lib/notion"

export const revalidate = 0

export const metadata: Metadata = {
  title: "Publications",
  description: "Scientific publications from the Tumor Immunology Lab at Yonsei University.",
}

export default async function PublicationsPage() {
  let pubs = publications
  try {
    const notionPubs = await getPublications()
    if (notionPubs.length > 0) pubs = notionPubs
  } catch (e) {
    console.error("[Publications] Notion fetch failed:", e)
  }

  const publicationsByYear = pubs.reduce(
    (acc, pub) => {
      if (!acc[pub.year]) acc[pub.year] = []
      acc[pub.year].push(pub)
      return acc
    },
    {} as Record<number, typeof pubs>
  )
  const years = Object.keys(publicationsByYear).map(Number).sort((a, b) => b - a)

  return (
    <div className="pt-20">
      {/* Hero Section - Light theme */}
      <section className="relative overflow-hidden bg-[#f0f2f5] py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a5f]">Academic Output</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
                Publications
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#555]">
                Peer-reviewed articles and research contributions from our laboratory.
              </p>
            </div>
            <a
              href="https://scholar.google.com/citations?user=3bBYD38AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1e3a5f] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#2a4a73]"
            >
              Google Scholar
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-[#1e3a5f]" />
              <div>
                <span className="text-2xl font-bold text-[#1e3a5f]">{pubs.length}</span>
                <span className="ml-2 text-[#555]">Publications</span>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <span className="text-2xl font-bold text-[#1e3a5f]">{years.length}</span>
              <span className="ml-2 text-[#555]">Years of Research</span>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {years.map((year) => (
              <div key={year}>
                <div className="flex items-center gap-6">
                  <h2 className="text-3xl font-bold text-[#1e3a5f]">{year}</h2>
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="rounded-full border border-[#1e3a5f]/20 bg-[#f8f9fa] px-4 py-1 text-sm font-medium text-[#1e3a5f]">
                    {publicationsByYear[year].length} {publicationsByYear[year].length === 1 ? "paper" : "papers"}
                  </span>
                </div>
                <ul className="mt-8 space-y-4">
                  {publicationsByYear[year].map((pub) => (
                    <li
                      key={pub.id}
                      className="group rounded-xl border border-slate-200 bg-[#f8f9fa] p-6 transition-all hover:border-[#1e3a5f]/30 hover:bg-white hover:shadow-lg"
                    >
                      <h3 className="font-semibold leading-snug text-[#1e3a5f] group-hover:text-[#2a4a73] transition-colors">
                        {pub.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#555]">{pub.authors}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[#555] border border-slate-200">
                          {pub.journal}
                        </span>
                        {pub.doi && (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-[#888] transition-colors hover:text-[#1e3a5f]"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            DOI
                          </a>
                        )}
                        {pub.pmid && (
                          <a
                            href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-[#888] transition-colors hover:text-[#1e3a5f]"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            PubMed
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="mt-16 text-center text-sm text-[#555]">
            * Corresponding author. For a complete list of publications, please visit{" "}
            <a
              href="https://scholar.google.com/citations?hl=en&user=jaehun-shin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e3a5f] hover:underline"
            >
              Google Scholar
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
