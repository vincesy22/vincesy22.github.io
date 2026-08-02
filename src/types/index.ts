export interface NavLink {
  label: string
  href: string
}

export interface SkillCategory {
  title: string
  icon: string
  skills: { name: string; level: number }[]
}

export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  technologies: string[]
  features: string[]
  challenges: string
  learned: string
  metrics?: { label: string; value: string }[]
  githubUrl: string
  demoUrl?: string
  featured?: boolean
  image?: string
}

export interface ExperienceItem {
  date: string
  title: string
  org: string
  description: string
  tags: string[]
}

export interface EducationItem {
  school: string
  degree: string
  period: string
  status: string
  description: string
}

export interface Achievement {
  title: string
  description: string
  icon: string
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  href?: string
}

export interface ContactLink {
  label: string
  value: string
  href: string
  icon: string
}
