import React from 'react';
import useReveal from '../useReveal.js';

const JOBS = [
  {
    role:'Senior iOS Developer',
    company:'Droisys India Pvt Ltd',
    period:'May 2024 – Feb 2026',
    current:true,
    points:[
      'Owned the full iOS development lifecycle — from requirement analysis and architecture design to feature delivery, testing, and App Store release.',
      'Designed and built reusable component libraries and modular feature modules that reduced development time across concurrent product lines.',
      'Diagnosed and resolved critical production bugs — memory leaks, UI freezes, and crash-level issues — using Xcode Instruments and systematic profiling.',
      'Architected and maintained CI/CD pipelines that automated builds, test runs, and deployments, cutting manual release overhead significantly.',
      'Established and enforced MVVM + clean architecture standards across the team through structured code reviews and technical documentation.',
      'Mentored junior developers with focused feedback, pair programming sessions, and knowledge-sharing — raising overall code quality.',
      'Acted as the technical bridge between Engineering, Product, and Design — translating requirements into precise, shippable iOS features on schedule.',
    ],
  },
  {
    role:'Senior iOS Developer',
    company:'Hidden Brains InfoTech',
    period:'Oct 2022 – Feb 2024',
    points:[
      'Diagnosed and eliminated performance bottlenecks — reducing app launch times and resolving memory pressure issues across multiple production apps.',
      'Built a shared library of reusable UI components and utility modules, enabling consistent UI patterns and reducing duplicated code across the team.',
      'Introduced automated build and deployment pipelines that standardized the release process and reduced human error in production deployments.',
      'Contributed to architectural planning sessions and drove adoption of MVVM and SOLID principles as team-wide engineering standards.',
      'Conducted regular code reviews, enforcing iOS best practices and maintaining a high bar for code quality and long-term maintainability.',
      'Collaborated with Design to implement pixel-accurate, Apple HIG-compliant UI components across multiple iOS applications.',
    ],
  },
  {
    role:'Junior iOS Developer',
    company:'Xongolab Technologies LLP',
    period:'Mar 2022 – Sep 2022',
    points:[
      'Built and maintained iOS application features across the codebase, ensuring smooth performance and responsiveness on all supported device targets.',
      'Integrated third-party SDKs and RESTful APIs, handling authentication, error states, and backward compatibility with existing systems.',
      'Diagnosed and resolved UI and logic bugs through systematic testing and debugging, contributing to measurably improved application stability.',
      'Collaborated with senior engineers on architecture decisions, learning and applying scalable patterns to new feature development.',
    ],
  },
  {
    role:'Junior iOS Developer',
    company:'Addit Infotech',
    period:'Jul 2021 – Mar 2022',
    points:[
      'Developed and maintained iOS application modules focused on stability, performance, and a polished user experience.',
      'Executed thorough module-level testing to catch and resolve defects before they reached production.',
      'Integrated third-party libraries and frameworks, validating compatibility and maintaining application stability throughout.',
    ],
  },
  {
    role:'Junior iOS Developer',
    company:'ZerOnes',
    period:'Mar 2019 – Jun 2020',
    points:[
      'Contributed to iOS application development under senior guidance, building foundational skills in Swift, UIKit, and mobile architecture.',
      'Supported debugging and issue resolution cycles, improving application stability and reducing reported crash rates.',
      'Assisted in integrating third-party tools and frameworks, ensuring seamless end-to-end application functionality.',
    ],
  },
];

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" ref={ref} style={{ background:'var(--bg2)' }}>
      <div className="wrap">
        <span className="eye r d1">Experience</span>
        <h2 className="h1 r d2" style={{ marginBottom:'20px' }}>
          A timeline of building<br/>
          <span className="blue">iOS at scale.</span>
        </h2>
        <p className="r d3" style={{ fontSize:'16px', color:'var(--t2)', lineHeight:1.8, maxWidth:'520px', marginBottom:'56px' }}>
          From junior contributor to engineering lead — five companies, dozens of releases, and a consistent track record of shipping apps that perform.
        </p>

        <div style={{ position:'relative', paddingLeft:'36px' }}>
          <div style={{
            position:'absolute', left:'7px', top:'10px', bottom:'10px', width:'2px',
            background:'linear-gradient(to bottom, var(--blue) 0%, rgba(30,144,255,0.06) 100%)',
            borderRadius:'2px',
          }}/>

          {JOBS.map((j, i) => (
            <div key={i} className="r" style={{ transitionDelay:`${i*0.09+0.1}s`, marginBottom: i<JOBS.length-1 ? '20px' : 0, position:'relative' }}>
              <div style={{
                position:'absolute', left:'-30px', top:'26px',
                width:j.current?16:12, height:j.current?16:12, borderRadius:'50%',
                background: j.current ? 'var(--blue)' : 'var(--bg3)',
                border:`2px solid ${j.current ? 'var(--blue)' : 'rgba(255,255,255,0.13)'}`,
                boxShadow: j.current ? '0 0 16px rgba(30,144,255,0.6)' : 'none',
              }}/>

              <div className="card" style={{ padding:'24px 28px' }}
                onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(30,144,255,0.2)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>

                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'12px', marginBottom:'16px', flexWrap:'wrap' }}>
                  <div>
                    <div style={{ display:'flex', alignItems:'center', gap:'9px', marginBottom:'4px', flexWrap:'wrap' }}>
                      <h3 style={{ fontSize:'16px', fontWeight:700, color:'var(--t1)' }}>{j.role}</h3>
                      {j.current && (
                        <span style={{ fontSize:'10px', fontWeight:600, letterSpacing:'.07em', textTransform:'uppercase',
                          padding:'3px 9px', borderRadius:'100px',
                          background:'rgba(30,144,255,0.11)', color:'var(--blue)', border:'1px solid rgba(30,144,255,0.24)' }}>
                          Most Recent
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize:'13px', color:'var(--blue)', fontWeight:500 }}>{j.company}</p>
                  </div>
                  <span style={{ fontSize:'12px', color:'var(--t3)', flexShrink:0 }}>{j.period}</span>
                </div>

                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'8px' }}>
                  {j.points.map((pt,k)=>(
                    <li key={k} style={{ display:'flex', gap:'11px', alignItems:'flex-start' }}>
                      <span style={{ width:4, height:4, borderRadius:'50%', background:'var(--blue)', marginTop:'9px', flexShrink:0, opacity:.55 }}/>
                      <span style={{ fontSize:'13px', color:'var(--t2)', lineHeight:1.7 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
