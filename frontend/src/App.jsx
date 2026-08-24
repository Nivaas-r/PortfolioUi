import Navbar from './components/Navbar/Navbar';
import './App.css';

// Placeholder sections so the navbar's scroll-linking and active-state
// indicator can be verified end to end. Each gets replaced with its
// real component in a later milestone (Hero in M3, About in M4, etc).
const PLACEHOLDER_SECTIONS = [
  { id: 'home', label: 'Home — Hero + Architecture (Milestone 3)' },
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
