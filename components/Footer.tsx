import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#0D1326',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '32px 5%',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 16,
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'linear-gradient(135deg, #B7A8FF, #5B8CFF)',
          }} />
          <span style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 700,
            fontSize: '1rem', color: '#F5F7FF',
          }}>SkillMatch AI</span>
        </div>
        <p style={{ color: '#A5AEC6', fontSize: '0.78rem' }}>
          © 2026 SkillMatch AI. Capstone Project of Pjkb by Dicoding Academy.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 24 }}>
        {['Privacy', 'Terms', 'Contact'].map(l => (
          <Link key={l} href="#" style={{
            color: '#A5AEC6', textDecoration: 'none', fontSize: '0.8rem',
          }}>{l}</Link>
        ))}
      </div>
    </footer>
  )
}
