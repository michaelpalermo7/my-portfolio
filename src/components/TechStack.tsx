import React from 'react';
import TypescriptIcon from '../assets/typescript-icon.png'
import NodeIcon from '../assets/node-icon.png'
import ViteIcon from '../assets/vite-icon.png'
import JavaIcon from '../assets/java-icon.webp'
import ReactIcon from '../assets/react-icon.png'
import JSIcon from '../assets/javascript-icon.png'
import TIcon from '../assets/tailwind-icon.png'
import HIcon from '../assets/html-icon.png'
import CIcon from '../assets/css-icon.png'
import VIcon from '../assets/vs-icon.webp'
import GIcon from '../assets/git-icon.png'
import NIcon from '../assets/npm-icon.png'

const TechStackSection: React.FC = () => {
  const technologies = {
    backend: [
      { name: 'Typescript', icon: TypescriptIcon }, 
      { name: 'Node', icon: NodeIcon },
      { name: 'Vite', icon: ViteIcon },
      { name: 'Java', icon: JavaIcon },
    ],
    frontend: [
      { name: 'React', icon: ReactIcon },
      { name: 'Typescript', icon: TypescriptIcon },
      { name: 'Javascript', icon: JSIcon },
      { name: 'Tailwind CSS', icon: TIcon },
      { name: 'HTML', icon: HIcon },
      { name: 'CSS', icon: CIcon },
    ],
    tools: [
      { name: 'VS Code', icon: VIcon },
      { name: 'Github', icon: GIcon },
      { name: 'NPM', icon: NIcon },
    ],
  };

  return (
    <section className="w-full">
      <h2 className="text-lg text-left text-gray-500 mb-2">Skills & Qualifications</h2>
      <hr className="border-t border-gray-400 opacity-30 mb-6" />

      {Object.entries(technologies).map(([category, items]) => (
        <div key={category} className="mb-10 mt-10 ">
          <h3 className="text-lg text-left text-gray-500 mb-4 capitalize">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {items.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center p-3 bg-gray-100 shadow-sm  h-18" 
                style={{ backgroundColor: 'rgba(158, 161, 166, 0.12)' }}
              >
                {/* Placeholder for icon - replace `tech.icon` with actual SVG/Image components if needed */}
                {tech.icon && (
                  <img src={tech.icon} alt={`${tech.name} icon`} className="w-6 h-6 mr-3" />
                )}
                <span className="text-gray-800 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechStackSection;