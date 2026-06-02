import GlassPanel from '@/components/ui/GlassPanel'
import Image from 'next/image'

interface TeamCardProps {
  image?: string
  initials: string
  name: string
  role: string
  bio: string
}

export default function TeamCard({
  image,
  initials,
  name,
  role,
  bio,
}: TeamCardProps) {
  return (
    <GlassPanel
      className="
        group relative overflow-hidden

        flex flex-col items-center

        p-7

        text-center

        transition-all duration-500

        hover:-translate-y-1.5
      "
    >
      {/* Hover Glow */}
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

          h-28 w-28

          overflow-hidden

          rounded-full

          bg-linear-to-br
          from-(--secondary)
          to-(--primary)

          p-0.5

          shadow-[0_0_30px_rgba(124,156,255,0.22)]
        "
      >
        <div
          className="
            relative h-full w-full

            overflow-hidden

            rounded-full

            bg-slate-900
          "
        >
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="112px"
              className="
                object-cover

                transition-transform duration-500

                group-hover:scale-110
              "
            />
          ) : (
            <div
              className="
                flex h-full w-full

                items-center justify-center

                text-2xl font-bold

                text-white
              "
            >
              {initials}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-6 text-center">
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
            mx-auto mt-5

            max-w-xs

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