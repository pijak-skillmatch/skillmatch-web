interface Props {
    mode: 'skills' | 'resume'
    onChange: (
        mode:
            'skills' |
            'resume'
    ) => void
}

export default function AnalysisModeSwitch({
    mode,
    onChange,
}: Props) {

    return (
        <div className="mt-8 flex gap-3">

            <button
                type="button"
                onClick={() =>
                    onChange('skills')
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
                    onChange('resume')
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
    )
}