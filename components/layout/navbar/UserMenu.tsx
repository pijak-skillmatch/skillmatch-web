'use client'

import Link from 'next/link'

import { FiUser } from 'react-icons/fi'

import { User } from '@/types/auth'

interface Props {
    user: User | null
    onLogout: () => void
}

export default function UserMenu({
    user,
    onLogout,
}: Props) {

    if (user) {

        return (
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
                    onClick={onLogout}
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
        )
    }

    return (
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
    )
}