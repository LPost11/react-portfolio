/**
 * PageBanner shows the title and short subtitle at the top of inner pages.
 * Keeping it as a shared component gives every page a consistent look.
 */
function PageBanner({ title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageBanner;
