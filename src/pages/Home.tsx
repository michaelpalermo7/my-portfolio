import React from 'react';
import Layout from '../layouts/Layout';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-start gap-30">
        <LeftSection />
        <RightSection />
      </div>

      <div className="max-w-6xl mx-auto mt-24">
        <Experiences />
      </div>

      <div className="max-w-6xl mx-auto mt-24">
        <Projects />
      </div>

      <div className="max-w-6xl mx-auto mt-24">
        <TechStack />
      </div>
    </Layout>
  );
};

export default Home;
