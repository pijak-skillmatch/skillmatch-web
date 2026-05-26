interface ResultCardProps {
    title: string
    match: number
    description: string
    skills: string[]
}

export default function ResultCard({
    title,
    match,
    description,
    skills,
}: ResultCardProps) {
    return (
        <div
            className="
        relative overflow-hidden

        rounded-4xl
        border border-white/10
        bg-white/5

        p-7

        backdrop-blur-xl
      "
        >
            {/* Glow */}
            <div
                className="
          pointer-events-none absolute inset-0

          bg-linear-to-br
          from-(--secondary)/10
          to-(--primary)/10
        "
            />

            {/* Top */}
            <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                    <div className="text-sm text-slate-400">
                        Recommended Career
                    </div>

                    <h3
                        className="
              mt-2

              text-2xl font-bold
              tracking-tight

              text-white
            "
                    >
                        {title}
                    </h3>
                </div>

                <div
                    className="
            rounded-full

            bg-emerald-400/10

            px-4 py-2

            text-sm font-semibold
            text-emerald-300
          "
                >
                    {match}% Match
                </div>
            </div>

            {/* Description */}
            <p
                className="
          relative z-10

          mt-6

          leading-7
          text-slate-400
        "
            >
                {description}
            </p>

            {/* Skills */}
            <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span
                        key={skill}

                        className="
              rounded-full

              border border-white/10
              bg-white/5

              px-4 py-2

              text-sm text-slate-300
            "
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}