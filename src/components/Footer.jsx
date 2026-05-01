import React from 'react';
import content from '../data/content.json';

const Footer = () => {
  return (
    <footer className="footer" style={{padding: '40px 24px', borderTop: '1px solid var(--border-light)', background: 'var(--bg-glass)', backdropFilter: 'blur(20px)'}}>
      <div className="container">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px'}}>
          <span style={{fontFamily: 'monospace', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-main)'}}>&lt;AG /&gt;</span>
          <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>&copy; {new Date().getFullYear()} {content.personal.name}. Crafted with passion.</p>
          <div style={{display: 'flex', gap: '16px'}}>
            <a href={content.personal.github} target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fab fa-github"></i></a>
            <a href={content.personal.linkedin} target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fab fa-linkedin-in"></i></a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${content.personal.email}`} target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
