import React from "react";
import { Chip, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const languages = ["Java", "JavaScript", "Python", "HTML", "CSS", "SQL"];
const frameworks = ["React", "TailwindCSS", "Node", "Express"];
const tools = ["GitHub", "VS Code"];

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-full mx-auto">
      <div className="mb-6 mt-20">
        <p className="text-md max-w-full text-left opacity-70">Technical Skills</p>
        <div className="mt-2 border-b border-white/10" />
      </div>

      {/* Languages */}
      <div>
        <p className="text-md text-left mb-6 mt-10 flex items-center gap-2">
          <ArrowForwardIosIcon
            fontSize="small"
            sx={{ color: "rgba(66, 165, 245)" }}
          />
          Languages
        </p>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {languages.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              variant="outlined"
              sx={{
                borderColor: "rgba(66, 165, 245)",
                color: "rgba(66, 165, 245)",
                "&:hover": { borderColor: "white", color: "white" },
              }}
            />
          ))}
        </Stack>
      </div>

      {/* Frameworks */}
      <div>
        <p className="text-md text-left mb-6 mt-10 flex items-center gap-2">
          <ArrowForwardIosIcon
            fontSize="small"
            sx={{ color: "rgba(66, 165, 245)" }}
          />
          Frameworks
        </p>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {frameworks.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              variant="outlined"
              sx={{
                borderColor: "rgba(66, 165, 245)",
                color: "rgba(66, 165, 245)",
                "&:hover": { borderColor: "white", color: "white" },
              }}
            />
          ))}
        </Stack>
      </div>

      {/* Tools */}
      <div>
        <p className="text-md text-left mb-6 mt-10 flex items-center gap-2">
          <ArrowForwardIosIcon
            fontSize="small"
            sx={{ color: "rgba(66, 165, 245)" }}
          />
          Tools
        </p>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {tools.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              variant="outlined"
              sx={{
                borderColor: "rgba(66, 165, 245)",
                color: "rgba(66, 165, 245)",
                "&:hover": { borderColor: "white", color: "white" },
              }}
            />
          ))}
        </Stack>
      </div>

     {/*Button*/}
      <div className="mb-20">

       <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
  <Button
    variant="text"
    color="info"
    href="mailto:mikeypalermo7@gmail.com"
    sx={{
    position: "relative",
    overflow: "hidden",
    transition: "color 0.3s ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: 0,
      transform: "translateX(-50%) scaleX(0)",
      transformOrigin: "center",
      width: "100%",
      height: "2px",
      backgroundColor: "currentColor",
      transition: "transform 0.3s ease",
    },

    "&:hover": {
      color: "#ffffff", // matches your chip blue
    },

    "&:hover::after": {
      transform: "translateX(-50%) scaleX(1)", // underline expands
    },

    "& span": {
      display: "inline-block",
      transition: "transform 0.3s ease",
    },

    "&:hover span": {
      transform: "translateY(-3px)", // text lifts slightly
    },
  }}
  >
    Get In Touch
  </Button>
</Box>
        

      </div>
    </section>
  );
}
