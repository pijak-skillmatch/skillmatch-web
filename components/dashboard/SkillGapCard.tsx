import {
    SkillRecommendation,
} from '@/types/analysis'

interface Props {
    skills:
    SkillRecommendation[]
}

export default function
    SkillGapCard({
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
                Recommended Skills
            </h2>

            <div
                className="
                    mt-6
                    flex
                    flex-wrap
                    gap-3
                "
            >
                {skills.map(
                    (skill) => (
                        <div
                            key={skill.skill}
                            className="
                                        rounded-2xl
                                        border border-white/10
                                        bg-white/5
                                        p-4
                                    "
                        >
                            <p className="font-medium text-white">
                                {skill.skill}
                            </p>

                            <p className="mt-1 text-sm text-slate-400">
                                Score: {skill.score.toFixed(2)}
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}