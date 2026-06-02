import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://skillmatch-web-one.vercel.app'),

  title: {
    default: 'SkillMatch AI',
    template: '%s | SkillMatch AI',
  },

  description:
    'Discover your ideal career path powered by AI and Machine Learning.',

  keywords: [
    'SkillMatch AI',
    'Career Recommendation',
    'AI Career Guidance',
    'Machine Learning',
    'Artificial Intelligence',
    'Career Path',
    'Career Discovery',
    'Job Recommendation',
    'Capstone Project',
  ],

  authors: [
    {
      name: 'SkillMatch AI Team',
    },
  ],

  creator: 'SkillMatch AI Team',

  applicationName: 'SkillMatch AI',

  category: 'Education',

  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
      },
    ],
  },

  manifest: '/manifest.json',

  openGraph: {
    title: 'SkillMatch AI',
    description:
      'Discover your ideal career path powered by AI and Machine Learning.',
    url: 'https://skillmatch-web-one.vercel.app',
    siteName: 'SkillMatch AI',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SkillMatch AI',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SkillMatch AI',
    description:
      'Discover your ideal career path powered by AI and Machine Learning.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`
          ${dmSans.variable}
          ${syne.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  )
}