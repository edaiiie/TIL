export interface Announcement {
  id: string
  date: string
  title: string
  excerpt: string
  content?: string
}

export const announcements: Announcement[] = [
  {
    id: "ann1",
    date: "2025-03-19",
    title: "Website Launch",
    excerpt: "The Tumor Immunology Lab website has officially launched.",
    content:
      "We are excited to announce the launch of our new laboratory website. This site will serve as the primary resource for information about our research, team members, publications, and news. We welcome inquiries from prospective students and collaborators.",
  },
  {
    id: "ann2",
    date: "2025-01-01",
    title: "Now Recruiting",
    excerpt: "We are accepting applications from motivated graduate students and postdoctoral researchers.",
    content:
      "The Tumor Immunology Lab at Yonsei University is currently recruiting graduate students (M.S./Ph.D.) and postdoctoral researchers with a strong interest in cancer immunology and trogocytosis research. Candidates with backgrounds in immunology, cell biology, or molecular biology are encouraged to apply. Please send your CV and a brief statement of research interests to jaehun.shin@yonsei.ac.kr.",
  },
]
