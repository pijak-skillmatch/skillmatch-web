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

import {
    saveHistory,
} from '@/lib/api/history'

import {
    isAuthenticated,
} from '@/lib/auth/isAuthenticated'

import {
    showSuccess,
    showError,
    showWarning,
    showLoading,
    closeLoading,
} from '@/lib/swal'

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

    const saveHistoryIfLoggedIn =
        async (
            response: any,
            skills: string[],
            analysisType:
                'skills' |
                'resume'
        ) => {

            if (
                !isAuthenticated()
            ) {
                return
            }

            try {

                const topIndustry =
                    response.data
                        .industry_predictions[0]

                await saveHistory({

                    analysis_type:
                        analysisType,

                    industry:
                        topIndustry
                            .industry,

                    confidence:
                        topIndustry
                            .probability,

                    input_skills:
                        skills,

                    result_json:
                        response.data,
                })

            } catch (error) {

                console.error(
                    'History save failed:',
                    error
                )

                if (error instanceof Error) {
                    console.error(
                        error.message
                    )
                }
            }
        }

    const handleSkillsAnalysis =
        async (): Promise<boolean> => {

            if (
                selectedSkills.length === 0
            ) {

                await showWarning(
                    'No Skills Selected',
                    'Please select at least one skill before continuing.'
                )

                return false
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

            await saveHistoryIfLoggedIn(
                response,
                selectedSkills,
                'skills'
            )

            return true
        }

    const handleResumeAnalysis =
        async (): Promise<boolean> => {

            if (!resumeFile) {

                await showWarning(
                    'Resume Required',
                    'Please upload your resume before running the analysis.'
                )

                return false
            }

            const response =
                await analyzeResume(
                    resumeFile,
                    experience
                )

            const detectedSkills =
                response.data
                    ?.detected_skills ?? []

            saveAnalysisResult(
                response,
                detectedSkills
            )

            await saveHistoryIfLoggedIn(
                response,
                detectedSkills,
                'resume'
            )

            return true
        }

    const handleAnalyze =
        async () => {

            try {

                setIsAnalyzing(
                    true
                )

                showLoading(
                    'Analyzing Profile',
                    'SkillMatch AI is generating your career report...'
                )

                let success =
                    false

                if (
                    mode ===
                    'skills'
                ) {

                    success =
                        await handleSkillsAnalysis()

                } else {

                    success =
                        await handleResumeAnalysis()
                }

                if (!success) {
                    return
                }

                closeLoading()

                await showSuccess(
                    'Analysis Complete',
                    'Your AI career report is ready.'
                )

                router.push(
                    '/dashboard'
                )

            } catch (error) {

                closeLoading()

                console.error(
                    error
                )

                await showError(
                    'Analysis Failed',
                    'Something went wrong while analyzing your profile.'
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