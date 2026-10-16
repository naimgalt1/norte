import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Anima con GSAP cada elemento marcado con `data-reveal` dentro de la sección
 * cuando entra en pantalla. Devuelve la ref que hay que poner en la sección.
 */
export default function useScrollReveal() {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.from(scope.current.querySelectorAll('[data-reveal]'), {
        y: 36,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 80%',
          once: true,
        },
      });
    },
    { scope },
  );

  return scope;
}
