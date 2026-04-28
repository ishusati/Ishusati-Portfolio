import React from 'react';
import useReveal from '../useReveal.js';

const CATS = [
  {
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: 'Core iOS',
    skills: ['Swift (Advanced)', 'SwiftUI', 'UIKit', 'MVVM / MVC', 'OOP & SOLID', 'Data Structures & Algorithms', 'Design Patterns'],
  },
  {
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    title: 'Frameworks & APIs',
    skills: ['GCD & Async/Await', 'Combine', 'Core Data', 'AVFoundation / AVKit', 'RESTful APIs', 'JSON Parsing', 'Push Notifications', 'Core Location'],
  },
  {
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 0 0 4.93 19.07"/><path d="M4.93 4.93A10 10 0 0 0 19.07 19.07"/></svg>,
    title: 'Tools & DevOps',
    skills: ['Git & GitHub', 'CI/CD Pipelines', 'Xcode Instruments', 'Swift Package Manager', 'CocoaPods', 'Fastlane', 'TestFlight', 'Xcode'],
  },
  {
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Process & Practices',
    skills: ['Agile / Scrum', 'iOS Keychain Security', 'Debugging & Profiling', 'Performance Optimization', 'Code Review', 'Technical Documentation', 'App Store Deployment'],
  },
];

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" ref={ref} style={{ background: 'var(--bg)' }}>
      <div className="wrap">
        <span className="eye r d1">Skills</span>
        <h2 className="h1 r d2" style={{ marginBottom: '20px' }}>
          The toolkit behind<br />
          <span className="blue">the apps.</span>
        </h2>
        <p className="r d3" style={{ fontSize: '16px', color: 'var(--t2)', lineHeight: 1.8, maxWidth: '500px', marginBottom: '32px' }}>
          Every technology here has been applied in production — not just explored in tutorials. This is the stack I rely on to build apps that scale.
        </p>

        {/* Flutter learning banner */}
        <div className="r d4" style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          background: 'linear-gradient(135deg, rgba(2,132,199,0.08) 0%, rgba(56,189,248,0.05) 100%)',
          border: '1px solid rgba(56,189,248,0.2)',
          borderRadius: '14px', padding: '16px 20px', marginBottom: '40px',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: '10px', flexShrink: 0,
            background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px',
          }}>
            🐦
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#38bdf8', marginBottom: '3px' }}>
              Currently Learning · Flutter & Dart
            </p>
            <p style={{ fontSize: '12px', color: 'var(--t2)', lineHeight: 1.55 }}>
              Expanding into cross-platform development — applying my iOS architecture experience to build production-ready Flutter apps.
            </p>
          </div>
          <span style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: '100px', flexShrink: 0,
            background: 'rgba(56,189,248,0.1)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.2)',
          }}>
            In Progress
          </span>
        </div>

        {/* Skills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px' }}>
          {CATS.map((c, i) => (
            <div key={i} className="card r" style={{ padding: '26px', transitionDelay: `${i * 0.09 + 0.1}s` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(30,144,255,0.22)'; e.currentTarget.style.background = 'rgba(30,144,255,0.025)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--card)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '18px' }}>
                <div className="icon-box">{c.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--t1)' }}>{c.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {c.skills.map((s, j) => <span key={j} className="tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){#skills [style*="repeat(2"]{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
