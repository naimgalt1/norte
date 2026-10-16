import { useEffect, useState } from 'react';
import './Marquee.css';

const messages = ['Norte Studio', 'Diseño con propósito', 'Branding · Editorial · Digital', 'Barcelona — Madrid'];

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const WIDTH = Math.max(...messages.map((m) => m.length));
const FRAME_MS = 40;
const LOCK_EVERY = 3; // frames que tarda cada letra en fijarse, de izquierda a derecha
const HOLD_MS = 3500; // tiempo que se muestra cada frase ya fijada

const pad = (text) => text.toUpperCase().padEnd(WIDTH, ' ');
const randomChar = () => CHARSET[Math.floor(Math.random() * CHARSET.length)];

/**
 * Tablero de salidas: cada frase aparece letra a letra con un barajado de caracteres
 * que se va fijando de izquierda a derecha. Sustituye la barra que se desplazaba sin parar.
 * Se oculta al hacer scroll (lo gestiona el CSS con `.marquee.hidden`).
 */
export default function Marquee({ hidden = false }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(() => pad(messages[0]));

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = pad(messages[index]);
    let frame = 0;
    let timer;

    const tick = () => {
      frame += 1;
      const settled = Math.floor(frame / LOCK_EVERY);
      const next = target
        .split('')
        .map((char, i) => (i < settled || char === ' ' ? char : randomChar()))
        .join('');
      setDisplay(next);

      if (settled >= WIDTH) {
        timer = setTimeout(() => setIndex((i) => (i + 1) % messages.length), HOLD_MS);
      } else {
        timer = setTimeout(tick, FRAME_MS);
      }
    };

    if (reduceMotion) {
      setDisplay(target);
      timer = setTimeout(() => setIndex((i) => (i + 1) % messages.length), HOLD_MS);
    } else {
      tick();
    }

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`marquee ${hidden ? 'hidden' : ''}`} id="marquee" aria-live="off">
      <div className="board" aria-label={messages[index]}>
        {display.split('').map((char, i) => (
          <span key={i} className="board-cell">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
