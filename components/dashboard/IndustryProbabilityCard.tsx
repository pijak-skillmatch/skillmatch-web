'use client'

import {
    useEffect,
    useState,
} from 'react'

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell,
} from 'recharts'

import {
    IndustryPrediction,
} from '@/types/analysis'

interface Props {
    industries:
    IndustryPrediction[]
}

interface TooltipProps {
    active?: boolean
    payload?: {
        payload: {
            rank: number
            industry: string
            probability: number
        }
    }[]
}

function CustomTooltip({
    active,
    payload,
}: TooltipProps) {

    if (
        !active ||
        !payload ||
        !payload.length
    ) {
        return null
    }

    const data =
        payload[0].payload

    return (
        <div
            className="
                rounded-xl
                border border-white/10
                bg-slate-900
                p-4
                shadow-xl
            "
        >
            <p
                className="
                    font-semibold
                    text-white
                "
            >
                #{data.rank}
                {' '}
                {data.industry}
            </p>

            <p
                className="
                    mt-1
                    text-slate-300
                "
            >
                {data.probability}%
            </p>
        </div>
    )
}

export default function IndustryProbabilityCard({
    industries,
}: Props) {

    const [mounted,
        setMounted] =
        useState(false)

    useEffect(() => {

        setMounted(true)

    }, [])

    const chartData =
        industries.map(
            (
                item,
                index
            ) => ({
                rank:
                    index + 1,

                industry:
                    item.industry,

                probability:
                    Number(
                        (
                            item.probability *
                            100
                        ).toFixed(1)
                    ),
            })
        )

    if (!mounted) {
        return (
            <div
                className="
        flex
        h-full
        flex-col

        rounded-3xl
        border border-white/10

        bg-white/5
        p-8
    "
            >
                <h2
                    className="
                        text-xl
                        font-bold
                        text-white
                    "
                >
                    Industry Probabilities
                </h2>

                <div
                    className="
                        mt-8
                        h-80
                        animate-pulse
                        rounded-2xl
                        bg-white/5
                    "
                />
            </div>
        )
    }

    return (
        <div
            className="
                rounded-3xl
                border border-white/10
                bg-white/5
                p-8
            "
        >
            <h2
                className="
                    text-xl
                    font-bold
                    text-white
                "
            >
                Industry Probabilities
            </h2>

            <p
                className="
                    mt-2
                    text-slate-400
                "
            >
                Probability distribution across
                recommended industries.
            </p>

            <div className="mt-8 h-80 w-full min-w-0">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                    minWidth={0}
                    minHeight={320}
                >
                    <BarChart
                        data={chartData}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 10,
                        }}
                    >
                        <XAxis
                            dataKey="industry"
                            tick={{
                                fill:
                                    '#94A3B8',
                            }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            tick={{
                                fill:
                                    '#94A3B8',
                            }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            content={
                                <CustomTooltip />
                            }
                            cursor={{
                                fill:
                                    'rgba(255,255,255,0.03)',
                            }}
                        />

                        <Bar
                            dataKey="probability"
                            radius={[
                                8,
                                8,
                                0,
                                0,
                            ]}
                        >
                            {chartData.map(
                                (
                                    _,
                                    index
                                ) => (
                                    <Cell
                                        key={
                                            index
                                        }
                                        fill={
                                            index === 0
                                                ? '#10B981'
                                                : '#7C9CFF'
                                        }
                                    />
                                )
                            )}
                        </Bar>

                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}