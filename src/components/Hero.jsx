import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Hero.css';

/** Intro de la portada: las líneas del título suben una a una al cargar. */
export default function Hero() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      timeline
        .from('[data-hero="counter"]', { opacity: 0, x: -20, duration: 0.6 })
        .from('[data-hero="line"]', { yPercent: 110, duration: 1, stagger: 0.12 }, '-=0.2')
        .from('[data-hero="meta"]', { opacity: 0, y: 20, duration: 0.7, stagger: 0.1 }, '-=0.5');
    },
    { scope },
  );

  return (
    <section id="hero" className="hero" ref={scope}>

      <div className="hero-bg-text" aria-hidden="true">
        NORTE
      </div>

      <div className="hero-counter" data-hero="counter">
        01 / AGENCIA CREATIVA
      </div>

      <h1 className="hero-title">
        <span className="hero-line">
          <span data-hero="line">Diseño</span>
        </span>
        <span className="hero-line">
          <span data-hero="line" className="accent">
            que deja
          </span>
        </span>
        <span className="hero-line">
          <span data-hero="line" className="italic">
            huella.
          </span>
        </span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-desc" data-hero="meta">
          Somos Norte Studio — una agencia de diseño y branding con sede en Barcelona. Creamos identidades que no se
          olvidan y sistemas visuales que funcionan.
        </p>
        <div className="hero-actions" data-hero="meta">
          <a href="#portfolio" className="btn-accent">
            Ver nuestro trabajo <span>→</span>
          </a>
          <a href="#contacto" className="hero-outline">
            Hablar de tu proyecto
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-bar" />
      </div>
    </section>
  );
}
