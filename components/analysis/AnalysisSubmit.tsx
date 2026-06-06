import Button from '@/components/ui/Button'

interface Props {
    mode:
    'skills' |
    'resume'

    isAnalyzing:
    boolean

    onAnalyze:
    () => void
}

export default function AnalysisSubmit({
    mode,
    isAnalyzing,
    onAnalyze,
}: Props) {

    return (
        <div className="pt-4">

            <Button
                onClick={onAnalyze}
                disabled={isAnalyzing}
                className="
                    w-full
                    py-4
                    text-base
                "
            >
                {mode === 'skills'
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
    )
}