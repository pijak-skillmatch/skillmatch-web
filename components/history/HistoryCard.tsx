'use client'

import Button from '@/components/ui/Button'

import {
    HistoryItem,
} from '@/types/history'

interface Props {

    history: HistoryItem

    onView: (
        id: number
    ) => void
}

export default function HistoryCard({
    history,
    onView,
}: Props) {

    return (

        <div
            className="
                group

                rounded-3xl

                border border-white/10
                bg-white/5

                p-6

                transition-all
                duration-300

                hover:border-white/20
                hover:bg-white/[0.07]
            "
        >

            <div
                className="
                    flex
                    items-start
                    justify-between
                    gap-4
                "
            >

                <div>

                    <span
                        className="
                            inline-flex

                            rounded-full

                            border border-white/10
                            bg-white/5

                            px-3 py-1

                            text-xs

                            uppercase
                            tracking-wider

                            text-slate-400
                        "
                    >
                        {history.analysis_type}
                    </span>

                    <h3
                        className="
                            mt-4

                            text-xl
                            font-semibold

                            text-white
                        "
                    >
                        {history.industry}
                    </h3>

                </div>

                <div
                    className="
                        rounded-full

                        bg-emerald-500/10

                        px-3 py-1

                        text-sm
                        font-medium

                        text-emerald-400
                    "
                >
                    {(
                        history.confidence *
                        100
                    ).toFixed(1)}%
                </div>

            </div>

            <div
                className="
                    mt-5

                    text-sm
                    text-slate-500
                "
            >
                {new Date(
                    history.created_at
                ).toLocaleString()}
            </div>

            <Button
                className="
                    mt-6
                    w-full
                "
                onClick={() =>
                    onView(
                        history.id
                    )
                }
            >
                View Report
            </Button>

        </div>
    )
}