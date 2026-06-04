'use client'

interface Props {
    file: File | null

    onFileChange: (
        file: File | null
    ) => void
}

export default function ResumeUpload({
    file,
    onFileChange,
}: Props) {

    return (
        <div
            className="
                rounded-2xl
                border
                border-dashed
                border-white/20
                bg-white/5
                p-8
            "
        >
            <label
                className="
                    block
                    cursor-pointer
                "
            >
                <input
                    type="file"
                    accept=".pdf"
                    className="hidden"

                    onChange={(e) =>
                        onFileChange(
                            e.target.files?.[0] ??
                            null
                        )
                    }
                />

                <div className="text-center">

                    <p className="text-white">
                        Upload Resume PDF
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                        PDF only
                    </p>

                    {file && (
                        <div
                            className="
                                mt-4
                                text-sm
                                text-emerald-400
                            "
                        >
                            {file.name}
                        </div>
                    )}

                </div>

            </label>
        </div>
    )
}