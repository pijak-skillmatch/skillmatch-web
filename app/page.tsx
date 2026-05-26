import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FeatureCard from '@/components/FeatureCard'
import { features } from '@/lib/mockData'

/* ── Reusable empty-state placeholder ── */
function EmptyState({ message }: { message: string }) {
  return (
    <div style={{
      border: '1px dashed rgba(255,255,255,0.12)',
      borderRadius: 20, padding: '48px 24px', textAlign: 'center',
    }}>
      <div style={{ fontSize: '1.5rem', opacity: 0.2, marginBottom: 12 }}>◈</div>
      <p style={{ color: '#A5AEC6', fontSize: '0.875rem', fontWeight: 300 }}>{message}</p>
    </div>
  )
}

export default function LandingPage() {
  return (
    <>
      <Navbar />

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex', alignItems: 'center',
        padding: '64px 5% 0',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Glow blobs */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 400, pointerEvents: 'none',
          background: 'radial-gradient(ellipse, rgba(91,140,255,0.12) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', top: '10%', left: '10%',
          width: 400, height: 400, pointerEvents: 'none',
          background: 'radial-gradient(ellipse, rgba(183,168,255,0.06) 0%, transparent 70%)',
        }} />

        <div style={{
          maxWidth: 1280, margin: '0 auto', width: '100%',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'center',
        }}>
          {/* ── Left copy ── */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(183,168,255,0.1)',
              border: '1px solid rgba(183,168,255,0.2)',
              padding: '6px 16px', borderRadius: 100,
              fontSize: '0.72rem', color: '#B7A8FF',
              marginBottom: 24, fontWeight: 600,
              letterSpacing: '.06em', textTransform: 'uppercase' as const,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#B7A8FF', display: 'inline-block' }} />
              Next-Gen Career Discovery
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800,
              lineHeight: 1.1, marginBottom: 20, letterSpacing: '-.02em',
            }}>
              Find Career Opportunities That{' '}
              <em style={{
                fontStyle: 'normal',
                background: 'linear-gradient(135deg, #B7A8FF, #5B8CFF)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Actually Fit You
              </em>
            </h1>

            <p style={{
              color: '#A5AEC6', fontSize: '1.05rem', lineHeight: 1.7,
              marginBottom: 36, maxWidth: 480, fontWeight: 300,
            }}>
              AI-powered recommendations based on your skills, interests, and career goals.
              Join 50k+ professionals navigating their path with intelligence.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
              <Link href="/analysis" style={{
                background: 'linear-gradient(135deg, #B7A8FF, #5B8CFF)',
                color: '#070B1A', padding: '14px 28px',
                borderRadius: 12, fontWeight: 600, fontSize: '0.95rem',
                textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
              }}>
                Get Started
              </Link>
              <button style={{
                background: 'transparent', color: '#F5F7FF',
                padding: '14px 28px', borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.12)',
                fontWeight: 400, fontSize: '0.95rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 8,
                fontFamily: 'DM Sans, sans-serif',
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="rgba(165,174,198,0.6)" strokeWidth="1.2" />
                  <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="rgba(165,174,198,0.6)" />
                </svg>
                See How It Works
              </button>
            </div>
          </div>

          {/* ── Right: hero image placeholder ── */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -30, borderRadius: 24, zIndex: 0,
              background: 'radial-gradient(ellipse, rgba(91,140,255,0.18) 0%, transparent 70%)',
            }} />

            <div style={{
              position: 'relative', zIndex: 1,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 24,
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>

              <img
                src="/Dashboard.png"
                alt="Dashboard Preview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' 
                }}
              />

            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          FEATURES
      ════════════════════════════════ */}
      <section style={{ padding: '80px 5%', background: '#070B1A' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{
              fontSize: '0.72rem', fontWeight: 600, letterSpacing: '.1em',
              textTransform: 'uppercase' as const, color: '#B7A8FF', marginBottom: 12,
            }}>Why SkillMatch</div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700, marginBottom: 16, lineHeight: 1.2,
            }}>
              Precision Engineering for<br />your Career Path
            </h2>
            <p style={{
              color: '#A5AEC6', fontSize: '1rem', maxWidth: 560,
              margin: '0 auto', lineHeight: 1.7, fontWeight: 300,
            }}>
              Traditional job boards are broken. SkillMatch AI uses deep learning to
              understand your potential, not just your past.
            </p>
          </div>

          {features.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}>
              {features.map(f => (
                <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
              ))}
            </div>
          ) : (
            <EmptyState message="Features will appear here once connected to the API." />
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
