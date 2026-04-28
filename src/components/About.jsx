import React from 'react';
import useReveal from '../useReveal.js';

const CARDS = [
  {
    icon:<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    title:'5+ Years of iOS',
    desc:'Delivered production-grade apps across enterprise CRM, logistics, fleet management, and consumer productivity — from greenfield to App Store.',
  },
  {
    icon:<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title:'MVVM · Clean Arch',
    desc:'SOLID principles, modular design, and scalable architecture are how I write code — not aspirations I aim for.',
  },
  {
    icon:<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title:'Performance First',
    desc:'Smooth 120Hz UI, zero memory leaks, and sub-second load times — profiled with Xcode Instruments and validated in production.',
  },
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} style={{ background:'var(--bg)' }}>
      <div className="wrap">
        <span className="eye r d1">About</span>
        <h2 className="h1 r d2" style={{ marginBottom:'22px' }}>
          Apple-first engineering,<br/>
          <span className="blue">end to end.</span>
        </h2>
        <p className="r d3" style={{ fontSize:'16px', color:'var(--t2)', lineHeight:1.85, maxWidth:'620px', marginBottom:'52px' }}>
          I'm Ishu — a Senior iOS Developer based in Ahmedabad with 5+ years of experience building 
          apps that real users depend on daily. Across five companies and dozens of releases, I've owned 
          the full development lifecycle: architecture, feature engineering, performance profiling, 
          CI/CD automation, and App Store deployment. I write code that's clean enough for a junior 
          to maintain and scalable enough for a team to grow on. Currently expanding into 
          cross-platform development with Flutter, bringing the same architectural discipline 
          to a wider ecosystem.
        </p>

        <div className="r d4" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'14px', marginBottom:'14px' }}>
          {CARDS.map((c,i)=>(
            <div key={i} className="card" style={{ padding:'26px 22px' }}>
              <div className="icon-box" style={{ marginBottom:'18px' }}>{c.icon}</div>
              <h3 style={{ fontSize:'15px', fontWeight:700, color:'var(--t1)', marginBottom:'9px' }}>{c.title}</h3>
              <p style={{ fontSize:'13px', color:'var(--t2)', lineHeight:1.68 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="card r d5" style={{ padding:'20px 24px', display:'flex', alignItems:'center', gap:'16px' }}>
          <div className="icon-box" style={{ flexShrink:0 }}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div>
            <span style={{ fontSize:'10px', fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--blue)', display:'block', marginBottom:'4px' }}>Education</span>
            <p style={{ fontSize:'15px', fontWeight:700, color:'var(--t1)', marginBottom:'3px' }}>Bachelor of Computer Applications (BCA)</p>
            <p style={{ fontSize:'13px', color:'var(--t2)' }}>
              Saurashtra University, Rajkot &nbsp;·&nbsp; Shri M.N. Kampani Arts & A.K. Shah Commerce College, Mangrol &nbsp;·&nbsp; 2015 – 2018 &nbsp;·&nbsp; 68%
            </p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#about [style*="repeat(3"]{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
