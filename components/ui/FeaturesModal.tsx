'use client'

import { useEffect, useRef, useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const features = [
    {
        id: 1,
        number: '01',
        title: 'AI-Powered Career Analysis',
        subtitle: 'Discover Your Career Potential',
        description:
            'SkillMatch AI helps you discover the most suitable career path based on your existing skills. Simply enter your skills or upload your resume, and let AI do the rest.',
        highlights: [
            'Select your skills',
            'Upload a PDF resume for automatic analysis',
            'Choose your experience level (Entry, Mid, Senior)',
            'Receive AI-driven career recommendations',
        ],
        media: "/features/features (1).png",
        mediaType: 'image' as 'image' | 'video',
        mediaAlt: 'AI Career Analysis',
    },
    {
        id: 2,
        number: '02',
        title: 'Resume Intelligence',
        subtitle: 'Analyze Your Resume Instantly',
        description:
            'Upload your CV or resume and let AI automatically extract relevant skills, experience, and competencies. No need to enter skills one by one.',
        highlights: [
            'No need to manually input skills',
            'Automatic skill detection',
            'Faster analysis process',
            'Ideal for students and professionals',
        ],
        media: "/features/features (5).png",
        mediaType: 'image' as 'image' | 'video',
        mediaAlt: 'Resume Intelligence',
    },
    {
        id: 3,
        number: '03',
        title: 'Career Recommendation Engine',
        subtitle: 'Discover Your Best-Matched Industry',
        description:
            'Our AI model evaluates your compatibility across various industries and provides a confidence score for each recommendation.',
        highlights: [
            'Top recommended industry',
            'Match confidence score',
            'Industry probability distribution',
            'Industry strength evaluation',
        ],
        media: "/features/features (6).png",
        mediaType: 'image' as 'image' | 'video',
        mediaAlt: 'Career Recommendation Engine',
    },
    {
        id: 4,
        number: '04',
        title: 'Skill Gap Analysis',
        subtitle: 'Identify Missing Skills',
        description:
            'Compare your current skill set with the skills recommended for your target industry. Know exactly what you need to learn next.',
        highlights: [
            'Current skills overview',
            'Missing skills detection',
            'Recommended skills list',
            'Career readiness insights',
        ],
        media: "/features/features (8).png",
        mediaType: 'image' as 'image' | 'video',
        mediaAlt: 'Skill Gap Analysis',
    },
    {
        id: 5,
        number: '05',
        title: 'Personalized Learning Roadmap',
        subtitle: 'Follow a Clear Learning Path',
        description:
            'Once skill gaps are identified, SkillMatch AI creates a structured learning roadmap from Foundation to Advanced levels, helping you learn more effectively and strategically.',
        highlights: [
            'More focused learning journey',
            'Prioritize essential skills',
            'Foundation → Intermediate → Advanced structure',
            'Supports career transitions',
        ],
        media: "/features/features (7).png",
        mediaType: 'image' as 'image' | 'video',
        mediaAlt: 'Learning Roadmap',
    },
    {
        id: 6,
        number: '06',
        title: 'Smart Skill Recommendations',
        subtitle: 'Prioritize High-Impact Skills',
        description:
            'AI recommends the skills that can have the greatest impact on your career opportunities, complete with relevance scores and explanations of why each skill matters.',
        highlights: [
            'Recommendation score',
            'Industry relevance rating',
            'Association strength',
            'Skill importance explanation',
        ],
        media: "/features/features (6).png",
        mediaType: 'image' as 'image' | 'video',
        mediaAlt: 'Smart Skill Recommendations',
    },
    {
        id: 7,
        number: '07',
        title: 'Analysis History',
        subtitle: 'Track Every Analysis',
        description:
            'All analysis results are securely stored, allowing you to track your career development over time. Search, filter, and sort reports based on your needs.',
        highlights: [
            'Search reports',
            'Filter by date or industry',
            'Sort results',
            'Access previous recommendations',
        ],
        media: "/features/features (9).png",
        mediaType: 'image' as 'image' | 'video',
        mediaAlt: 'Analysis History',
    },
    {
        id: 8,
        number: '08',
        title: 'Career Growth Comparison',
        subtitle: 'Measure Your Progress',
        description:
            'Compare two analysis results to understand how your skills and industry compatibility have evolved over time.',
        highlights: [
            'Confidence growth tracking',
            'Skill growth overview',
            'Industry change detection',
            'Career progression score',
        ],
        media: "/features/features (10).png",
        mediaType: 'image' as 'image' | 'video',
        mediaAlt: 'Career Growth Comparison',
    },
    {
        id: 9,
        number: '09',
        title: 'AI Career Insights',
        subtitle: 'Understand Your Career Evolution',
        description:
            'AI generates detailed insights about changes in your career profile, including improvements, potential risks, and the next skills you should focus on.',
        highlights: [
            'Improvement highlights',
            'Risk identification',
            'Next recommended skills',
            'Career growth score',
        ],
        media: "/features/features (11).png",
        mediaType: 'image' as 'image' | 'video',
        mediaAlt: 'AI Career Insights',
    },
    {
        id: 10,
        number: '10',
        title: 'Export & Save Reports',
        subtitle: 'Keep Your Results',
        description:
            'Save your analysis results as PDF reports for future reference and career development documentation. Access them anytime and compare them with future analyses.',
        highlights: [
            'Export to PDF',
            'Save reports locally',
            'Revisit past analyses',
            'Compare future progress',
        ],
        media: "/features/features (8).png",
        mediaType: 'image' as 'image' | 'video',
        mediaAlt: 'Export Reports',
    },
]

interface FeaturesModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function FeaturesModal({ isOpen, onClose }: FeaturesModalProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const overlayRef = useRef<HTMLDivElement>(null)

    const active = features[activeIndex]

    // Close on Escape key
    useEffect(() => {
        if (!isOpen) return
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') setActiveIndex((i) => Math.min(i + 1, features.length - 1))
            if (e.key === 'ArrowLeft') setActiveIndex((i) => Math.max(i - 1, 0))
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [isOpen, onClose])

    // Prevent body scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div
            ref={overlayRef}
            onClick={(e) => e.target === overlayRef.current && onClose()}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(5,8,22,0.85)', backdropFilter: 'blur(12px)' }}
        >
            {/* Modal box */}
            <div
                className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
                style={{ background: 'linear-gradient(135deg,rgba(11,17,40,0.98),rgba(5,8,22,0.98))' }}
            >
                {/* Glow accents */}
                <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-56 w-96 rounded-full bg-[radial-gradient(circle,rgba(124,156,255,0.13),transparent_70%)] blur-3xl" />

                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-8">
                    <div className="flex items-center gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            SkillMatch AI
                        </span>
                        <span className="h-1 w-1 rounded-full bg-white/20" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Features
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                        <FiX className="text-lg" />
                    </button>
                </div>

                {/* Body */}
                <div className="flex h-[calc(90vh-128px)] overflow-hidden">

                    {/* Sidebar – feature list */}
                    <div className="hidden w-56 shrink-0 overflow-y-auto border-r border-white/10 py-3 md:block scrollbar-thin">
                        {features.map((f, i) => (
                            <button
                                key={f.id}
                                onClick={() => setActiveIndex(i)}
                                className={`
                  w-full text-left px-5 py-3 transition-all duration-200
                  ${i === activeIndex
                                        ? 'bg-white/8 text-white'
                                        : 'text-slate-400 hover:bg-white/4 hover:text-slate-200'
                                    }
                `}
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`
                      text-[10px] font-bold tabular-nums
                      ${i === activeIndex ? 'text-[var(--primary)]' : 'text-slate-600'}
                    `}
                                    >
                                        {f.number}
                                    </span>
                                    <span className="text-[13px] font-medium leading-snug">{f.title}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Main content */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="flex flex-col md:flex-row h-full">

                            {/* Media area */}
                            <div className="md:w-1/2 shrink-0 border-b border-white/10 md:border-b-0 md:border-r md:border-white/10">
                                {active.media ? (
                                    active.mediaType === 'video' ? (
                                        <video
                                            src={active.media}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            src={active.media}
                                            alt={active.mediaAlt}
                                            className="h-full w-full object-contain"
                                        />
                                    )
                                ) : (
                                    /* Placeholder when no media is set */
                                    <div className="flex h-64 md:h-full items-center justify-center bg-white/3 p-8">
                                        <div className="text-center">
                                            <div
                                                className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-4xl font-bold"
                                                style={{ color: 'var(--primary)' }}
                                            >
                                                {active.number}
                                            </div>
                                            <p className="text-sm text-slate-500">
                                                Tambahkan gambar atau video untuk fitur ini
                                            </p>
                                            <p className="mt-1 text-xs text-slate-600">
                                                Set <code className="text-slate-500">media</code> pada array features
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Text content */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8">
                                {/* Feature number badge */}
                                <div
                                    className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest"
                                    style={{ color: 'var(--primary)' }}
                                >
                                    Feature {active.number}
                                </div>

                                {/* Subtitle */}
                                <p className="text-sm font-medium text-slate-400">{active.subtitle}</p>

                                {/* Title */}
                                <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
                                    {active.title}
                                </h2>

                                {/* Description */}
                                <p className="mt-4 text-[15px] leading-7 text-slate-300">
                                    {active.description}
                                </p>

                                {/* Highlights */}
                                <ul className="mt-6 space-y-2.5">
                                    {active.highlights.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span
                                                className="mt-0.5 h-5 w-5 shrink-0 rounded-full flex items-center justify-center text-[11px] font-bold"
                                                style={{ background: 'rgba(124,156,255,0.15)', color: 'var(--primary)' }}
                                            >
                                                ✓
                                            </span>
                                            <span className="text-sm text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Progress dots – mobile only */}
                                <div className="mt-8 flex items-center gap-1.5 md:hidden">
                                    {features.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveIndex(i)}
                                            className={`h-1.5 rounded-full transition-all ${i === activeIndex ? 'w-6 bg-[var(--primary)]' : 'w-1.5 bg-white/20'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer nav */}
                <div className="flex items-center justify-between border-t border-white/10 px-6 py-3 md:px-8">
                    {/* Progress */}
                    <span className="text-xs text-slate-500">
                        {activeIndex + 1} / {features.length}
                    </span>

                    {/* Progress bar */}
                    <div className="hidden flex-1 mx-6 h-0.5 rounded-full bg-white/8 md:block">
                        <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                                width: `${((activeIndex + 1) / features.length) * 100}%`,
                                background: 'linear-gradient(to right, var(--secondary), var(--primary))',
                            }}
                        />
                    </div>

                    {/* Prev / Next */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setActiveIndex((i) => Math.max(i - 1, 0))}
                            disabled={activeIndex === 0}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <FiChevronLeft />
                        </button>
                        <button
                            onClick={() => setActiveIndex((i) => Math.min(i + 1, features.length - 1))}
                            disabled={activeIndex === features.length - 1}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
