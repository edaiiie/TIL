import type { Metadata } from "next"
import { Bell } from "lucide-react"
import { announcements } from "@/data/announcements"
import { getAnnouncements } from "@/lib/notion"

export const revalidate = 0

export const metadata: Metadata = {
  title: "Achievement",
  description: "Research achievements and milestones from the Tumor Immunology Lab at Yonsei University.",
}

export default async function AchievementPage() {
  let items = announcements
  try {
    const notionItems = await getAnnouncements()
    if (notionItems.length > 0) items = notionItems
  } catch (e) {
    console.error("[Achievement] Notion fetch failed:", e)
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
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a5f]">Milestones</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
              Achievement
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#555]">
              Research achievements, milestones, and highlights from our laboratory.
            </p>
          </div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-6">
            {items.map((announcement, index) => (
              <article
                key={announcement.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-[#1e3a5f]/30 hover:shadow-lg"
              >
                <div className="grid md:grid-cols-[180px_1fr]">
                  {/* Date sidebar */}
                  <div className="flex items-center gap-4 border-b border-slate-100 bg-[#f8f9fa] p-6 md:flex-col md:justify-center md:border-b-0 md:border-r">
                    <time 
                      dateTime={announcement.date}
                      className="text-center"
                    >
                      <span className="block text-3xl font-bold text-[#1e3a5f]">
                        {new Date(announcement.date).getDate()}
                      </span>
                      <span className="block text-sm font-medium uppercase text-[#555]">
                        {new Date(announcement.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </span>
                    </time>
                    {index === 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-[#1e3a5f]/20 bg-white px-3 py-1 text-xs font-medium text-[#1e3a5f]">
                        <Bell className="h-3 w-3" />
                        Latest
                      </span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h2 className="text-xl font-semibold text-[#1e3a5f] group-hover:text-[#2a4a73] transition-colors">
                      {announcement.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-[#555]">
                      {announcement.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Archive Note */}
          <div className="mt-16 rounded-2xl border-2 border-dashed border-slate-200 bg-[#f8f9fa] p-8 text-center">
            <p className="text-[#555]">
              For older announcements, please contact the lab administrator at{" "}
              <a href="mailto:jaehun.shin@yonsei.ac.kr" className="font-medium text-[#1e3a5f] hover:underline">
                jaehun.shin@yonsei.ac.kr
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
