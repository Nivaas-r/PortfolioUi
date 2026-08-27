import './Projects.css';

const PROJECTS = [
  {
    number: '01',
    category: 'WORKFLOW ORCHESTRATION',
    title: 'Loan Processing Orchestrator',
    description:
      'A distributed backend system designed to orchestrate loan-processing workflows with asynchronous event processing, retries and reliable service-to-service communication.',

    highlights: [
      'Workflow orchestration',
      'Event-driven processing',
      'Retry & failure handling',
      'Production monitoring',
    ],

    technologies: [
      'Java',
      'Spring Boot',
      'Kafka',
      'PostgreSQL',
      'Redis',
    ],

    architecture: [
      'REST API',
      'Orchestrator',
      'Kafka',
      'Worker Services',
      'PostgreSQL',
    ],

    accent: 'blue',
  },

  {
    number: '02',
    category: 'HIGH-CONCURRENCY APIs',
    title: 'Vehicle Search & Configurator API',
    description:
      'High-performance backend APIs powering vehicle search, configuration and inventory workflows across multiple automotive brands.',

    highlights: [
      'High-concurrency REST APIs',
      'Search & filtering',
      'Inventory synchronization',
      'Caching & performance',
    ],

    technologies: [
      'Java',
      'Spring Boot',
      'MongoDB',
      'Elasticsearch',
      'Redis',
    ],

    architecture: [
      'Client',
      'REST APIs',
      'Search Layer',
      'Redis',
      'MongoDB',
    ],

    accent: 'violet',
  },

  {
    number: '03',
    category: 'ENTERPRISE SYSTEM',
    title: 'Enterprise Management System',
    description:
      'An enterprise MVC application focused on user management, role-based access control and resource planning workflows.',

    highlights: [
      'User management',
      'Role-based access control',
      'Resource planning',
      'Reporting & analytics',
    ],

    technologies: [
      'Java',
      'Spring Boot',
      'MySQL',
      'JPA',
      'RBAC',
    ],

    architecture: [
      'React',
      'REST API',
      'Business Layer',
      'MySQL',
      'Reporting',
    ],

    accent: 'pink',
  },
];

function ArchitectureVisual({ project }) {
  return (
    <div className={`project-visual project-visual--${project.accent}`}>

      <div className="project-visual__label">SYSTEM FLOW</div>

      <div className="project-flow">

        {project.architecture.map((item, index) => (
          <div
            className="project-flow__step"
            key={item}
          >
            <div className="project-flow__node">
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="project-flow__name">
              {item}
            </div>

            {index !== project.architecture.length - 1 && (
              <div className="project-flow__line">
                <span />
              </div>
            )}
          </div>
        ))}

      </div>

    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects"
    >
      <div className="container projects__container">

        {/* =========================
            HEADER
        ========================== */}

        <div className="projects__header">

          <div>

            <span className="projects__eyebrow">
              <span
                className="projects__eyebrow-icon"
                aria-hidden="true"
              >
                ◇
              </span>

              04 / FEATURED PROJECTS
            </span>

            <h2>
              Systems I have built.
            </h2>

            <p>
              A selection of backend systems, APIs and
              enterprise applications I've worked on,
              focused on reliability, scale and real-world
              engineering problems.
            </p>

          </div>

          <div className="projects__header-meta">
            <span>BACKEND ENGINEERING</span>
            <span>JAVA · SPRING BOOT · DISTRIBUTED SYSTEMS</span>
          </div>

        </div>


        {/* =========================
            PROJECT LIST
        ========================== */}

        <div className="projects__list">

          {PROJECTS.map((project) => (

            <article
              className={`project-card project-card--${project.accent}`}
              key={project.title}
            >

              {/* LEFT */}

              <div className="project-card__main">

                <div className="project-card__number">
                  {project.number}
                </div>

                <div className="project-card__category">
                  {project.category}
                </div>

                <h3>
                  {project.title}
                </h3>

                <p className="project-card__description">
                  {project.description}
                </p>


                {/* Highlights */}

                <div className="project-highlights">

                  {project.highlights.map(
                    (highlight) => (
                      <div
                        className="project-highlight"
                        key={highlight}
                      >
                        <span className="project-highlight__dot" />
                        {highlight}
                      </div>
                    )
                  )}

                </div>


                {/* Technologies */}

                <div className="project-technologies">

                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>


              {/* RIGHT */}

              <ArchitectureVisual
                project={project}
              />

            </article>

          ))}

        </div>


        {/* =========================
            BOTTOM STATEMENT
        ========================== */}

        <div className="projects__bottom">

          <div className="projects__bottom-line" />

          <div className="projects__bottom-text">
            <span>
              15+ SYSTEMS
            </span>

            <strong>
              Built around real-world problems.
            </strong>
          </div>

          <div className="projects__bottom-line" />

        </div>

      </div>
    </section>
  );
}
