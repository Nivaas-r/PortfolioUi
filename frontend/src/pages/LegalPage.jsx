import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './LegalPage.css';

const LAST_UPDATED = '27 August 2026';

const CONTENT = {
  privacy: {
    eyebrow: 'LEGAL / PRIVACY',
    title: 'Privacy Policy',
    intro:
      'This policy explains how this portfolio website handles information when you browse the site, follow an external link, or contact Nivaas through the contact details provided here.',
    sections: [
      {
        title: '1. Information this website collects',
        paragraphs: [
          'This portfolio does not currently provide an account system, newsletter, shopping flow, or on-site contact form. It therefore does not intentionally collect a visitor profile through those features.',
          'If you contact Nivaas using an external email client or another third-party service, the information you choose to send is handled by that service and by Nivaas for the purpose of responding to you.'
        ]
      },
      {
        title: '2. Technical information',
        paragraphs: [
          'Like most websites, the hosting or infrastructure used to serve this site may process limited technical information such as IP address, browser type, device information, request timestamps, and error logs. This information is generally used to operate, secure, and troubleshoot the website.',
          'This portfolio itself does not use that information to build a marketing profile.'
        ]
      },
      {
        title: '3. Cookies and analytics',
        paragraphs: [
          'The portfolio is not designed around advertising cookies or behavioural tracking. If analytics or another third-party tracking service is added in the future, this policy should be updated to describe that service and its data practices.'
        ]
      },
      {
        title: '4. External websites',
        paragraphs: [
          'The portfolio contains links to services such as GitHub, LinkedIn, and email. Those services operate under their own privacy policies and terms. Review the relevant third-party policy before submitting information to an external service.'
        ]
      },
      {
        title: '5. Resume and downloadable files',
        paragraphs: [
          'The resume available from this website is provided for professional and recruitment purposes. Downloading a file may be recorded by the website hosting infrastructure as a normal technical request.'
        ]
      },
      {
        title: '6. Data retention',
        paragraphs: [
          'Messages or professional enquiries that Nivaas receives may be retained for as long as reasonably necessary to respond to the enquiry, maintain professional records, or comply with applicable obligations. Hosting logs are controlled by the relevant hosting provider according to its retention practices.'
        ]
      },
      {
        title: '7. Your choices',
        paragraphs: [
          'You can choose not to provide personal information through an external contact method. You can also use your browser settings to control cookies and other local storage where applicable.'
        ]
      },
      {
        title: '8. Changes to this policy',
        paragraphs: [
          'This policy may be updated when the website adds or changes features that affect privacy. The latest version will be published on this page with its updated date.'
        ]
      },
      {
        title: '9. Contact',
        paragraphs: [
          'For privacy-related questions, use the contact method provided on the portfolio website.'
        ]
      }
    ]
  },
  terms: {
    eyebrow: 'LEGAL / TERMS',
    title: 'Terms of Use',
    intro:
      'These terms describe the basic conditions for using this personal portfolio website and its publicly available content.',
    sections: [
      {
        title: '1. Website purpose',
        paragraphs: [
          'This website is a personal professional portfolio for Nivaas Ravindran. Its purpose is to present professional experience, engineering projects, technical interests, and contact information.'
        ]
      },
      {
        title: '2. Content ownership',
        paragraphs: [
          'Unless a project or asset is explicitly identified as third-party or open-source, the original text, visual presentation, and portfolio materials on this site belong to Nivaas Ravindran or are used with appropriate permission.',
          'Third-party names, trademarks, logos, libraries, and project references remain the property of their respective owners.'
        ]
      },
      {
        title: '3. Permitted use',
        paragraphs: [
          'You may view, share, and link to this portfolio for ordinary personal, professional, recruitment, or educational purposes. Do not present portfolio content as your own or reproduce substantial portions of the site without permission.'
        ]
      },
      {
        title: '4. Code and project references',
        paragraphs: [
          'Project descriptions are provided to explain professional experience and technical work. A project may include technologies or systems owned by an employer, client, or third party. Portfolio descriptions do not grant permission to copy confidential, proprietary, or restricted material.'
        ]
      },
      {
        title: '5. Accuracy and availability',
        paragraphs: [
          'Reasonable care is taken to keep the portfolio accurate and available, but content may change and the website may occasionally be unavailable. No guarantee is made that every page, link, or downloadable file will remain available at all times.'
        ]
      },
      {
        title: '6. External links',
        paragraphs: [
          'Links to external websites are provided for convenience. Nivaas does not control those websites and is not responsible for their content, availability, security, or privacy practices.'
        ]
      },
      {
        title: '7. No professional or legal advice',
        paragraphs: [
          'The information on this website is provided for portfolio and informational purposes. It is not professional, legal, financial, or other specialised advice.'
        ]
      },
      {
        title: '8. Changes to these terms',
        paragraphs: [
          'These terms may be updated when the website or its use changes. The latest version will be published on this page with its updated date.'
        ]
      },
      {
        title: '9. Contact',
        paragraphs: [
          'If you have a question about these terms or want permission to reuse portfolio material, use the contact method provided on the website.'
        ]
      }
    ]
  }
};

export default function LegalPage({ type }) {
  const content = CONTENT[type] || CONTENT.privacy;
  
  // Dynamically reads the base URL (e.g., /PortfolioUi/) from your vite.config.js
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${content.title} | Nivaas Ravindran`;
    return () => {
      document.title = 'Nivaas Ravindran | Java Backend Engineer';
    };
  }, [content.title]);

  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="legal-page__container container">
          <header className="legal-page__header">
            <a className="legal-page__back" href={baseUrl} aria-label="Back to portfolio">
              ← BACK TO PORTFOLIO
            </a>
            <span className="legal-page__eyebrow">{content.eyebrow}</span>
            <h1>{content.title}</h1>
            <p className="legal-page__intro">{content.intro}</p>
            <p className="legal-page__updated">LAST UPDATED · {LAST_UPDATED}</p>
          </header>

          <div className="legal-page__body">
            {content.sections.map((section) => (
              <section className="legal-page__section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <footer className="legal-page__footer">
            <span>© {new Date().getFullYear()} Nivaas Ravindran. All rights reserved.</span>
            <div>
              <a href={`${baseUrl}terms`}>Terms of Use</a>
              <span className="footer-separator">·</span>
              <a href={`${baseUrl}privacy`}>Privacy Policy</a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
