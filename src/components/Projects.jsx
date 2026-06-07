import React from 'react';
import Tilt from 'react-parallax-tilt';
import content from '../data/content.json';

const Projects = () => {
  const renderProjectCard = (project, idx) => (
    <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2500} className="tilt-card-wrapper">
      <div className="card-inner vision-glass p-6 md:p-8 flex flex-col h-full">
        <div className="skill-icon"><i className={`fas ${project.icon}`}></i></div>
        <h3 style={{fontSize: '1.5rem', marginBottom: '8px'}}>{project.title}</h3>
        <span className="proj-client">{project.client}</span>
        
        {project.bullets ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '24px',
            flexGrow: 1
          }}>
            {project.bullets.map((bullet, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', lineHeight: '1.1', userSelect: 'none' }}>•</span>
                <span dangerouslySetInnerHTML={{ __html: bullet }} style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.5' }}></span>
              </div>
            ))}
          </div>
        ) : (
          <p className="proj-desc" style={{ flexGrow: 1 }}>{project.description}</p>
        )}

        <div className="proj-metrics">
          {project.metrics.map((metric, i) => (
            <div key={i}>
              <span className="metric-val">{metric.value}</span>
              <span className="metric-lbl">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Tilt>
  );

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{content.projects.subtitle}</span>
          <h2>{content.projects.title}</h2>
        </div>

        <h3 className="text-2xl font-bold mb-6 mt-12" style={{ color: 'var(--text-main)', fontSize: '1.75rem', marginBottom: '24px', letterSpacing: '-0.02em' }}>Professional Projects & Clients</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {content.projects.professional.map((project, idx) => renderProjectCard(project, idx))}
        </div>

        <h3 className="text-2xl font-bold mb-6 mt-12" style={{ color: 'var(--text-main)', fontSize: '1.75rem', marginBottom: '24px', letterSpacing: '-0.02em' }}>Personal Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.projects.personal.map((project, idx) => renderProjectCard(project, idx))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
