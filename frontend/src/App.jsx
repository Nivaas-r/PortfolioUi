import Navbar from './components/Navbar/Navbar';

import Hero from './components/Hero/Hero';

import About from './components/About/About';

import Experience from './components/Experience/Experience';

import Projects from './components/Projects/Projects';

import Contact from './components/Contact/Contact';

import LegalPage from './pages/LegalPage';

import './App.css';

import Footer from './components/Footer/Footer';


function App() {


  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

  // Remove trailing slash from current URL
  const currentPath =
    window.location.pathname.replace(/\/$/, '') || '/';

  
  const path =
    currentPath.startsWith(basePath)
      ? currentPath.slice(basePath.length) || '/'
      : currentPath;


  // Privacy Policy
  if (path === '/privacy') {
    return <LegalPage type="privacy" />;
  }


  // Terms of Use
  if (path === '/terms') {
    return <LegalPage type="terms" />;
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