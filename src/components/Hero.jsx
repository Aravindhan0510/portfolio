import React, { useEffect, useState, useRef } from 'react';

import content from '../data/content.json';

const phrases = content.hero.phrases;

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const charIdxRef = useRef(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    let timer;

    const handleType = () => {
      const currentLength = charIdxRef.current;

      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, currentLength + 1));
        charIdxRef.current++;

        if (charIdxRef.current === currentPhrase.length) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timer = setTimeout(handleType, 80);
        }
      } else {
        setTypedText(currentPhrase.substring(0, currentLength - 1));
        charIdxRef.current--;

        if (charIdxRef.current === 0) {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % phrases.length);
        } else {
          timer = setTimeout(handleType, 40);
        }
      }
    };

    timer = setTimeout(handleType, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [phraseIdx, isDeleting]);

  return (
    <section className="hero" id="hero">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <div className="hero-content vision-glass" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="hero-badge">
            <span className="status-dot"></span>
            {content.hero.badge}
          </div>

          <h1>{content.personal.name.split(' ')[0]} <span className="gradient-text">{content.personal.name.split(' ').slice(1).join(' ')}</span></h1>

          <div className="hero-title">
            <span className="typed-text">{typedText}</span>
            <span className="typed-cursor">|</span>
          </div>

          <p className="hero-desc">
            {content.hero.description}
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-[30px] items-center mb-[40px]">
            {content.hero.stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className="stat text-center md:text-left">
                  <span className="stat-number">{stat.number}</span><span className="stat-plus">{stat.plus}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
                {idx < content.hero.stats.length - 1 && (
                  <>
                    <div className="hidden md:block w-[1px] h-[50px] bg-[var(--border-light)]"></div>
                    <div className="md:hidden h-[1px] w-[50px] bg-[var(--border-light)]"></div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-[50px]">
            <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}>
              <span>{content.hero.buttons.primary}</span>
            </a>
            <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
              <span>{content.hero.buttons.secondary}</span>
            </a>
          </div>

          <div className="hero-socials">
            <a href={content.personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href={content.personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${content.personal.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email"><i className="fas fa-envelope"></i></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
