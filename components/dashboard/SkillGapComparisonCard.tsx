interface Props {
    currentSkills: string[]
    recommendedSkills: string[]
}

export default function SkillGapComparisonCard({
    currentSkills,
    recommendedSkills,
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
                Skill Gap Analysis
            </h2>

            <p
                className="
                    mt-2
                    text-slate-400
                "
            >
                Compare your current skills with recommended skills.
            </p>

            <div
                className="
                    mt-8
                    grid
                    gap-8
                    md:grid-cols-2
                "
            >
                {/* Current Skills */}
                <div>
                    <h3
                        className="
                            mb-4
                            font-semibold
                            text-emerald-400
                        "
                    >
                        Current Skills
                    </h3>

                    <div className="space-y-3">
                        {currentSkills.map(
                            (skill) => (
                                <div
                                    key={skill}
                                    className="
                                        rounded-xl
                                        border
                                        border-emerald-500/20
                                        bg-emerald-500/10
                                        px-4
                                        py-3
                                        text-emerald-300
                                    "
                                >
                                    ✓ {skill}
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Missing Skills */}
                <div>
                    <h3
                        className="
                            mb-4
                            font-semibold
                            text-orange-400
                        "
                    >
                        Recommended Skills
                    </h3>

                    <div className="space-y-3">
                        {recommendedSkills.map(
                            (skill) => (
                                <div
                                    key={skill}
                                    className="
                                        rounded-xl
                                        border
                                        border-orange-500/20
                                        bg-orange-500/10
                                        px-4
                                        py-3
                                        text-orange-300
                                    "
                                >
                                    + {skill}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}