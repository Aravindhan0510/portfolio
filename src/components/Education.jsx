import React from 'react';
import Tilt from 'react-parallax-tilt';
import content from '../data/content.json';

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{content.education.subtitle}</span>
          <h2>{content.education.title}</h2>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
          
          <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={2500} className="tilt-card-wrapper">
            <div className="card-inner vision-glass p-6 md:p-10 flex flex-col sm:flex-row gap-6 sm:gap-[30px] items-center sm:items-start text-center sm:text-left">
              <div style={{
                width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--text-main)', color: 'var(--bg-base)', borderRadius: '24px', fontSize: '2rem', flexShrink: 0
              }}>
                <i className="fas fa-graduation-cap"></i>
              </div>
              
              <div>
                <h3 style={{fontSize: '1.6rem', fontWeight: 600, marginBottom: '8px', letterSpacing: '-0.02em'}}>{content.education.degree}</h3>
                <span style={{display: 'block', color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '16px'}}>
                  {content.education.school}
                </span>
                
                <div style={{display: 'flex', gap: '24px', flexWrap: 'wrap'}}>
                  <span style={{color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <i className="fas fa-map-marker-alt" style={{color: 'var(--text-main)'}}></i> {content.personal.location || "Chennai, India"}
                  </span>
                  <span style={{color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <i className="fas fa-calendar" style={{color: 'var(--text-main)'}}></i> {content.education.date}
                  </span>
                </div>
              </div>
            </div>
          </Tilt>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="tilt-card-wrapper">
              <div className="card-inner vision-glass p-6 md:p-8">
                <h3 style={{fontSize: '1.3rem', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px'}}>
                  Key Achievements
                </h3>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-muted)'}}>
                  {content.education.achievements.map((achievement, idx) => (
                    <li key={idx} style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
                      <i className="fas fa-trophy" style={{color: 'var(--text-main)', marginTop: '4px'}}></i>
                      <p style={{lineHeight: 1.6}}>{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>

            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="tilt-card-wrapper">
              <div className="card-inner vision-glass p-6 md:p-8">
                <h3 style={{fontSize: '1.3rem', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px'}}>
                  Areas of Interest
                </h3>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
                  {content.education.interests.map((item, idx) => (
                    <span key={idx} className="skill-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className={`fas ${item.icon}`} style={{color: 'var(--text-main)'}}></i>
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
