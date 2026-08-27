import { useEffect, useRef, useState } from 'react';
import { EXPERIENCES } from './experienceData';
import './Experience.css';

const MILESTONES = [
  { x: 300, y: 300 },
  { x: 700, y: 650 },
  { x: 300, y: 1000 },
  { x: 700, y: 1350 },
];

const PATH_D = 'M500 30 C500 150 300 170 300 300 S700 480 700 650 S300 820 300 1000 S700 1170 700 1350 C700 1430 620 1515 500 1560';

export default function Experience() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateTimeline = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const travel = Math.max(section.offsetHeight - viewportHeight * 0.55, 1);
      const nextProgress = Math.min(1, Math.max(0, (viewportHeight * 0.55 - rect.top) / travel));
      setProgress(nextProgress);
      setActiveIndex(Math.min(EXPERIENCES.length - 1, Math.floor(nextProgress * EXPERIENCES.length)));
    };
    updateTimeline();
    window.addEventListener('scroll', updateTimeline, { passive: true });
    window.addEventListener('resize', updateTimeline);
    return () => {
      window.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
    };
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="experience">
      <div className="container experience__container">
        <div className="experience__heading">
          <div className="experience__heading-copy">
            <span className="experience__eyebrow">03 / EXPERIENCE</span>
            <h2>Four stages. One engineering thread.</h2>
            <p>Each role added a different kind of system constraint, from maritime scheduling to high-concurrency APIs and workflow orchestration.</p>
          </div>
          <span className="experience__progress-label">{EXPERIENCES[activeIndex].year}<span>/</span>{EXPERIENCES[activeIndex].stage}</span>
        </div>

        <div className="experience__journey" style={{ '--timeline-progress': progress }}>
          <svg className="experience__svg" viewBox="0 0 1000 1580" preserveAspectRatio="none" aria-hidden="true">
            <path className="experience__path-base" d={PATH_D} />
            <path className="experience__path-progress" pathLength="1" d={PATH_D} style={{ strokeDashoffset: 1 - progress }} />
            {MILESTONES.map((milestone, index) => (
              <g key={`${milestone.x}-${milestone.y}`}>
                <circle className={`experience__node ${index <= activeIndex ? 'experience__node--active' : ''}`} cx={milestone.x} cy={milestone.y} r="10" />
                <circle className="experience__node-core" cx={milestone.x} cy={milestone.y} r="3" />
              </g>
            ))}
          </svg>

          <div className="experience__milestones">
            {EXPERIENCES.map((item, index) => (
              <article className={`experience-card experience-card--${index % 2 === 0 ? 'left' : 'right'} ${index === activeIndex ? 'experience-card--active' : ''}`} key={`${item.year}-${item.company}`}>
                <div className="experience-card__year">{item.year}</div>
                <div className="experience-card__content">
                  <div className="experience-card__topline">
                    <span className="experience-card__stage">{item.stage}</span>
                    <span className="experience-card__period">{item.period}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <p className="experience-card__company">{item.company}</p>
                  <p className="experience-card__summary">{item.summary}</p>
                  <div className="experience-card__technologies">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__footer">
          <span className="experience__footer-line" />
          <span>2022 → 2026</span>
          <span className="experience__footer-line" />
          <strong>Still building.</strong>
        </div>
      </div>
    </section>
  );
}
