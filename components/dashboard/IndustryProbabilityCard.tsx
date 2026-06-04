import {
    IndustryPrediction,
} from '@/types/analysis'

interface Props {
    industries:
    IndustryPrediction[]
}

export default function
    IndustryProbabilityCard({
        industries,
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
            <h2
                className="
                    text-xl
                    font-bold
                    text-white
                "
            >
                Industry Probabilities
            </h2>

            <div className="mt-6 space-y-4">
                {industries.map(
                    (item) => (
                        <div
                            key={
                                item.industry
                            }
                        >
                            <div
                                className="
                                    mb-2
                                    flex
                                    justify-between
                                "
                            >
                                <span className="text-slate-300">
                                    {
                                        item.industry
                                    }
                                </span>

                                <span className="text-slate-400">
                                    {(
                                        item.probability *
                                        100
                                    ).toFixed(
                                        1
                                    )}
                                    %
                                </span>
                            </div>

                            <div
                                className="
                                    h-3
                                    rounded-full
                                    bg-white/10
                                "
                            >
                                <div
                                    className="
                                        h-3
                                        rounded-full
                                        bg-linear-to-r
                                        from-(--secondary)
                                        to-(--primary)
                                    "
                                    style={{
                                        width:
                                            `${item.probability * 100}%`,
                                    }}
                                />
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}