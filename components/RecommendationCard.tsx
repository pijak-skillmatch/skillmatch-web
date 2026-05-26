interface RecommendationCardProps {
  title: string
  description: string
  match: number
  tags: string[]
}

export default function RecommendationCard({
  title, description, match, tags,
}: RecommendationCardProps) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 20, padding: 24,
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h4 style={{
          fontSize: '1rem', fontWeight: 700, fontFamily: 'Syne, sans-serif',
        }}>{title}</h4>
        <span style={{
          fontSize: '0.75rem', fontWeight: 600, color: '#B7A8FF',
          background: 'rgba(183,168,255,0.12)',
          border: '1px solid rgba(183,168,255,0.2)',
          padding: '4px 10px', borderRadius: 100,
        }}>{match}% Match</span>
      </div>

      <p style={{
        fontSize: '0.85rem', color: '#A5AEC6', lineHeight: 1.6, fontWeight: 300,
      }}>{description}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6 }}>
        {tags.map(tag => (
          <span key={tag} style={{
            fontSize: '0.75rem',
            background: 'rgba(91,140,255,0.1)',
            border: '1px solid rgba(91,140,255,0.2)',
            color: '#8faeff', padding: '4px 10px', borderRadius: 100,
          }}>{tag}</span>
        ))}
      </div>

      <button style={{
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.12)',
        color: '#F5F7FF', padding: 10, borderRadius: 10,
        fontSize: '0.85rem', cursor: 'pointer',
        fontFamily: 'DM Sans, sans-serif', marginTop: 'auto',
      }}>
        Learn More →
      </button>
    </div>
  )
}
