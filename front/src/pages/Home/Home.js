import React from 'react';
import './Home.css';

const Home = () => {

  return (
    <div className="home">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to seamussutula.com!</h1>
            <h2>Computer Science Student & AI Enthusiast</h2>
            <p className="hero-description">
              I'm a Senior at Boston College pursuing a B.S. in Computer Science with a minor in Philosophy. 
              My interests lie at the intersection of artificial intelligence, software development, and ethics.
            </p>
          </div>
        </div>
      </section>
      
      <section className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                As a student deeply interested in AI safety and development, I combine technical expertise 
                with philosophical inquiry to approach the challenges of artificial intelligence thoughtfully 
                and ethically.
              </p>
              <p>
                Through my work at Zoominfo and various projects, I've gained extensive experience in 
                full-stack development, data analysis, and AI integration. I'm particularly passionate about 
                ensuring AI systems are developed responsibly and aligned with human values.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="interests-section">
        <div className="container">
          <h2>Current Focus</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <h3>AI Safety Research</h3>
              <p>Leading discussions and research on AI alignment through BC's AI Safety Society</p>
            </div>
            <div className="interest-card">
              <h3>Software Development</h3>
              <p>Building full-stack applications to solve real-world problems</p>
            </div>
            <div className="interest-card">
              <h3>Placeholder</h3>
              <p>Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 