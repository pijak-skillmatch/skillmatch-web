const steps = [
    'Analyzing your skills...',
    'Matching career patterns...',
    'Evaluating industry trends...',
    'Generating personalized insights...',
]

export default function AIThinking() {
    return (
        <div className="flex flex-col items-center justify-center py-16">
            {/* Orb */}
            <div className="relative">
                <div
                    className="
            absolute inset-0

            rounded-full

            bg-linear-to-r
            from-(--secondary)
            to-(--primary)

            opacity-30
            blur-2xl
          "
                />

                <div
                    className="
            relative

            flex h-24 w-24 items-center justify-center

            rounded-full

            border border-white/10
            bg-white/5

            backdrop-blur-xl
          "
                >
                    <div
                        className="
              h-10 w-10 rounded-full

              bg-linear-to-r
              from-(--secondary)
              to-(--primary)

              animate-pulse
            "
                    />
                </div>
            </div>

            {/* Title */}
            <h3
                className="
          mt-10

          text-2xl font-bold
          tracking-tight

          text-white
        "
            >
                SkillMatch AI is analyzing...
            </h3>

            <p
                className="
          mt-3

          max-w-md text-center

          text-slate-400
          leading-7
        "
            >
                Our AI engine is processing your profile
                and identifying the best career opportunities
                tailored to your strengths.
            </p>

            {/* Steps */}
            <div className="mt-10 w-full max-w-md space-y-4">
                {steps.map((step, index) => (
                    <div
                        key={step}

                        className="
              flex items-center gap-4

              rounded-2xl
              border border-white/10
              bg-white/5

              px-5 py-4

              animate-fade-slide-up
            "

                        style={{
                            animationDelay: `${index * 150}ms`,
                        }}
                    >
                        <div
                            className="
                flex h-10 w-10 items-center justify-center

                rounded-xl

                bg-linear-to-br
                from-(--secondary)
                to-(--primary)

                text-sm font-bold text-white
              "
                        >
                            ✓
                        </div>

                        <span className="text-sm text-slate-300">
                            {step}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}