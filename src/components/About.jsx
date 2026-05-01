import React from 'react';
import Tilt from 'react-parallax-tilt';
import content from '../data/content.json';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span className="section-tag">About</span>
          <h2>{content.about.title}</h2>
        </div>

        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2500} className="tilt-card-wrapper">
          <div className="card-inner vision-glass p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-14 items-center text-center md:text-left">

              <div className="about-img-wrapper">
                <img src="..\assets\hero-profile.png" alt="Aravindhan G" onError={(e) => { e.target.src = 'https://via.placeholder.com/220/1e1e23/ffffff?text=AG'; }} />
              </div>

              <div className="about-content">
                {content.about.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="about-text" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                ))}

                <div className="skill-tags" style={{ marginTop: '30px' }}>
                  {content.about.highlights.map(highlight => (
                    <span key={highlight} className="skill-tag" style={{ border: '1px solid var(--accent-primary)', color: 'var(--text-main)' }}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default About;
