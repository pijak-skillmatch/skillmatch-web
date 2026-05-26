'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Model', href: '/analysis' },
  { label: 'About', href: '/about' },
]

const backMap: Record<string, { href: string; label: string }> = {
  '/analysis': { href: '/', label: 'Home' },
  '/dashboard': { href: '/analysis', label: 'Analysis' },
  '/about': { href: '/', label: 'Home' },
}

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const [mobileOpen, setMobileOpen] = useState(false)

  const back = backMap[pathname]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container-custom">
        {/* MAIN NAVBAR */}
        <div
          className="
            mt-4
            flex h-18.5 items-center justify-between
            rounded-2xl
            border border-white/10
            bg-white/5
            px-4 md:px-6
            backdrop-blur-xl
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-3 md:gap-4">
            {back && (
              <button
                onClick={() => router.push(back.href)}
                className="
                  hidden sm:flex
                  items-center gap-2

                  rounded-xl
                  border border-white/10
                  bg-white/5

                  px-4 py-2

                  text-sm text-slate-400

                  transition-all duration-300

                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M8.5 2L3.5 6.5l5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {back.label}
              </button>
            )}

            {/* LOGO */}
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
                  text-base md:text-lg
                  font-bold

                  tracking-[-0.03em]
                  text-white
                "
              >
                SkillMatch AI
              </span>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => {
                const active = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative text-sm transition-colors duration-300
                      ${active
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white'
                      }
                    `}
                  >
                    {link.label}

                    {active && (
                      <span
                        className="
                          absolute -bottom-2 left-0
                          h-px w-full

                          bg-linear-to-r
                          from-(--secondary)
                          to-(--primary)
                        "
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <Link
              href="/analysis"
              className="
                hidden md:inline-flex

                rounded-xl

                bg-linear-to-r
                from-(--secondary)
                to-(--primary)

                px-5 py-2.5

                text-sm font-medium text-white

                shadow-[0_0_30px_rgba(124,156,255,0.25)]

                transition-all duration-300

                hover:scale-[1.03]
                hover:shadow-[0_0_40px_rgba(124,156,255,0.45)]
              "
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                flex h-11 w-11 items-center justify-center

                rounded-xl
                border border-white/10
                bg-white/5

                text-white

                transition-all duration-300

                hover:border-white/20
                hover:bg-white/10

                md:hidden
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                {mobileOpen ? (
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div
            className="
              mt-3

              overflow-hidden
              rounded-2xl

              border border-white/10
              bg-[#0B1120]/90

              p-4

              backdrop-blur-2xl

              md:hidden
            "
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      rounded-xl
                      px-4 py-3

                      text-sm

                      transition-all duration-300

                      ${active
                        ? 'bg-white/10 text-white'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <Link
                href="/analysis"
                onClick={() => setMobileOpen(false)}
                className="
                  mt-2

                  flex items-center justify-center

                  rounded-xl

                  bg-linear-to-r
                  from-(--secondary)
                  to-(--primary)

                  px-5 py-3

                  text-sm font-medium text-white
                "
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}