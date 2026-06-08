'use client'

import { useRouter } from 'next/navigation'

import Button from '@/components/ui/Button'

import {
    getToken,
} from '@/lib/auth/token'

import {
    exportDashboardPdf,
} from '@/lib/pdf/exportDashboardPdf'

import {
    showError,
    showSuccess,
} from '@/lib/swal'

import Swal from 'sweetalert2'

import {
    setPendingAction,
} from '@/lib/auth/pendingAction'
import { getUser } from '@/lib/auth/user'

export default function DashboardActions() {

    const router = useRouter()
    const user = getUser();

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
        async () => {

            const token =
                getToken()

            if (!token) {

                const result =
                    await Swal.fire({

                        icon: 'warning',

                        title:
                            'Account Required',

                        text:
                            'Login or create an account to export your report and save it to history.',

                        showDenyButton: true,

                        showCancelButton: true,

                        confirmButtonText:
                            'Login',

                        denyButtonText:
                            'Register',

                        cancelButtonText:
                            'Cancel',

                        background:
                            '#0F172A',

                        color:
                            '#FFFFFF',

                        confirmButtonColor:
                            '#7C9CFF',

                        denyButtonColor:
                            '#8B5CF6',
                    })

                if (
                    result.isConfirmed
                ) {

                    setPendingAction(
                        'export_pdf'
                    )

                    router.push(
                        '/login'
                    )

                    return
                }

                if (
                    result.isDenied
                ) {

                    setPendingAction(
                        'export_pdf'
                    )

                    router.push(
                        '/register'
                    )

                    return
                }

                return
            }

            try {

                const result =
                    localStorage.getItem(
                        'analysis_result'
                    )

                const skills =
                    localStorage.getItem(
                        'selected_skills'
                    )

                if (!result) {

                    await showError(
                        'Export Failed',
                        'Analysis result not found.'
                    )

                    return
                }

                const parsed =
                    JSON.parse(
                        result
                    )

                exportDashboardPdf({

                    userName: user?.name,

                    industry:
                        parsed.data
                            .industry_predictions[0]
                            .industry,

                    confidence:
                        parsed.data
                            .industry_predictions[0]
                            .probability,

                    inputSkills:
                        skills
                            ? JSON.parse(
                                skills
                            )
                            : [],

                    resultJson:
                        parsed.data,
                })

                await showSuccess(
                    'Export Complete',
                    'Your PDF report has been downloaded.'
                )

            } catch (
            error
            ) {

                console.error(
                    error
                )

                await showError(
                    'Export Failed',
                    'Unable to generate PDF report.'
                )
            }
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