interface SkillChipProps {
  label: string
  active?: boolean
  onClick?: () => void
}

export default function SkillChip({
  label,
  active = false,
  onClick,
}: SkillChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}

      className={`
        group relative overflow-hidden

        rounded-full

        border px-4 py-2.5

        text-sm font-medium

        transition-all duration-300

        ${active
          ? `
              border-transparent

              bg-linear-to-r
              from-(--secondary)
              to-(--primary)

              text-white

              shadow-[0_0_25px_rgba(124,156,255,0.22)]
            `
          : `
              border-white/10
              bg-white/5

              text-slate-300

              hover:border-white/20
              hover:bg-white/10
            `
        }
      `}
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0

          bg-white/10

          transition-opacity duration-300

          group-hover:opacity-100
        "
      />

      {/* Content */}
      <span className="relative z-10">
        {label}
      </span>
    </button>
  )
}