'use client'

import { useRouter } from 'next/navigation'

import Swal from 'sweetalert2'

import Button from '@/components/ui/Button'

import {
    getToken,
} from '@/lib/auth/token'

export default function DashboardActions() {

    const router = useRouter()

    const handleNewAnalysis =
        () => {

            localStorage.removeItem(
                'analysis_result'
            )

            localStorage.removeItem(
                'selected_skills'
            )

            router.push(
                '/analysis'
            )
        }

    const handleExport =
        () => {

            const token =
                getToken()

            if (!token) {

                Swal.fire({
                    icon: 'warning',
                    title:
                        'Login Required',
                    text:
                        'Please login first to export your report as PDF.',
                    confirmButtonText:
                        'Login',
                    showCancelButton: true,
                    cancelButtonText:
                        'Cancel',
                    background:
                        '#0F172A',
                    color:
                        '#FFFFFF',
                    confirmButtonColor:
                        '#7C9CFF',
                }).then(
                    (result) => {

                        if (
                            result.isConfirmed
                        ) {

                            router.push(
                                '/login'
                            )
                        }
                    }
                )

                return
            }

            Swal.fire({
                icon: 'info',
                title:
                    'Coming Soon',
                text:
                    'PDF export feature is currently under development.',
                background:
                    '#0F172A',
                color:
                    '#FFFFFF',
                confirmButtonColor:
                    '#7C9CFF',
            })
        }

    return (
        <section>

            <div
                className="
                    rounded-3xl
                    border border-white/10

                    bg-white/5

                    p-8
                "
            >
                <div
                    className="
                        flex
                        flex-col
                        gap-6

                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                    "
                >
                    <div>

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2

                                rounded-full

                                border
                                border-amber-500/20

                                bg-amber-500/10

                                px-3
                                py-1.5

                                text-xs
                                font-medium

                                text-amber-300
                            "
                        >
                            🔒 Premium Features
                        </div>

                        <h2
                            className="
                                mt-4

                                text-2xl
                                font-bold

                                text-white
                            "
                        >
                            Continue Your Journey
                        </h2>

                        <p
                            className="
                                mt-3

                                max-w-2xl

                                text-slate-400
                            "
                        >
                            Run another analysis,
                            export your report as PDF,
                            and unlock upcoming AI-powered
                            learning features.
                        </p>

                        <div
                            className="
                                mt-5

                                flex
                                flex-wrap

                                gap-2
                            "
                        >
                            <span
                                className="
                                    rounded-full

                                    border
                                    border-white/10

                                    bg-white/5

                                    px-3
                                    py-1

                                    text-xs

                                    text-slate-300
                                "
                            >
                                🔒 Export PDF
                            </span>

                            <span
                                className="
                                    rounded-full

                                    border
                                    border-white/10

                                    bg-white/5

                                    px-3
                                    py-1

                                    text-xs

                                    text-slate-300
                                "
                            >
                                🔒 AI Quiz
                            </span>

                            <span
                                className="
                                    rounded-full

                                    border
                                    border-white/10

                                    bg-white/5

                                    px-3
                                    py-1

                                    text-xs

                                    text-slate-300
                                "
                            >
                                🔒 Saved Reports
                            </span>
                        </div>

                    </div>

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-4
                        "
                    >
                        <Button
                            onClick={
                                handleNewAnalysis
                            }
                        >
                            New Analysis
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={
                                handleExport
                            }
                        >
                            Export PDF
                        </Button>
                    </div>

                </div>

            </div>

        </section>
    )
}