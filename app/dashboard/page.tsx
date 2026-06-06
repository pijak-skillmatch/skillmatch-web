'use client'

import {
    useEffect,
    useState,
} from 'react'

import { useRouter } from 'next/navigation'

import Navbar from '@/components/layout/Navbar'
import Button from '@/components/ui/Button'

import SummaryCard from '@/components/dashboard/SummaryCard'
import UserSkillsCard from '@/components/dashboard/UserSkillsCard'
import SkillGapComparisonCard from '@/components/dashboard/SkillGapComparisonCard'
import IndustryMatchCard from '@/components/dashboard/IndustryMatchCard'
import IndustryProbabilityCard from '@/components/dashboard/IndustryProbabilityCard'
import LearningPathCard from '@/components/dashboard/LearningPathCard'
import RecommendedSkillsCard from '@/components/dashboard/RecommendedSkillsCard'
import CareerInsightCard from
    '@/components/dashboard/CareerInsightCard'

import {
    AnalyzeResponse,
} from '@/types/analysis'

export default function DashboardPage() {

    const router = useRouter()

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

    if (!result) {
        return (
            <>
                <Navbar />

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
                <section
                    className="
        relative
        overflow-hidden

        rounded-4xl
        border border-white/10

        bg-white/5

        p-10
    "
                >
                    <div
                        className="
            absolute
            inset-0

            bg-linear-to-br
            from-(--secondary)/10
            to-(--primary)/10
        "
                    />

                    <div className="relative z-10">

                        <div
                            className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border border-white/10
                bg-white/5

                px-4 py-2

                text-sm
                text-slate-300
            "
                        >
                            🚀 AI Career Intelligence
                        </div>

                        <h1
                            className="
                mt-6

                text-5xl
                font-bold

                tracking-tight

                text-white
            "
                        >
                            Your Career
                            <span
                                className="
                    bg-linear-to-r
                    from-(--secondary)
                    to-(--primary)

                    bg-clip-text
                    text-transparent
                "
                            >
                                {' '}Intelligence Report
                            </span>
                        </h1>

                        <p
                            className="
                mt-5
                max-w-3xl

                text-lg
                leading-8

                text-slate-400
            "
                        >
                            Discover your most suitable
                            industry, identify skill gaps,
                            and follow a personalized
                            learning roadmap generated
                            by SkillMatch AI.
                        </p>

                    </div>
                </section>

                {/* Dashboard */}
                <div className="mt-10 space-y-12">

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
                    <section>

                        <div className="mb-6">

                            <h2
                                className="
                    text-sm
                    font-semibold
                    uppercase

                    tracking-[0.2em]

                    text-slate-500
                "
                            >
                                Career Analysis
                            </h2>

                        </div>

                        <div
                            className="
                grid
                gap-8
                lg:grid-cols-2
                items-stretch
            "
                        >
                            <div className="min-w-0">
                                <IndustryMatchCard
                                    industry={
                                        topIndustry.industry
                                    }
                                    probability={
                                        topIndustry.probability
                                    }
                                />
                            </div>

                            <div className="min-w-0">
                                <IndustryProbabilityCard
                                    industries={
                                        result.data
                                            .industry_predictions
                                    }
                                />
                            </div>
                        </div>

                        <div className="mt-8">

                            <CareerInsightCard
                                industry={
                                    topIndustry.industry
                                }
                                currentSkills={
                                    userSkills
                                }
                                recommendedSkills={
                                    recommendedSkillNames
                                }
                            />

                        </div>

                    </section>

                    {/* SKILL ASSESSMENT */}
                    <section>

                        <div className="mb-6">

                            <h2
                                className="
                    text-sm
                    font-semibold
                    uppercase

                    tracking-[0.2em]

                    text-slate-500
                "
                            >
                                Skill Assessment
                            </h2>

                        </div>

                        <div
                            className="
                grid
                gap-8
                lg:grid-cols-2
            "
                        >
                            <UserSkillsCard
                                skills={userSkills}
                            />

                            <SkillGapComparisonCard
                                currentSkills={
                                    userSkills
                                }
                                recommendedSkills={
                                    recommendedSkillNames
                                }
                            />
                        </div>

                    </section>

                    {/* LEARNING RECOMMENDATIONS */}
                    <section>

                        <div className="mb-6">

                            <h2
                                className="
                text-sm
                font-semibold
                uppercase

                tracking-[0.2em]

                text-slate-500
            "
                            >
                                Learning Recommendations
                            </h2>

                        </div>

                        <div className="space-y-8">

                            <LearningPathCard
                                learningPath={
                                    result.data
                                        .learning_path
                                }
                            />

                            <RecommendedSkillsCard
                                skills={
                                    result.data
                                        .recommended_skills
                                }
                            />

                        </div>

                    </section>

                    {/* ACTIONS */}
                    <section>

                        <div
                            className="
                rounded-3xl
                border border-white/10

                bg-white/5

                p-8
            "
                        >
                            <h2
                                className="
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
                                Review your recommendations,
                                export your report, or perform
                                another analysis with different
                                skills and experience levels.
                            </p>

                            <div
                                className="
                    mt-8

                    flex
                    flex-wrap

                    gap-4
                "
                            >
                                <Button
                                    onClick={() =>
                                        router.push(
                                            '/analysis'
                                        )
                                    }
                                >
                                    New Analysis
                                </Button>

                                <Button
                                    variant="secondary"
                                >
                                    Export PDF
                                </Button>
                            </div>
                        </div>

                    </section>

                </div>
            </main>
        </>
    )
}