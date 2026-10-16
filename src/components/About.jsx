import useScrollReveal from '../hooks/useScrollReveal.js';
import { stats, team } from '../data/content.js';
import './About.css';

export default function About() {
  const scope = useScrollReveal();

  return (
    <section id="nosotros" className="section about" ref={scope}>
      <div className="about-intro">
        <div data-reveal>
          <span className="section-num">04 / NOSOTROS</span>
          <h2 className="section-title">
            Pequeños
            <br />
            a propósito.
            <br />
            <span className="acc">Buenos</span>
            <br />
            por necesidad.
          </h2>
          <div className="accent-line" />

          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-box">
                <p className="stat-num">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-body" data-reveal>
          <p>
            Norte Studio nació en 2018 de una convicción simple: las agencias grandes hacen grandes trabajos para grandes
            clientes. Nosotros preferimos trabajar en profundidad con marcas que tienen algo real que contar.
          </p>
          <p>
            Somos tres personas que hacemos el trabajo nosotros mismos, sin capas de project managers ni decenas de
            subcontratistas. Si contratas a Norte, trabajas con Norte.
          </p>
          <p>
            Hemos desarrollado identidades de marca, sistemas de diseño, publicaciones editoriales y señalética para
            clientes en España, Portugal y los Países Bajos.
          </p>
          <p>
            No tenemos departamento de ventas. Nuestros clientes llegan por recomendación. Eso, creemos, dice bastante.
          </p>
        </div>
      </div>

      <p className="team-title" data-reveal>
        Equipo
      </p>
      <div className="team-grid">
        {team.map((member) => (
          <article key={member.name} className="team-card" data-reveal>
            {member.image ? (
              <img className="team-img" src={member.image} alt={member.name} loading="lazy" />
            ) : (
              <div className="team-placeholder" aria-hidden="true">
                ?
              </div>
            )}
            <div className="team-info">
              <p className="team-name">{member.name}</p>
              <p className="team-role">{member.role}</p>
            </div>
            <div className="team-quote">
              <p>{member.quote}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
