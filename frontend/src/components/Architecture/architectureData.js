// Layout constants for the SVG viewBox. Keeping this separate from the
// component makes the coordinate math legible instead of buried in JSX.
export const VIEW_W = 700;
export const VIEW_H = 580;

const COL_X = [40, 260, 480];
const COL_W = 180;
const WIDE_X = 240;
const WIDE_W = 220;
const NODE_H = 60;
const TIER_Y = { 1: 30, 2: 150, 3: 270, 4: 390, 5: 500 };

function rect(tier, col, { wide = false } = {}) {
  return {
    x: wide ? WIDE_X : COL_X[col],
    y: TIER_Y[tier],
    width: wide ? WIDE_W : COL_W,
    height: NODE_H,
  };
}

export const NODES = [
  {
    id: 'web',
    icon: 'web',
    label: 'Web App',
    desc: 'Browser client consuming the public REST API over HTTPS.',
    ...rect(1, 0),
  },
  {
    id: 'mobile',
    icon: 'mobile',
    label: 'Mobile App',
    desc: 'Native client hitting the same versioned API contract as web.',
    ...rect(1, 1),
  },
  {
    id: 'partners',
    icon: 'partners',
    label: 'Partner Systems',
    desc: 'Third-party integrations authenticated separately from end-user traffic.',
    ...rect(1, 2),
  },
  {
    id: 'gateway',
    icon: 'gateway',
    label: 'API Gateway',
    sublabel: 'Spring Cloud Gateway',
    desc: 'Single entry point handling routing, rate limiting, and auth before requests reach any service.',
    ...rect(2, 1, { wide: true }),
  },
  {
    id: 'user-svc',
    icon: 'service',
    label: 'User Service',
    desc: 'Owns identity, profile, and access control — the only service allowed to write user records.',
    ...rect(3, 0),
  },
  {
    id: 'loan-svc',
    icon: 'service',
    label: 'Loan Service',
    desc: 'Runs workflow-driven loan processing with retry and idempotency handling.',
    ...rect(3, 1),
  },
  {
    id: 'workflow-svc',
    icon: 'service',
    label: 'Workflow Service',
    desc: 'Coordinates multi-step, long-running processes across other services.',
    ...rect(3, 2),
  },
  {
    id: 'kafka',
    icon: 'kafka',
    label: 'Kafka',
    sublabel: 'Event Streaming',
    desc: 'Decouples services with async events, so a slow downstream consumer never blocks the caller.',
    ...rect(4, 1, { wide: true }),
  },
  {
    id: 'redis',
    icon: 'db',
    label: 'Redis',
    desc: 'Caching and short-lived state to keep read-heavy paths fast.',
    ...rect(5, 0),
  },
  {
    id: 'postgres',
    icon: 'db',
    label: 'PostgreSQL',
    desc: 'System of record for transactional data, with strict schema and constraints.',
    ...rect(5, 1),
  },
  {
    id: 'elasticsearch',
    icon: 'db',
    label: 'Elasticsearch',
    desc: 'Indexed search and filtering for high-throughput lookup endpoints.',
    ...rect(5, 2),
  },
];

export const CONNECTIONS = [
  ['web', 'gateway'],
  ['mobile', 'gateway'],
  ['partners', 'gateway'],
  ['gateway', 'user-svc'],
  ['gateway', 'loan-svc'],
  ['gateway', 'workflow-svc'],
  ['user-svc', 'kafka'],
  ['loan-svc', 'kafka'],
  ['workflow-svc', 'kafka'],
  ['kafka', 'redis'],
  ['kafka', 'postgres'],
  ['kafka', 'elasticsearch'],
];

export function nodeById(id) {
  return NODES.find((n) => n.id === id);
}

export function connectorPath(fromId, toId) {
  const from = nodeById(fromId);
  const to = nodeById(toId);
  const x1 = from.x + from.width / 2;
  const y1 = from.y + from.height;
  const x2 = to.x + to.width / 2;
  const y2 = to.y;
  const midY = (y1 + y2) / 2;
  return `M ${x1} ${y1} C ${x1} ${midY} ${x2} ${midY} ${x2} ${y2}`;
}
