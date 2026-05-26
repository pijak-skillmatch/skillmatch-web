import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SkillMatch AI — Next-Gen Career Discovery',
  description: 'AI-powered career recommendations based on your skills, interests, and goals.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
