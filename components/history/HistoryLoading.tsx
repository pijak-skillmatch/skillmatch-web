'use client'

export default function HistoryLoading() {

    return (

        <div
            className="
                grid
                gap-6

                md:grid-cols-2
                xl:grid-cols-3
            "
        >

            {[1, 2, 3].map(
                (item) => (

                    <div
                        key={item}
                        className="
                            h-52

                            animate-pulse

                            rounded-3xl

                            border border-white/10
                            bg-white/5
                        "
                    />

                )
            )}

        </div>
    )
}