'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import {
  getUser,
  removeUser,
} from '@/lib/auth/user'

import {
  removeToken,
} from '@/lib/auth/token'

import { FiChevronLeft, FiMenu, FiX, FiUser } from 'react-icons/fi'
import { showConfirm, showSuccess } from '@/lib/swal'
import { logout } from '@/lib/auth/logout'

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

  const [user, setUser] =
    useState<{
      id: number
      name: string
      email: string
    } | null>(null)

  const pathname = usePathname()
  const router = useRouter()

  const [mobileOpen, setMobileOpen] = useState(false)

  const back = backMap[pathname]

  useEffect(() => {

    const currentUser =
      getUser()

    setUser(
      currentUser
    )

  }, [])

  const handleLogout = async () => {

    const result =
      await showConfirm(
        'Logout',
        'Are you sure you want to logout?'
      )

    if (!result.isConfirmed) {
      return
    }

    logout()

    await showSuccess(
      'Logged Out',
      'See you again soon!'
    )

    router.push('/')
  }

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
                <FiChevronLeft
                  size={14} />

                {back.label}
              </button>
            )}

            {/* LOGO */}
            <Link
              href="/"
              className="group flex items-center gap-3"
            >
              <Image
                src="/logo-1.png"
                alt="SkillMatch AI"
                width={140}
                height={40}
                priority
                className="
      h-8 w-auto
      transition-transform duration-300
      group-hover:scale-105
    "
              />

              <span
                className="
      hidden sm:block

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
            <div
              className="
    hidden
    items-center
    gap-3
    md:flex
  "
            >

              {user ? (

                <>
                  <div
                    className="
          flex items-center
          gap-2
          rounded-xl

          border border-white/10
          bg-white/5

          px-4 py-2

          text-sm
          text-white
        "
                  >
                    <FiUser size={14} />
                    {user.name}
                  </div>

                  <button
                    onClick={handleLogout}
                    className="
          rounded-xl

          border border-red-500/20
          bg-red-500/10

          px-4 py-2

          text-sm
          text-red-300
        "
                  >
                    Logout
                  </button>
                </>

              ) : (

                <>
                  <Link
                    href="/login"
                    className="
          text-sm
          text-slate-300
        "
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="
          rounded-xl

          bg-linear-to-r
          from-(--secondary)
          to-(--primary)

          px-5 py-2.5

          text-sm
          font-medium
          text-white
        "
                  >
                    Register
                  </Link>
                </>

              )}

            </div>

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
              {mobileOpen ? (
                <FiX size={20} />
              ) : (
                <FiMenu size={20} />
              )}
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

              {user ? (

                <>
                  <div
                    className="
        flex items-center
        gap-2 mt-2

        rounded-xl

        border border-white/10
        bg-white/5

        px-4 py-3

        text-sm
        text-white
      "
                  >
                    <FiUser size={14} />
                    {user.name}
                  </div>

                  <button
                    onClick={handleLogout}
                    className="
        mt-2

        rounded-xl

        border border-red-500/20
        bg-red-500/10

        px-4 py-3

        text-left

        text-sm
        text-red-300
      "
                  >
                    Logout
                  </button>
                </>

              ) : (

                <>
                  <Link
                    href="/login"
                    className="
        rounded-xl
        px-4 py-3

        text-sm
        text-slate-300
      "
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="
        mt-2

        flex
        justify-center

        rounded-xl

        bg-linear-to-r
        from-(--secondary)
        to-(--primary)

        px-5 py-3

        text-sm
        text-white
      "
                  >
                    Register
                  </Link>
                </>

              )}

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