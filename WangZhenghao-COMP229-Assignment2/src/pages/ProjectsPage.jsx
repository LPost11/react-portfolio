import PageBanner from '../components/PageBanner';
import { projects } from '../data/portfolioData';

/**
 * Projects page: showcases at least three highlighted projects,
 * each with an image, description, technologies, and a link.
 */
function ProjectsPage() {
  return (
    <>
      <PageBanner
        title="My Projects"
        subtitle="A selection of applications I’ve designed and developed."
      />

      <section className="section">
        <div className="container">
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <img
                  className="project-card__image"
                  src={project.image}
                  alt={project.imageAlt}
                />
                <div className="project-card__body">
                  <h2 className="project-card__title">{project.title}</h2>
                  <p className="project-card__description">{project.description}</p>

                  {/* Technology tags help readers scan the stack quickly. */}
                  <ul className="tag-list">
                    {project.technologies.map((technology) => (
                      <li key={technology} className="tag">
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <a
                    className="project-card__link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
