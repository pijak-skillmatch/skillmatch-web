import { CSSProperties, ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  style?: CSSProperties
}

export default function GlassCard({ children, style }: GlassCardProps) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 20,
      padding: 28,
      ...style,
    }}>
      {children}
    </div>
  )
}
