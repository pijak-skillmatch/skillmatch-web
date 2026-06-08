'use client'

import {
    useEffect,
    useState,
} from 'react'

import Navbar from
    '@/components/layout/Navbar'

import {
    getHistoryById,
} from '@/lib/api/history'

import {
    HistoryDetail,
} from '@/types/history'

import CompareSummaryCard from
    '@/components/history/CompareSummaryCard'

import CompareLoading from
    '@/components/history/CompareLoading'

import CompareInsights
    from '@/components/history/CompareInsights'
import CareerGrowthScore from '@/components/history/CareerGrowthScore'
import SkillCountChart from '@/components/history/charts/SkillCountChart'
import ConfidenceComparisonChart from '@/components/history/charts/ConfidenceComparisonChart'
import AICareerInsight
    from '@/components/history/AICareerInsight'

import {
    generateCareerInsight,
} from '@/lib/api/careerInsight'
import { CareerInsight } from '@/types/careerInsight'

export default function ComparePage() {

    const getCompareIds = () => {

        if (
            typeof window === 'undefined'
        ) {
            return null
        }

        return new URLSearchParams(
            window.location.search
        ).get('ids')
    }

    const [leftReport,
        setLeftReport] =
        useState<
            HistoryDetail | null
        >(null)

    const [rightReport,
        setRightReport] =
        useState<
            HistoryDetail | null
        >(null)

    const [loading,
        setLoading] =
        useState(true)

    useEffect(() => {

        const loadReports =
            async () => {

                try {

                    const ids =
                        getCompareIds()

                    if (!ids) {
                        return
                    }

                    const [
                        leftId,
                        rightId,
                    ] = ids
                        .split(',')

                    const [
                        left,
                        right,
                    ] =
                        await Promise.all([
                            getHistoryById(
                                Number(leftId)
                            ),
                            getHistoryById(
                                Number(rightId)
                            ),
                        ])

                    setLeftReport(
                        left
                    )

                    setRightReport(
                        right
                    )

                } catch (
                error
                ) {

                    console.error(
                        error
                    )

                } finally {

                    setLoading(
                        false
                    )
                }
            }

        loadReports()

    }, [])

    const [
        insight,
        setInsight,
    ] =
        useState<
            CareerInsight | null
        >(null)

    const [
        insightLoading,
        setInsightLoading,
    ] = useState(false)

    useEffect(() => {

        const loadInsight =
            async () => {

                if (
                    !leftReport ||
                    !rightReport
                ) {
                    return
                }

                try {

                    setInsightLoading(
                        true
                    )

                    const result =
                        await generateCareerInsight(
                            leftReport,
                            rightReport
                        )

                    setInsight(
                        result
                    )

                } catch (
                error
                ) {

                    console.error(
                        error
                    )

                } finally {

                    setInsightLoading(
                        false
                    )
                }
            }

        loadInsight()

    }, [
        leftReport,
        rightReport,
    ])

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

                {loading ? (

                    <CompareLoading />

                ) : (

                    <div
                        className="
                            space-y-8
                        "
                    >

                        <h1
                            className="
                                text-4xl
                                font-bold
                                text-white
                            "
                        >
                            Compare Reports
                        </h1>

                        {leftReport &&
                            rightReport && (

                                <div
                                    className="
                                        grid
                                        gap-6

                                        lg:grid-cols-2
                                    "
                                >

                                    <CompareSummaryCard
                                        history={
                                            leftReport
                                        }
                                    />

                                    <CompareSummaryCard
                                        history={
                                            rightReport
                                        }
                                    />

                                </div>

                            )}

                        {
                            leftReport &&
                            rightReport && (

                                <CareerGrowthScore
                                    oldReport={leftReport}
                                    newReport={rightReport}
                                />

                            )
                        }

                        {
                            insightLoading ? (

                                <div
                                    className="
                rounded-3xl

                border border-white/10
                bg-white/5

                p-8

                text-center

                text-slate-400
            "
                                >
                                    Generating AI Career Insight...
                                </div>

                            ) : insight ? (

                                <AICareerInsight
                                    insight={insight}
                                />

                            ) : null
                        }

                        {
                            leftReport &&
                            rightReport && (

                                <div
                                    className="
                grid
                gap-8

                lg:grid-cols-2
            "
                                >

                                    <ConfidenceComparisonChart
                                        oldConfidence={
                                            leftReport.confidence
                                        }
                                        newConfidence={
                                            rightReport.confidence
                                        }
                                    />

                                    <SkillCountChart
                                        oldCount={
                                            leftReport.input_skills.length
                                        }
                                        newCount={
                                            rightReport.input_skills.length
                                        }
                                    />

                                </div>

                            )
                        }

                        {
                            leftReport &&
                            rightReport && (

                                <CompareInsights
                                    oldReport={leftReport}
                                    newReport={rightReport}
                                />

                            )
                        }

                    </div>

                )}

            </main>
        </>
    )
}