import React from 'react';
import Tilt from 'react-parallax-tilt';
import content from '../data/content.json';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{content.experience.subtitle}</span>
          <h2>{content.experience.title}</h2>
        </div>
        
        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2500} className="tilt-card-wrapper">
          <div className="card-inner vision-glass p-6 md:p-10">
            <div className="border-l border-[var(--border-light)] pl-6 md:pl-10 ml-2 md:ml-6">
              {content.experience.timeline.map((exp, idx) => (
                <div key={idx} className="exp-item">
                  <span className="exp-date">{exp.date}</span>
                  <h3>{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  
                  <ul>
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: bullet }}></li>
                    ))}
                  </ul>
                  
                  <div className="skill-tags" style={{marginTop: '30px'}}>
                    {exp.tags.map(tag => (
                      <span key={tag} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Experience;
