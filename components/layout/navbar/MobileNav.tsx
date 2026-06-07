'use client'

import Link from 'next/link'

import MobileUserMenu from './MobileUserMenu'

import { User } from '@/types/auth'

interface NavLink {
    label: string
    href: string
}

interface Props {
    pathname: string
    links: NavLink[]
    user: User | null
    onNavigate: (
        href: string
    ) => void
    onLogout: () => void
    onClose: () => void
}

export default function MobileNav({
    pathname,
    links,
    user,
    onNavigate,
    onLogout,
    onClose,
}: Props) {

    return (
        <div
            className="
            mt-3

            overflow-hidden
            rounded-3xl

            border border-white/10
            bg-[#0B1120]/95

            p-5

            backdrop-blur-2xl
            shadow-2xl

            md:hidden
        "
        >
            <div className="space-y-5">

                {/* Navigation */}
                <div>

                    <p
                        className="
                        mb-3

                        px-2

                        text-xs
                        font-semibold

                        uppercase
                        tracking-[0.2em]

                        text-slate-500
                    "
                    >
                        Navigation
                    </p>

                    <div className="space-y-2">

                        {links.map((link) => {

                            const active =
                                pathname ===
                                link.href

                            return (
                                <button
                                    key={link.href}
                                    onClick={() => {

                                        onClose()

                                        onNavigate(
                                            link.href
                                        )
                                    }}
                                    className={`
                                    flex
                                    w-full
                                    items-center
                                    justify-between

                                    rounded-2xl

                                    px-4
                                    py-3

                                    text-sm

                                    transition-all
                                    duration-300

                                    ${active
                                            ? `
                                            border border-white/10
                                            bg-white/10
                                            text-white
                                            `
                                            : `
                                            text-slate-400
                                            hover:bg-white/5
                                            hover:text-white
                                            `
                                        }
                                `}
                                >
                                    {link.label}

                                    {active && (
                                        <div
                                            className="
                                            h-2
                                            w-2

                                            rounded-full

                                            bg-(--secondary)
                                        "
                                        />
                                    )}
                                </button>
                            )
                        })}

                    </div>

                </div>

                <div className="h-px bg-white/10" />

                {/* User Section */}
                <MobileUserMenu
                    user={user}
                    onLogout={onLogout}
                />

                {/* CTA */}
                <Link
                    href="/analysis"
                    onClick={onClose}
                    className="
                    flex
                    items-center
                    justify-center

                    rounded-2xl

                    bg-linear-to-r
                    from-(--secondary)
                    to-(--primary)

                    px-5
                    py-3.5

                    text-sm
                    font-medium

                    text-white

                    shadow-[0_0_30px_rgba(124,156,255,0.25)]
                "
                >
                    Analyze My Skills
                </Link>

            </div>
        </div>
    )
}