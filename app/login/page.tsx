'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Navbar from '@/components/layout/Navbar'
import GlassPanel from '@/components/ui/GlassPanel'
import Button from '@/components/ui/Button'

import {
    login,
    getCurrentUser,
} from '@/lib/api/auth'

import {
    saveToken,
} from '@/lib/auth/token'

import {
    saveUser,
} from '@/lib/auth/user'

import {
    showSuccess,
    showError,
    showLoading,
    closeLoading,
} from '@/lib/swal'

export default function LoginPage() {

    const router = useRouter()

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
                    'Signing In',
                    'Authenticating your account...'
                )

                const tokenResult =
                    await login({
                        email,
                        password,
                    })

                saveToken(
                    tokenResult.access_token
                )

                const user =
                    await getCurrentUser(
                        tokenResult.access_token
                    )

                saveUser(user)

                closeLoading()

                await showSuccess(
                    'Login Successful',
                    `Welcome back, ${user.name}!`
                )

                router.push(
                    '/dashboard'
                )

            } catch (error) {

                console.error(error)

                closeLoading()

                await showError(
                    'Login Failed',
                    'Invalid email or password.'
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

                                        px-4 py-2

                                        text-xs
                                        uppercase

                                        tracking-[0.18em]

                                        text-slate-300
                                    "
                                >
                                    Welcome Back
                                </div>

                                <h1
                                    className="
                                        mt-5

                                        text-3xl
                                        font-bold

                                        text-white
                                    "
                                >
                                    Sign In
                                </h1>

                                <p
                                    className="
                                        mt-3

                                        text-slate-400
                                    "
                                >
                                    Access your saved
                                    reports, exports,
                                    and AI learning tools.
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

                                            border
                                            border-white/10

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

                                            border
                                            border-white/10

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
                                            ? 'Signing In...'
                                            : 'Sign In'
                                    }
                                </Button>

                            </form>

                        </GlassPanel>
                    </div>

                </div>
            </main>
        </>
    )
}