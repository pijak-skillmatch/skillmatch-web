import FeatureCard from '@/components/cards/FeatureCard'
import { features } from '@/lib/mockData'
import SectionHeader from '@/components/ui/SectionHeader'

export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="
        relative overflow-hidden
        py-24 md:py-32
      "
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.10),transparent_70%)] blur-3xl" />

                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,156,255,0.10),transparent_70%)] blur-3xl" />
            </div>

            <div className="container-custom">
                {/* Header */}
                <SectionHeader
                    badge="Why SkillMatch"
                    title="Designed to guide your"
                    gradient="career journey"
                    description="
    SkillMatch AI combines intelligent profiling,
    career matching, and growth insights into one
    modern platform built for students and professionals.
  "
                />

                {/* Cards */}
                <div
                    className="
            mt-16

            grid gap-6

            sm:grid-cols-2
            lg:grid-cols-3
          "
                >
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}