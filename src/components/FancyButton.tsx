import React from "react";
import { Button } from "@mui/material";

interface FancyButtonProps {
  label: string;
  href?: string;
}

const FancyButton: React.FC<FancyButtonProps> = ({ label, href }) => {
  return (
    <Button
      variant="text"
      color="info"
      href={href}
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
      <span>{label}</span>
    </Button>
  );
};

export default FancyButton;
