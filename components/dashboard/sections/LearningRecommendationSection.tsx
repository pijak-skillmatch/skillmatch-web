import LearningPathCard from
    '@/components/dashboard/LearningPathCard'

import RecommendedSkillsCard from
    '@/components/dashboard/RecommendedSkillsCard'

import {
    LearningPathItem,
    SkillRecommendation,
} from '@/types/analysis'

interface Props {
    learningPath:
    LearningPathItem[]

    skills:
    SkillRecommendation[]
}

export default function
    LearningRecommendationSection({
        learningPath,
        skills,
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
                    Learning Recommendations
                </h2>

            </div>

            <div className="space-y-8">

                <LearningPathCard
                    learningPath={
                        learningPath
                    }
                />

                <RecommendedSkillsCard
                    skills={
                        skills
                    }
                />

            </div>

        </section>
    )
}