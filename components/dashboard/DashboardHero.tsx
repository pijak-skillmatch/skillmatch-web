import { FiTrendingUp } from 'react-icons/fi'

export default function DashboardHero() {

    return (
        <section
            className="
                relative
                overflow-hidden

                rounded-4xl
                border border-white/10

                bg-white/5

                p-10
            "
        >
            <div
                className="
                    absolute
                    inset-0

                    bg-linear-to-br
                    from-(--secondary)/10
                    to-(--primary)/10
                "
            />

            <div className="relative z-10">

                <div
                    className="
                        inline-flex
                        items-center
                        gap-2

                        rounded-full

                        border border-white/10
                        bg-white/5

                        px-4 py-2

                        text-sm
                        text-slate-300
                    "
                >
                    <FiTrendingUp className="h-5 w-5" />
                    <span>AI Career Intelligence</span>
                </div>

                <h1
                    className="
                        mt-6

                        text-5xl
                        font-bold

                        tracking-tight

                        text-white
                    "
                >
                    Your Career

                    <span
                        className="
                            bg-linear-to-r
                            from-(--secondary)
                            to-(--primary)

                            bg-clip-text
                            text-transparent
                        "
                    >
                        {' '}Intelligence Report
                    </span>

                </h1>

                <p
                    className="
                        mt-5
                        max-w-3xl

                        text-lg
                        leading-8

                        text-slate-400
                    "
                >
                    Discover your most suitable
                    industry, identify skill gaps,
                    and follow a personalized
                    learning roadmap generated
                    by SkillMatch AI.
                </p>

            </div>
        </section>
    )
}