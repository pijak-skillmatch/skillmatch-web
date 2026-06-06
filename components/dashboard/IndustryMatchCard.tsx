interface Props {
    industry: string
    probability: number
}

export default function IndustryMatchCard({
    industry,
    probability,
}: Props) {

    const percentage =
        Number(
            (
                probability * 100
            ).toFixed(1)
        )

    const industryIcons:
        Record<string, string> = {
        Software: '💻',
        Finance: '💰',
        Healthcare: '🏥',
        Education: '🎓',
        Marketing: '📈',
        Manufacturing: '🏭',
        Retail: '🛒',
    }

    const getStrength = () => {

        if (percentage >= 80) {
            return {
                label: 'Very Strong',
                color:
                    'text-emerald-400',
            }
        }

        if (percentage >= 60) {
            return {
                label: 'Strong',
                color:
                    'text-blue-400',
            }
        }

        if (percentage >= 40) {
            return {
                label: 'Moderate',
                color:
                    'text-yellow-400',
            }
        }

        return {
            label: 'Low',
            color:
                'text-red-400',
        }
    }

    const strength =
        getStrength()

    return (
        <div
            className="
                relative
                flex
                h-full
                flex-col

                overflow-hidden

                rounded-3xl
                border border-white/10

                bg-white/5
                p-8

                backdrop-blur-xl
            "
        >
            {/* Glow */}
            <div
                className="
                    absolute
                    inset-0

                    bg-linear-to-br
                    from-(--secondary)/10
                    to-(--primary)/10
                "
            />

            <div
                className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                "
            >

                {/* Badge */}
                <div
                    className="
                        inline-flex
                        w-fit
                        items-center
                        gap-2

                        rounded-full

                        border
                        border-emerald-500/20

                        bg-emerald-500/10

                        px-4
                        py-2

                        text-sm
                        font-medium

                        text-emerald-300
                    "
                >
                    🏆 Top Match
                </div>

                {/* Industry */}
                <div className="mt-4">

                    <div className="text-4xl">
                        {
                            industryIcons[
                            industry
                            ] ?? '🚀'
                        }
                    </div>

                    <h2
                        className="
                            mt-4

                            text-4xl
                            font-bold

                            tracking-tight

                            text-white
                        "
                    >
                        {industry}
                    </h2>

                </div>

                {/* Score */}
                <div className="mt-8">

                    <div
                        className="
                            text-5xl
                            font-bold

                            text-emerald-400
                        "
                    >
                        {percentage}%
                    </div>

                    <p
                        className="
                            mt-2
                            text-slate-400
                        "
                    >
                        Match Confidence
                    </p>

                </div>

                {/* Progress */}
                <div className="mt-8">

                    <div
                        className="
                            h-3
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

                </div>

                {/* Strength */}
                <div
                    className="
                        mt-auto
                        pt-8
                    "
                >
                    <p
                        className="
                            text-sm
                            text-slate-400
                        "
                    >
                        Industry Strength
                    </p>

                    <p
                        className={`
                            mt-2

                            text-xl
                            font-semibold

                            ${strength.color}
                        `}
                    >
                        {strength.label}
                    </p>
                </div>

            </div>
        </div>
    )
}