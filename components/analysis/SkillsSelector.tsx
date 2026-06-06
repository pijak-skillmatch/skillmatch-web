'use client'

import SkillChip from '@/components/ui/SkillChip'

interface Props {
    availableSkills: string[]
    selectedSkills: string[]
    isLoading: boolean
    onToggleSkill: (
        skill: string
    ) => void
}

export default function SkillsSelector({
    availableSkills,
    selectedSkills,
    isLoading,
    onToggleSkill,
}: Props) {

    return (
        <div>

            <div className="flex items-center justify-between">

                <label
                    className="
                        text-sm
                        font-medium
                        text-slate-300
                    "
                >
                    Select Your Skills
                </label>

                <span
                    className="
                        text-xs
                        text-slate-500
                    "
                >
                    {selectedSkills.length}
                    {' '}
                    selected
                </span>

            </div>

            <div
                className="
                    mt-4
                    flex
                    flex-wrap
                    gap-3
                "
            >

                {isLoading ? (

                    <p className="text-slate-400">
                        Loading skills...
                    </p>

                ) : (

                    availableSkills.map(
                        (skill) => (

                            <SkillChip
                                key={skill}
                                label={skill}
                                active={selectedSkills.includes(
                                    skill
                                )}
                                onClick={() =>
                                    onToggleSkill(
                                        skill
                                    )
                                }
                            />

                        )
                    )

                )}

            </div>

        </div>
    )
}