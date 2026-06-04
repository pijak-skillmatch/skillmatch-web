'use client'

import {
    useEffect,
    useState,
} from 'react'

import { useRouter } from 'next/navigation'

import Button from '@/components/ui/Button'
import GlassPanel from '@/components/ui/GlassPanel'
import SkillChip from '@/components/ui/SkillChip'

import AIThinking from './AIThinking'
import ResumeUpload from './ResumeUpload'

import {
    analyzeProfile,
} from '@/lib/api/skillmatch'

import {
    analyzeResume,
} from '@/lib/api/resume'

import {
    getSkills,
} from '@/lib/api/skill'

import {
    SkillsResponse,
} from '@/types/skill'

const experienceLevels = [
    'Entry Level',
    'Mid Level',
    'Senior Level',
]

export default function AnalysisForm() {

    const router = useRouter()

    const [mode,
        setMode] =
        useState<
            'skills' |
            'resume'
        >('skills')

    const [availableSkills,
        setAvailableSkills] =
        useState<string[]>([])

    const [selectedSkills,
        setSelectedSkills] =
        useState<string[]>([])

    const [resumeFile,
        setResumeFile] =
        useState<File | null>(
            null
        )

    const [experience,
        setExperience] =
        useState(
            'Entry Level'
        )

    const [isLoadingSkills,
        setIsLoadingSkills] =
        useState(true)

    const [isAnalyzing,
        setIsAnalyzing] =
        useState(false)

    useEffect(() => {

        const loadSkills =
            async () => {

                try {

                    const response:
                        SkillsResponse =
                        await getSkills()

                    setAvailableSkills(
                        response.data
                    )

                } catch (error) {

                    console.error(
                        error
                    )

                } finally {

                    setIsLoadingSkills(
                        false
                    )
                }
            }

        loadSkills()

    }, [])

    const toggleSkill = (
        skill: string
    ) => {

        if (
            selectedSkills.includes(
                skill
            )
        ) {

            setSelectedSkills(
                selectedSkills.filter(
                    (s) =>
                        s !== skill
                )
            )

        } else {

            setSelectedSkills([
                ...selectedSkills,
                skill,
            ])
        }
    }

    const handleAnalyze =
        async () => {

            try {

                setIsAnalyzing(
                    true
                )

                let response

                if (
                    mode ===
                    'skills'
                ) {

                    if (
                        selectedSkills.length === 0
                    ) {

                        alert(
                            'Please select at least one skill.'
                        )

                        return
                    }

                    response =
                        await analyzeProfile(
                            {
                                skills:
                                    selectedSkills,
                                experience,
                            }
                        )

                } else {

                    if (
                        !resumeFile
                    ) {

                        alert(
                            'Please upload a resume.'
                        )

                        return
                    }

                    response =
                        await analyzeResume(
                            resumeFile,
                            experience
                        )
                }

                localStorage.setItem(
                    'analysis_result',
                    JSON.stringify(
                        response
                    )
                )

                router.push(
                    '/dashboard'
                )

            } catch (error) {

                console.error(
                    error
                )

                alert(
                    'Failed to analyze profile.'
                )

            } finally {

                setIsAnalyzing(
                    false
                )
            }
        }

    if (isAnalyzing) {

        return (
            <GlassPanel className="p-6 md:p-8">
                <AIThinking />
            </GlassPanel>
        )
    }

    return (

        <GlassPanel className="p-6 md:p-8">

            {/* Header */}

            <div>

                <div
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border border-white/10
                        bg-white/5
                        px-4 py-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-slate-300
                    "
                >
                    Analysis Form
                </div>

                <h2
                    className="
                        mt-5
                        text-3xl
                        font-bold
                        tracking-tight
                        text-white
                    "
                >
                    Build Your AI Profile
                </h2>

                <p
                    className="
                        mt-3
                        leading-7
                        text-slate-400
                    "
                >
                    Analyze your skills
                    manually or upload
                    your resume to
                    discover career
                    opportunities and
                    learning paths.
                </p>

            </div>

            {/* Mode Switch */}

            <div className="mt-8 flex gap-3">

                <button
                    type="button"
                    onClick={() =>
                        setMode(
                            'skills'
                        )
                    }
                    className={`
                        rounded-xl
                        px-5 py-3
                        text-sm
                        font-medium

                        ${mode === 'skills'
                            ? `
                            bg-linear-to-r
                            from-(--secondary)
                            to-(--primary)
                            text-white
                            `
                            : `
                            border border-white/10
                            bg-white/5
                            text-slate-300
                            `
                        }
                    `}
                >
                    Skills Analysis
                </button>

                <button
                    type="button"
                    onClick={() =>
                        setMode(
                            'resume'
                        )
                    }
                    className={`
                        rounded-xl
                        px-5 py-3
                        text-sm
                        font-medium

                        ${mode === 'resume'
                            ? `
                            bg-linear-to-r
                            from-(--secondary)
                            to-(--primary)
                            text-white
                            `
                            : `
                            border border-white/10
                            bg-white/5
                            text-slate-300
                            `
                        }
                    `}
                >
                    Resume Analysis
                </button>

            </div>

            <div className="mt-10 space-y-8">

                {/* Experience */}

                <div>

                    <label
                        className="
                            mb-3 block
                            text-sm
                            font-medium
                            text-slate-300
                        "
                    >
                        Experience Level
                    </label>

                    <div className="flex flex-wrap gap-3">

                        {experienceLevels.map(
                            (level) => {

                                const active =
                                    experience ===
                                    level

                                return (
                                    <button
                                        key={level}
                                        type="button"
                                        onClick={() =>
                                            setExperience(
                                                level
                                            )
                                        }
                                        className={`
                                            rounded-xl
                                            border
                                            px-5 py-3
                                            text-sm
                                            font-medium

                                            ${active
                                                ? `
                                                border-transparent
                                                bg-linear-to-r
                                                from-(--secondary)
                                                to-(--primary)
                                                text-white
                                                `
                                                : `
                                                border-white/10
                                                bg-white/5
                                                text-slate-300
                                                `
                                            }
                                        `}
                                    >
                                        {level}
                                    </button>
                                )
                            }
                        )}

                    </div>

                </div>

                {/* Dynamic Content */}

                {mode === 'skills' ? (

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

                            <span className="text-xs text-slate-500">
                                {
                                    selectedSkills.length
                                } selected
                            </span>

                        </div>

                        <div className="mt-4 flex flex-wrap gap-3">

                            {isLoadingSkills ? (

                                <p className="text-slate-400">
                                    Loading skills...
                                </p>

                            ) : (

                                availableSkills.map(
                                    (
                                        skill
                                    ) => (

                                        <SkillChip
                                            key={
                                                skill
                                            }
                                            label={
                                                skill
                                            }
                                            active={selectedSkills.includes(
                                                skill
                                            )}
                                            onClick={() =>
                                                toggleSkill(
                                                    skill
                                                )
                                            }
                                        />

                                    )
                                )

                            )}

                        </div>

                    </div>

                ) : (

                    <ResumeUpload
                        file={
                            resumeFile
                        }
                        onFileChange={
                            setResumeFile
                        }
                    />

                )}

                {/* Submit */}

                <div className="pt-4">

                    <Button
                        onClick={
                            handleAnalyze
                        }
                        disabled={
                            isAnalyzing
                        }
                        className="
                            w-full
                            py-4
                            text-base
                        "
                    >
                        {mode ===
                            'skills'
                            ? 'Analyze Skills'
                            : 'Analyze Resume'}
                    </Button>

                    <p
                        className="
                            mt-4
                            text-center
                            text-sm
                            text-slate-500
                        "
                    >
                        AI analysis usually
                        takes a few seconds.
                    </p>

                </div>

            </div>

        </GlassPanel>
    )
}