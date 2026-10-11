export interface Project {
  id: string
  title: string
  category: string
  description: string
  software: string[]
  role: string
  period: string
  teamSize: number
  status: 'completed' | 'ongoing'
  thumbnail: string
  images: string[]
}

export interface UserProfile {
  name: string
  title: string
  tagline: string
  about: string
  skills: Record<string, string[]>
  experience: {
    company: string
    role: string
    responsibilities: string[]
  }[]
  education: {
    qualification: string
    institution: string
    year?: string
  }[]
  contact: {
    email: string
    phone: string
    linkedin: string
  }
}
