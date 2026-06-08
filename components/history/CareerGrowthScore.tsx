'use client'

import { HistoryDetail } from '@/types/history'

interface Props {
    oldReport: HistoryDetail
    newReport: HistoryDetail
}

export default function CareerGrowthScore({
    oldReport,
    newReport,
}: Props) {

    const addedSkills =
        newReport.input_skills.filter(
            skill =>
                !oldReport.input_skills.includes(
                    skill
                )
        )

    const skillScore =
        Math.min(
            addedSkills.length * 10,
            50
        )

    const confidenceIncrease =
        Math.max(
            0,
            (
                newReport.confidence -
                oldReport.confidence
            ) * 100
        )

    const confidenceScore =
        Math.min(
            confidenceIncrease,
            30
        )

    const industryScore =
        oldReport.industry ===
            newReport.industry
            ? 20
            : 10

    const totalScore =
        Math.round(
            skillScore +
            confidenceScore +
            industryScore
        )

    let level =
        'Needs Improvement'

    let emoji =
        '📈'

    if (totalScore >= 80) {

        level =
            'Excellent Progress'

        emoji =
            '🚀'

    } else if (
        totalScore >= 60
    ) {

        level =
            'Good Progress'

        emoji =
            '🔥'

    } else if (
        totalScore >= 40
    ) {

        level =
            'Steady Growth'

        emoji =
            '💡'
    }

    return (

        <section
            className="
                rounded-3xl

                border border-white/10

                bg-linear-to-br
                from-white/10
                to-white/5

                p-8
            "
        >

            <p
                className="
                    text-sm
                    uppercase

                    tracking-[0.2em]

                    text-slate-400
                "
            >
                Career Growth Score
            </p>

            <div
                className="
                    mt-4

                    flex
                    items-center
                    gap-6
                "
            >

                <div
                    className="
                        text-6xl
                        font-bold

                        text-white
                    "
                >
                    {totalScore}
                </div>

                <div>

                    <p
                        className="
                            text-xl
                            font-semibold

                            text-white
                        "
                    >
                        {level}
                        {' '}
                        {emoji}
                    </p>

                    <p
                        className="
                            mt-1

                            text-slate-400
                        "
                    >
                        Based on skill growth,
                        confidence increase,
                        and career alignment.
                    </p>

                </div>

            </div>

            <div
                className="
                    mt-8

                    grid
                    gap-4

                    md:grid-cols-3
                "
            >

                <div
                    className="
                        rounded-2xl

                        bg-white/5

                        p-4
                    "
                >
                    <p className="text-slate-400">
                        Skill Score
                    </p>

                    <h3
                        className="
                            mt-2

                            text-2xl
                            font-bold

                            text-white
                        "
                    >
                        {skillScore}
                    </h3>
                </div>

                <div
                    className="
                        rounded-2xl

                        bg-white/5

                        p-4
                    "
                >
                    <p className="text-slate-400">
                        Confidence Score
                    </p>

                    <h3
                        className="
                            mt-2

                            text-2xl
                            font-bold

                            text-white
                        "
                    >
                        {Math.round(
                            confidenceScore
                        )}
                    </h3>
                </div>

                <div
                    className="
                        rounded-2xl

                        bg-white/5

                        p-4
                    "
                >
                    <p className="text-slate-400">
                        Industry Score
                    </p>

                    <h3
                        className="
                            mt-2

                            text-2xl
                            font-bold

                            text-white
                        "
                    >
                        {industryScore}
                    </h3>
                </div>

            </div>

        </section>
    )
}