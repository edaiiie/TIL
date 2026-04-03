import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { protocols } from "@/data/protocol"
import { getProtocolById, getProtocolBlocks } from "@/lib/notion"
import { NotionRenderer } from "@/components/notion-renderer"

export const dynamic = "force-dynamic"

export default async function ProtocolDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // Static fallback lookup
  const staticProtocol = protocols.find((p) => p.id === id)

  let protocol = staticProtocol ?? null
  let blocks: any[] = []

  try {
    const [notionProtocol, notionBlocks] = await Promise.all([
      getProtocolById(id),
      getProtocolBlocks(id),
    ])
    if (notionProtocol) protocol = notionProtocol
    blocks = notionBlocks
  } catch (e) {
    console.error("[Protocol detail] Notion fetch failed:", e)
  }

  if (!protocol) notFound()

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative overflow-hidden bg-[#f0f2f5] py-16 lg:py-20">
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/protocol"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1e3a5f]/60 transition-colors hover:text-[#1e3a5f]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Protocol
          </Link>
          <div className="mt-4">
            <span className="rounded-full bg-[#1e3a5f]/10 px-3 py-1 text-xs font-medium text-[#1e3a5f]">
              {protocol.category}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            {protocol.title}
          </h1>
          <p className="mt-4 text-lg text-[#555]">{protocol.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {blocks.length > 0 ? (
            <NotionRenderer blocks={blocks} />
          ) : (
            <p className="text-[#888]">No content available yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}
