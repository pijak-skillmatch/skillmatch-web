import IndustryMatchCard from
    '@/components/dashboard/IndustryMatchCard'

import IndustryProbabilityCard from
    '@/components/dashboard/IndustryProbabilityCard'

import CareerInsightCard from
    '@/components/dashboard/CareerInsightCard'

import {
    IndustryPrediction,
} from '@/types/analysis'

interface Props {
    industry: string
    probability: number

    industries:
    IndustryPrediction[]

    currentSkills:
    string[]

    recommendedSkills:
    string[]
}

export default function
    CareerAnalysisSection({
        industry,
        probability,
        industries,
        currentSkills,
        recommendedSkills,
    }: Props) {

    return (
        <section>

            <div className="mb-6">

                <h2
                    className="
                        text-sm
                        font-semibold
                        uppercase

                        tracking-[0.2em]

                        text-slate-500
                    "
                >
                    Career Analysis
                </h2>

            </div>

            <div
                className="
                    grid
                    gap-8

                    lg:grid-cols-2

                    items-stretch
                "
            >
                <div className="min-w-0">

                    <IndustryMatchCard
                        industry={industry}
                        probability={probability}
                    />

                </div>

                <div className="min-w-0">

                    <IndustryProbabilityCard
                        industries={industries}
                    />

                </div>

            </div>

            <div className="mt-8">

                <CareerInsightCard
                    industry={industry}
                    currentSkills={
                        currentSkills
                    }
                    recommendedSkills={
                        recommendedSkills
                    }
                />

            </div>

        </section>
    )
}