import './Footer.css';

export default function Footer() {
  return (
    <footer className="contact__footer">
      <div className="container contact__footer-container">

        <div className="contact__footer-brand">
          <strong>NIVAAS R</strong>

          <span className="contact__footer-status">
            <span className="contact__status-dot" />
            SYSTEMS STILL BUILDING
          </span>
        </div>

        <nav className="contact__footer-links" aria-label="Legal">
          <a href="/PortfolioUi/privacy">Privacy Policy</a>
          <a href="/PortfolioUi/terms">Terms of Use</a>
        </nav>

        <span className="contact__footer-copy">
          © {new Date().getFullYear()} Nivaas Ravindran. All rights reserved.
        </span>

      </div>
    </footer>
  );
}