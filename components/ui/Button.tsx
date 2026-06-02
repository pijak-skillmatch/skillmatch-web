import Link from 'next/link'
import { ReactNode, MouseEventHandler } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string

  variant?: 'primary' | 'secondary' | 'icon'

  className?: string

  onClick?: MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  >

  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    text-sm font-semibold
    transition-all duration-300
  `

  const variants = {
    primary: `
      rounded-xl
      px-7 py-3.5

      bg-linear-to-r
      from-(--secondary)
      to-(--primary)

      text-white

      shadow-[0_0_30px_rgba(124,156,255,0.28)]

      hover:scale-[1.03]
      hover:shadow-[0_0_45px_rgba(124,156,255,0.45)]
    `,

    secondary: `
      rounded-xl
      px-7 py-3.5

      border border-white/10
      bg-white/5

      text-white

      backdrop-blur-md

      hover:border-white/20
      hover:bg-white/10
    `,

    icon: `
      h-14 w-14

      rounded-full

      bg-linear-to-br
      from-(--secondary)
      to-(--primary)

      text-white

      p-0

      shadow-[0_0_30px_rgba(124,156,255,0.35)]

      hover:scale-110
      hover:shadow-[0_0_45px_rgba(124,156,255,0.6)]
    `,
  }

  const finalClass = `
    ${baseStyles}
    ${variants[variant]}
    ${className}
  `

  if (href) {
    return (
      <Link
        href={href}
        className={finalClass}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={finalClass}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
