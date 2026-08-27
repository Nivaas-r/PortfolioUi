export const PROJECTS = [
  {
    number: '01',
    category: 'WORKFLOW ORCHESTRATION',
    title: 'Loan Processing Orchestrator',
    tagline: 'Distributed workflow system for multi-partner loan processing',
    description:
      'A distributed backend system designed to orchestrate loan-processing workflows with asynchronous event processing, retries and reliable service-to-service communication.',
    highlights: [
      'Workflow orchestration',
      'Event-driven processing',
      'Retry & failure handling',
      'Production monitoring',
    ],
    technologies: ['Java', 'Spring Boot', 'Kafka', 'Airflow', 'PostgreSQL', 'SFTP'],
    problem:
      "Partner institutions fed loan applications through different channels — some via API, others by dropping files into an SFTP folder structure organized by batch, year, month, day, and customer ID. Each partner also followed its own workflow, tracked through an action-to-progress-ID mapping per step. The SFTP ingestion trigger ran once per day against that day's folder, so a correction uploaded afterward could be silently ignored until the next cycle.",
    built: [
      'Reworked the SFTP ingestion trigger to detect and process same-day re-uploads instead of only picking up the first file of the day.',
      'Added regex-based validation at ingestion to catch malformed partner data before it reached the sanctioning stage.',
    ],
    contributed: [
      "Bug-fixing on the existing Kafka-based retry mechanism that re-queues a partner's Airflow trigger by time window and priority when a scheduled run is missed.",
    ],
    decisions: [
      {
        title: 'Same-day re-upload detection over a full re-architecture',
        body: 'The fix targeted the specific failure mode — same-day corrections being dropped — rather than redesigning the ingestion trigger from scratch, minimizing risk to a system already handling live partner data.',
      },
      {
        title: 'Validation at ingestion, not at sanctioning',
        body: 'Regex checks were placed at the earliest possible point in the pipeline so malformed data fails fast and visibly instead of surfacing as a harder-to-diagnose downstream error.',
      },
    ],
    result:
      "Partner corrections that previously waited until the next day's cycle can now process the same day. Malformed uploads are caught at ingestion instead of failing further downstream in the workflow.",
    accent: 'blue',
  },
  {
    number: '02',
    category: 'HIGH-CONCURRENCY APIs',
    title: 'Vehicle Search & Configurator API',
    tagline: 'High-throughput search and configuration APIs for a large automotive platform',
    description:
      'Backend APIs powering vehicle search, configuration and inventory workflows across multiple automotive brands.',
    highlights: [
      'High-concurrency REST APIs',
      'Search & filtering',
      'Inventory synchronization',
      'Caching & performance',
    ],
    technologies: ['Java', 'Spring Boot', 'Elasticsearch', 'JUnit', 'Mockito', 'AOP'],
    problem:
      "This was a large-scale automotive enterprise platform with GM as the client. A single Vehicle Search Results page involved 7+ teams, each running 10–15 services. My work sat in the Search, Configurator, and Facets APIs. The platform ingests GM's AVIP feed, which arrives as unstructured data that has to be mapped into a queryable structure before search or filtering can work against it.",
    built: [
      'JUnit test suites across 12+ services, reaching 90–100% code coverage and 80–90% branch coverage, using Augment AI to accelerate the work.',
      'AOP-based logging implemented across the majority of these services as cross-cutting observability infrastructure.',
      'A regional pricing concession added to the costing logic during a flood-driven market disruption in the US.',
    ],
    contributed: [
      "Cross-team collaboration with the chatbot group, porting the search API's logic into their implementation.",
    ],
    decisions: [
      {
        title: 'Elasticsearch to structure unstructured partner data',
        body: "GM's AVIP feed arrives unstructured. Elasticsearch maps it into queryable key-value structures, enabling fast search and filtering on data that does not start out query-ready.",
      },
      {
        title: 'AOP for logging instead of per-service manual instrumentation',
        body: 'Aspect-oriented logging was applied across services rather than adding logging statements service by service, providing consistent cross-cutting observability.',
      },
    ],
    result:
      "The majority of owned services reached 90–100% code coverage, reducing regression risk across a fleet of 12+ services. Logging visibility became consistent across services, and search logic was reused in the chatbot team's implementation.",
    accent: 'blue',
  },
  {
    number: '03',
    category: 'ENTERPRISE SYSTEM',
    title: 'Enterprise Management System',
    tagline: 'User management and resource planning for an internal enterprise platform',
    description:
      'An enterprise MVC application focused on user management, role-based access control and resource planning workflows.',
    highlights: [
      'User management',
      'Role-based access control',
      'Resource planning',
      'Reporting & analytics',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'RBAC'],
    problem:
      'The platform needed centralized user management and resource planning with secure, auditable, role-based access, replacing a less structured approach to who could see and do what across the system.',
    built: [
      'Authentication and role-based access control for the User Management module, scoping access by role rather than ad hoc permission checks.',
      'Resource tracking and allocation logic for the Resource Planning module, structuring how resources were tracked and assigned.',
    ],
    contributed: [],
    decisions: [
      {
        title: 'Role-based access over per-user permission checks',
        body: 'RBAC centralizes what each role can see and do in one place instead of scattering permission logic through individual features, making the platform easier to audit and reason about as it grows.',
      },
    ],
    result:
      'Delivered under Agile/Scrum with regular sprint planning and stand-ups. Established secure, role-scoped access and a more structured model for resource tracking than the ad hoc approach it replaced.',
    accent: 'blue',
  },
  {
    number: '04',
    category: 'MARITIME SYSTEMS',
    title: 'Freight Information System (FIS)',
    tagline: 'End-to-end maritime vessel and port operations tracking',
    description:
      'A schedule-management system for tracking vessel schedules, port calls and operational timings as part of the Solverminds maritime platform.',
    highlights: [
      'Vessel schedule management',
      'ETA / ETD tracking',
      'Port operations',
      'Legacy migration',
    ],
    technologies: ['Spring Boot', 'Kafka', 'IBM DB2', 'DDD', 'React.js'],
    problem:
      'A maritime client needed end-to-end tracking of vessel schedules and port operations, including ETA/ETD handling and monitoring across ports. The team was mid-way through migrating the system from Servlets to Spring Boot. I joined as the first fresher onboarded onto a team where everyone else had 8+ years of experience.',
    built: [
      'Spring Boot services for ship-schedule management as part of the Servlet-to-Spring-Boot migration.',
      'Backend integration with real-time maritime data feeds, including secure access controls and data validation.',
      'React.js/Redux frontend features supporting the schedule-management UI.',
    ],
    contributed: [],
    decisions: [
      {
        title: 'Domain value objects instead of raw variables',
        body: 'This project is where I first applied domain-driven design properly, modeling maritime concepts such as schedules and port calls as domain value objects rather than passing raw primitives around. That discipline shaped how I structure services since.',
      },
      {
        title: 'Learning event-driven patterns through a live Kafka integration',
        body: 'Working with Kafka here, alongside IBM DB2 and a proper Scrum/SDLC process, is where the event-driven and structured-delivery practices I still use came from — through a legacy system that had to keep working while it was being rebuilt.',
      },
    ],
    result:
      "This was not a metrics-driven project; its value was foundational. It is where I built a working understanding of domain-driven design, event-driven systems and disciplined SDLC as the newest engineer on a senior team navigating a live legacy migration.",
    accent: 'blue',
  },
];