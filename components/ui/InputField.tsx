import { InputHTMLAttributes } from 'react'

interface InputFieldProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export default function InputField({
    label,
    className = '',
    ...props
}: InputFieldProps) {
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

            <input
                {...props}

                className={`
          w-full

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