import React from 'react';
import Tilt from 'react-parallax-tilt';
import content from '../data/content.json';

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{content.skills.subtitle}</span>
          <h2>{content.skills.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.skills.categories.map((skill, idx) => (
            <Tilt key={idx} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500} className="tilt-card-wrapper">
              <div className="card-inner vision-glass p-6 md:p-8">
                <div className="skill-icon"><i className={`fas ${skill.icon}`}></i></div>
                <h3 style={{fontSize: '1.4rem', fontWeight: 600, marginBottom: '8px'}}>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.tags.map(tag => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
