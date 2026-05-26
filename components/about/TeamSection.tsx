import SectionHeader from '@/components/ui/SectionHeader'

import TeamCard from '@/components/cards/TeamCard'

import { teamMembers } from '@/lib/mockData'

export default function TeamSection() {
    return (
        <section className="pb-24 md:pb-32">
            <div className="container-custom">
                <SectionHeader
                    badge="Our Team"
                    title="Meet the people behind"
                    gradient="SkillMatch AI"
                    description="
            A collaborative capstone team focused on building
            modern AI-driven solutions for career discovery.
          "
                />

                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {teamMembers.map((member) => (
                        <TeamCard
                            key={member.name}
                            initials={member.initials}
                            name={member.name}
                            role={member.role}
                            bio={member.bio}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}