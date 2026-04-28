import React, { useState } from 'react';
import useReveal from '../useReveal.js';

const CONTACTS = [
  {
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: 'EMAIL',
    value: 'ishusati5595@gmail.com',
    href: 'mailto:ishusati5595@gmail.com',
  },
  {
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    label: 'PHONE',
    value: '+91 99095 86972',
    href: 'tel:+919909586972',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
    label: 'LINKEDIN',
    value: 'linkedin.com/in/ishu-sati',
    href: 'https://www.linkedin.com/in/ishu-sati/',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
    label: 'GITHUB',
    value: 'github.com/ishusati',
    href: 'https://github.com/ishusati',
  },
];

function Arrow() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
    </svg>
  );
}

export default function Contact() {
  const ref = useReveal();
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText('ishusati5595@gmail.com')
      .then(() => { setCopied(true); setTimeout(() => setCopied(false), 2200); });
  };

  return (
    <section id="contact" ref={ref} style={{ background: 'var(--bg)' }}>
      <div className="wrap">
        <span className="eye r d1">Contact</span>
        <h2 className="h1 r d2" style={{ marginBottom: '18px' }}>
          Let's build something<br />
          <span className="blue">great together.</span>
        </h2>
        <p className="r d3" style={{
          fontSize: '16px', color: 'var(--t2)', lineHeight: 1.82,
          maxWidth: '500px', marginBottom: '44px',
        }}>
          I'm open to senior iOS engineering roles, contract engagements, and cross-platform collaborations.
          If you're building a product that needs precise, scalable mobile work — let's talk.
        </p>

        {/* Contact cards — full column stack on mobile */}
        <div className="r d4" style={{
          background: 'linear-gradient(145deg, rgba(13,22,42,0.92) 0%, rgba(9,16,30,0.97) 100%)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '22px',
          padding: '28px',
          backdropFilter: 'blur(20px)',
          boxShadow: 'inset 0 0 60px rgba(18,70,170,0.05)',
          marginBottom: '24px',
        }}>
          {/* Grid: 2 cols desktop → 1 col mobile */}
          <div className="contact-grid">
            {CONTACTS.map((c, i) => (
              <a key={i} href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="contact-item"
              >
                <div style={{
                  width: 42, height: 42, borderRadius: '12px', flexShrink: 0,
                  background: 'rgba(30,144,255,0.11)', border: '1px solid rgba(30,144,255,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)',
                }}>
                  {c.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.1em', color: 'var(--t3)', marginBottom: '3px' }}>
                    {c.label}
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--t1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {c.value}
                  </p>
                </div>
                <div style={{ color: 'var(--t3)', flexShrink: 0 }}>
                  <Arrow />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="r d5 contact-actions">
          <button onClick={copy} className="btn btn-p">
            {copied ? (
              <>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Copied!
              </>
            ) : (
              <>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                Copy Email Address
              </>
            )}
          </button>
          <a href="https://www.linkedin.com/in/ishu-sati/" target="_blank" rel="noreferrer" className="btn btn-o">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            View LinkedIn
          </a>
          <a href="https://github.com/ishusati" target="_blank" rel="noreferrer" className="btn btn-o">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
        </div>
      </div>

      <style>{`
        /* Contact grid: 2 cols on desktop, 1 col on mobile */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 13px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 16px 18px;
          transition: all .2s ease;
          cursor: pointer;
          text-decoration: none;
          min-width: 0;
        }
        .contact-item:hover {
          background: rgba(30,144,255,0.06);
          border-color: rgba(30,144,255,0.24);
        }
        .contact-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        /* Mobile: everything stacks, full width */
        @media (max-width: 600px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-actions {
            flex-direction: column;
          }
          .contact-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
