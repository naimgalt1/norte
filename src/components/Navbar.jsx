import { useEffect, useState } from 'react';
import Marquee from './Marquee.jsx';
import './Navbar.css';

const links = [
  { href: '#manifiesto', label: 'Manifiesto' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquea el scroll de fondo mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Marquee hidden={scrolled} />

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="navbar-logo">
          NORTE <span>STUDIO</span>
        </a>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contacto" className="navbar-cta">
          Presupuesto
        </a>

        <button
          type="button"
          className={`navbar-burger ${menuOpen ? 'open' : ''}`}
          aria-label="Menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button type="button" className="mobile-menu-close" aria-label="Cerrar menú" onClick={closeMenu}>
          ✕
        </button>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contacto" className="mobile-cta" onClick={closeMenu}>
          Presupuesto →
        </a>
      </div>
    </>
  );
}
