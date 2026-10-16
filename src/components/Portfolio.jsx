import useScrollReveal from '../hooks/useScrollReveal.js';
import { projects } from '../data/content.js';
import './Portfolio.css';

export default function Portfolio() {
  const scope = useScrollReveal();

  return (
    <section id="portfolio" className="section portfolio" ref={scope}>
      <div className="portfolio-header">
        <div data-reveal>
          <span className="section-num">03 / PORTFOLIO</span>
          <h2 className="section-title">
            Trabajo
            <br />
            <span className="acc">selecto.</span>
          </h2>
          <div className="accent-line" />
        </div>
        <p data-reveal>Proyectos que demuestran que el diseño es, ante todo, pensamiento aplicado con forma.</p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <article key={project.id} className={`project-card ${project.wide ? 'wide' : ''}`} data-reveal>
            <img className="project-img" src={project.image} alt={project.alt} loading="lazy" />
            <span className="project-num">{String(index + 1).padStart(2, '0')}</span>
            <span className="project-arrow" aria-hidden="true">
              →
            </span>
            <div className="project-overlay">
              <p className="project-tag">{project.tag}</p>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
