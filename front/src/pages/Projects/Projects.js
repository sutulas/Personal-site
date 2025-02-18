import React, { useState } from 'react';
import './Projects.css';
import VideoModal from '../../components/VideoModal/VideoModal';
// Import your video files
//import decodablesVideo from '../../assets/videos/decodables-demo.mp4';
import spotifhaiVideo from '../../assets/Spotifhai.mp4';
// import datavizVideo from '../../assets/videos/DataViz.mp4';

const Projects = () => {
  const [modalVideo, setModalVideo] = useState(null);

  const projects = [
    {
      title: 'Decodables',
      description: 'A scalable platform offering personalized reading experiences for young low-level readers.',
      technologies: ['Python', 'FastAPI', 'React', 'Node.js', 'Firebase', 'LLMs', 'API Development', 'Project Management'],
      highlights: [
        'Custom prompt-engineering pipeline',
        'Interactive front-end interface',
        'Robust back-end API architecture'
      ],
      demo: {
        link: 'https://decodables.xyz',
        description: 'Currently in private beta. Contact for demo access. Feel free to view login page at the link.'
        //video: decodablesVideo
      }
    },
    {
        title: 'SpotifHAI',
        description: 'An intelligent Spotify playlist generator using LLMs.',
        technologies: ['Python', 'FastAPI', 'React', 'Node.js', 'Prompt Engineering', 'API Development', 'Teamwork'],
        highlights: [
          'Custom prompt-engineering pipeline',
          'Interactive front-end interface',
          'Robust back-end API architecture'
        ],
        demo: {
            link: 'https://sutulas.github.io/Spotifhai/',
            github: 'https://github.com/sutulas/Spotifhai',
            description: 'Contact for access, or use test credentials: username: sutulas@bc.edu, password: SpotifHAI1',
            video: spotifhaiVideo
        }
    },
    {
        title: 'SeamusGPT',
        description: 'A custom GPT2 model trained on my personal writing.',
        technologies: ['Python', 'Fine-tuning', 'LLMs', 'Prompt Engineering'],
        highlights: [
          'Custom prompt-engineering pipeline',
          'Interactive front-end interface',
          'Robust back-end API architecture'
        ]
    },
    {
        title: 'DataViz',
        description: 'Chat-GPT driven data analysis and visualization tool.',
        technologies: ['Python', 'FastAPI', 'React', 'Node.js', 'Prompt Engineering', 'API Development', 'Teamwork'],
        highlights: [
          'Custom prompt-engineering pipeline',
          'Interactive front-end interface',
          'Robust back-end API architecture'
        ],
        demo: {
            link: 'https://sutulas.github.io/HAI-Assignment-3/',
            github: 'https://github.com/sutulas/HAI-Assignment-3',
            description: 'Ensure any uploaded CSV is formatted correctly. The tool will not work otherwise.'
            // video: datavizVideo
        }
    }
  ];

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-showcase">
            <div className="project-content">
              <h2>{project.title}</h2>
              <h3>{project.role}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <ul className="highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="project-demo">
              {project.demo ? (
                <div className="demo-content">
                  <div className="demo-buttons">
                    {project.demo.link && (
                      <a href={project.demo.link} target="_blank" rel="noopener noreferrer" className="demo-link">
                        <span>Live Demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                    {project.demo.github && (
                      <a href={project.demo.github} target="_blank" rel="noopener noreferrer" className="demo-link">
                        <span>GitHub</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                    {project.demo.video && (
                      <button 
                        onClick={() => setModalVideo(project.demo.video)}
                        className="demo-link video-link"
                      >
                        <span>Watch Demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polygon points="10 8 16 12 10 16 10 8"></polygon>
                        </svg>
                      </button>
                    )}
                  </div>
                  <p className="demo-description">{project.demo.description}</p>
                </div>
              ) : (
                <div className="demo-placeholder">
                  <p>Demo Coming Soon</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <VideoModal 
        videoUrl={modalVideo}
        isOpen={!!modalVideo}
        onClose={() => setModalVideo(null)}
      />
    </div>
  );
};

export default Projects; 