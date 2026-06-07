'use client'

import {
    useEffect,
    useState,
} from 'react'

import {
    useRouter,
} from 'next/navigation'

import Navbar from '@/components/layout/Navbar'

import HistoryCard from
    '@/components/history/HistoryCard'

import HistoryEmpty from
    '@/components/history/HistoryEmpty'

import HistoryLoading from
    '@/components/history/HistoryLoading'

import {
    getHistories,
} from '@/lib/api/history'

import {
    isAuthenticated,
} from '@/lib/auth/isAuthenticated'

import {
    HistoryItem,
} from '@/types/history'

import {
    showLoginRequired,
    showError,
} from '@/lib/swal'
import { TbFileReport } from 'react-icons/tb'
import HistoryFilters from '@/components/history/HistoryFilters'

export default function HistoryPage() {

    const router =
        useRouter()

    const [histories,
        setHistories] =
        useState<
            HistoryItem[]
        >([])

    const [loading,
        setLoading] =
        useState(true)

    useEffect(() => {

        const loadHistory =
            async () => {

                try {

                    if (
                        !isAuthenticated()
                    ) {

                        const result =
                            await showLoginRequired(
                                'Login Required',
                                'Please sign in to view your analysis history.'
                            )

                        if (
                            result.isConfirmed
                        ) {

                            router.push(
                                '/login'
                            )

                        } else {

                            router.push(
                                '/'
                            )
                        }

                        return
                    }

                    const data =
                        await getHistories()

                    setHistories(
                        data
                    )

                } catch (
                error
                ) {

                    console.error(
                        error
                    )

                    await showError(
                        'Failed',
                        'Unable to load analysis history.'
                    )

                } finally {

                    setLoading(
                        false
                    )
                }
            }

        loadHistory()

    }, [router])

    const handleView =
        (
            id: number
        ) => {

            router.push(
                `/history/${id}`
            )
        }

    const [search,
        setSearch] =
        useState('')

    const [type,
        setType] =
        useState('all')

    const [sort,
        setSort] =
        useState('newest')

    const filteredHistories =
        [...histories]
            .filter(
                history =>
                    history.industry
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            )
            .filter(
                history =>
                    type === 'all'
                        ? true
                        : history.analysis_type === type
            )
            .sort(
                (a, b) => {

                    if (
                        sort ===
                        'confidence'
                    ) {

                        return (
                            b.confidence -
                            a.confidence
                        )
                    }

                    if (
                        sort ===
                        'oldest'
                    ) {

                        return (
                            new Date(
                                a.created_at
                            ).getTime()
                            -
                            new Date(
                                b.created_at
                            ).getTime()
                        )
                    }

                    return (
                        new Date(
                            b.created_at
                        ).getTime()
                        -
                        new Date(
                            a.created_at
                        ).getTime()
                    )
                }
            )

    return (
        <>
            <Navbar />

            <main
                className="
                    container-custom

                    pt-32
                    pb-20
                "
            >

                {/* HEADER */}

                <section
                    className="
                        rounded-4xl

                        border border-white/10
                        bg-white/5

                        p-8 md:p-10
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
                        <TbFileReport className="mr-2" /> Analysis History
                    </div>

                    <h1
                        className="
                            mt-5

                            text-4xl
                            md:text-5xl

                            font-bold

                            text-white
                        "
                    >
                        Your Career
                        <span
                            className="
                                bg-linear-to-r
                                from-(--secondary)
                                to-(--primary)

                                bg-clip-text
                                text-transparent
                            "
                        >
                            {' '}History
                        </span>
                    </h1>

                    <p
                        className="
                            mt-4

                            max-w-3xl

                            text-slate-400
                        "
                    >
                        Review previous career
                        analyses, compare
                        recommendations, and
                        track your learning
                        journey over time.
                    </p>

                </section>

                {/* CONTENT */}

                {/* CONTENT */}

                <section
                    className="
        mt-10
    "
                >

                    <HistoryFilters
                        search={search}
                        onSearchChange={
                            setSearch
                        }
                        type={type}
                        onTypeChange={
                            setType
                        }
                        sort={sort}
                        onSortChange={
                            setSort
                        }
                    />

                    {loading ? (

                        <HistoryLoading />

                    ) : histories.length === 0 ? (

                        <HistoryEmpty />

                    ) : filteredHistories.length === 0 ? (

                        <div
                            className="
                mt-8

                rounded-3xl
                border border-white/10

                bg-white/5

                p-8

                text-center
            "
                        >

                            <h3
                                className="
                    text-lg
                    font-semibold

                    text-white
                "
                            >
                                No Results Found
                            </h3>

                            <p
                                className="
                    mt-2

                    text-slate-400
                "
                            >
                                Try changing your search,
                                filter, or sorting options.
                            </p>

                        </div>

                    ) : (

                        <>
                            {/* STATS */}

                            <div
                                className="
                    mb-6

                    flex
                    items-center
                    justify-between
                "
                            >

                                <p
                                    className="
                        text-sm
                        text-slate-400
                    "
                                >
                                    Showing
                                    {' '}
                                    <span
                                        className="
                            font-semibold
                            text-white
                        "
                                    >
                                        {
                                            filteredHistories.length
                                        }
                                    </span>
                                    {' '}
                                    report(s)
                                </p>

                            </div>

                            {/* GRID */}

                            <div
                                className="
                    grid
                    gap-6

                    md:grid-cols-2
                    xl:grid-cols-3
                "
                            >

                                {filteredHistories.map(
                                    (
                                        history
                                    ) => (

                                        <HistoryCard
                                            key={
                                                history.id
                                            }
                                            history={
                                                history
                                            }
                                            onView={
                                                handleView
                                            }
                                        />

                                    )
                                )}

                            </div>

                        </>

                    )}

                </section>

            </main>
        </>
    )
}