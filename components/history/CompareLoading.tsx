export default function CompareLoading() {

    return (

        <div
            className="
                grid
                gap-6

                lg:grid-cols-2
            "
        >

            {[1, 2].map(
                item => (

                    <div
                        key={item}
                        className="
                            h-52

                            animate-pulse

                            rounded-3xl

                            bg-white/5
                        "
                    />

                )
            )}

        </div>
    )
}