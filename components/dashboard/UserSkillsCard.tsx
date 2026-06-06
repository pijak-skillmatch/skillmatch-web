interface Props {
    skills: string[]
}

export default function UserSkillsCard({
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
                Your Current Skills
            </h2>

            <p
                className="
                    mt-2
                    text-slate-400
                "
            >
                Skills detected from your profile.
            </p>

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
                            key={skill}
                            className="
                                rounded-full
                                border
                                border-emerald-500/20
                                bg-emerald-500/10
                                px-4
                                py-2
                                text-sm
                                text-emerald-300
                            "
                        >
                            ✓ {skill}
                        </span>
                    )
                )}
            </div>
        </div>
    )
}