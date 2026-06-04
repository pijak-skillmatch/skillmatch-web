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
                        <span
                            key={
                                skill.skill
                            }
                            className="
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-4
                                py-2
                                text-slate-300
                            "
                        >
                            {
                                skill.skill
                            }
                        </span>
                    )
                )}
            </div>
        </div>
    )
}