export interface Protocol {
  id: string
  title: string
  category: string
  excerpt: string
}

export const protocols: Protocol[] = [
  {
    id: "proto1",
    title: "Organoid Culture Protocol",
    category: "Cell Culture",
    excerpt: "Standard procedure for culturing patient-derived organoids.",
  },
  {
    id: "proto2",
    title: "T Cell Isolation and Co-culture",
    category: "Co-culture",
    excerpt: "Protocol for isolating T cells and setting up cancer cell–T cell co-culture systems.",
  },
]
