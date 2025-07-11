import React from 'react';
import projectlogo from '../assets/projectlogo.png';
import projectPreview from '../assets/comp.jpeg';
import vullogo from '../assets/vul.png';
import projprev2 from '../assets/prev.jpg';

const projects = [
  {
    name: 'Video Summarizer',
    description: 'A personal site built with React and Tailwind to showcase my work and skills.',
    image: projectlogo,
    preview: projectPreview,
    url: 'https://github.com/michaelpalermo7/QuickGist',
  },
  {
    name: 'Vulnerability Reporter',
    description: 'A Node.js app with JWT authentication and file encryption for secure uploads.',
    image: vullogo,
    preview: projprev2,
    url: '#',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="w-full">
      <h2 className="text-lg text-left text-gray-500 mb-2">Projects</h2>
      <hr className="border-t border-gray-400 opacity-30 mb-6 " />

      <div className="flex flex-wrap justify-center gap-6 ">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => window.open(project.url, '_blank')}
            className="relative w-[520px] h-[140px] rounded-xl overflow-hidden shadow-lg cursor-pointer group"
          >
            {/* Background preview image as visible content */}
            <img
              src={project.preview}
              alt="Project preview"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay with dark background */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent z-10 flex flex-col justify-end p-6">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={project.image}
                  alt={`${project.name} logo`}
                  className="w-10 h-10 object-contain rounded-md"
                />
                <h3 className="text-xl text-white font-semibold">{project.name}</h3>
              </div>
              <p className="text-sm text-gray-200">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
