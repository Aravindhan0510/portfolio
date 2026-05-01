import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import content from '../data/content.json';

const Contact = () => {
  const [buttonStatus, setButtonStatus] = useState('default');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Gather form data
    const name = e.target.formName.value;
    const email = e.target.formEmail.value;
    const message = e.target.formMessage.value;
    
    // Construct Gmail draft URL
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${content.personal.email}&su=${subject}&body=${body}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');

    setButtonStatus('sent');
    setTimeout(() => {
      setButtonStatus('default');
      e.target.reset();
    }, 3000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{content.contact.subtitle}</span>
          <h2>{content.contact.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01} transitionSpeed={2500} className="tilt-card-wrapper">
            <div className="card-inner vision-glass p-8 md:p-12" style={{justifyContent: 'center', textAlign: 'center'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '20px', letterSpacing: '-0.02em'}}>{content.contact.cardTitle}</h3>
              <p style={{color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem', lineHeight: 1.6}}>
                {content.contact.description}
              </p>
              
              <div className="hero-socials" style={{marginBottom: '30px'}}>
                <a href={content.personal.github} target="_blank" rel="noopener noreferrer" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>
                  <i className="fab fa-github"></i>
                </a>
                <a href={content.personal.linkedin} target="_blank" rel="noopener noreferrer" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${content.personal.email}`} target="_blank" rel="noopener noreferrer" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01} transitionSpeed={2500} className="tilt-card-wrapper">
            <div className="card-inner vision-glass p-6 md:p-10">
              <form className="contact-form" onSubmit={handleSubmit} style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <input type="text" id="formName" placeholder="Your Name" required />
                <input type="email" id="formEmail" placeholder="Your Email" required />
                <textarea id="formMessage" rows="5" placeholder="Your Message" required style={{flexGrow: 1, resize: 'none'}}></textarea>
                <button type="submit" className="btn-submit">
                  {buttonStatus === 'default' ? 'Send Message' : 'Message Sent! ✓'}
                </button>
              </form>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Contact;
