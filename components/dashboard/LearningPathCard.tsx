import {
    LearningPathItem,
} from '@/types/analysis'

interface Props {
    learningPath:
    LearningPathItem[]
}

export default function
    LearningPathCard({
        learningPath,
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
                Learning Path
            </h2>

            <div className="mt-6 space-y-6">
                {learningPath.map(
                    (level) => (
                        <div
                            key={
                                level.level
                            }
                        >
                            <h3
                                className="
                                    font-semibold
                                    text-(--secondary)
                                "
                            >
                                {
                                    level.level
                                }
                            </h3>

                            <div
                                className="
                                    mt-3
                                    flex
                                    flex-wrap
                                    gap-3
                                "
                            >
                                {level.skills.map(
                                    (
                                        skill
                                    ) => (
                                        <span
                                            key={
                                                skill
                                            }
                                            className="
                                                rounded-full
                                                bg-white/5
                                                px-3
                                                py-2
                                                text-sm
                                                text-slate-300
                                            "
                                        >
                                            {
                                                skill
                                            }
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}