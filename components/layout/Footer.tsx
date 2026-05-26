import Link from 'next/link'

import Button from '@/components/ui/Button'
import GradientText from '@/components/ui/GradientText'

const footerLinks = [
  {
    label: 'Privacy',
    href: '#',
  },
  {
    label: 'Terms',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.08),transparent_70%)] blur-3xl" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,156,255,0.08),transparent_70%)] blur-3xl" />
      </div>

      <div className="container-custom">
        {/* CTA */}
        <div
          className="
            border-b border-white/10

            py-20
          "
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="
                text-[clamp(2.2rem,5vw,4rem)]
                font-bold
                leading-[1.05]
                tracking-tight

                text-white
              "
            >
              Ready to discover your{' '}

              <GradientText>
                ideal career path?
              </GradientText>
            </h2>

            <p
              className="
                mx-auto mt-6 max-w-2xl

                text-lg leading-8
                text-slate-400
              "
            >
              Explore personalized recommendations powered by AI
              and take the next step toward a future aligned with
              your skills and ambitions.
            </p>

            <div className="mt-10 flex justify-center">
              <Button href="/analysis">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex flex-col gap-10

            py-10

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group flex items-center gap-3"
            >
              <div
                className="
                  h-3 w-3 rounded-full

                  bg-linear-to-br
                  from-(--secondary)
                  to-(--primary)

                  shadow-[0_0_20px_rgba(124,156,255,0.7)]

                  transition-transform duration-300
                  group-hover:scale-110
                "
              />

              <span
                className="
                  font-heading
                  text-lg font-bold

                  tracking-tight
                  text-white
                "
              >
                SkillMatch AI
              </span>
            </Link>

            <p
              className="
                mt-4 max-w-md

                text-sm leading-7
                text-slate-400
              "
            >
              AI-powered career discovery platform built to help
              students and professionals uncover opportunities
              aligned with their skills and potential.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  text-sm text-slate-400

                  transition-colors duration-300

                  hover:text-white
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          className="
            border-t border-white/10

            py-6
          "
        >
          <p
            className="
              text-center text-sm
              text-slate-500
            "
          >
            © 2026 SkillMatch AI — Capstone Project by PJK-GM002.
          </p>
        </div>
      </div>
    </footer>
  )
}