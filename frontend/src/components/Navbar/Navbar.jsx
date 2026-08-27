import { useEffect, useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import resumeFile from '../../assets/documents/resume.pdf';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

// Scrolls to a section and sets the URL correctly: a bare "/" for home
// (not "/#home"), and "/#section" for everything else — without letting
// the browser append hash junk on repeat clicks.
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });

  const newUrl = id === 'home' ? window.location.pathname : `${window.location.pathname}#${id}`;
  window.history.replaceState(null, '', newUrl);
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => setIsMenuOpen(false);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__brand" onClick={(e) => handleNavClick(e, 'home')}>
          <span className="navbar__monogram">NR</span>
          <span className="navbar__identity">
            <span className="navbar__name">Nivaas Ravindran</span>
          </span>
        </a>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            href={resumeFile}
            download="Nivaas_Ravindran_Resume.pdf"
            className="navbar__resume navbar__resume--desktop"
          >
            Resume
            <ArrowIcon />
          </a>

          <button
            type="button"
            className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--open' : ''}`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-links" aria-label="Mobile primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__mobile-link ${activeId === link.id ? 'navbar__mobile-link--active' : ''}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={resumeFile}
          download="Nivaas_Ravindran_Resume.pdf"
          className="navbar__resume navbar__resume--mobile"
          onClick={handleLinkClick}
        >
          Download Resume
          <ArrowIcon />
        </a>
      </div>
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7h8M8 3.5 11.5 7 8 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
