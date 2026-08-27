import { useEffect, useState } from 'react';
import { PROJECTS } from './projectsData';
import './Projects.css';


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="projects">
        <div className="container projects__container">
          <div className="projects__header">
            <div>
              <span className="projects__eyebrow">
                <span className="projects__eyebrow-icon" aria-hidden="true">
                  <FolderIcon />
                </span>
                04 / FEATURED PROJECTS
              </span>

              <h2>Systems I have built.</h2>

              <p>
                A selection of backend systems, APIs and enterprise applications
                I&apos;ve worked on, focused on reliability, scale and real-world
                engineering problems.
              </p>
            </div>

            <div className="projects__header-meta">
              <span>BACKEND ENGINEERING</span>
              <span>JAVA · SPRING BOOT · DISTRIBUTED SYSTEMS</span>
            </div>
          </div>

          <div className="projects__list">
            {PROJECTS.map((project) => (
              <article
                className={`project-card project-card--${project.accent}`}
                key={project.title}
              >
                <div className="project-card__main">
                  <div className="project-card__number">{project.number}</div>

                  <div className="project-card__category">{project.category}</div>

                  <h3>{project.title}</h3>

                  <p className="project-card__description">{project.description}</p>

                  <div className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <div className="project-highlight" key={highlight}>
                        <span className="project-highlight__dot" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="project-card__button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Read more about ${project.title}`}
                  >
                    Read More
                    <ArrowIcon />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="projects__bottom">
            <div className="projects__bottom-line" />
            <div className="projects__bottom-text">
              <span>15+ SYSTEMS</span>
              <strong>Built around real-world problems.</strong>
            </div>
            <div className="projects__bottom-line" />
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div
      className="project-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={`project-modal__panel project-modal__panel--${project.accent}`}>
        <button
          type="button"
          className="project-modal__close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <CloseIcon />
        </button>

        <div className="project-modal__header">
          <div>
            <span className="project-modal__eyebrow">
              {project.number} / {project.category}
            </span>
            <h2 id="project-modal-title">{project.title}</h2>
            <p>{project.tagline}</p>
          </div>
        </div>

        <div className="project-modal__content">
          <ModalSection title="The problem">
            <p>{project.problem}</p>
          </ModalSection>

          <ModalSection title="What I built">
            <ul>
              {project.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ModalSection>

          {project.contributed.length > 0 && (
            <ModalSection title="Additional contribution">
              <ul>
                {project.contributed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ModalSection>
          )}

          <ModalSection title="Engineering decisions">
            <div className="project-modal__decisions">
              {project.decisions.map((decision) => (
                <div className="project-modal__decision" key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.body}</p>
                </div>
              ))}
            </div>
          </ModalSection>

          <ModalSection title="Technologies">
            <div className="project-modal__technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </ModalSection>

          <ModalSection title="Result">
            <p>{project.result}</p>
          </ModalSection>
        </div>

        <div className="project-modal__footer">
          <span>PROJECT / {project.number}</span>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function ModalSection({ title, children }) {
  return (
    <section className="project-modal__section">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function FolderIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M2.5 5.5a1.5 1.5 0 0 1 1.5-1.5h3.4l1.6 2h7.5a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-12a1.5 1.5 0 0 1-1.5-1.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4 4l10 10M14 4 4 14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
