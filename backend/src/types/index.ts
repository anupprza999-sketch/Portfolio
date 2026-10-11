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

export interface ContactInput {
  name: string
  email: string
  subject?: string
  message: string
}
