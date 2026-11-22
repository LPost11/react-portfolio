import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { contactContent, personalInfo } from '../data/portfolioData';

// Empty starting values for every field in the contact form.
const emptyFormValues = {
  firstName: '',
  lastName: '',
  contactNumber: '',
  emailAddress: '',
  message: '',
};

/**
 * Contact page: an information panel plus an interactive form that collects
 * First Name, Last Name, Contact Number, Email Address and a Message.
 * The form validates input and shows a confirmation message on submit.
 */
function ContactPage() {
  const [formValues, setFormValues] = useState(emptyFormValues);
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Update the matching field whenever the user types.
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  // Validate required fields, then show a success message and reset the form.
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const isFormComplete = Object.values(formValues).every((value) => value.trim() !== '');
    if (!isFormComplete) {
      setSubmissionMessage('Please fill in every field before sending your message.');
      return;
    }

    // In a real deployment this is where you would POST to a backend or form service.
    setSubmissionMessage(
      `Thank you, ${formValues.firstName}! Your message has been received. I’ll be in touch soon.`
    );
    setFormValues(emptyFormValues);
  };

  const formFieldLabels = contactContent.formFields;

  return (
    <>
      <PageBanner title={contactContent.heading} subtitle={contactContent.intro} />

      <section className="section">
        <div className="container contact-layout">
          {/* Contact information panel. */}
          <aside className="contact-info">
            <h2>Get in Touch</h2>
            <p>Feel free to reach out through any of the channels below.</p>

            <ul className="contact-info__list">
              <li>
                <span className="contact-info__label">Email</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li>
                <span className="contact-info__label">Phone</span>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </li>
              <li>
                <span className="contact-info__label">Location</span>
                <span>{personalInfo.location}</span>
              </li>
              <li>
                <span className="contact-info__label">GitHub</span>
                <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer">
                  {personalInfo.githubUrl}
                </a>
              </li>
            </ul>
          </aside>

          {/* Interactive contact form. */}
          <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
            <h2>Send Me a Message</h2>

            <div className="contact-form__row">
              <div className="form-field">
                <label htmlFor="firstName">{formFieldLabels.firstName}</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formValues.firstName}
                  onChange={handleFieldChange}
                  placeholder="Jane"
                />
              </div>

              <div className="form-field">
                <label htmlFor="lastName">{formFieldLabels.lastName}</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formValues.lastName}
                  onChange={handleFieldChange}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="contact-form__row">
              <div className="form-field">
                <label htmlFor="contactNumber">{formFieldLabels.contactNumber}</label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  value={formValues.contactNumber}
                  onChange={handleFieldChange}
                  placeholder="+1 (416) 555-0000"
                />
              </div>

              <div className="form-field">
                <label htmlFor="emailAddress">{formFieldLabels.emailAddress}</label>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  value={formValues.emailAddress}
                  onChange={handleFieldChange}
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">{formFieldLabels.message}</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formValues.message}
                onChange={handleFieldChange}
                placeholder="Tell me a little about your project..."
              />
            </div>

            <button type="submit" className="button button--primary">
              Send Message
            </button>

            {/* Screen-reader friendly live region for the submission result. */}
            {submissionMessage && (
              <p className="contact-form__status" role="status">
                {submissionMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
