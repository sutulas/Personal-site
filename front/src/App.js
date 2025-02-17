import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { routes } from './routes/routes';
import './App.css';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route 
                key={path} 
                path={path} 
                element={<Component />} 
              />
            ))}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <p>Connect with me:</p>
            <div className="social-links">
              <a href="mailto:sutulas@bc.edu">Email</a>
              <a href="https://github.com/sutulas" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/seamus-sutula/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
//test
export default App;
