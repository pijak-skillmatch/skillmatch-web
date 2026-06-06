'use client'

import {
    useState,
} from 'react'

import { useRouter } from 'next/navigation'

import GlassPanel from '@/components/ui/GlassPanel'

import AIThinking from './AIThinking'
import ResumeUpload from './ResumeUpload'

import AnalysisHeader from './AnalysisHeader'
import AnalysisModeSwitch from './AnalysisModeSwitch'
import ExperienceSelector from './ExperienceSelector'
import SkillsSelector from './SkillsSelector'
import AnalysisSubmit from './AnalysisSubmit'

import {
    useAnalysis,
} from '@/hooks/useAnalysis'

import {
    analyzeProfile,
} from '@/lib/api/skillmatch'

import {
    analyzeResume,
} from '@/lib/api/resume'

const DEFAULT_EXPERIENCE =
    'Entry Level'

export default function AnalysisForm() {

    const router =
        useRouter()

    const {
        availableSkills,
        isLoadingSkills,
    } = useAnalysis()

    const [mode,
        setMode] =
        useState<
            'skills' |
            'resume'
        >('skills')

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
            DEFAULT_EXPERIENCE
        )

    const [isAnalyzing,
        setIsAnalyzing] =
        useState(false)

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

            return
        }

        setSelectedSkills([
            ...selectedSkills,
            skill,
        ])
    }

    const saveAnalysisResult = (
        response: unknown,
        detectedSkills?: string[]
    ) => {

        localStorage.setItem(
            'analysis_result',
            JSON.stringify(
                response
            )
        )

        localStorage.setItem(
            'selected_skills',
            JSON.stringify(
                detectedSkills ??
                selectedSkills
            )
        )

        localStorage.setItem(
            'experience_level',
            experience
        )
    }

    const handleSkillsAnalysis =
        async () => {

            if (
                selectedSkills.length === 0
            ) {

                alert(
                    'Please select at least one skill.'
                )

                return
            }

            const response =
                await analyzeProfile({
                    skills:
                        selectedSkills,
                    experience,
                })

            saveAnalysisResult(
                response
            )
        }

    const handleResumeAnalysis =
        async () => {

            if (!resumeFile) {

                alert(
                    'Please upload a resume.'
                )

                return
            }

            const response =
                await analyzeResume(
                    resumeFile,
                    experience
                )

            saveAnalysisResult(
                response,
                response.data
                    ?.detected_skills ??
                []
            )
        }

    const handleAnalyze =
        async () => {

            try {

                setIsAnalyzing(
                    true
                )

                if (
                    mode ===
                    'skills'
                ) {

                    await handleSkillsAnalysis()

                } else {

                    await handleResumeAnalysis()
                }

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

            <AnalysisHeader />

            <AnalysisModeSwitch
                mode={mode}
                onChange={setMode}
            />

            <div className="mt-10 space-y-8">

                <ExperienceSelector
                    experience={
                        experience
                    }
                    onChange={
                        setExperience
                    }
                />

                {mode ===
                    'skills'
                    ? (
                        <SkillsSelector
                            availableSkills={
                                availableSkills
                            }
                            selectedSkills={
                                selectedSkills
                            }
                            isLoading={
                                isLoadingSkills
                            }
                            onToggleSkill={
                                toggleSkill
                            }
                        />
                    )
                    : (
                        <ResumeUpload
                            file={
                                resumeFile
                            }
                            onFileChange={
                                setResumeFile
                            }
                        />
                    )}

                <AnalysisSubmit
                    mode={mode}
                    isAnalyzing={
                        isAnalyzing
                    }
                    onAnalyze={
                        handleAnalyze
                    }
                />

            </div>

        </GlassPanel>
    )
}