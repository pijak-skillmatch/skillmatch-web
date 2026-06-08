'use client'

import {
    CareerInsight,
} from '@/types/careerInsight'

interface Props {
    insight: CareerInsight
}

export default function AICareerInsight({
    insight,
}: Props) {

    return (

        <section
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

                    <span
                        className="
                            rounded-full

                            border border-violet-500/20
                            bg-violet-500/10

                            px-3 py-1

                            text-xs
                            font-medium

                            text-violet-300
                        "
                    >
                        AI Career Coach
                    </span>

                    <h2
                        className="
                            mt-4

                            text-2xl
                            font-bold

                            text-white
                        "
                    >
                        Career Progress Insight
                    </h2>

                    <p
                        className="
                            mt-3

                            max-w-3xl

                            text-slate-400
                        "
                    >
                        {insight.summary}
                    </p>

                </div>

                <div
                    className="
                        flex
                        h-28
                        w-28

                        items-center
                        justify-center

                        rounded-full

                        border border-violet-500/20
                        bg-violet-500/10
                    "
                >
                    <div className="text-center">

                        <div
                            className="
                                text-4xl
                                font-bold

                                text-white
                            "
                        >
                            {insight.score}
                        </div>

                        <div
                            className="
                                text-xs

                                text-slate-400
                            "
                        >
                            Growth Score
                        </div>

                    </div>

                </div>

            </div>

            <div
                className="
                    mt-8

                    grid
                    gap-6

                    lg:grid-cols-3
                "
            >

                {/* IMPROVEMENTS */}

                <div
                    className="
                        rounded-2xl

                        border border-emerald-500/10
                        bg-emerald-500/5

                        p-5
                    "
                >

                    <h3
                        className="
                            font-semibold

                            text-emerald-300
                        "
                    >
                        Improvements
                    </h3>

                    <ul
                        className="
                            mt-4
                            space-y-2

                            text-sm
                            text-slate-300
                        "
                    >

                        {insight.improvements.map(
                            item => (

                                <li
                                    key={item}
                                >
                                    ✓ {item}
                                </li>

                            )
                        )}

                    </ul>

                </div>

                {/* RISKS */}

                <div
                    className="
                        rounded-2xl

                        border border-amber-500/10
                        bg-amber-500/5

                        p-5
                    "
                >

                    <h3
                        className="
                            font-semibold

                            text-amber-300
                        "
                    >
                        Risks
                    </h3>

                    <ul
                        className="
                            mt-4
                            space-y-2

                            text-sm
                            text-slate-300
                        "
                    >

                        {insight.risks.map(
                            item => (

                                <li
                                    key={item}
                                >
                                    ⚠ {item}
                                </li>

                            )
                        )}

                    </ul>

                </div>

                {/* NEXT SKILLS */}

                <div
                    className="
                        rounded-2xl

                        border border-sky-500/10
                        bg-sky-500/5

                        p-5
                    "
                >

                    <h3
                        className="
                            font-semibold

                            text-sky-300
                        "
                    >
                        Next Skills
                    </h3>

                    <ul
                        className="
                            mt-4
                            space-y-2

                            text-sm
                            text-slate-300
                        "
                    >

                        {insight.next_skills.map(
                            item => (

                                <li
                                    key={item}
                                >
                                    → {item}
                                </li>

                            )
                        )}

                    </ul>

                </div>

            </div>

        </section>

    )
}