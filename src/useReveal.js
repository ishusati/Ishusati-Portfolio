import { useEffect, useRef } from 'react';

export default function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.r').forEach(n => obs.observe(n));
    return () => obs.disconnect();
  }, []);
  return ref;
}
