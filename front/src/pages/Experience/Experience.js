import React from 'react';
import './Experience.css';
import resume from '../../assets/Resume_Seamus_Sutula.pdf';

const Experience = () => {
  const experiences = [
    {
      title: 'Founding Engineer',
      company: 'Decodables',
      period: 'October 2023 - present',
      description: 'A scalable platform offering personalized reading experiences for young low-level readers.',
      achievements: [
        'Custom prompt-engineering/ AI interaction pipeline',
        'Interactive front-end interface',
        'Robust back-end API architecture',
        'React, Node.js, Firebase, OpenAI, FastAPI, JavaScript, Python, CSS, HTML'
      ]
    },
    {
      title: 'President and Founder',
      company: 'Boston College AI Safety Society',
      period: 'August 2024 - present',
      description: 'Leading a student organization dedicated to exploring AI alignment through comprehensive discussions and research.',
      achievements: [
        'Custom curriculum development',
        'Collaboration with Harvard and MIT',
        'Weekly technical seminars on AI development and policy'
      ]
    },
    {
        title: 'Teaching Assistant',
        company: 'Boston College',
        period: 'January 2024 - present',
        description: 'Instructing students in Python programming fundamentals through weekly office hours and classroom sessions.',
        achievements: [
          'Managed 60+ students',
          'Developed course materials',
          'Implemented data analysis for course optimization'
        ]
    },
    {
        title: 'Software Engineering Intern',
        company: 'Zoominfo',
        period: 'June 2024 - August 2024',
        description: 'Optimized count estimation processes through in-depth Solr query data analysis and advanced data estimation techniques, leveraging Python, Solr, Snowflake, and Apache DataSketches frameworks.',
        achievements: [
          'Reduced query latency by up to 70%',
          'Developed production-ready solutions',
          'Collaborated with senior management',
          'Python, Solr, Snowflake, Apache DataSketches, Java, Maven'
        ]
    },
    {
      title: 'Backend Developer Intern',
      company: 'The GBCS Group',
      period: 'May 2023 - August 2023',
      description: 'Architected and implemented API frameworks using JavaScript, Node.js, and Firebase.',
      achievements: [
        'Developed efficient data retrieval systems',
        'Implemented seamless frontend communication',
        'Rapidly acquired new technical skills',
        'JavaScript, Node.js, Firebase'
      ]
    }  
  ];

  return (
    <div className="experience-page">
      <div className="header-section">
        <h1>Professional Experience</h1>
        <a href={resume} download className="download-resume">
          <span>Download Resume</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </a>
      </div>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h2 className="experience-title">{exp.title}</h2>
            <div className="experience-subtitle">
              <h3>{exp.role || exp.company}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <p className="description">{exp.description}</p>
            {exp.technologies && (
              <div className="technologies">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            )}
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 