'use client'

import {
    useEffect,
    useState,
} from 'react'

import {
    useRouter,
    useSearchParams,
} from 'next/navigation'

import Navbar from '@/components/layout/Navbar'
import Button from '@/components/ui/Button'

import SummaryCard from '@/components/dashboard/SummaryCard'

import {
    AnalyzeResponse,
} from '@/types/analysis'

import DashboardActions from
    '@/components/dashboard/DashboardActions'

import DashboardHero from
    '@/components/dashboard/DashboardHero'

import CareerAnalysisSection from
    '@/components/dashboard/sections/CareerAnalysisSection'

import SkillAssessmentSection from
    '@/components/dashboard/sections/SkillAssessmentSection'

import LearningRecommendationSection from
    '@/components/dashboard/sections/LearningRecommendationSection'

import PendingExportOverlay from
    '@/components/dashboard/PendingExportOverlay'

import {
    getPendingAction,
    clearPendingAction,
} from '@/lib/auth/pendingAction'

import {
    isAuthenticated,
} from '@/lib/auth/isAuthenticated'

import {
    saveHistory,
} from '@/lib/api/history'

import {
    exportDashboardPdf,
} from '@/lib/pdf/exportDashboardPdf'

import {
    showError,
} from '@/lib/swal'

export default function DashboardPage() {

    const router = useRouter()
    const searchParams = useSearchParams()

    const [
        isAutoExporting,
        setIsAutoExporting,
    ] = useState(false)

    const [result, setResult] =
        useState<AnalyzeResponse | null>(
            null
        )

    const [userSkills, setUserSkills] =
        useState<string[]>([])

    useEffect(() => {

        const savedResult =
            localStorage.getItem(
                'analysis_result'
            )

        const savedSkills =
            localStorage.getItem(
                'selected_skills'
            )

        if (savedResult) {
            setResult(
                JSON.parse(savedResult)
            )
        }

        if (savedSkills) {
            setUserSkills(
                JSON.parse(savedSkills)
            )
        }

    }, [])

    useEffect(() => {

        const runPendingExport =
            async () => {

                if (!result) {
                    return
                }

                const shouldExport =
                    searchParams.get(
                        'export'
                    )

                const pendingAction =
                    getPendingAction()

                if (
                    shouldExport !== '1'
                ) {
                    return
                }

                if (
                    pendingAction !==
                    'export_pdf'
                ) {
                    return
                }

                if (
                    !isAuthenticated()
                ) {
                    return
                }

                try {

                    setIsAutoExporting(
                        true
                    )

                    const topIndustry =
                        result.data
                            .industry_predictions[0]

                    const analysisType =
                        localStorage.getItem(
                            'analysis_mode'
                        ) ?? 'skills'

                    await saveHistory({

                        analysis_type:
                            analysisType,

                        industry:
                            topIndustry.industry,

                        confidence:
                            topIndustry.probability,

                        input_skills:
                            userSkills,

                        result_json:
                            result.data,
                    })

                    exportDashboardPdf({

                        industry:
                            topIndustry.industry,

                        confidence:
                            topIndustry.probability,

                        inputSkills:
                            userSkills,

                        resultJson:
                            result.data,
                    })


                    await new Promise(
                        resolve =>
                            setTimeout(
                                resolve,
                                1000
                            )
                    )

                    clearPendingAction()

                    setIsAutoExporting(
                        false
                    )

                    router.replace(
                        '/dashboard'
                    )

                } catch (
                error
                ) {

                    setIsAutoExporting(
                        false
                    )

                    console.error(
                        error
                    )

                    await showError(
                        'Export Failed',
                        'Unable to complete automatic export.'
                    )
                }
            }

        runPendingExport()

    }, [
        result,
        userSkills,
        searchParams,
        router,
    ])

    if (!result) {
        return (
            <>
                <Navbar />

                {
                    isAutoExporting && (
                        <PendingExportOverlay />
                    )
                }

                <main className="container-custom pt-32">
                    <h1 className="text-3xl font-bold text-white">
                        No Analysis Found
                    </h1>

                    <p className="mt-4 text-slate-400">
                        Please run an analysis first.
                    </p>

                    <Button
                        className="mt-6"
                        onClick={() =>
                            router.push('/analysis')
                        }
                    >
                        Go to Analysis
                    </Button>
                </main>
            </>
        )
    }

    const topIndustry =
        result.data.industry_predictions[0]

    const recommendedSkillNames =
        result.data.recommended_skills.map(
            (skill) => skill.skill
        )

    const recommendedSkillsCount =
        result.data.recommended_skills.length

    const learningLevelsCount =
        result.data.learning_path.filter(
            (item) =>
                item.skills.length > 0
        ).length

    return (
        <>
            <Navbar />

            <main
                className="
        relative
        overflow-hidden

        container-custom
        pt-32
        pb-20
    "
            >

                <div className="pointer-events-none absolute inset-0 -z-10">

                    <div
                        className="
                absolute
                left-0
                top-40

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

                h-128
                w-lg

                rounded-full

                bg-[radial-gradient(circle,rgba(167,139,250,0.10),transparent_70%)]

                blur-3xl
            "
                    />

                </div>


                {/* Dashboard */}
                <div className="mt-10 space-y-12">

                    <DashboardHero />

                    {/* SUMMARY */}
                    <SummaryCard
                        topIndustry={
                            topIndustry.industry
                        }
                        confidence={
                            topIndustry.probability
                        }
                        recommendedSkills={
                            recommendedSkillsCount
                        }
                        learningLevels={
                            learningLevelsCount
                        }
                    />

                    {/* CAREER ANALYSIS */}
                    <CareerAnalysisSection
                        industry={topIndustry.industry}
                        probability={topIndustry.probability}
                        industries={result.data.industry_predictions}
                        currentSkills={userSkills}
                        recommendedSkills={recommendedSkillNames}
                    />

                    {/* SKILL ASSESSMENT */}
                    <SkillAssessmentSection
                        currentSkills={userSkills}
                        recommendedSkills={recommendedSkillNames}
                    />

                    {/* LEARNING RECOMMENDATIONS */}
                    <LearningRecommendationSection
                        learningPath={
                            result.data
                                .learning_path
                        }
                        skills={
                            result.data
                                .recommended_skills
                        }
                    />

                    {/* ACTIONS */}
                    <section>

                        <DashboardActions />

                    </section>

                </div>
            </main>
        </>
    )
}