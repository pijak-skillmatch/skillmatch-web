import { ReactNode } from 'react'

interface GradientTextProps {
    children: ReactNode
    className?: string
}

export default function GradientText({
    children,
    className = '',
}: GradientTextProps) {
    return (
        <span
            className={`
        bg-linear-to-r
        from-(--secondary)
        via-white
        to-(--primary)

        bg-clip-text
        text-transparent

        ${className}
      `}
        >
            {children}
        </span>
    )
}