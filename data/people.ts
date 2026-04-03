export interface Person {
  id: string
  name: string
  role: string
  email?: string
  image?: string
}

export const currentMembers: Person[] = [
  {
    id: "1",
    name: "Jae Hun Shin",
    role: "Principal Investigator",
    email: "jaehun.shin@yonsei.ac.kr",
    image: "/images/professor-shin.png",
  },
]

export const alumni: Person[] = []
