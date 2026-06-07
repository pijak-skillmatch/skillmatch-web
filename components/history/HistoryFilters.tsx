'use client'

import Select from
    '@/components/ui/Select'

interface Props {

    search: string

    onSearchChange: (
        value: string
    ) => void

    type: string

    onTypeChange: (
        value: string
    ) => void

    sort: string

    onSortChange: (
        value: string
    ) => void
}

export default function HistoryFilters({
    search,
    onSearchChange,
    type,
    onTypeChange,
    sort,
    onSortChange,
}: Props) {

    return (

        <div
            className="
                mb-8

                grid
                gap-4

                md:grid-cols-3
            "
        >

            <input
                value={search}
                onChange={(e) =>
                    onSearchChange(
                        e.target.value
                    )
                }
                placeholder="
                    Search industry...
                "
                className="
                    rounded-xl

                    border border-white/10
                    bg-white/5

                    px-4 py-3

                    text-white

                    placeholder:text-slate-500

                    backdrop-blur-xl

                    focus:border-(--secondary)
                    focus:outline-none
                "
            />

            <Select
                value={type}
                onChange={
                    onTypeChange
                }
                options={[
                    {
                        value: 'all',
                        label: 'All Types',
                    },
                    {
                        value: 'skills',
                        label: 'Skills Analysis',
                    },
                    {
                        value: 'resume',
                        label: 'Resume Analysis',
                    },
                ]}
            />

            <Select
                value={sort}
                onChange={
                    onSortChange
                }
                options={[
                    {
                        value: 'newest',
                        label: 'Newest',
                    },
                    {
                        value: 'oldest',
                        label: 'Oldest',
                    },
                    {
                        value: 'confidence',
                        label: 'Highest Confidence',
                    },
                ]}
            />

        </div>

    )
}