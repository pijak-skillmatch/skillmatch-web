'use client'

interface TeamCardProps {
  initials: string
  name: string
  role: string
  bio: string
}

const avatarColors: Record<string, string> = {
  AR: 'linear-gradient(135deg, #B7A8FF, #8A7FE8)',
  BF: 'linear-gradient(135deg, #5B8CFF, #3B6FE0)',
  CN: 'linear-gradient(135deg, #60D9A5, #3DB88A)',
  DP: 'linear-gradient(135deg, #FF8FA3, #E0607A)',
}

export default function TeamCard({ initials, name, role, bio }: TeamCardProps) {
  const gradient = avatarColors[initials] ?? 'linear-gradient(135deg, #B7A8FF, #5B8CFF)'

  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 20, padding: '28px 24px',
      textAlign: 'center',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      transition: 'border-color .2s, background .2s',
    }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.background = 'rgba(255,255,255,0.07)'
        el.style.borderColor = 'rgba(183,168,255,0.25)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.background = 'rgba(255,255,255,0.04)'
        el.style.borderColor = 'rgba(255,255,255,0.08)'
      }}
    >
      {/* Avatar circle with photo placeholder */}
      <div style={{
        width: 80, height: 80, borderRadius: '50%',
        background: gradient,
        border: '3px solid rgba(255,255,255,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16,
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        flexShrink: 0,
        fontSize: '1.4rem', fontFamily: 'Syne, sans-serif',
        fontWeight: 700, color: '#fff',
        letterSpacing: '.02em',
      }}>
        {initials}
      </div>

      {/* Name */}
      <h4 style={{
        fontSize: '1rem', fontWeight: 700, marginBottom: 4,
        fontFamily: 'Syne, sans-serif', color: '#F5F7FF',
      }}>{name}</h4>

      {/* Role badge */}
      <div style={{
        display: 'inline-block',
        fontSize: '0.68rem', fontWeight: 600,
        letterSpacing: '.06em', textTransform: 'uppercase' as const,
        color: '#B7A8FF',
        background: 'rgba(183,168,255,0.1)',
        border: '1px solid rgba(183,168,255,0.2)',
        borderRadius: 100, padding: '4px 12px',
        marginBottom: 12,
      }}>{role}</div>

      {/* Bio */}
      <p style={{
        fontSize: '0.82rem', color: '#A5AEC6',
        lineHeight: 1.6, fontWeight: 300, margin: 0,
      }}>
        {bio}
      </p>
    </div>
  )
}
