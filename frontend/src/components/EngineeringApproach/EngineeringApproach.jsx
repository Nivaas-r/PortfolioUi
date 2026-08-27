import { APPROACH_ITEMS } from './approachData';
import './EngineeringApproach.css';

export default function EngineeringApproach() {
  return (
    <div className="approach">
      <div className="approach__header">
        <CodeIcon />
        <span>My Engineering Approach</span>
      </div>

      <ul className="approach__list">
        {APPROACH_ITEMS.map((item) => (
          <li key={item.id} className="approach__item">
            <span className="approach__icon">
              <Icon type={item.icon} />
            </span>
            <div>
              <p className="approach__title">{item.title}</p>
              <p className="approach__desc">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Icon({ type }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  switch (type) {
    case 'search':
      return (
        <svg {...common}>
          <circle cx="8.5" cy="8.5" r="5.5" />
          <path d="m17 17-4.3-4.3" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...common}>
          <path d="m10 2 8 4-8 4-8-4 8-4Z" />
          <path d="m2 10 8 4 8-4" />
          <path d="m2 14 8 4 8-4" />
        </svg>
      );
    case 'gear':
      return (
        <svg {...common}>
          <circle cx="10" cy="10" r="3" />
          <path d="M10 2v2.4M10 15.6V18M18 10h-2.4M4.4 10H2M15.5 4.5l-1.7 1.7M6.2 13.8l-1.7 1.7M15.5 15.5l-1.7-1.7M6.2 6.2 4.5 4.5" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...common}>
          <path d="M3 17V9M9.5 17V3M16 17v-6" />
        </svg>
      );
    default:
      return null;
  }
}

function CodeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
