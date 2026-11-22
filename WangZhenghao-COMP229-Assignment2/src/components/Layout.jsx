import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout wraps every page with the shared navbar and footer.
 * It also scrolls to the top of the page whenever the route changes.
 */
function Layout() {
  const currentLocation = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentLocation.pathname]);

  return (
    <div className="site-shell">
      <Navbar />
      {/* Outlet renders the matched child route's page component. */}
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
