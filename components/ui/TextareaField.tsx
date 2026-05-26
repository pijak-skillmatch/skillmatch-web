import { TextareaHTMLAttributes } from 'react'

interface TextareaFieldProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
}

export default function TextareaField({
    label,
    className = '',
    ...props
}: TextareaFieldProps) {
    return (
        <div>
            <label
                className="
          mb-3 block

          text-sm font-medium
          text-slate-300
        "
            >
                {label}
            </label>

            <textarea
                {...props}

                className={`
          w-full resize-none

          rounded-2xl
          border border-white/10
          bg-white/5

          px-5 py-4

          text-white
          placeholder:text-slate-500

          outline-none

          transition-all duration-300

          focus:border-white/20
          focus:bg-white/7

          ${className}
        `}
            />
        </div>
    )
}