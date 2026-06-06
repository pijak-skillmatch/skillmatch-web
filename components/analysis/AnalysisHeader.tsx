export default function AnalysisHeader() {

    return (
        <div>

            <div
                className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border border-white/10
                    bg-white/5
                    px-4 py-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-slate-300
                "
            >
                Analysis Form
            </div>

            <h2
                className="
                    mt-5
                    text-3xl
                    font-bold
                    tracking-tight
                    text-white
                "
            >
                Build Your AI Profile
            </h2>

            <p
                className="
                    mt-3
                    leading-7
                    text-slate-400
                "
            >
                Analyze your skills manually
                or upload your resume to
                discover career opportunities
                and learning paths.
            </p>

        </div>
    )
}