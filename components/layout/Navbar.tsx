'use client'

import Link from 'next/link'
import Image from 'next/image'

import {
  useState,
} from 'react'

import {
  useRouter,
  usePathname,
} from 'next/navigation'

import {
  FiChevronLeft,
  FiMenu,
  FiX,
} from 'react-icons/fi'

import {
  useAuth,
} from '@/hooks/useAuth'

import {
  useProtectedRoute,
} from '@/hooks/useProtectedRoute'

import {
  logout,
} from '@/lib/auth/logout'

import {
  showConfirm,
  showSuccess,
} from '@/lib/swal'

import UserMenu from './navbar/UserMenu'
import DesktopNav from './navbar/DesktopNav'
import MobileNav from './navbar/MobileNav'

import {
  navLinks,
  backMap,
} from './navbar/navLinks'

export default function Navbar() {

  const router =
    useRouter()

  const pathname =
    usePathname()

  const {
    user,
  } = useAuth()

  const {
    navigate,
  } = useProtectedRoute()

  const [mobileOpen,
    setMobileOpen] =
    useState(false)

  const back =
    backMap[pathname]

  const handleLogout =
    async () => {

      const result =
        await showConfirm(
          'Logout',
          'Are you sure you want to logout?'
        )

      if (
        !result.isConfirmed
      ) {
        return
      }

      logout()

      await showSuccess(
        'Logged Out',
        'See you again soon!'
      )

      window.location.href = '/'
    }

  return (

    <header className="fixed inset-x-0 top-0 z-50">

      <nav className="container-custom">

        <div
          className="
                        mt-4

                        flex
                        h-18.5
                        items-center
                        justify-between

                        rounded-2xl

                        border border-white/10
                        bg-white/5

                        px-4
                        md:px-6

                        backdrop-blur-xl
                    "
        >

          {/* LEFT */}

          <div
            className="
                            flex
                            items-center
                            gap-3
                            md:gap-4
                        "
          >

            {back && (

              <button
                onClick={() =>
                  router.push(
                    back.href
                  )
                }
                className="
                                    hidden
                                    sm:flex

                                    items-center
                                    gap-2

                                    rounded-xl

                                    border border-white/10
                                    bg-white/5

                                    px-4 py-2

                                    text-sm
                                    text-slate-400

                                    transition-all
                                    duration-300

                                    hover:border-white/20
                                    hover:bg-white/10
                                    hover:text-white
                                "
              >
                <FiChevronLeft
                  size={14}
                />

                {back.label}

              </button>

            )}

            <Link
              href="/"
              className="
                                group
                                flex
                                items-center
                                gap-3
                            "
            >

              <Image
                src="/logo-1.png"
                alt="SkillMatch AI"
                width={140}
                height={40}
                priority
                className="
                                    h-8
                                    w-auto

                                    transition-transform
                                    duration-300

                                    group-hover:scale-105
                                "
              />

              <span
                className="
                                    hidden
                                    sm:block

                                    font-heading
                                    text-base
                                    md:text-lg

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

          <div
            className="
                            flex
                            items-center
                            gap-4
                        "
          >

            <DesktopNav
              pathname={pathname}
              links={navLinks}
              onNavigate={
                navigate
              }
            />

            <div
              className="
                                hidden
                                md:flex

                                items-center
                                gap-3
                            "
            >
              <UserMenu
                user={user}
                onLogout={
                  handleLogout
                }
              />
            </div>

            <button
              onClick={() =>
                setMobileOpen(
                  !mobileOpen
                )
              }
              className="
                                flex
                                md:hidden

                                h-11
                                w-11

                                items-center
                                justify-center

                                rounded-xl

                                border border-white/10
                                bg-white/5

                                text-white

                                transition-all
                                duration-300

                                hover:border-white/20
                                hover:bg-white/10
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

        {mobileOpen && (

          <MobileNav
            pathname={pathname}
            links={navLinks}
            user={user}
            onNavigate={
              navigate
            }
            onLogout={
              handleLogout
            }
            onClose={() =>
              setMobileOpen(
                false
              )
            }
          />

        )}

      </nav>

    </header>
  )
}