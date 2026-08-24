import Architecture from '../Architecture/Architecture';
import './Hero.css';

const PROOF_POINTS = [
  { value: '4+', label: 'Years Experience' },
  { value: '15+', label: 'Projects / Systems' },
  { value: '100%', label: 'Engineering Focus' },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-section__grid container">
        <div className="hero-content">
          <span className="hero-content__eyebrow">
            <CodeIcon /> Java Backend Engineer
          </span>

          <h1 className="hero-content__headline">
            Building scalable,
            <br />
            reliable &amp; secure
            <br />
            <span className="hero-content__headline-accent">backend systems</span>
          </h1>

          <p className="hero-content__subtext">
            I design and build high-performance backend applications, distributed
            systems and data pipelines that solve real world problems and create
            impact.
          </p>

          <div className="hero-content__ctas">
            <a href="#projects" className="btn btn--primary">
              View My Work
              <ArrowIcon />
            </a>
            <a href="#contact" className="btn btn--secondary">
              Let&rsquo;s Connect
            </a>
          </div>

          <dl className="hero-content__proof">
            {PROOF_POINTS.map((point) => (
              <div key={point.label} className="hero-content__proof-item">
                <dt className="hero-content__proof-value">{point.value}</dt>
                <dd className="hero-content__proof-label">{point.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-architecture">
          <Architecture />
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7h8M8 3.5 11.5 7 8 10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M5 3 1.5 7 5 11M9 3l3.5 4L9 11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
