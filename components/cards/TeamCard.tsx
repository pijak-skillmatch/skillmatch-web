import GlassPanel from '@/components/ui/GlassPanel'

interface TeamCardProps {
  initials: string
  name: string
  role: string
  bio: string
}

export default function TeamCard({
  initials,
  name,
  role,
  bio,
}: TeamCardProps) {
  return (
    <GlassPanel
      className="
        group relative overflow-hidden

        p-7

        transition-all duration-500

        hover:-translate-y-1.5
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

      {/* Avatar */}
      <div
        className="
          relative z-10

          flex h-16 w-16 items-center justify-center

          rounded-2xl

          bg-linear-to-br
          from-(--secondary)
          to-(--primary)

          text-lg font-bold text-white

          shadow-[0_0_30px_rgba(124,156,255,0.22)]
        "
      >
        {initials}
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
          {name}
        </h3>

        <div
          className="
            mt-2

            text-sm font-medium
            text-slate-400
          "
        >
          {role}
        </div>

        <p
          className="
            mt-5

            text-sm leading-7
            text-slate-400
          "
        >
          {bio}
        </p>
      </div>
    </GlassPanel>
  )
}