import { Link } from 'react-router-dom';
import { homeContent, personalInfo } from '../data/portfolioData';

/**
 * Home page: a hero welcome section, call-to-action buttons,
 * and a mission statement as recommended by the assignment brief.
 */
function HomePage() {
  return (
    <>
      {/* Hero section with welcome message and redirect buttons. */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="hero__eyebrow">{personalInfo.role}</p>
            <h1>{homeContent.welcomeHeading}</h1>
            <p className="hero__message">{homeContent.welcomeMessage}</p>

            <div className="hero__actions">
              <Link to={homeContent.primaryButtonLink} className="button button--primary">
                {homeContent.primaryButtonText}
              </Link>
              <Link to={homeContent.secondaryButtonLink} className="button button--outline">
                {homeContent.secondaryButtonText}
              </Link>
            </div>
          </div>

          {/* Decorative hero illustration (custom SVG asset). */}
          <div className="hero__visual">
            <img src="./images/hero.svg" alt="Illustration of a developer workspace" />
          </div>
        </div>
      </section>

      {/* Mission statement section. */}
      <section className="section section--soft">
        <div className="container">
          <div className="mission">
            <span className="mission__icon" aria-hidden="true">✦</span>
            <div>
              <h2 className="mission__title">{homeContent.missionTitle}</h2>
              <p className="mission__text">{homeContent.missionStatement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links to the other portfolio pages. */}
      <section className="section">
        <div className="container">
          <h2 className="section__heading">Explore My Portfolio</h2>
          <div className="feature-grid">
            <Link to="/projects" className="feature-card">
              <span className="feature-card__emoji" aria-hidden="true">💻</span>
              <h3>Projects</h3>
              <p>See the applications I’ve designed and built.</p>
            </Link>
            <Link to="/education" className="feature-card">
              <span className="feature-card__emoji" aria-hidden="true">🎓</span>
              <h3>Education</h3>
              <p>My degrees, certificates, and learning journey.</p>
            </Link>
            <Link to="/services" className="feature-card">
              <span className="feature-card__emoji" aria-hidden="true">🛠️</span>
              <h3>Services</h3>
              <p>How I can help bring your ideas to life.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
