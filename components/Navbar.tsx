'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Model',    href: '/analysis' },
  { label: 'About',   href: '/about' },
]

// Back destination for each route
const backMap: Record<string, { href: string; label: string }> = {
  '/analysis':  { href: '/',         label: 'Home' },
  '/dashboard': { href: '/analysis', label: 'Analysis' },
  '/about':     { href: '/',         label: 'Home' },
}

export default function Navbar() {
  const pathname = usePathname()
  const router   = useRouter()
  const back     = backMap[pathname]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 5%',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 64,
      background: 'rgba(7,11,26,0.75)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>

      {/* ── LEFT: back button + logo ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>

        {/* Back button — hidden on landing */}
        {back && (
          <button
            onClick={() => router.push(back.href)}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 10, padding: '6px 14px',
              color: '#A5AEC6', fontSize: '0.8rem',
              cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
              transition: 'background .2s, color .2s',
            }}
            onMouseEnter={e => {
              const b = e.currentTarget
              b.style.background = 'rgba(183,168,255,0.12)'
              b.style.color = '#F5F7FF'
            }}
            onMouseLeave={e => {
              const b = e.currentTarget
              b.style.background = 'rgba(255,255,255,0.06)'
              b.style.color = '#A5AEC6'
            }}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M8.5 2L3.5 6.5l5 4.5" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {back.label}
          </button>
        )}

        {/* Logo */}
        <Link href="/" style={{
          textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'linear-gradient(135deg, #B7A8FF, #5B8CFF)',
          }} />
          <span style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 700,
            fontSize: '1.05rem', color: '#F5F7FF',
          }}>
            SkillMatch AI
          </span>
        </Link>
      </div>

      {/* ── RIGHT: nav links + CTA ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} style={{
            color: pathname === link.href ? '#F5F7FF' : '#A5AEC6',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: pathname === link.href ? 500 : 400,
            paddingBottom: 2,
            borderBottom: pathname === link.href
              ? '1px solid rgba(183,168,255,0.5)' : 'none',
          }}>
            {link.label}
          </Link>
        ))}

        <Link href="/analysis" style={{
          background: 'linear-gradient(135deg, rgba(183,168,255,0.15), rgba(91,140,255,0.15))',
          border: '1px solid rgba(255,255,255,0.12)',
          color: '#F5F7FF', padding: '8px 20px',
          borderRadius: 100, fontSize: '0.875rem',
          textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
        }}>
          Get Started
        </Link>
      </div>
    </nav>
  )
}
