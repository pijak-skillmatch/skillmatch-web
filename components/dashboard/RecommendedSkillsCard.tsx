import {
    SkillRecommendation,
} from '@/types/analysis'

interface Props {
    skills:
    SkillRecommendation[]
}

export default function RecommendedSkillsCard({
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
            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >
                <div>

                    <h2
                        className="
                            text-xl
                            font-bold
                            text-white
                        "
                    >
                        Recommended Skills
                    </h2>

                    <p
                        className="
                            mt-2
                            text-slate-400
                        "
                    >
                        Skills that can improve
                        your competitiveness and
                        strengthen your industry fit.
                    </p>

                </div>

                <div
                    className="
                        rounded-full

                        border border-(--secondary)/20
                        bg-(--secondary)/10

                        px-4 py-2

                        text-sm
                        font-medium

                        text-(--secondary)
                    "
                >
                    {skills.length} Skills
                </div>
            </div>

            <div className="mt-8 space-y-5">

                {skills.map(
                    (
                        skill,
                        index
                    ) => {

                        const percentage =
                            Math.min(
                                100,
                                Math.round(
                                    skill.score * 100
                                )
                            )

                        return (
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

                                <div
                                    className="
                                        flex
                                        items-start
                                        justify-between
                                        gap-4
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            gap-4
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10

                                                items-center
                                                justify-center

                                                rounded-xl

                                                bg-linear-to-br
                                                from-(--secondary)
                                                to-(--primary)

                                                text-sm
                                                font-bold
                                                text-white
                                            "
                                        >
                                            {index + 1}
                                        </div>

                                        <div>

                                            <h3
                                                className="
                                                    text-lg
                                                    font-semibold
                                                    text-white
                                                "
                                            >
                                                {skill.skill}
                                            </h3>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    text-slate-400
                                                "
                                            >
                                                Recommendation Score:
                                                {' '}
                                                {percentage}%
                                            </p>

                                        </div>
                                    </div>

                                    <div
                                        className="
                                            rounded-full

                                            bg-emerald-500/10

                                            px-3 py-1

                                            text-sm
                                            font-medium

                                            text-emerald-400
                                        "
                                    >
                                        {percentage}%
                                    </div>

                                </div>

                                <div
                                    className="
                                        mt-4

                                        h-2

                                        overflow-hidden

                                        rounded-full

                                        bg-white/10
                                    "
                                >
                                    <div
                                        className="
                                            h-full

                                            rounded-full

                                            bg-linear-to-r
                                            from-emerald-400
                                            to-emerald-500
                                        "
                                        style={{
                                            width:
                                                `${percentage}%`,
                                        }}
                                    />
                                </div>

                                <div className="mt-5">

                                    <h4
                                        className="
                                            mb-2

                                            text-sm
                                            font-semibold

                                            text-slate-300
                                        "
                                    >
                                        Why this skill matters
                                    </h4>

                                    <ul
                                        className="
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
                                                    {reason}
                                                </li>
                                            )
                                        )}
                                    </ul>

                                </div>

                            </div>
                        )
                    }
                )}

            </div>
        </div>
    )
}