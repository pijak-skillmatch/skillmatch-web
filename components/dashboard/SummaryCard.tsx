interface Props {
    topIndustry: string
    confidence: number
    recommendedSkills: number
    learningLevels: number
}

export default function SummaryCard({
    topIndustry,
    confidence,
    recommendedSkills,
    learningLevels,
}: Props) {
    return (
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
                    text-xl
                    font-bold
                    text-white
                "
            >
                Analysis Summary
            </h2>

            <div
                className="
                    mt-6
                    grid
                    gap-4
                    md:grid-cols-4
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
                    <p className="text-sm text-slate-400">
                        Top Industry
                    </p>

                    <h3
                        className="
                            mt-2
                            text-xl
                            font-semibold
                            text-white
                        "
                    >
                        {topIndustry}
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
                    <p className="text-sm text-slate-400">
                        Confidence
                    </p>

                    <h3
                        className="
                            mt-2
                            text-xl
                            font-semibold
                            text-emerald-400
                        "
                    >
                        {(confidence * 100).toFixed(1)}%
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
                    <p className="text-sm text-slate-400">
                        Skill Gaps
                    </p>

                    <h3
                        className="
                            mt-2
                            text-xl
                            font-semibold
                            text-white
                        "
                    >
                        {recommendedSkills}
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
                    <p className="text-sm text-slate-400">
                        Learning Stages
                    </p>

                    <h3
                        className="
                            mt-2
                            text-xl
                            font-semibold
                            text-white
                        "
                    >
                        {learningLevels}
                    </h3>
                </div>
            </div>
        </div>
    )
}