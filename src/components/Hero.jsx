import React from 'react';
import useReveal from '../useReveal.js';

const STATS = [
  { n:'5+',  l:'Years of iOS' },
  { n:'15+', l:'Apps delivered' },
  { n:'5',   l:'Companies' },
];

export default function Hero() {
  const ref = useReveal();
  return (
    <section id="home" ref={ref} style={{
      minHeight:'100vh', display:'flex', alignItems:'center',
      padding:'128px 0 80px', position:'relative', overflow:'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{ position:'absolute',inset:0,pointerEvents:'none',
        background:'radial-gradient(ellipse 70% 60% at 68% 50%, rgba(16,65,155,0.2) 0%, transparent 72%)',
      }}/>
      {/* Subtle grid */}
      <div style={{ position:'absolute',inset:0,pointerEvents:'none',
        backgroundImage:'linear-gradient(rgba(255,255,255,0.012) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.012) 1px,transparent 1px)',
        backgroundSize:'52px 52px', opacity:.5,
      }}/>

      <div className="wrap" style={{ display:'grid', gridTemplateColumns:'1fr 400px', gap:'64px', alignItems:'center', position:'relative', zIndex:1, width:'100%' }}>

        {/* LEFT */}
        <div>
          <div className="r d1" style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            padding:'6px 14px', borderRadius:'100px', marginBottom:'28px',
            background:'rgba(34,212,110,0.08)', border:'1px solid rgba(34,212,110,0.2)',
            fontSize:'12px', color:'var(--green)', fontWeight:500, letterSpacing:'.01em',
          }}>
            <span style={{ width:7,height:7,borderRadius:'50%',background:'var(--green)',animation:'pulse 2.4s infinite' }}/>
            Open to new opportunities
          </div>

          <h1 className="r d2" style={{
            fontSize:'clamp(56px,7.5vw,94px)', fontWeight:900,
            letterSpacing:'-.04em', lineHeight:.93, color:'var(--t1)', marginBottom:'16px',
          }}>
            Ishu Sati
          </h1>

          <p className="r d2" style={{
            fontSize:'clamp(17px,2.5vw,24px)', fontWeight:600,
            color:'var(--blue)', marginBottom:'20px', letterSpacing:'-.01em',
          }}>
            Senior iOS Application Developer
          </p>

          <p className="r d3" style={{
            fontSize:'16px', color:'var(--t2)', lineHeight:1.8,
            maxWidth:'500px', marginBottom:'34px',
          }}>
            I build high-performance iOS apps people rely on every day — in Swift, SwiftUI, and UIKit. 
            5+ years turning complex product requirements into clean, scalable architecture 
            and delightful native experiences.
          </p>

          <div className="r d4" style={{ display:'flex', gap:'11px', flexWrap:'wrap', marginBottom:'48px' }}>
            <a href="#projects" className="btn btn-p">
              View Projects
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="btn btn-o">
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Contact Me
            </a>
          </div>

          <div className="r d5" style={{ display:'flex', alignItems:'stretch' }}>
            {STATS.map((s,i)=>(
              <div key={i} style={{
                paddingRight: i<2?'32px':0, marginRight: i<2?'32px':0,
                borderRight: i<2?'1px solid var(--border)':'none',
              }}>
                <div style={{ fontSize:'clamp(28px,3.8vw,42px)', fontWeight:900, letterSpacing:'-.03em', color:'var(--t1)', lineHeight:1 }}>{s.n}</div>
                <div style={{ fontSize:'12px', color:'var(--t2)', marginTop:'5px', lineHeight:1.3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — circular photo, no rotation */}
        <div className="r d3" style={{ display:'flex', justifyContent:'center', alignItems:'center', position:'relative' }}>
          <div style={{
            width:'360px', height:'360px', borderRadius:'50%',
            background:'radial-gradient(circle at 36% 30%, rgba(30,100,255,0.42) 0%, rgba(10,28,80,0.48) 55%, rgba(7,13,20,0.9) 100%)',
            padding:'3px',
            boxShadow:'0 0 80px rgba(30,144,255,0.26), 0 0 180px rgba(30,144,255,0.07)',
            animation:'float 7s ease-in-out infinite',
          }}>
            <div style={{ width:'100%',height:'100%',borderRadius:'50%',overflow:'hidden',background:'var(--bg2)',border:'3px solid rgba(7,13,20,1)' }}>
              <img
                src="https://i.postimg.cc/pVmLKPZL/Whats-App-Image-2026-04-24-at-19-25-51.jpg"
                alt="Ishu Sati — Senior iOS Developer"
                style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center' }}
              />
            </div>
          </div>
          <div style={{
            position:'absolute', bottom:'24px', right:'-6px',
            background:'rgba(8,14,24,0.97)', border:'1px solid rgba(255,255,255,0.09)',
            borderRadius:'15px', padding:'11px 17px', backdropFilter:'blur(20px)',
            animation:'float 7s ease-in-out infinite 2s',
            boxShadow:'0 8px 30px rgba(0,0,0,0.45)',
          }}>
            <p style={{ fontSize:'13px', fontWeight:700, color:'var(--t1)', marginBottom:'2px' }}>iOS Engineer</p>
            <p style={{ fontSize:'11px', color:'var(--t2)' }}>Swift · SwiftUI · UIKit</p>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){#home .wrap{grid-template-columns:1fr!important}#home .wrap>div:last-child{display:none}}`}</style>
    </section>
  );
}
