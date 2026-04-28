import React from 'react';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ishu-sati/',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ishusati',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  },
  {
    label: 'Email',
    href: 'mailto:ishusati5595@gmail.com',
    icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
];

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      paddingTop: '48px',
      paddingBottom: '28px',
    }}>
      <div className="wrap">

        {/* Top row */}
        <div className="footer-top">
          {/* Brand + tagline */}
          <div style={{ maxWidth: '280px' }}>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', textDecoration: 'none' }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--blue)', boxShadow: '0 0 10px var(--blue)',
                display: 'block', animation: 'pulse 2.4s infinite',
              }}/>
              <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--t1)', letterSpacing: '-.01em' }}>
                Ishu<span style={{ color: 'var(--blue)' }}>.</span>
              </span>
            </a>
            <p style={{ fontSize: '13px', color: 'var(--t2)', lineHeight: 1.7 }}>
              Senior iOS Developer crafting high-performance mobile apps with Swift, SwiftUI, and UIKit.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
              {SOCIAL_LINKS.map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer" title={s.label}
                  style={{
                    width: 34, height: 34, borderRadius: '9px', flexShrink: 0,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--t3)', transition: 'all .18s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--blue)'; e.currentTarget.style.borderColor = 'rgba(30,144,255,0.3)'; e.currentTarget.style.background = 'rgba(30,144,255,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--t3)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--t3)', marginBottom: '16px' }}>
              Navigate
            </p>
            <div className="footer-nav">
              {NAV_LINKS.map((l, i) => (
                <a key={i} href={l.href} style={{
                  fontSize: '14px', color: 'var(--t2)', transition: 'color .16s ease', display: 'block',
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--t1)'}
                  onMouseLeave={e => e.target.style.color = 'var(--t2)'}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Availability card */}
          <div style={{
            background: 'rgba(30,144,255,0.06)', border: '1px solid rgba(30,144,255,0.16)',
            borderRadius: '16px', padding: '22px 24px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', animation: 'pulse 2.4s infinite', display: 'block' }}/>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green)' }}>Open to opportunities</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--t2)', lineHeight: 1.6, marginBottom: '16px' }}>
              Looking for senior iOS roles, freelance projects, or cross-platform collaborations.
            </p>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              fontSize: '13px', fontWeight: 600, color: 'var(--blue)',
              transition: 'gap .16s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.gap = '9px'}
              onMouseLeave={e => e.currentTarget.style.gap = '5px'}>
              Get in touch
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border)', margin: '32px 0 22px' }}/>

        {/* Bottom row */}
        <div className="footer-bottom">
          <p style={{ fontSize: '12px', color: 'var(--t3)' }}>
            © {new Date().getFullYear()} Ishu Sati. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: 'var(--t3)' }}>
          </p>
          <p style={{ fontSize: '12px', color: 'var(--t3)' }}>
            Ahmedabad, Gujarat, India
          </p>
        </div>
      </div>

      <style>{`
        .footer-top {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 48px;
          align-items: start;
        }
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .footer-nav {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 10px 20px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }
      `}</style>
    </footer>
  );
}
