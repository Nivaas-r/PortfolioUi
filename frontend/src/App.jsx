import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';

// Sections not yet built. Removed one by one as later milestones land
// (About in M4, Experience in M5, Projects in M6, Contact in M7).
const PLACEHOLDER_SECTIONS = [
  { id: 'about', label: 'About + Engineering Approach (Milestone 4)' },
  { id: 'experience', label: 'Experience (Milestone 5)' },
  { id: 'projects', label: 'Featured Projects (Milestone 6)' },
  { id: 'contact', label: 'Contact (Milestone 7)' },
];

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {PLACEHOLDER_SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="placeholder-section">
            <p className="placeholder-section__label">{section.label}</p>
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
