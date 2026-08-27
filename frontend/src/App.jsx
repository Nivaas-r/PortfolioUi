import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import LegalPage from './pages/LegalPage';
import './App.css';

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/privacy') {
    return <LegalPage type="privacy" />;
  }

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
      </main>
    </>
  ); 
}

export default App;
