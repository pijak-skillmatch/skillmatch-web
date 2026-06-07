'use client'

interface Props {
    pathname: string
    links: {
        label: string
        href: string
    }[]
    onNavigate: (
        href: string
    ) => void
}

export default function DesktopNav({
    pathname,
    links,
    onNavigate,
}: Props) {

    return (
        <div
            className="
                hidden
                items-center
                gap-8
                md:flex
            "
        >
            {links.map(
                (link) => {

                    const active =
                        pathname ===
                        link.href

                    return (
                        <button
                            key={
                                link.href
                            }
                            onClick={() =>
                                onNavigate(
                                    link.href
                                )
                            }
                            className={`
                                relative
                                text-sm
                                transition-colors
                                duration-300

                                ${active
                                    ? 'text-white'
                                    : 'text-slate-400 hover:text-white'
                                }
                            `}
                        >
                            {
                                link.label
                            }

                            {active && (
                                <span
                                    className="
                                        absolute
                                        -bottom-2
                                        left-0

                                        h-px
                                        w-full

                                        bg-linear-to-r
                                        from-(--secondary)
                                        to-(--primary)
                                    "
                                />
                            )}
                        </button>
                    )
                }
            )}
        </div>
    )
}