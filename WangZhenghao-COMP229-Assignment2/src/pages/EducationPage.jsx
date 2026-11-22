import PageBanner from '../components/PageBanner';
import { education } from '../data/portfolioData';

/**
 * Education page: lists all educational / professional qualifications,
 * including the school, dates/years, and degree obtained.
 */
function EducationPage() {
  return (
    <>
      <PageBanner
        title="Education & Qualifications"
        subtitle="The academic and professional path that shaped my skills."
      />

      <section className="section">
        <div className="container">
          <div className="timeline">
            {education.map((entry) => (
              <article key={entry.id} className="timeline__item">
                <div className="timeline__marker" aria-hidden="true">🎓</div>
                <div className="timeline__content">
                  <span className="timeline__period">{entry.period}</span>
                  <h2 className="timeline__title">{entry.qualification}</h2>
                  <p className="timeline__school">{entry.school}</p>
                  <p className="timeline__details">{entry.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EducationPage;
