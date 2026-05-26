import Link from 'next/link'
import Button from '@/components/ui/Button'
import GradientText from '@/components/ui/GradientText'
import GlassPanel from '@/components/ui/GlassPanel'

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(124,156,255,0.14),transparent_30%),linear-gradient(to_bottom,rgba(5,8,22,1),rgba(11,17,32,1))]" />

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 -top-32 -z-10 h-112 w-md -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,156,255,0.16),transparent_70%)] blur-3xl" />

            <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-88 w-88 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.10),transparent_70%)] blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,156,255,0.10),transparent_70%)] blur-3xl" />

            <div className="container-custom">
                <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16">
                    {/* LEFT */}
                    <div className="max-w-2xl">
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

                backdrop-blur-md
              "
                        >
                            <span className="h-2 w-2 rounded-full bg-(--secondary) shadow-[0_0_16px_rgba(167,139,250,0.7)]" />

                            Next-Gen Career Discovery
                        </div>

                        {/* Heading */}
                        <h1
                            className="
                mt-6
                max-w-[11ch]

                text-[clamp(3rem,6vw,5.2rem)]
                font-bold
                leading-[0.96]
                tracking-tighter

                text-white
              "
                        >
                            Find a career path that{' '}

                            <GradientText>
                                actually fits you.
                            </GradientText>
                        </h1>

                        {/* Description */}
                        <p
                            className="
                mt-6
                max-w-xl

                text-lg leading-8
                text-slate-300

                md:text-xl
              "
                        >
                            AI-powered career recommendations based on your skills,
                            interests, and goals. Discover opportunities that truly align
                            with your potential.
                        </p>

                        {/* CTA */}
                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <Button href="/analysis">
                                Get Started
                            </Button>

                            <Button variant="secondary">
                                See how it works
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
                            <div className="glass rounded-3xl p-4">
                                <div className="text-2xl font-bold tracking-tight text-white">
                                    50k+
                                </div>

                                <div className="mt-1 text-sm text-slate-400">
                                    Users explored
                                </div>
                            </div>

                            <div className="glass rounded-3xl p-4">
                                <div className="text-2xl font-bold tracking-tight text-white">
                                    98%
                                </div>

                                <div className="mt-1 text-sm text-slate-400">
                                    Match clarity
                                </div>
                            </div>

                            <div className="glass col-span-2 rounded-3xl p-4 sm:col-span-1">
                                <div className="text-2xl font-bold tracking-tight text-white">
                                    Fast
                                </div>

                                <div className="mt-1 text-sm text-slate-400">
                                    Guided experience
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-8 rounded-4xl bg-[radial-gradient(circle,rgba(124,156,255,0.18),transparent_65%)] blur-3xl" />

                        <GlassPanel className="relative overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
                            {/* Top bar */}
                            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                                </div>

                                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                                    Career Match Preview
                                </div>
                            </div>

                            {/* Dashboard */}
                            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 m-5">
                                <div className="absolute inset-0 bg-linear-to-tr from-(--secondary)/10 via-transparent to-(--primary)/10" />

                                <img
                                    src="/Dashboard.png"
                                    alt="Dashboard Preview"
                                    className="relative z-10 w-full object-cover"
                                />
                            </div>

                            {/* Bottom tags */}
                            <div className="flex flex-wrap gap-2 px-5 pb-5">
                                {[
                                    'AI recommendations',
                                    'Skill matching',
                                    'Career insights',
                                    'Fast onboarding',
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="
                      rounded-full
                      border border-white/10
                      bg-white/5

                      px-3 py-1

                      text-xs text-slate-300
                    "
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </GlassPanel>
                    </div>
                </div>

                {/* Scroll */}
                <div className="mt-14 flex justify-center">
                    <a
                        href="#features"
                        className="
              group inline-flex flex-col items-center gap-2

              text-sm text-slate-400

              transition-colors duration-300

              hover:text-white
            "
                    >
                        <span className="text-xs uppercase tracking-[0.22em]">
                            Scroll to explore
                        </span>

                        <span
                            className="
                flex h-11 w-11 items-center justify-center

                rounded-full
                border border-white/10
                bg-white/5

                backdrop-blur-md

                transition-all duration-300

                group-hover:border-white/20
                group-hover:bg-white/10
              "
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="transition-transform duration-300 group-hover:translate-y-0.5"
                            >
                                <path
                                    d="M12 5v14m0 0 6-6m-6 6-6-6"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}