import GradientText from './GradientText'

interface SectionHeaderProps {
    badge: string
    title: string
    gradient?: string
    description: string
}

export default function SectionHeader({
    badge,
    title,
    gradient,
    description,
}: SectionHeaderProps) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div
                className="
          inline-flex items-center gap-2

          rounded-full
          border border-white/10
          bg-white/5

          px-4 py-2

          text-xs font-semibold uppercase
          tracking-[0.18em]
          text-slate-300
        "
            >
                {badge}
            </div>

            {/* Title */}
            <h2
                className="
          mt-6

          text-[clamp(2.2rem,5vw,4rem)]
          font-bold
          leading-[1.05]
          tracking-tight

          text-white
        "
            >
                {title}{' '}

                {gradient && (
                    <GradientText>
                        {gradient}
                    </GradientText>
                )}
            </h2>

            {/* Description */}
            <p
                className="
          mx-auto mt-6 max-w-2xl

          text-lg leading-8
          text-slate-400
        "
            >
                {description}
            </p>
        </div>
    )
}