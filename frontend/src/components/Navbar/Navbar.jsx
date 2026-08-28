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

function getBaseUrl() {
  return import.meta.env.BASE_URL || '/';
}

function isLegalPage() {
  const hash = window.location.hash;
  return hash === '#/privacy' || hash === '#/terms';
}

function navigateToSection(id) {
  const baseUrl = getBaseUrl();

  if (!isLegalPage()) {
    const element = document.getElementById(id);

    if (element) {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      element.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      const newUrl =
        id === 'home'
          ? `${baseUrl}`
          : `${baseUrl}#${id}`;

      window.history.replaceState(null, '', newUrl);
    }

    return;
  }

  /*
   * We're on a #/terms or #/privacy hash — navigate back to the
   * actual portfolio content with the requested section hash.
   *
   * Example: #/terms -> #about
   */
  const targetUrl =
    id === 'home'
      ? `${baseUrl}`
      : `${baseUrl}#${id}`;

  window.location.href = targetUrl;
  // Same-document hash change fires 'hashchange' automatically —
  // App.jsx listens for it and swaps back to the normal layout.
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  /*
   * When arriving at the portfolio page through:
   *
   * /PortfolioUi/#about
   *
   * wait for React to render the sections,
   * then scroll to the requested section.
   */
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const id = hash.substring(1);

    if (!SECTION_IDS.includes(id)) return;

    const scrollToHash = () => {
      const element = document.getElementById(id);

      if (!element) return;

      const headerHeight = 72;

      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top,
        behavior: 'auto',
      });
    };

    /*
     * Give React a moment to mount the complete portfolio.
     */
    const timer = setTimeout(scrollToHash, 50);

    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (event, id) => {
    event.preventDefault();

    navigateToSection(id);

    setIsMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${
        isScrolled ? 'navbar--scrolled' : ''
      }`}
    >
      <div className="navbar__inner container">

        {/* BRAND */}
        <a
          href={getBaseUrl()}
          className="navbar__brand"
          onClick={(event) => handleLinkClick(event, 'home')}
        >
          <span className="navbar__monogram">
            NR
          </span>

          <span className="navbar__identity">
            <span className="navbar__name">
              Nivaas Ravindran
            </span>
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="navbar__links navbar__links--desktop"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={
                link.id === 'home'
                  ? getBaseUrl()
                  : `${getBaseUrl()}#${link.id}`
              }
              className={`navbar__link ${
                activeId === link.id
                  ? 'navbar__link--active'
                  : ''
              }`}
              onClick={(event) =>
                handleLinkClick(event, link.id)
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="navbar__actions">

          <a
            href={resumeFile}
            download="Nivaas_Ravindran_Resume.pdf"
            className="navbar__resume navbar__resume--desktop"
          >
            Resume
            <DownloadIcon />
          </a>

          <button
            type="button"
            className={`navbar__toggle ${
              isMenuOpen
                ? 'navbar__toggle--open'
                : ''
            }`}
            aria-label={
              isMenuOpen
                ? 'Close menu'
                : 'Open menu'
            }
            aria-expanded={isMenuOpen}
            onClick={() =>
              setIsMenuOpen((open) => !open)
            }
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`navbar__mobile ${
          isMenuOpen
            ? 'navbar__mobile--open'
            : ''
        }`}
      >
        <nav
          className="navbar__mobile-links"
          aria-label="Mobile primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={
                link.id === 'home'
                  ? getBaseUrl()
                  : `${getBaseUrl()}#${link.id}`
              }
              className={`navbar__mobile-link ${
                activeId === link.id
                  ? 'navbar__mobile-link--active'
                  : ''
              }`}
              onClick={(event) =>
                handleLinkClick(event, link.id)
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={resumeFile}
          download="Nivaas_Ravindran_Resume.pdf"
          className="navbar__resume navbar__resume--mobile"
          onClick={() =>
            setIsMenuOpen(false)
          }
        >
          Download Resume
          <DownloadIcon />
        </a>
      </div>
    </header>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 2v7M4 6.5 7 9.5l3-3M2.5 12h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}