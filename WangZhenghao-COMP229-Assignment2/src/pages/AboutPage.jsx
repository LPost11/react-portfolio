import PageBanner from '../components/PageBanner';
import { aboutContent, personalInfo } from '../data/portfolioData';

/**
 * About Me page: legal name, portrait photo, short biography,
 * quick facts, and a link to the PDF version of the resume.
 */
function AboutPage() {
  return (
    <>
      <PageBanner title={aboutContent.heading} subtitle="A little bit about who I am." />

      <section className="section">
        <div className="container about-layout">
          {/* Portrait image of the site owner. */}
          <div className="about-layout__image">
            <img src={aboutContent.portraitImage} alt={aboutContent.imageAlt} />
          </div>

          <div className="about-layout__content">
            <h2>{personalInfo.fullName}</h2>
            <p className="about-layout__role">{personalInfo.role}</p>

            {aboutContent.biography.map((paragraph, index) => (
              <p key={index} className="about-layout__bio">
                {paragraph}
              </p>
            ))}

            {/* Link to the PDF resume stored in /public. */}
            <a
              className="button button--primary"
              href={personalInfo.resumePath}
              target="_blank"
              rel="noreferrer"
            >
              {aboutContent.resumeButtonText}
            </a>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <h2 className="section__heading">Quick Facts</h2>
          <div className="facts-grid">
            {aboutContent.quickFacts.map((fact) => (
              <div key={fact.label} className="fact-card">
                <span className="fact-card__label">{fact.label}</span>
                <strong className="fact-card__value">{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
