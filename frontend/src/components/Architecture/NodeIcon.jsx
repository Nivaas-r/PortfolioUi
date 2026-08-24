// Minimal 20x20 line icons, positioned by the parent via a <g transform>.
// Deliberately reused/simple shapes rather than per-tech brand icons —
// the point is one visual language, not a logo wall.

function Web() {
  return (
    <>
      <rect x="1" y="2" width="18" height="12" rx="1.5" />
      <path d="M6 17h8M10 14v3" strokeLinecap="round" />
    </>
  );
}

function Mobile() {
  return (
    <>
      <rect x="5" y="1" width="10" height="18" rx="2" />
      <path d="M9 16h2" strokeLinecap="round" />
    </>
  );
}

function Partners() {
  return (
    <>
      <circle cx="6" cy="7" r="2.6" />
      <circle cx="14" cy="7" r="2.6" />
      <path d="M2 17c0-2.8 1.8-4.5 4-4.5s4 1.7 4 4.5M10 17c0-2.8 1.8-4.5 4-4.5s4 1.7 4 4.5" strokeLinecap="round" />
    </>
  );
}

function Gateway() {
  return (
    <>
      <path d="M10 1 18 5.5v9L10 19 2 14.5v-9L10 1Z" />
      <circle cx="10" cy="10" r="2.4" />
    </>
  );
}

function ServiceIcon() {
  return (
    <>
      <circle cx="10" cy="10" r="3" />
      <path
        d="M10 2v2.4M10 15.6V18M18 10h-2.4M4.4 10H2M15.5 4.5l-1.7 1.7M6.2 13.8l-1.7 1.7M15.5 15.5l-1.7-1.7M6.2 6.2 4.5 4.5"
        strokeLinecap="round"
      />
    </>
  );
}

function Kafka() {
  return (
    <>
      <circle cx="4" cy="4" r="2.2" />
      <circle cx="4" cy="16" r="2.2" />
      <circle cx="16" cy="10" r="2.2" />
      <path d="M6 5.2 14 9M6 14.8 14 11" strokeLinecap="round" />
    </>
  );
}

function Db() {
  return (
    <>
      <ellipse cx="10" cy="4.5" rx="7.5" ry="2.8" />
      <path
        d="M2.5 4.5V15c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V4.5M2.5 9.7c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8"
        strokeLinecap="round"
      />
    </>
  );
}

const ICONS = {
  web: Web,
  mobile: Mobile,
  partners: Partners,
  gateway: Gateway,
  service: ServiceIcon,
  kafka: Kafka,
  db: Db,
};

export default function NodeIcon({ type, x, y }) {
  const Icon = ICONS[type] ?? ServiceIcon;
  return (
    <g
      transform={`translate(${x}, ${y})`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <Icon />
    </g>
  );
}
