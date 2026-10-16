import useScrollReveal from '../hooks/useScrollReveal.js';
import { manifesto } from '../data/content.js';
import './Manifesto.css';

export default function Manifesto() {
  const scope = useScrollReveal();

  return (
    <section id="manifiesto" className="manifesto" ref={scope}>
      <div className="manifesto-panel" aria-hidden="true" />

      <div className="manifesto-inner">
        <p className="manifesto-num" data-reveal>
          02 / MANIFIESTO
        </p>
        <h2 className="manifesto-title" data-reveal>
          Lo que
          <br />
          creemos.
        </h2>

        <ul className="manifesto-list">
          {manifesto.map((item, index) => (
            <li key={item.title} className="manifesto-item" data-reveal data-num={String(index + 1).padStart(2, '0')}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
