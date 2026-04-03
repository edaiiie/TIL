import type { Metadata } from "next"
import Image from "next/image"
import { galleryItems } from "@/data/gallery"
import { getGallery } from "@/lib/notion"

export const revalidate = 0

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of the Tumor Immunology Lab at Yonsei University.",
}

export default async function GalleryPage() {
  let items = galleryItems
  try {
    const notionItems = await getGallery()
    if (notionItems.length > 0) items = notionItems
  } catch (e) {
    console.error("[Gallery] Notion fetch failed:", e)
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
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a5f]">Our Lab</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
              Gallery
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555]">
              Photos from our laboratory, research activities, and team events.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {items.length === 0 ? (
            <p className="text-center text-[#888]">No photos yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-[#1e3a5f]/30 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f8f9fa]">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-6xl font-light text-[#1e3a5f]/20">📷</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h2 className="font-semibold text-[#1e3a5f]">{item.title}</h2>
                    <p className="mt-1 text-sm text-[#555]">{item.description}</p>
                    <time
                      dateTime={item.date}
                      className="mt-3 block text-xs text-[#888]"
                    >
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
