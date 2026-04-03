import { Client } from "@notionhq/client"
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import type { Person } from "@/data/people"
import type { Publication } from "@/data/publications"
import type { Announcement } from "@/data/announcements"
import type { GalleryItem } from "@/data/gallery"
import type { Protocol } from "@/data/protocol"

const notion = new Client({ auth: process.env.NOTION_TOKEN })

// ——— Property helpers ———

function getTitle(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop]
  if (p?.type === "title") return p.title[0]?.plain_text ?? ""
  return ""
}

function getRichText(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop]
  if (p?.type === "rich_text") return p.rich_text[0]?.plain_text ?? ""
  return ""
}

function getSelect(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop]
  if (p?.type === "select") return p.select?.name ?? ""
  return ""
}

function getNumber(page: PageObjectResponse, prop: string): number {
  const p = page.properties[prop]
  if (p?.type === "number") return p.number ?? 0
  return 0
}

function getEmail(page: PageObjectResponse, prop: string): string | undefined {
  const p = page.properties[prop]
  if (p?.type === "email") return p.email ?? undefined
  return undefined
}

function getUrl(page: PageObjectResponse, prop: string): string | undefined {
  const p = page.properties[prop]
  if (p?.type === "url") return p.url ?? undefined
  return undefined
}

function getCheckbox(page: PageObjectResponse, prop: string): boolean {
  const p = page.properties[prop]
  if (p?.type === "checkbox") return p.checkbox
  return false
}

function getDate(page: PageObjectResponse, prop: string): string {
  const p = page.properties[prop]
  if (p?.type === "date") return p.date?.start ?? ""
  return ""
}

function getFileUrl(page: PageObjectResponse, prop: string): string | undefined {
  const p = page.properties[prop]
  if (p?.type === "files" && p.files.length > 0) {
    const file = p.files[0]
    if (file.type === "file") return file.file.url
    if (file.type === "external") return file.external.url
  }
  return undefined
}

// ——— Mappers ———

function mapNotionToPerson(page: PageObjectResponse): Person {
  return {
    id: page.id,
    name: getTitle(page, "Name"),
    role: getSelect(page, "Role"),
    email: getEmail(page, "Email") || undefined,
    image: getFileUrl(page, "Photo"),
  }
}

function mapNotionToPublication(page: PageObjectResponse): Publication {
  const doi = getUrl(page, "DOI") ?? getRichText(page, "DOI")
  const pmid = getRichText(page, "PMID")
  return {
    id: page.id,
    year: getNumber(page, "Year"),
    title: getTitle(page, "Title"),
    journal: getRichText(page, "Journal"),
    authors: getRichText(page, "Authors"),
    doi: doi || undefined,
    pmid: pmid || undefined,
  }
}

function mapNotionToAnnouncement(page: PageObjectResponse): Announcement {
  return {
    id: page.id,
    date: getDate(page, "Date"),
    title: getTitle(page, "Title"),
    excerpt: getRichText(page, "Excerpt"),
  }
}

function mapNotionToGalleryItem(page: PageObjectResponse): GalleryItem {
  return {
    id: page.id,
    title: getTitle(page, "Title"),
    image: getFileUrl(page, "Image"),
    description: getRichText(page, "Description"),
    date: getDate(page, "Date"),
  }
}

function mapNotionToProtocol(page: PageObjectResponse): Protocol {
  return {
    id: page.id,
    title: getTitle(page, "Title"),
    category: getSelect(page, "Category"),
    excerpt: getRichText(page, "Excerpt"),
  }
}

// ——— Query functions ———

export async function getPeople(): Promise<{ current: Person[]; alumni: Person[] }> {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PEOPLE_DB_ID!,
    sorts: [{ property: "Order", direction: "ascending" }],
  })

  const pages = response.results.filter(
    (p): p is PageObjectResponse => p.object === "page" && "properties" in p
  )

  const current: Person[] = []
  const alumni: Person[] = []

  for (const page of pages) {
    const person = mapNotionToPerson(page)
    const status = getSelect(page, "Status")
    if (status === "Alumni") {
      alumni.push(person)
    } else {
      current.push(person)
    }
  }

  return { current, alumni }
}

export async function getPublications(): Promise<Publication[]> {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PUBLICATIONS_DB_ID!,
    sorts: [{ property: "Year", direction: "descending" }],
  })

  return response.results
    .filter((p): p is PageObjectResponse => p.object === "page" && "properties" in p)
    .map(mapNotionToPublication)
}

export async function getAnnouncements(limit?: number): Promise<Announcement[]> {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_ANNOUNCEMENTS_DB_ID!,
    sorts: [{ property: "Date", direction: "descending" }],
    filter: { property: "Published", checkbox: { equals: true } },
    ...(limit ? { page_size: limit } : {}),
  })

  return response.results
    .filter((p): p is PageObjectResponse => p.object === "page" && "properties" in p)
    .map(mapNotionToAnnouncement)
}

export async function getGallery(): Promise<GalleryItem[]> {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_GALLERY_DB_ID!,
    sorts: [{ property: "Order", direction: "ascending" }],
    filter: { property: "Published", checkbox: { equals: true } },
  })
  return response.results
    .filter((p): p is PageObjectResponse => p.object === "page" && "properties" in p)
    .map(mapNotionToGalleryItem)
}

export async function getProtocols(): Promise<Protocol[]> {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PROTOCOL_DB_ID!,
    sorts: [{ property: "Order", direction: "ascending" }],
    filter: { property: "Published", checkbox: { equals: true } },
  })
  return response.results
    .filter((p): p is PageObjectResponse => p.object === "page" && "properties" in p)
    .map(mapNotionToProtocol)
}

export async function getProtocolById(pageId: string): Promise<Protocol | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId })
    if ("properties" in page) return mapNotionToProtocol(page as PageObjectResponse)
    return null
  } catch {
    return null
  }
}

export async function getProtocolBlocks(pageId: string): Promise<any[]> {
  try {
    const response = await notion.blocks.children.list({ block_id: pageId, page_size: 100 })
    return response.results
  } catch {
    return []
  }
}

export async function getFeaturedPublication(): Promise<Publication | null> {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PUBLICATIONS_DB_ID!,
    filter: { property: "Featured", checkbox: { equals: true } },
    page_size: 1,
  })

  const pages = response.results.filter(
    (p): p is PageObjectResponse => p.object === "page" && "properties" in p
  )

  return pages.length > 0 ? mapNotionToPublication(pages[0]) : null
}
