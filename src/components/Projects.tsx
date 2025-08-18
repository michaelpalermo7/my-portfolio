import React from "react";
import image1 from "../assets/data.jpg";
import image2 from "../assets/comp.jpeg";
import image3 from "../assets/23234.png";
import { Chip, Stack } from "@mui/material";

type Project = {
  id: string;
  title: string;
  year: string;
  blurb: string;
  image: string;
  cta?: { label: string; href: string };
  tags?: string[];
};

const PROJECTS: Project[] = [
  {
    id: "mvs",
    title: "VULNERABILITY REPORTER",
    year: "2025",
    blurb:
      "Building multimodal ML systems to streamline creative workflows: video understanding, generation, and editing.",
    image: image3,
    cta: { label: "Demo Video ↗", href: "#" },
    tags: ["AI", "Video", "Security"],
  },
  {
    id: "dist-train",
    title: "VIDEO SUMMARIZER",
    year: "2024",
    blurb:
      "Cross-device training system with model/tensor parallelism to reduce compute for large models.",
    image: image2,
    cta: {
      label: "Codebase ↗",
      href: "https://github.com/michaelpalermo7/QuickGist",
    },
    tags: ["ML", "Distributed", "Summarization"],
  },
  {
    id: "ai-city",
    title: "VOLLEYBALL DATABASE",
    year: "2024",
    blurb:
      "City simulation with RL agents to model human behavior and optimize transit routing.",
    image: image1,
    cta: { label: "Project Breakdown ↗", href: "#" },
    tags: ["Reinforcement Learning", "Simulation", "Sports"],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="max-w-full mx-auto">
      <div className="mb-6 mt-20">
        <p className="text-md max-w-full text-left opacity-70">Projects</p>
        <div className="mt-2 border-b border-white/10" />
      </div>

      {/* Cards */}
      <div className="max-w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch group/cards">
        {PROJECTS.map((p) => (
          <article
            key={p.id}
            className="
              text-left relative overflow-hidden h-full flex flex-col
              transition-opacity duration-200
              group-hover/cards:opacity-40 hover:opacity-100
            "
          >
            {/* Image */}
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-10 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-white tracking-[0.12em] text-lg font-semibold">
                  {p.title}
                </h3>
                <span className="text-sm text-gray-400 tabular-nums">
                  {p.year}
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-300/80 leading-relaxed">
                {p.blurb}
              </p>

              {/* Tags */}
              {p.tags && (
                <Stack direction="row" spacing={1} className="mt-4 flex-wrap">
                  {p.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: "rgba(66, 165, 245)",
                        color: "rgba(66, 165, 245)",
                        "&:hover": { borderColor: "white", color: "white" },
                      }}
                    />
                  ))}
                </Stack>
              )}

              {p.cta && (
                <a
                  href={p.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-10 text-sm text-gray-300 underline underline-offset-4 decoration-white/30 hover:text-white hover:decoration-white"
                >
                  {p.cta.label}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
