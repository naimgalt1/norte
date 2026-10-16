import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cursor.css';

/** Cursor personalizado con anillo que sigue al puntero con inercia. Solo en dispositivos con ratón. */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.1 });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.1 });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' });

    const handleMove = (event) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    };

    const handleOver = (event) => {
      ring.classList.toggle('active', Boolean(event.target.closest('a, button, input, select, textarea, label')));
    };

    window.addEventListener('pointermove', handleMove);
    document.addEventListener('pointerover', handleOver);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerover', handleOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
