import PageBanner from '../components/PageBanner';
import { services } from '../data/portfolioData';

/**
 * Services page: a short list of services offered, each with an image
 * to make the page more visually appealing (as recommended in the brief).
 */
function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services I Offer"
        subtitle="Practical skills I can bring to your next project."
      />

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <img src={service.image} alt={service.imageAlt} className="service-card__image" />
                <div className="service-card__body">
                  <h2 className="service-card__title">{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
