'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Navbar from '@/components/layout/Navbar'
import Button from '@/components/ui/Button'
import GlassPanel from '@/components/ui/GlassPanel'

import {
    register,
} from '@/lib/api/auth'

import {
    showSuccess,
    showError,
    showLoading,
    closeLoading,
} from '@/lib/swal'
import { getPendingAction } from '@/lib/auth/pendingAction'

export default function RegisterPage() {

    const router = useRouter()

    const [name, setName] =
        useState('')

    const [email, setEmail] =
        useState('')

    const [password, setPassword] =
        useState('')

    const [loading, setLoading] =
        useState(false)

    const handleSubmit =
        async (
            e: React.FormEvent
        ) => {

            e.preventDefault()

            try {

                setLoading(true)

                showLoading(
                    'Creating Account',
                    'Please wait...'
                )

                await register({
                    name,
                    email,
                    password,
                })

                closeLoading()

                await showSuccess(
                    'Account Created',
                    'Your account has been created successfully.'
                )

                const pendingAction =
                    getPendingAction()

                if (
                    pendingAction ===
                    'export_pdf'
                ) {

                    router.push(
                        '/login?export=1'
                    )

                    return
                }

                router.push(
                    '/login'
                )

            } catch (error) {

                console.error(error)

                closeLoading()

                await showError(
                    'Registration Failed',
                    'Unable to create account.'
                )

            } finally {

                setLoading(false)
            }
        }

    return (
        <>
            <Navbar />

            <main
                className="
                    relative
                    overflow-hidden

                    pt-32
                    pb-20
                "
            >
                <div className="pointer-events-none absolute inset-0 -z-10">

                    <div
                        className="
                            absolute
                            left-0
                            top-1/3

                            h-96
                            w-96

                            rounded-full

                            bg-[radial-gradient(circle,rgba(124,156,255,0.12),transparent_70%)]

                            blur-3xl
                        "
                    />

                    <div
                        className="
                            absolute
                            right-0
                            top-0

                            h-96
                            w-96

                            rounded-full

                            bg-[radial-gradient(circle,rgba(167,139,250,0.10),transparent_70%)]

                            blur-3xl
                        "
                    />

                </div>

                <div className="container-custom">

                    <div
                        className="
                            mx-auto
                            max-w-md
                        "
                    >
                        <GlassPanel
                            className="p-8"
                        >

                            <div>

                                <div
                                    className="
                                        inline-flex
                                        rounded-full

                                        border border-white/10
                                        bg-white/5

                                        px-4
                                        py-2

                                        text-xs
                                        uppercase

                                        tracking-[0.18em]

                                        text-slate-300
                                    "
                                >
                                    Create Account
                                </div>

                                <h1
                                    className="
                                        mt-5

                                        text-3xl
                                        font-bold

                                        text-white
                                    "
                                >
                                    Join SkillMatch AI
                                </h1>

                                <p
                                    className="
                                        mt-3
                                        text-slate-400
                                    "
                                >
                                    Create your account to save
                                    reports, export PDFs,
                                    and access AI-powered
                                    learning features.
                                </p>

                            </div>

                            <form
                                onSubmit={
                                    handleSubmit
                                }
                                className="
                                    mt-8
                                    space-y-5
                                "
                            >
                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block

                                            text-sm
                                            text-slate-300
                                        "
                                    >
                                        Full Name
                                    </label>

                                    <input
                                        value={name}
                                        onChange={(e) =>
                                            setName(
                                                e.target.value
                                            )
                                        }
                                        required
                                        className="
                                            w-full

                                            rounded-xl

                                            border border-white/10

                                            bg-white/5

                                            px-4
                                            py-3

                                            text-white
                                        "
                                    />

                                </div>

                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block

                                            text-sm
                                            text-slate-300
                                        "
                                    >
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(
                                                e.target.value
                                            )
                                        }
                                        required
                                        className="
                                            w-full

                                            rounded-xl

                                            border border-white/10

                                            bg-white/5

                                            px-4
                                            py-3

                                            text-white
                                        "
                                    />

                                </div>

                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block

                                            text-sm
                                            text-slate-300
                                        "
                                    >
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(
                                                e.target.value
                                            )
                                        }
                                        required
                                        className="
                                            w-full

                                            rounded-xl

                                            border border-white/10

                                            bg-white/5

                                            px-4
                                            py-3

                                            text-white
                                        "
                                    />

                                </div>

                                <Button
                                    type="submit"
                                    disabled={
                                        loading
                                    }
                                    className="
                                        w-full
                                    "
                                >
                                    {
                                        loading
                                            ? 'Creating Account...'
                                            : 'Create Account'
                                    }
                                </Button>

                                <p
                                    className="
        mt-6
        text-center
        text-sm
        text-slate-400
    "
                                >
                                    Already have an account?

                                    <button
                                        type="button"
                                        onClick={() =>
                                            router.push('/login')
                                        }
                                        className="
            ml-2
            text-(--secondary)
        "
                                    >
                                        Sign In
                                    </button>
                                </p>

                            </form>

                        </GlassPanel>
                    </div>

                </div>

            </main>
        </>
    )
}