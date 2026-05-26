'use client'

import { useState } from 'react'

import Button from '@/components/ui/Button'
import GlassPanel from '@/components/ui/GlassPanel'
import SkillChip from '@/components/ui/SkillChip'
import InputField from '@/components/ui/InputField'
import TextareaField from '@/components/ui/TextareaField'

import AIThinking from './AIThinking'
import ResultCard from '../cards/ResultCard'

const availableSkills = [
    'Python',
    'Machine Learning',
    'UI/UX Design',
    'React',
    'Node.js',
    'Data Analysis',
    'TensorFlow',
    'Communication',
    'Leadership',
    'Problem Solving',
    'Public Speaking',
    'SQL',
]

const goals = [
    'Internship',
    'Freelance',
    'Full-Time',
    'Career Switch',
]

export default function AnalysisForm() {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([])
    const [selectedGoal, setSelectedGoal] = useState('')
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [showResult, setShowResult] = useState(false)

    const toggleSkill = (skill: string) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(
                selectedSkills.filter((s) => s !== skill)
            )
        } else {
            setSelectedSkills([...selectedSkills, skill])
        }
    }

    const handleAnalyze = () => {
        setIsAnalyzing(true)

        setTimeout(() => {
            setIsAnalyzing(false)
            setShowResult(true)
        }, 3500)
    }

    if (isAnalyzing) {
        return (
            <GlassPanel className="p-6 md:p-8">
                <AIThinking />
            </GlassPanel>
        )
    }

    if (showResult) {
        return (
            <div className="space-y-6">
                <ResultCard
                    title="Machine Learning Engineer"
                    match={92}
                    description="
          Based on your selected skills and career interests,
          you show strong compatibility with data-driven and
          AI-focused engineering roles.
        "
                    skills={[
                        'Python',
                        'Machine Learning',
                        'TensorFlow',
                        'Data Analysis',
                    ]}
                />

                <ResultCard
                    title="AI Product Developer"
                    match={87}
                    description="
          Your profile also aligns with modern AI product
          development where technical and problem-solving
          skills are highly valuable.
        "
                    skills={[
                        'React',
                        'Node.js',
                        'Communication',
                        'Leadership',
                    ]}
                />

                <Button
                    variant="secondary"
                    className="w-full"

                    onClick={() => {
                        setShowResult(false)
                    }}
                >
                    Start New Analysis
                </Button>
            </div>
        )
    }

    return (
        <GlassPanel className="p-6 md:p-8">
            {/* Header */}
            <div>
                <div
                    className="
            inline-flex items-center gap-2

            rounded-full
            border border-white/10
            bg-white/5

            px-4 py-2

            text-xs font-semibold uppercase
            tracking-[0.18em]
            text-slate-300
          "
                >
                    Analysis Form
                </div>

                <h2
                    className="
            mt-5

            text-3xl font-bold
            tracking-tight
            text-white
          "
                >
                    Build your AI profile
                </h2>

                <p
                    className="
            mt-3

            text-slate-400
            leading-7
          "
                >
                    Complete the information below to generate
                    personalized career recommendations.
                </p>
            </div>

            {/* Form */}
            <div className="mt-10 space-y-8">
                {/* Name */}
                <div>
                    <InputField
                        label="Full Name"
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Career Goal */}
                <div>
                    <label
                        className="
              mb-3 block

              text-sm font-medium
              text-slate-300
            "
                    >
                        Career Goal
                    </label>

                    <div className="flex flex-wrap gap-3">
                        {goals.map((goal) => {
                            const active = selectedGoal === goal

                            return (
                                <button
                                    key={goal}
                                    type="button"
                                    onClick={() => setSelectedGoal(goal)}

                                    className={`
                    rounded-xl

                    border px-5 py-3

                    text-sm font-medium

                    transition-all duration-300

                    ${active
                                            ? `
                          border-transparent

                          bg-linear-to-r
                          from-(--secondary)
                          to-(--primary)

                          text-white

                          shadow-[0_0_25px_rgba(124,156,255,0.22)]
                        `
                                            : `
                          border-white/10
                          bg-white/5

                          text-slate-300

                          hover:border-white/20
                          hover:bg-white/10
                        `
                                        }
                  `}
                                >
                                    {goal}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <div className="flex items-center justify-between">
                        <label
                            className="
                text-sm font-medium
                text-slate-300
              "
                        >
                            Select Your Skills
                        </label>

                        <span className="text-xs text-slate-500">
                            {selectedSkills.length} selected
                        </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                        {availableSkills.map((skill) => (
                            <SkillChip
                                key={skill}
                                label={skill}
                                active={selectedSkills.includes(skill)}
                                onClick={() => toggleSkill(skill)}
                            />
                        ))}
                    </div>
                </div>

                {/* Bio */}
                <div>
                    <TextareaField
                        label="Tell us about yourself"
                        rows={5}
                        placeholder="
    Describe your interests,
    experiences, or dream career...
  "
                    />
                </div>

                {/* CTA */}
                <div className="pt-4">
                    <Button
                        onClick={handleAnalyze}
                        className="
              w-full

              py-4

              text-base
            "
                    >
                        Analyze My Career Potential
                    </Button>

                    <p
                        className="
              mt-4

              text-center text-sm
              text-slate-500
            "
                    >
                        AI analysis usually takes a few seconds.
                    </p>
                </div>
            </div>
        </GlassPanel>
    )
}