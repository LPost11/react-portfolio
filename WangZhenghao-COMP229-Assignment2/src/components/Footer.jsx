import { Link } from 'react-router-dom';
import { navigationLinks, personalInfo } from '../data/portfolioData';

/** Footer appears on every page and repeats the navigation for convenience. */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div className="site-footer__brand">
          <img src="./images/logo.svg" alt="" className="site-footer__logo" />
          <p>Building thoughtful web experiences.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {navigationLinks.map((navigationLink) => (
            <Link key={navigationLink.to} to={navigationLink.to}>
              {navigationLink.label}
            </Link>
          ))}
          {/* External GitHub profile link, required for the assignment submission. */}
          <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>

        <p className="site-footer__copy">
          &copy; {currentYear} {personalInfo.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
