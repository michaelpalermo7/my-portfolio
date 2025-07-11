import React from 'react';

// Import your images (adjust paths as needed)
import caeLogo from '../assets/cae.jpeg';
import torcLogo from '../assets/torc.png';

const experiences = [
  {
    title: 'Cybersecurity Operations Intern',
    company: 'CAE Inc.',
    date: '09/2025 - 12/2025',
    description: [
      'Worked on KPI automation',
      'Developed digital protection systems',
      'Implemented security monitoring tools in a cross-functional team',
      'Conducted vulnerability assessments and risk analysis',
       'Core Competencies: Data Processing, Collaboration, Quality Assurance, Multi-tasking',
    ],
    image: caeLogo,
  },
  {
    title: 'Data Annotation',
    company: 'Torc Robotics',
    date: '04/2022 - 09/2022',
    description: [
      'Annotated over 7,000+ high-resolution frames using CVAT for training advanced computer vision models',
      'Contributed to improved object detection accuracy in autonomous vehicle systems',
      'Achieved a 98%+ accuracy rate in annotation quality through quality control systems',
      'Awarded "Annotator of the Month" for consistent annotation accuracy and attention to detail',
      'Core Competencies: Data Processing, Collaboration, Quality Assurance, Multi-tasking',
    ],
    image: torcLogo,
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="">
      <h2 className="text-lg text-left text-gray-500 mb-2">Technical Experience</h2>

      <hr className="border-t border-gray-400 opacity-30 mb-6" />

      <ul className="shadow-sm space-y-6">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="p-8"
style={{ backgroundColor: 'rgba(158, 161, 166, 0.12)' }}>
            <div className="flex items-start gap-10">
              {/* Image on the left */}
              <img
                src={exp.image}
                alt={`${exp.company} logo`}
                className={`w-20 h-20 object-cover ${
                  exp.company === 'CAE Inc.' ? 'rounded-full' : 'rounded'
                }`}
              />

              {/* Text content */}
              <div>
                <h3 className="text-xl text-left font-medium text-gray-900">
                  <span style={{ color: '#2e4a9e' }}>{exp.company}</span>
                  <br />
                  {exp.title}
                </h3>
                <p className="text-sm text-left text-gray-500 mb-1">{exp.date}</p>
                <ul className="list-disc list-inside text-gray-700 text-left">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
