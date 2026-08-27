import profilePortrait from '../../assets/images/profile-photo.jpg';
import './About.css';

const APPROACH = [
  { number: '01', title: 'Understand the system', text: 'Start with the business problem, data flow and constraints before choosing a technical solution.' },
  { number: '02', title: 'Design for failure', text: 'Think through retries, dependencies, data consistency, observability and the paths where things can break.' },
  { number: '03', title: 'Build deliberately', text: 'Turn the design into maintainable services, APIs, tests and delivery pipelines.' },
  { number: '04', title: 'Measure the result', text: 'Use logs, metrics and real outcomes to find bottlenecks and improve the system over time.' },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-section__heading">
          <div>
            <span className="section-eyebrow">01 / ABOUT</span>
            <h2>Backend thinking shaped by real systems.</h2>
          </div>
          <p>
            I work on APIs, services and data-driven workflows where reliability matters.
            I like understanding the complete path from an incoming request to the data and downstream services behind it.
          </p>
        </div>

        <div className="about-intro">
          <figure className="about-card about-card--portrait">
            <div className="portrait-frame">
              <img src={profilePortrait} alt="Nivaas Ravindran" className="portrait-frame__image" />
              <figcaption className="portrait-frame__caption">
                <span className="portrait-frame__status" aria-hidden="true" />
                <span>\\Hello world!! Nivaas Ravindran Here..</span>
              </figcaption>
            </div>
          </figure>

          <article className="about-card about-card--story">
            <span className="card-label">01 / ABOUT ME</span>
            <h3>I build backend systems that have to keep working when things get complicated.</h3>
            <p>
              My work centres on Java, Spring Boot, microservices, messaging, caching and databases.
              The interesting part is how those pieces behave together in production.
            </p>
            <p>
              I pay attention to traffic growth, dependency failures, duplicate messages, data movement and the operational details that turn a working service into a dependable one.
            </p>
            <div className="about-card__signature" aria-label="Core areas">
              <span>Java</span><span>Spring Boot</span><span>Distributed systems</span>
            </div>
          </article>
        </div>

        <article className="about-card about-card--approach">
          <div className="card-header-row">
            <div>
              <span className="card-label">02 / HOW I WORK</span>
              <h3>Engineering decisions, from first constraint to production.</h3>
            </div>
            <span className="card-code">/engineering.approach</span>
          </div>
          <div className="approach-list">
            {APPROACH.map((item) => (
              <div className="approach-item" key={item.number}>
                <span className="approach-item__number">{item.number}</span>
                <div><h4>{item.title}</h4><p>{item.text}</p></div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
