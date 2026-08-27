import { useState } from 'react';
import NodeIcon from './NodeIcon';
import { NODES, CONNECTIONS, connectorPath, VIEW_W, VIEW_H, nodeById } from './architectureData';
import './Architecture.css';

const DEFAULT_CAPTION = {
  label: 'System Architecture',
  desc: 'Hover or focus any node to see what it does. This is the same request-flow pattern behind the projects below.',
};

export default function Architecture() {
  const [activeId, setActiveId] = useState(null);
  const active = activeId ? nodeById(activeId) : null;

  return (
    <div className="architecture">
      <div className="architecture__header">
        <CodeIcon />
        <span>System Architecture I Build</span>
      </div>

      <svg
        className="architecture__diagram"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="img"
        aria-label="Diagram of a typical backend system: clients call an API gateway, which routes to microservices, which publish events through Kafka to Redis, PostgreSQL, and Elasticsearch."
      >


        <g className="architecture__connectors">
          {CONNECTIONS.map(([from, to]) => (
            <path
              key={`${from}-${to}`}
              d={connectorPath(from, to)}
              className={`connector ${activeId === from || activeId === to ? 'connector--active' : ''}`}
            />
          ))}
        </g>

        <g>
          {NODES.map((node) => {
            const isActive = activeId === node.id;
            return (
              <g
                key={node.id}
                className={`node ${isActive ? 'node--active' : ''}`}
                tabIndex={0}
                role="button"
                aria-label={`${node.label}${node.sublabel ? `, ${node.sublabel}` : ''}. ${node.desc}`}
                onMouseEnter={() => setActiveId(node.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(node.id)}
                onBlur={() => setActiveId(null)}
              >
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.width}
                  height={node.height}
                  rx="10"
                  className="node__rect"
                />
                <NodeIcon type={node.icon} x={node.x + 14} y={node.y + (node.sublabel ? 12 : 20)} />
                <text
                  x={node.x + 42}
                  y={node.y + (node.sublabel ? 27 : 34)}
                  className="node__label"
                >
                  {node.label}
                </text>
                {node.sublabel && (
                  <text x={node.x + 42} y={node.y + 43} className="node__sublabel">
                    {node.sublabel}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      <div className="architecture__caption" aria-live="polite">
        <span className="architecture__caption-label">{(active ?? DEFAULT_CAPTION).label}</span>
        <span className="architecture__caption-desc">{(active ?? DEFAULT_CAPTION).desc}</span>
      </div>
    </div>
  );
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
