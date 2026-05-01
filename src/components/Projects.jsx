import React from 'react';
import Tilt from 'react-parallax-tilt';
import content from '../data/content.json';

const Projects = () => {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{content.projects.subtitle}</span>
          <h2>{content.projects.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.projects.items.map((project, idx) => (
            <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2500} className="tilt-card-wrapper">
              <div className="card-inner vision-glass p-6 md:p-8 flex flex-col h-full">
                <div className="skill-icon"><i className={`fas ${project.icon}`}></i></div>
                <h3 style={{fontSize: '1.5rem', marginBottom: '8px'}}>{project.title}</h3>
                <span className="proj-client">{project.client}</span>
                <p className="proj-desc">{project.description}</p>
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
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
