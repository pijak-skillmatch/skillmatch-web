import {
    SkillRecommendation,
} from '@/types/analysis'

interface Props {
    skills:
    SkillRecommendation[]
}

export default function ExplainableCard({
    skills,
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
                Explainable AI Insights
            </h2>

            <p
                className="
                    mt-2
                    text-slate-400
                "
            >
                Why these skills were recommended.
            </p>

            <div className="mt-6 space-y-6">

                {skills.map(
                    (skill) => (
                        <div
                            key={
                                skill.skill
                            }
                            className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-5
                            "
                        >
                            <h3
                                className="
                                    font-semibold
                                    text-white
                                "
                            >
                                {skill.skill}
                            </h3>

                            <ul
                                className="
                                    mt-3
                                    list-disc
                                    space-y-2
                                    pl-5
                                    text-sm
                                    text-slate-400
                                "
                            >
                                {skill.reasons.map(
                                    (
                                        reason,
                                        idx
                                    ) => (
                                        <li
                                            key={
                                                idx
                                            }
                                        >
                                            {
                                                reason
                                            }
                                        </li>
                                    )
                                )}
                            </ul>

                        </div>
                    )
                )}

            </div>
        </div>
    )
}