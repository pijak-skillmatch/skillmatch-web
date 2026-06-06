interface Props {
    industry: string
    currentSkills: string[]
    recommendedSkills: string[]
}

export default function CareerInsightCard({
    industry,
    currentSkills,
    recommendedSkills,
}: Props) {

    const topSkills =
        currentSkills
            .slice(0, 3)
            .join(', ')

    const topRecommendations =
        recommendedSkills
            .slice(0, 3)
            .join(', ')

    return (
        <div
            className="
                rounded-3xl
                border border-white/10
                bg-white/5
                p-8
            "
        >
            <div
                className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-(--secondary)/20

                    bg-(--secondary)/10

                    px-4
                    py-2

                    text-sm
                    font-medium

                    text-(--secondary)
                "
            >
                🧠 AI Career Insight
            </div>

            <h2
                className="
                    mt-6

                    text-2xl
                    font-bold

                    text-white
                "
            >
                Personalized Analysis
            </h2>

            <p
                className="
                    mt-4

                    leading-8
                    text-slate-300
                "
            >
                Based on your current skills
                including
                {' '}
                <span className="font-semibold text-white">
                    {topSkills}
                </span>
                , SkillMatch AI predicts that
                you are highly compatible with
                the
                {' '}
                <span className="font-semibold text-white">
                    {industry}
                </span>
                {' '}
                industry.

                To strengthen your profile and
                improve career readiness,
                we recommend focusing on
                {' '}
                <span className="font-semibold text-white">
                    {topRecommendations}
                </span>
                .

                Following the recommended
                learning roadmap can help
                increase your competitiveness
                and open more opportunities
                within your target industry.
            </p>
        </div>
    )
}