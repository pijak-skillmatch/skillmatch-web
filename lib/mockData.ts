// ---------------------------------------------------------------------------
// mockData.ts
// All arrays are intentionally empty.
// Backend integration should replace these with real API calls.
// ---------------------------------------------------------------------------

export const features: {
  icon: string
  title: string
  description: string
}[] = []

export const recommendations: {
  title: string
  description: string
  match: number
  tags: string[]
}[] = []

export const teamMembers: {
  initials: string
  name: string
  role: string
  bio: string
}[] = [
  {
    initials: 'FF',
    name: 'Fais Fajar',
    role: 'Project Lead & Back-End Developer',
    bio: '......',
  },
  {
    initials: 'H',
    name: 'Hizkian',
    role: 'Machine Learning Engineer',
    bio: '....',
  },
  {
    initials: 'AP',
    name: 'Adinda Putri Nur R.',
    role: 'Machine Learning Engineer',
    bio: '.....',
  },
  {
    initials: 'HF',
    name: 'Hana Fithri Sabiila',
    role: 'Front-End Developer',
    bio: '......',
  },
]

export const techStack: string[] = []

// Goal options are static UI choices, not backend data
export const goalOptions = ['Internship', 'Freelance', 'Fulltime']
