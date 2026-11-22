import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigationLinks } from '../data/portfolioData';

/**
 * Navbar renders the site logo and the main navigation scheme.
 * It is responsive: a hamburger button toggles the links on small screens.
 */
function Navbar() {
  // Tracks whether the mobile menu is open.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentLocation = useLocation();

  // Close the mobile menu whenever the user navigates to a new route.
  const handleNavigation = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        {/* Custom logo links back to the Home page. */}
        <Link to="/" className="navbar__brand" onClick={handleNavigation}>
          <img src="./images/logo.svg" alt="LPoster logo" className="navbar__logo" />
          <span className="navbar__brand-text">LPoster</span>
        </Link>

        {/* Hamburger button — only visible on small screens via CSS. */}
        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation links. The "open" class shows the menu on mobile. */}
        <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
          {navigationLinks.map((navigationLink) => (
            <li key={navigationLink.to}>
              <NavLink
                to={navigationLink.to}
                end={navigationLink.to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${
                    isActive || currentLocation.pathname === navigationLink.to
                      ? 'navbar__link--active'
                      : ''
                  }`
                }
                onClick={handleNavigation}
              >
                {navigationLink.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
