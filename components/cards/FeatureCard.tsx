interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        group relative overflow-hidden

        rounded-4xl
        border border-white/10
        bg-white/5

        p-7

        backdrop-blur-xl

        transition-all duration-500

        hover:-translate-y-1.5
        hover:border-white/20
        hover:bg-white/7
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0

          bg-linear-to-br
          from-(--secondary)/10
          to-(--primary)/10

          transition-opacity duration-500

          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative z-10

          flex h-14 w-14 items-center justify-center

          rounded-2xl

          border border-white/10
          bg-white/7

          text-2xl

          shadow-[0_0_30px_rgba(124,156,255,0.12)]
        "
      >
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10 mt-6">
        <h3
          className="
            text-xl font-bold
            tracking-tight
            text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3

            text-sm leading-7
            text-slate-400
          "
        >
          {description}
        </p>
      </div>
    </div>
  )
}