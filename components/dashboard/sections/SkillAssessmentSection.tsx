import UserSkillsCard from
    '@/components/dashboard/UserSkillsCard'

import SkillGapComparisonCard from
    '@/components/dashboard/SkillGapComparisonCard'

interface Props {
    currentSkills: string[]
    recommendedSkills: string[]
}

export default function SkillAssessmentSection({
    currentSkills,
    recommendedSkills,
}: Props) {

    return (
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
                        currentSkills
                    }
                />

                <SkillGapComparisonCard
                    currentSkills={
                        currentSkills
                    }
                    recommendedSkills={
                        recommendedSkills
                    }
                />

            </div>

        </section>
    )
}