'use client'

export default function PendingExportOverlay() {

    return (

        <div
            className="
                fixed
                inset-0
                z-999

                flex
                items-center
                justify-center

                bg-black/70

                backdrop-blur-md
            "
        >

            <div
                className="
                    w-full
                    max-w-md

                    rounded-3xl

                    border border-white/10
                    bg-[#0F172A]

                    p-8

                    text-center
                "
            >

                <div
                    className="
                        mx-auto

                        h-14
                        w-14

                        animate-spin

                        rounded-full

                        border-4
                        border-white/10

                        border-t-(--secondary)
                    "
                />

                <h2
                    className="
                        mt-6

                        text-xl
                        font-semibold

                        text-white
                    "
                >
                    Preparing Your Report
                </h2>

                <p
                    className="
                        mt-3

                        text-sm
                        text-slate-400
                    "
                >
                    Saving your analysis history
                    and generating PDF export...
                </p>

            </div>

        </div>
    )
}