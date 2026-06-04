interface Props {
    industry: string
    probability: number
}

export default function IndustryMatchCard({
    industry,
    probability,
}: Props) {
    return (
        <div
            className="
                rounded-3xl
                border border-white/10
                bg-white/5
                p-8
            "
        >
            <p className="text-slate-400">
                Top Industry Match
            </p>

            <h2
                className="
                    mt-4
                    text-4xl
                    font-bold
                    text-white
                "
            >
                {industry}
            </h2>

            <p
                className="
                    mt-3
                    text-2xl
                    font-semibold
                    text-emerald-400
                "
            >
                {(probability * 100).toFixed(1)}%
            </p>
        </div>
    )
}