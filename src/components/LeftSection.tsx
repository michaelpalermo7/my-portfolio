import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socials = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={30} />,
    url: 'https://www.linkedin.com/in/your-linkedin',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={30} />,
    url: 'https://github.com/your-github',
  },
  {
    name: 'Gmail',
    icon: <MdEmail size={30} />,
    url: 'mailto:your.email@gmail.com',
  },
];

const LeftSection: React.FC = () => {
  return (
    <div className="relative flex-1 text-left">

      <h1 className="text-4xl leading-tight mb-4">
        Hi, I'm <span style={{ color: '#2e4a9e' }}>Michael Palermo</span>
      </h1>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        Software & Security Developer
      </h2>
      <p className="text-xl text-gray-600 mb-4">
        As a proficient Java developer, I build web applications that solve real-world problems. Let's connect!
      </p>

      <div className="flex gap-6 flex-wrap justify-start mt-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 opacity-30 hover:opacity-100 transition-opacity duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
