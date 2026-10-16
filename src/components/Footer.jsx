import './Footer.css';

const workLinks = [
  { href: '#manifiesto', label: 'Manifiesto' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

const services = ['Identidad de marca', 'Diseño editorial', 'Producto digital', 'Señalética'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <p className="footer-brand">
            NORTE <span>STUDIO</span>
          </p>
          <p className="footer-tagline">Diseño con propósito.</p>
          <p className="footer-desc">
            Agencia de diseño y branding. Pequeña a propósito. Rigurosa por convicción. Barcelona, España.
          </p>
        </div>

        <div className="footer-col">
          <h4>Trabajo</h4>
          <ul>
            {workLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Servicios</h4>
          <ul>
            {services.map((service) => (
              <li key={service}>
                <a href="#contacto">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <p>
            hola@nortestudio.es
            <br />
            Barcelona · Madrid
            <br />
            <br />
            Lun – Vie
            <br />
            9:00 – 18:30
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Norte Studio — Todos los derechos reservados</p>
        <p className="made-with">Diseño con propósito.</p>
      </div>
    </footer>
  );
}
