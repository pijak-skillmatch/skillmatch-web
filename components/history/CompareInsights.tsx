'use client'

import { HistoryDetail } from '@/types/history'

interface Props {
    oldReport: HistoryDetail
    newReport: HistoryDetail
}

export default function CompareInsights({
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

    const removedSkills =
        oldReport.input_skills.filter(
            skill =>
                !newReport.input_skills.includes(
                    skill
                )
        )

    const confidenceDiff =
        (
            (
                newReport.confidence -
                oldReport.confidence
            ) * 100
        )

    return (

        <section
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
                Career Progress Insights
            </h2>

            <div
                className="
                    mt-8

                    grid
                    gap-6

                    lg:grid-cols-2
                "
            >

                {/* Added Skills */}

                <div>

                    <h3
                        className="
                            text-green-400
                            font-semibold
                        "
                    >
                        Added Skills
                    </h3>

                    <div
                        className="
                            mt-3
                            flex
                            flex-wrap
                            gap-2
                        "
                    >

                        {addedSkills.length > 0 ? (

                            addedSkills.map(
                                skill => (

                                    <span
                                        key={skill}
                                        className="
                                            rounded-full

                                            bg-green-500/10

                                            px-3 py-1

                                            text-sm

                                            text-green-300
                                        "
                                    >
                                        + {skill}
                                    </span>

                                )
                            )

                        ) : (

                            <p
                                className="
                                    text-slate-500
                                "
                            >
                                No new skills
                            </p>

                        )}

                    </div>

                </div>

                {/* Removed Skills */}

                <div>

                    <h3
                        className="
                            text-red-400
                            font-semibold
                        "
                    >
                        Missing Skills
                    </h3>

                    <div
                        className="
                            mt-3
                            flex
                            flex-wrap
                            gap-2
                        "
                    >

                        {removedSkills.length > 0 ? (

                            removedSkills.map(
                                skill => (

                                    <span
                                        key={skill}
                                        className="
                                            rounded-full

                                            bg-red-500/10

                                            px-3 py-1

                                            text-sm

                                            text-red-300
                                        "
                                    >
                                        - {skill}
                                    </span>

                                )
                            )

                        ) : (

                            <p
                                className="
                                    text-slate-500
                                "
                            >
                                No removed skills
                            </p>

                        )}

                    </div>

                </div>

            </div>

            {/* Metrics */}

            <div
                className="
                    mt-8

                    grid
                    gap-6

                    md:grid-cols-2
                "
            >

                <div
                    className="
                        rounded-2xl

                        border border-white/10
                        bg-white/5

                        p-5
                    "
                >

                    <p
                        className="
                            text-sm
                            text-slate-400
                        "
                    >
                        Industry Change
                    </p>

                    <h3
                        className="
                            mt-2

                            text-xl
                            font-bold

                            text-white
                        "
                    >
                        {oldReport.industry}
                    </h3>

                    <p
                        className="
                            mt-1

                            text-slate-400
                        "
                    >
                        →
                    </p>

                    <h3
                        className="
                            mt-1

                            text-xl
                            font-bold

                            text-(--secondary)
                        "
                    >
                        {newReport.industry}
                    </h3>

                </div>

                <div
                    className="
                        rounded-2xl

                        border border-white/10
                        bg-white/5

                        p-5
                    "
                >

                    <p
                        className="
                            text-sm
                            text-slate-400
                        "
                    >
                        Confidence Change
                    </p>

                    <h3
                        className="
                            mt-2

                            text-xl
                            font-bold

                            text-white
                        "
                    >
                        {(oldReport.confidence * 100)
                            .toFixed(1)}%
                    </h3>

                    <p
                        className="
                            mt-1

                            text-slate-400
                        "
                    >
                        →
                    </p>

                    <h3
                        className={`
                            mt-1

                            text-xl
                            font-bold

                            ${confidenceDiff >= 0
                                ? 'text-green-400'
                                : 'text-red-400'
                            }
                        `}
                    >
                        {(newReport.confidence * 100)
                            .toFixed(1)}%

                        {' '}

                        (
                        {confidenceDiff >= 0
                            ? '+'
                            : ''}

                        {confidenceDiff.toFixed(1)}
                        %
                        )
                    </h3>

                </div>

            </div>

        </section>
    )
}