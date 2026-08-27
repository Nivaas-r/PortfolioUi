import './Terminal.css';

const LINES = [
  { command: 'whoami' },
  { output: 'Nivaas Ravindran' },
  { break: true },
  { command: 'role' },
  { output: 'Backend Systems' },
  { break: true },
  { command: 'java --version' },
  { output: 'openjdk version "17.0.10" 2024-01-16' },
  { break: true },
  { command: 'cat mission.txt' },
  { output: 'Building backend systems that hold up', highlight: true },
  { output: 'under real production conditions.', highlight: true },
];

export default function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal__titlebar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__titlebar-label">nivaas@portfolio</span>
      </div>

      <pre className="terminal__body" aria-label="Terminal session showing basic identity commands">
        {LINES.map((line, i) => {
          if (line.break) return <br key={i} />;
          if (line.command) {
            return (
              <div key={i} className="terminal__line">
                <span className="terminal__prompt">nivaas@portfolio:~$</span> {line.command}
              </div>
            );
          }
          return (
            <div
              key={i}
              className={`terminal__line ${line.highlight ? 'terminal__line--highlight' : 'terminal__line--output'}`}
            >
              {line.output}
            </div>
          );
        })}
        <div className="terminal__line">
          <span className="terminal__prompt">nivaas@portfolio:~$</span>{' '}
          <span className="terminal__cursor" aria-hidden="true" />
        </div>
      </pre>
    </div>
  );
}
