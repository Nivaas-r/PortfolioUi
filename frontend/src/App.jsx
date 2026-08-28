import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';

import Hero from './components/Hero/Hero';

import About from './components/About/About';

import Experience from './components/Experience/Experience';

import Projects from './components/Projects/Projects';

import Contact from './components/Contact/Contact';

import LegalPage from './pages/LegalPage';

import './App.css';

import Footer from './components/Footer/Footer';


// Legal pages use hash-based routing (#/privacy, #/terms) instead of
// real paths (/privacy, /terms). GitHub Pages is static-only — it has
// no server to fall back to index.html for an unknown path, so a real
// path 404s on direct visit or refresh. A hash fragment never reaches
// the server at all, so it always loads index.html first, then this
// reads the hash client-side. Ordinary section anchors (#about,
// #projects, etc.) are untouched by this and keep working exactly as
// before — only the two legal routes use the leading "/" to stay
// distinguishable from a plain section id.
function getLegalPageFromHash() {
  const hash = window.location.hash;
  if (hash === '#/privacy') return 'privacy';
  if (hash === '#/terms') return 'terms';
  return null;
}

function App() {
  const [legalPage, setLegalPage] = useState(getLegalPageFromHash());

  useEffect(() => {
    const onHashChange = () => setLegalPage(getLegalPageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (legalPage) {
    return <LegalPage type={legalPage} />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Experience />

        <Projects />

        <Contact />

        <Footer />
      </main>
    </>
  );
}

export default App;
