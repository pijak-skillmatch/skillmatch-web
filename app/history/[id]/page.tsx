'use client'

import {
    use,
    useEffect,
    useState,
} from 'react'

import Navbar from
    '@/components/layout/Navbar'

import HistoryDetailHeader from
    '@/components/history/HistoryDetailHeader'

import HistoryDetailLoading from
    '@/components/history/HistoryDetailLoading'

import DeleteHistoryButton from
    '@/components/history/DeleteHistoryButton'

import {
    getHistoryById,
} from '@/lib/api/history'

import {
    HistoryDetail,
} from '@/types/history'

import {
    showError,
} from '@/lib/swal'

import {
    transformHistoryToAnalysis,
} from '@/lib/history/transformHistory'

import SummaryCard from
    '@/components/dashboard/SummaryCard'

import UserSkillsCard from
    '@/components/dashboard/UserSkillsCard'

import SkillGapComparisonCard from
    '@/components/dashboard/SkillGapComparisonCard'

import IndustryMatchCard from
    '@/components/dashboard/IndustryMatchCard'

import IndustryProbabilityCard from
    '@/components/dashboard/IndustryProbabilityCard'

import LearningPathCard from
    '@/components/dashboard/LearningPathCard'

import RecommendedSkillsCard from
    '@/components/dashboard/RecommendedSkillsCard'

import CareerInsightCard from
    '@/components/dashboard/CareerInsightCard'
import ExportHistoryButton from '@/components/history/ExportHistoryButton'

export default function HistoryDetailPage({
    params,
}: {
    params: Promise<{
        id: string
    }>
}) {

    const {
        id,
    } = use(params)

    const [history,
        setHistory] =
        useState<
            HistoryDetail | null
        >(null)

    const [loading,
        setLoading] =
        useState(true)

    useEffect(() => {

        const load =
            async () => {

                try {

                    const data =
                        await getHistoryById(
                            Number(id)
                        )

                    setHistory(
                        data
                    )

                } catch {

                    await showError(
                        'Not Found',
                        'History report not found.'
                    )

                } finally {

                    setLoading(
                        false
                    )
                }
            }

        load()

    }, [id])

    if (loading) {

        return (
            <>
                <Navbar />

                <main
                    className="
                        container-custom
                        pt-32
                        pb-20
                    "
                >
                    <HistoryDetailLoading />
                </main>
            </>
        )
    }

    if (!history) {

        return (
            <>
                <Navbar />

                <main
                    className="
                        container-custom
                        pt-32
                        pb-20
                    "
                >
                    <p className="text-white">
                        History not found.
                    </p>
                </main>
            </>
        )
    }

    const analysis =
        transformHistoryToAnalysis(
            history
        )

    const topIndustry =
        analysis.data
            .industry_predictions[0]

    const recommendedSkillNames =
        analysis.data
            .recommended_skills
            .map(
                skill =>
                    skill.skill
            )

    const recommendedSkillsCount =
        analysis.data
            .recommended_skills
            .length

    const learningLevelsCount =
        analysis.data
            .learning_path
            .filter(
                item =>
                    item.skills.length > 0
            )
            .length

    return (

        <>
            <Navbar />

            <main
                className="
                    container-custom
                    pt-32
                    pb-20
                "
            >

                <div className="space-y-12">

                    <HistoryDetailHeader
                        history={
                            history
                        }
                    />

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
                            "
                        >

                            <IndustryMatchCard
                                industry={
                                    topIndustry.industry
                                }
                                probability={
                                    topIndustry.probability
                                }
                            />

                            <IndustryProbabilityCard
                                industries={
                                    analysis.data
                                        .industry_predictions
                                }
                            />

                        </div>

                        <div className="mt-8">

                            <CareerInsightCard
                                industry={
                                    topIndustry.industry
                                }
                                currentSkills={
                                    history.input_skills
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
                                skills={
                                    history.input_skills
                                }
                            />

                            <SkillGapComparisonCard
                                currentSkills={
                                    history.input_skills
                                }
                                recommendedSkills={
                                    recommendedSkillNames
                                }
                            />

                        </div>

                    </section>

                    {/* LEARNING */}

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
                                    analysis.data
                                        .learning_path
                                }
                            />

                            <RecommendedSkillsCard
                                skills={
                                    analysis.data
                                        .recommended_skills
                                }
                            />

                        </div>

                    </section>

                    {/* ACTIONS */}

                    <section>

                        <div
                            className="
            flex
            flex-wrap
            gap-4
        "
                        >

                            <ExportHistoryButton
                                history={history}
                            />

                            <DeleteHistoryButton
                                historyId={
                                    history.id
                                }
                            />

                        </div>

                    </section>

                </div>

            </main>
        </>
    )
}