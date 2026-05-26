import GlassPanel from '@/components/ui/GlassPanel'

const missionItems = [
    {
        title: 'Our Vision',
        description:
            'Empower people with intelligent career guidance powered by AI and modern technology.',
    },

    {
        title: 'Our Mission',
        description:
            'Bridge the gap between skills, interests, and future opportunities through personalized recommendations.',
    },

    {
        title: 'Why We Built This',
        description:
            'Many people struggle to identify career paths aligned with their true potential and evolving industry needs.',
    },
]

export default function MissionSection() {
    return (
        <section className="pb-24 md:pb-32">
            <div className="container-custom">
                <div className="grid gap-8 lg:grid-cols-3">
                    {missionItems.map((item) => (
                        <GlassPanel
                            key={item.title}

                            className="
                group relative overflow-hidden

                p-8

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

                            <div className="relative z-10">
                                <h3
                                    className="
                    text-2xl font-bold
                    tracking-tight
                    text-white
                  "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                    mt-5

                    leading-8
                    text-slate-400
                  "
                                >
                                    {item.description}
                                </p>
                            </div>
                        </GlassPanel>
                    ))}
                </div>
            </div>
        </section>
    )
}