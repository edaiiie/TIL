export interface GalleryItem {
  id: string
  title: string
  image?: string
  description: string
  date: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Lab Group Photo",
    image: "/images/lab-1.png",
    description: "Tumor Immunology Lab members",
    date: "2025-03-01",
  },
  {
    id: "g2",
    title: "Research Facility",
    image: "/images/lab-2.png",
    description: "Our research facility at Yonsei International Campus",
    date: "2025-03-01",
  },
  {
    id: "g3",
    title: "Laboratory Equipment",
    image: "/images/lab-3.png",
    description: "State-of-the-art equipment for immunology research",
    date: "2025-03-01",
  },
]
