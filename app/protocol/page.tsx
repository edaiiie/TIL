import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { protocols } from "@/data/protocol"
import { getProtocols } from "@/lib/notion"

export const revalidate = 0

export const metadata: Metadata = {
  title: "Protocol",
  description: "Laboratory protocols and experimental procedures from the Tumor Immunology Lab.",
}

export default async function ProtocolPage() {
  let items = protocols
  try {
    const notionItems = await getProtocols()
    if (notionItems.length > 0) items = notionItems
  } catch (e) {
    console.error("[Protocol] Notion fetch failed:", e)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#f0f2f5] py-24 lg:py-32">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a5f]">Lab Manual</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
              Protocol
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555]">
              Experimental protocols and procedures for reference by lab members.
            </p>
          </div>
        </div>
      </section>

      {/* Protocol List */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-4">
            {items.map((protocol) => (
              <Link
                key={protocol.id}
                href={`/protocol/${protocol.id}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-[#1e3a5f]/30 hover:shadow-lg md:p-8"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[#1e3a5f]/10 px-3 py-1 text-xs font-medium text-[#1e3a5f]">
                      {protocol.category}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-semibold text-[#1e3a5f] transition-colors group-hover:text-[#2a4a73]">
                    {protocol.title}
                  </h2>
                  <p className="mt-2 text-[#555]">{protocol.excerpt}</p>
                </div>
                <ChevronRight className="ml-6 h-5 w-5 shrink-0 text-[#1e3a5f]/40 transition-transform group-hover:translate-x-1 group-hover:text-[#1e3a5f]" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
