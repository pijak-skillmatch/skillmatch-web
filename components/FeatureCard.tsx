interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 20, padding: 28,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, marginBottom: 18,
        background: 'linear-gradient(135deg, rgba(183,168,255,0.15), rgba(91,140,255,0.15))',
        border: '1px solid rgba(183,168,255,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.2rem',
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1rem', fontWeight: 700, marginBottom: 10,
        fontFamily: 'Syne, sans-serif',
      }}>{title}</h3>
      <p style={{
        fontSize: '0.875rem', color: '#A5AEC6',
        lineHeight: 1.6, fontWeight: 300,
      }}>{description}</p>
    </div>
  )
}
