'use client'

import Link from 'next/link'

import { FiUser } from 'react-icons/fi'

import { User } from '@/types/auth'

interface Props {
    user: User | null
    onLogout: () => void
}

export default function MobileUserMenu({
    user,
    onLogout,
}: Props) {

    if (user) {

        return (
            <div
                className="
                rounded-2xl

                border border-white/10
                bg-white/5

                p-4
            "
            >
                <div
                    className="
                    flex
                    items-center
                    gap-3
                "
                >
                    <div
                        className="
                        flex
                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-full

                        bg-linear-to-r
                        from-(--secondary)
                        to-(--primary)

                        text-white
                    "
                    >
                        <FiUser />
                    </div>

                    <div>

                        <p
                            className="
                            text-sm
                            font-medium
                            text-white
                        "
                        >
                            {user.name}
                        </p>

                        <p
                            className="
                            text-xs
                            text-slate-400
                        "
                        >
                            Logged in
                        </p>

                    </div>
                </div>

                <button
                    onClick={onLogout}
                    className="
                    mt-4

                    w-full

                    rounded-xl

                    border border-red-500/20
                    bg-red-500/10

                    px-4
                    py-3

                    text-sm
                    text-red-300
                "
                >
                    Logout
                </button>
            </div>
        )
    }

    return (
        <div
            className="
            rounded-2xl

            border border-white/10
            bg-white/5

            p-4
        "
        >
            <p
                className="
                text-sm
                text-slate-400
            "
            >
                Sign in to save reports,
                export PDFs, and view
                your analysis history.
            </p>

            <div className="mt-4 flex gap-3">

                <Link
                    href="/login"
                    className="
                    flex-1

                    rounded-xl

                    border border-white/10
                    bg-white/5

                    px-4
                    py-3

                    text-center
                    text-sm

                    text-slate-300
                "
                >
                    Login
                </Link>

                <Link
                    href="/register"
                    className="
                    flex-1

                    rounded-xl

                    bg-linear-to-r
                    from-(--secondary)
                    to-(--primary)

                    px-4
                    py-3

                    text-center
                    text-sm

                    text-white
                "
                >
                    Register
                </Link>

            </div>
        </div>
    )
}