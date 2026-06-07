'use client'

import Link from 'next/link'

export default function HistoryEmpty() {

    return (

        <div
            className="
                rounded-3xl

                border border-dashed
                border-white/10

                bg-white/5

                p-12

                text-center
            "
        >

            <div className="text-5xl">
                📊
            </div>

            <h2
                className="
                    mt-5

                    text-2xl
                    font-semibold

                    text-white
                "
            >
                No Analysis History
            </h2>

            <p
                className="
                    mt-3

                    text-slate-400
                "
            >
                Run your first analysis to
                start building your career
                intelligence history.
            </p>

            <Link
                href="/analysis"
                className="
                    mt-6

                    inline-flex

                    rounded-xl

                    bg-linear-to-r
                    from-(--secondary)
                    to-(--primary)

                    px-5 py-3

                    text-white
                "
            >
                Start Analysis
            </Link>

        </div>
    )
}