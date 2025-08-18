import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    url: "https://www.linkedin.com/in/michael-palermo-qc",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={30} />,
    url: "https://github.com/michaelpalermo7",
  },
  {
    name: "Gmail",
    icon: <MdEmail size={30} />,
    url: "mikeypalermo7@gmail.com",
  },
];

const Summary: React.FC = () => {
  return (
    <div className="relative flex-1 text-left">
      <h1 className="text-4xl leading-tight mb-4 mt-10">Michael Palermo</h1>
      <p className="text-md max-w-2xl">
        Hi there! I'm Michael, a Computer Science Co-op student at{" "}
        <span className="font-bold"> Concordia University</span> with a passion
        for software and security. I am proficient in{" "}
        <span className="font-bold">Java</span>, and have experience working
        with <span className="font-bold">JavaScript, Python, HTML & CSS</span>.
      </p>
      <br></br>
      <p className="text-md max-w-2xl">
        In my spare time, I like to work on impactful projects, learn about
        astronomy and work on my fitness. I'm also passionate about
        <span className="font-bold">continuous growth</span>, whether that means
        exploring the latest in cybersecurity, contributing to open-source
        projects, or building tools that help others. Let's connect and create
        something meaningful together!
      </p>

      <div className="flex gap-6 flex-wrap justify-start mt-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 opacity-30 hover:opacity-100 transition-opacity duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Summary;
