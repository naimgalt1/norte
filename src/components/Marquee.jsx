import './Marquee.css';

const items = ['Norte Studio', 'Diseño con propósito', 'Branding · Editorial · Digital', 'Barcelona — Madrid'];

/** Franja animada superior. Se oculta al hacer scroll (lo gestiona el CSS con `.marquee.hidden`). */
export default function Marquee({ hidden = false }) {
  // Se repite el bloque para que el desplazamiento sea continuo.
  const row = [...items, ...items, ...items];

  return (
    <div className={`marquee ${hidden ? 'hidden' : ''}`} id="marquee">
      <div className="marquee-track">
        {row.map((text, index) => (
          <span key={index} className="marquee-item">
            {text}
            <span className="marquee-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
