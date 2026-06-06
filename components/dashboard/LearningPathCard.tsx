import {
    LearningPathItem,
} from '@/types/analysis'

interface Props {
    learningPath:
    LearningPathItem[]
}

export default function LearningPathCard({
    learningPath,
}: Props) {

    const filteredPath =
        learningPath.filter(
            (item) =>
                item.skills.length > 0
        )

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
                Learning Roadmap
            </h2>

            <p
                className="
                    mt-2
                    text-slate-400
                "
            >
                Recommended learning journey
                based on your skill gap.
            </p>

            <div className="mt-8">

                {filteredPath.map(
                    (
                        level,
                        index
                    ) => (
                        <div
                            key={level.level}
                            className="
                                relative
                                pb-10
                                pl-10
                            "
                        >

                            {/* Vertical Line */}
                            {index !==
                                filteredPath.length - 1 && (
                                    <div
                                        className="
                                            absolute
                                            left-1.75
                                            top-5
                                            h-full
                                            w-0.5
                                            bg-white/10
                                        "
                                    />
                                )}

                            {/* Dot */}
                            <div
                                className="
                                    absolute
                                    left-0
                                    top-1

                                    h-4
                                    w-4

                                    rounded-full

                                    bg-linear-to-r
                                    from-(--secondary)
                                    to-(--primary)
                                "
                            />

                            {/* Title */}
                            <h3
                                className="
                                    text-lg
                                    font-semibold
                                    text-white
                                "
                            >
                                {level.level}
                            </h3>

                            {/* Skills */}
                            <div
                                className="
                                    mt-4
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

                                                border
                                                border-(--secondary)/20

                                                bg-(--secondary)/10

                                                px-4
                                                py-2

                                                text-sm
                                                font-medium

                                                text-(--secondary)
                                            "
                                        >
                                            {skill}
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