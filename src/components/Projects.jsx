import React from 'react';
import useReveal from '../useReveal.js';

const PROJECTS = [
  {
    letter:'A',
    name:'Account360 AI',
    category:'Enterprise CRM · AI',
    desc:'Cross-platform sales enablement platform for the alcohol & beverage industry. Centralizes distributor and customer data, drives field productivity with AI-powered insights, image recognition for on-shelf execution, and real-time market share analytics.',
    tags:['SwiftUI','CoreML','Vision','REST APIs','Analytics'],
    url:'https://apps.apple.com/in/app/account360-ai/id1637380131',
    note:'Contributed to feature development, UI, performance & scalable architecture',
  },
  {
    letter:'R',
    name:'Rockeye Transporter',
    category:'Fleet & Logistics',
    desc:'Transportation management platform for logistics operators. Covers the full trip lifecycle — creation, route planning, driver assignment, truck allocation, and compliance tracking — giving fleet managers real-time operational visibility.',
    tags:['Swift','MapKit','CoreLocation','UIKit','REST APIs'],
    url:'https://apps.apple.com/in/app/rockeye-transporter/id6468956066',
    note:'App functionality, workflows & business feature development',
  },
  {
    letter:'R',
    name:'Rockeye Attendance Punch',
    category:'Workforce Management',
    desc:'Field-ready attendance and workforce management solution. Enables geo-tagged employee punch-in/out, real-time tracking, shift management, and operational reporting — engineered for reliability in low-connectivity environments.',
    tags:['Swift','CoreLocation','UIKit','REST APIs','Offline Support'],
    url:'https://apps.apple.com/in/app/rockeye-attendance-punch/id6468650075',
    note:'Reliability, UX, and operational management features',
  },
  {
    letter:'M',
    name:'MRS Portal',
    category:'Business Operations',
    desc:'End-to-end customer portal for business operations — online registration, live pricing, order placement, loading ticket scheduling, waybill printing, and real-time delivery tracking. Streamlines logistics workflows for field and office teams.',
    tags:['UIKit','Core Data','REST APIs','Logistics','Push Notifications'],
    url:'https://apps.apple.com/in/app/mrs-portal/id1451053466',
    note:'Full-stack iOS feature delivery and workflow management',
  },
  {
    letter:'P',
    name:'Portal Operations',
    category:'Operations Management',
    desc:'Internal operations platform for managing fuel requests, delivery dispatching, bowser allocation, and site inspections. Provides real-time status tracking across all workflows, enabling faster decisions at ground level.',
    tags:['Swift','UIKit','Real-time Updates','REST APIs'],
    url:'https://apps.apple.com/in/app/portal-operations/id1565534631',
    note:'Business process automation and real-time tracking',
  },
  {
    letter:'X',
    name:'XLGrocery Partner',
    category:'On-Demand Delivery',
    desc:'Partner-side app for on-demand grocery delivery. Handles real-time order notifications, acceptance/rejection flows, full order lifecycle management from processing to completion, and supports both online and offline store modes.',
    tags:['SwiftUI','Push Notifications','CoreLocation','Combine'],
    url:'https://apps.apple.com/in/app/xlgrocery-partner/id1523256253',
    note:'Order management, real-time notifications & partner operations',
  },
  {
    letter:'B',
    name:'Business Card Scanner Reader',
    category:'Productivity',
    desc:'OCR-powered business card scanner with high-accuracy contact extraction. Instantly creates digital contacts and supports multi-format export — CSV, vCard, and PDF — making lead capture and CRM entry seamless for sales professionals.',
    tags:['Swift','Vision Framework','CoreData','PDFKit','VisionKit'],
    url:'https://apps.apple.com/in/app/business-card-scanner-reader/id6444761205',
    note:'OCR pipeline, contact management & export features',
  },
  {
    letter:'L',
    name:'Logo Maker Icon Creator',
    category:'Creative Tools',
    desc:'Professional branding tool for creating logos and app icons. Features an extensive template library, an intuitive layer-based editor, custom typography and color controls, and export up to 4K resolution for print and digital use.',
    tags:['SwiftUI','CoreGraphics','CoreImage','Metal','Canvas API'],
    url:'https://apps.apple.com/in/app/logo-maker-icon-creator/id6477861407',
    note:'Design engine, template system & high-res export pipeline',
  },
];

function ArrowIcon() {
  return <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>;
}

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" ref={ref} style={{ background:'var(--bg2)' }}>
      <div className="wrap">
        <span className="eye r d1">Projects</span>
        <h2 className="h1 r d2" style={{ marginBottom:'20px' }}>
          Selected work, on the<br/>
          <span className="blue">App Store and beyond.</span>
        </h2>
        <p className="r d3" style={{ fontSize:'16px', color:'var(--t2)', lineHeight:1.8, maxWidth:'540px', marginBottom:'56px' }}>
          Enterprise platforms and consumer apps — each built with the same rigour for performance, architecture, and attention to detail.
        </p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'14px' }}>
          {PROJECTS.map((p, i) => (
            <div key={i} className="card r" style={{
              padding:'24px', display:'flex', flexDirection:'column',
              transitionDelay:`${i*0.07+0.1}s`,
            }}
              onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(30,144,255,0.22)'}
              onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>

              {/* Header */}
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'16px' }}>
                <div style={{
                  width:42, height:42, borderRadius:'12px', flexShrink:0,
                  background:'rgba(30,144,255,0.12)', border:'1px solid rgba(30,144,255,0.2)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'16px', fontWeight:800, color:'var(--blue)',
                }}>
                  {p.letter}
                </div>
                <a href={p.url} target="_blank" rel="noreferrer"
                  title="View on App Store"
                  style={{
                    width:30, height:30, borderRadius:'9px',
                    background:'rgba(255,255,255,0.04)', border:'1px solid var(--border)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:'var(--t3)', transition:'all .18s ease', flexShrink:0,
                  }}
                  onMouseEnter={e=>{ e.currentTarget.style.color='var(--blue)'; e.currentTarget.style.borderColor='rgba(30,144,255,0.3)'; e.currentTarget.style.background='rgba(30,144,255,0.08)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.color='var(--t3)'; e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='rgba(255,255,255,0.04)'; }}>
                  <ArrowIcon/>
                </a>
              </div>

              {/* Category */}
              <span style={{ fontSize:'10px', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--t3)', marginBottom:'5px' }}>
                {p.category}
              </span>

              {/* Name */}
              <h3 style={{ fontSize:'16px', fontWeight:700, color:'var(--t1)', marginBottom:'9px', letterSpacing:'-.01em' }}>
                {p.name}
              </h3>

              {/* Description */}
              <p style={{ fontSize:'13px', color:'var(--t2)', lineHeight:1.72, flex:1, marginBottom:'14px' }}>
                {p.desc}
              </p>

              {/* My contribution */}
              <div style={{
                fontSize:'11px', color:'var(--blue)', background:'rgba(30,144,255,0.07)',
                border:'1px solid rgba(30,144,255,0.14)', borderRadius:'8px',
                padding:'7px 10px', marginBottom:'14px', lineHeight:1.5,
              }}>
                <span style={{ opacity:.6 }}>My role: </span>{p.note}
              </div>

              {/* Tags */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'5px', marginBottom:'16px' }}>
                {p.tags.map((t,j)=>(
                  <span key={j} style={{
                    padding:'3px 10px', borderRadius:'100px', fontSize:'10px',
                    background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)',
                    color:'var(--t3)', fontWeight:500,
                  }}>{t}</span>
                ))}
              </div>

              {/* App Store CTA */}
              <a href={p.url} target="_blank" rel="noreferrer" style={{
                display:'inline-flex', alignItems:'center', gap:'5px',
                fontSize:'12px', fontWeight:600, color:'var(--blue)',
                transition:'gap .18s ease', marginTop:'auto',
              }}
                onMouseEnter={e=>e.currentTarget.style.gap='9px'}
                onMouseLeave={e=>e.currentTarget.style.gap='5px'}>
                View on App Store
                <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:960px){#projects [style*="repeat(3"]{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:580px){#projects [style*="repeat(3"]{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
