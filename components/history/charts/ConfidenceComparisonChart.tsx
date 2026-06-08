'use client'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts'

interface Props {

    oldConfidence: number

    newConfidence: number
}

export default function ConfidenceComparisonChart({
    oldConfidence,
    newConfidence,
}: Props) {

    const data = [

        {
            report: 'Previous',
            confidence:
                Number(
                    (
                        oldConfidence * 100
                    ).toFixed(1)
                ),
        },

        {
            report: 'Current',
            confidence:
                Number(
                    (
                        newConfidence * 100
                    ).toFixed(1)
                ),
        },
    ]

    return (

        <div
            className="
                rounded-3xl

                border border-white/10
                bg-white/5

                p-6
            "
        >

            <h3
                className="
                    text-xl
                    font-semibold

                    text-white
                "
            >
                Confidence Comparison
            </h3>

            <div
                className="
                    mt-6
                    h-80
                "
            >

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <BarChart data={data}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="rgba(255,255,255,0.08)"
                        />

                        <XAxis
                            dataKey="report"
                            tick={{
                                fill: '#94A3B8',
                                fontSize: 12,
                            }}
                            axisLine={{
                                stroke: 'rgba(255,255,255,0.1)',
                            }}
                            tickLine={false}
                        />

                        <YAxis
                            tick={{
                                fill: '#94A3B8',
                                fontSize: 12,
                            }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            contentStyle={{
                                background: '#0F172A',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                color: '#FFFFFF',
                            }}
                            labelStyle={{
                                color: '#FFFFFF',
                            }}
                        />

                        <Bar
                            dataKey="confidence"
                            fill="#7C9CFF"
                            radius={[
                                8,
                                8,
                                0,
                                0,
                            ]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    )
}