import React from 'react';
import Summary from '../components/Summary';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

const Home: React.FC = () => {
  return (
      <div className="max-w-full mt-0 scroll-smooth">
        
        <Summary />
        <Projects />
        <Experience />

      </div>
  );
};

export default Home;