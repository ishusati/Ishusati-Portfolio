import React, { useState, useEffect } from 'react';

const NAV = ['Home','About','Experience','Skills','Projects','Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let cur = 'home';
      NAV.forEach(n => {
        const el = document.getElementById(n.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 180) cur = n.toLowerCase();
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-pill{
          position:fixed;top:0;left:0;right:0;z-index:1000;
          display:flex;justify-content:center;padding:16px 24px;
        }
        .nav-inner{
          display:flex;align-items:center;justify-content:space-between;
          width:100%;max-width:980px;
          background:rgba(8,14,22,0.82);
          backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:100px;padding:9px 10px 9px 22px;
          transition:all .3s ease;
        }
        .nav-inner.scrolled{
          background:rgba(7,10,16,0.96);
          box-shadow:0 8px 40px rgba(0,0,0,0.5);
          border-color:rgba(255,255,255,0.1);
        }
        .nav-logo{display:flex;align-items:center;gap:9px;cursor:pointer}
        .nav-dot{width:8px;height:8px;border-radius:50%;background:var(--blue);
          box-shadow:0 0 10px var(--blue);animation:pulse 2.4s ease-in-out infinite}
        .nav-brand{font-weight:700;font-size:16px;letter-spacing:-.01em;color:var(--t1)}
        .nav-brand span{color:var(--blue)}
        .nav-links{display:flex;gap:2px;list-style:none;align-items:center}
        .nav-links a{
          padding:8px 15px;border-radius:100px;
          font-size:14px;font-weight:400;color:var(--t2);
          transition:all .2s ease;display:block;
        }
        .nav-links a:hover{color:var(--t1)}
        .nav-links a.act{color:var(--t1);font-weight:600}
        .nav-cta{
          background:#fff;color:#07111c;font-weight:600;
          padding:9px 20px;border-radius:100px;font-size:13px;
          transition:all .2s ease;border:none;cursor:pointer;font-family:var(--f);
        }
        .nav-cta:hover{background:var(--blue);color:#fff}
        .ham{display:none;flex-direction:column;gap:5px;cursor:pointer;
          background:none;border:none;padding:6px;margin-left:8px}
        .ham span{width:22px;height:2px;background:var(--t1);border-radius:2px;
          transition:all .25s ease;display:block}
        .ham.open span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
        .ham.open span:nth-child(2){opacity:0}
        .ham.open span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}
        .mobile-menu{
          position:fixed;top:80px;left:16px;right:16px;z-index:999;
          background:rgba(7,13,22,0.98);backdrop-filter:blur(24px);
          border:1px solid rgba(255,255,255,0.09);border-radius:20px;
          padding:12px;display:flex;flex-direction:column;gap:4px;
          transform:translateY(-110%);opacity:0;pointer-events:none;
          transition:all .3s var(--ease);
        }
        .mobile-menu.open{transform:none;opacity:1;pointer-events:all}
        .mobile-menu a{
          padding:13px 18px;border-radius:12px;font-size:15px;color:var(--t2);
          transition:all .18s ease;display:block;
        }
        .mobile-menu a:hover,.mobile-menu a.act{color:var(--t1);background:rgba(255,255,255,0.05)}
        @media(max-width:820px){
          .nav-links,.nav-cta{display:none!important}
          .ham{display:flex!important}
        }
      `}</style>

      <nav className="nav-pill">
        <div className={`nav-inner ${scrolled ? 'scrolled' : ''}`}>
          <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
            <span className="nav-dot"/>
            <span className="nav-brand">Ishu<span>.</span></span>
          </a>

          <ul className="nav-links">
            {NAV.map(n => (
              <li key={n}>
                <a href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? 'act' : ''}>
                  {n}
                </a>
              </li>
            ))}
          </ul>

          <button className="nav-cta" onClick={() => { window.location.href='#contact'; }}>
            Let's talk
          </button>

          <button className={`ham ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {NAV.map(n => (
          <a key={n} href={`#${n.toLowerCase()}`}
            className={active === n.toLowerCase() ? 'act' : ''}
            onClick={() => setOpen(false)}>
            {n}
          </a>
        ))}
      </div>
    </>
  );
}
