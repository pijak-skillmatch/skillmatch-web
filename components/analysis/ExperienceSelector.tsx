interface Props {
    experience: string
    onChange: (
        value: string
    ) => void
}

const experienceLevels = [
    'Entry Level',
    'Mid Level',
    'Senior Level',
]

export default function ExperienceSelector({
    experience,
    onChange,
}: Props) {

    return (
        <div>

            <label
                className="
                    mb-3
                    block
                    text-sm
                    font-medium
                    text-slate-300
                "
            >
                Experience Level
            </label>

            <div className="flex flex-wrap gap-3">

                {experienceLevels.map(
                    (level) => {

                        const active =
                            experience ===
                            level

                        return (
                            <button
                                key={level}
                                type="button"
                                onClick={() =>
                                    onChange(
                                        level
                                    )
                                }
                                className={`
                                    rounded-xl
                                    border
                                    px-5 py-3
                                    text-sm
                                    font-medium

                                    ${active
                                        ? `
                                        border-transparent
                                        bg-linear-to-r
                                        from-(--secondary)
                                        to-(--primary)
                                        text-white
                                        `
                                        : `
                                        border-white/10
                                        bg-white/5
                                        text-slate-300
                                        `
                                    }
                                `}
                            >
                                {level}
                            </button>
                        )
                    }
                )}

            </div>

        </div>
    )
}