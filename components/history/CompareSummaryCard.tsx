'use client'

import {
    HistoryDetail,
} from '@/types/history'

interface Props {
    history: HistoryDetail
}

export default function CompareSummaryCard({
    history,
}: Props) {

    return (

        <div
            className="
                rounded-3xl

                border
                border-white/10

                bg-white/5

                p-6
            "
        >

            <h2
                className="
                    text-xl
                    font-semibold

                    text-white
                "
            >
                {history.industry}
            </h2>

            <p
                className="
                    mt-2

                    text-slate-400
                "
            >
                Confidence:
                {' '}
                {(history.confidence * 100)
                    .toFixed(1)}%
            </p>

            <p
                className="
                    mt-2

                    text-slate-400
                "
            >
                Skills:
                {' '}
                {history.input_skills.length}
            </p>

            <p
                className="
                    mt-2

                    text-slate-400
                "
            >
                Date:
                {' '}
                {new Date(
                    history.created_at
                ).toLocaleDateString()}
            </p>

        </div>
    )
}