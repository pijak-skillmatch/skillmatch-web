import {
    HistoryDetail,
} from '@/types/history'

import { TbFileReport } from 'react-icons/tb'

interface Props {

    history: HistoryDetail
}

export default function HistoryDetailHeader({
    history,
}: Props) {

    return (

        <section
            className="
                rounded-4xl

                border border-white/10
                bg-white/5

                p-8
            "
        >

            <div
                className="
                    inline-flex

                    rounded-full

                    border border-white/10
                    bg-white/5

                    px-4 py-2

                    text-sm
                    text-slate-300
                "
            >
                <TbFileReport className="mr-2" /> Analysis Report
            </div>

            <h1
                className="
                    mt-5

                    text-4xl
                    font-bold

                    text-white
                "
            >
                {history.industry}
            </h1>

            <p
                className="
                    mt-4

                    text-slate-400
                "
            >
                {new Date(
                    history.created_at
                ).toLocaleString()}
            </p>

            <div
                className="
                    mt-6

                    inline-flex

                    rounded-full

                    bg-emerald-500/10

                    px-4 py-2

                    text-emerald-400
                "
            >
                Confidence: {' '}
                {(
                    history.confidence *
                    100
                ).toFixed(1)}%
            </div>

        </section>
    )
}