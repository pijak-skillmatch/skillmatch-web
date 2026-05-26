'use client'

interface SkillChipProps {
  label: string
  onRemove?: () => void
}

export default function SkillChip({ label, onRemove }: SkillChipProps) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: 'rgba(183,168,255,0.1)',
      border: '1px solid rgba(183,168,255,0.25)',
      color: '#B7A8FF',
      padding: '6px 14px', borderRadius: 100,
      fontSize: '0.8rem', fontWeight: 500,
    }}>
      {label}
      {onRemove && (
        <span
          onClick={onRemove}
          style={{ cursor: 'pointer', opacity: 0.6, fontSize: '0.7rem' }}
        >✕</span>
      )}
    </span>
  )
}
