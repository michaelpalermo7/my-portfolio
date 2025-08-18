import React from 'react';
import Summary from '../components/Summary';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

const Home: React.FC = () => {
  return (
      <div className="max-w-full mt-0 scroll-smooth">
        
        <Summary />
        <Projects />
        <Experience />
        <Skills />

      </div>
  );
};

export default Home;