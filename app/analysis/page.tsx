import Navbar from '@/components/layout/Navbar'

import AnalysisForm from '@/components/analysis/AnalysisForm'

export default function AnalysisPage() {
    return (
        <>
            <Navbar />

            <main
                className="
          relative overflow-hidden

          pt-28 pb-20
          md:pt-32
        "
            >
                {/* Background */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.10),transparent_70%)] blur-3xl" />

                    <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(124,156,255,0.10),transparent_70%)] blur-3xl" />
                </div>

                <div className="container-custom">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                        {/* LEFT */}
                        <div className="lg:sticky lg:top-6 h-fit">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                                AI Career Analysis
                            </div>

                            <h1
                                className="
                  mt-6

                  text-[clamp(2.6rem,5vw,4.5rem)]
                  font-bold
                  leading-none

                  tracking-tight
                  text-white
                "
                            >
                                Let AI understand your{' '}

                                <span
                                    className="
                    bg-linear-to-r
                    from-(--secondary)
                    to-(--primary)

                    bg-clip-text
                    text-transparent
                  "
                                >
                                    potential.
                                </span>
                            </h1>

                            <p
                                className="
                  mt-6

                  max-w-lg

                  text-lg leading-8
                  text-slate-400
                "
                            >
                                Tell us about your skills, interests, and career goals.
                                SkillMatch AI will generate personalized recommendations
                                tailored to your strengths.
                            </p>

                            {/* Benefits */}
                            <div className="mt-10 space-y-4">
                                {[
                                    'Personalized AI recommendations',
                                    'Skill-based career matching',
                                    'Fast and interactive analysis',
                                    'Modern career growth insights',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="
                      flex items-center gap-3

                      rounded-2xl
                      border border-white/10
                      bg-white/5

                      px-4 py-4
                    "
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
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT */}
                        <AnalysisForm />
                    </div>
                </div>
            </main>
        </>
    )
}