import './Contact.css';

const CONTACT_DETAILS = [
  { label: 'STATUS', value: 'OPEN TO OPPORTUNITIES' },
  { label: 'FOCUS', value: 'SPRING BOOT · MICROSERVICES' },
  { label: 'LOCATION', value: 'CHENNAI · INDIA' },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__container">
        <div className="contact__header">
          <span className="contact__eyebrow">05 / CONTACT</span>
          <h2>Good systems start with a useful conversation.</h2>
          <p>
            I am open to backend engineering opportunities, interesting systems and technically challenging work.
            If there is a problem worth solving, send me a message.
          </p>
        </div>

        <div className="contact__panel">
          <div className="contact__metadata">
            {CONTACT_DETAILS.map((item) => (
              <div className="contact__metadata-item" key={item.label}>
                <span className="contact__metadata-label">{item.label}</span>
                <span className="contact__metadata-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="contact__cta">
            <div className="contact__terminal-label"><span className="contact__terminal-dot" /> connection.available()</div>
            <h3>Have a project, opportunity or idea?</h3>
            <p>Let us talk about backend systems, distributed architecture and problems worth engineering well.</p>
            <a href="mailto:iamnivaasr@gmail.com" className="contact__button">LET'S CONNECT</a>
          </div>

          <div className="contact__system" aria-hidden="true">
            <div className="contact__system-header"><span>SYSTEM</span><span>READY</span></div>
            <div className="contact__system-body">
              <div className="contact__system-ring"><div className="contact__system-core"><span /></div></div>
              <div className="contact__system-lines"><span /><span /><span /></div>
            </div>
            <div className="contact__system-footer"><span>CONTACT</span><span>01</span></div>
          </div>
        </div>

        <div className="contact__links">
          <a href="https://github.com/Nivaas-r" target="_blank" rel="noreferrer" className="contact__link"><span>GITHUB</span><span>↗</span></a>
          <a href="https://www.linkedin.com/in/nivaas-ravindran/" target="_blank" rel="noreferrer" className="contact__link"><span>LINKEDIN</span><span>↗</span></a>
          <a href="mailto:iamnivaasr@gmail.com" className="contact__link"><span>EMAIL</span><span>↗</span></a>
        </div>

        <footer className="contact__footer">
          <div className="contact__footer-brand"><strong>NIVAAS R</strong> <div className="contact__footer-status">
            <span className="contact__status-dot" /> SYSTEMS STILL BUILDING</div></div>
           <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          <span className="contact__footer-copy">© {new Date().getFullYear()} Nivaas Ravindran. All rights reserved.</span>
        </footer>
      </div>
    </section>
  );
}
