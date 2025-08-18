// src/components/Experience.tsx
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import image1 from "../assets/cae.jpeg";
import image2 from "../assets/torc.png";
import image3 from "../assets/logo3.png";
import image4 from "../assets/232332.jpg";

export default function Experience() {
  return (
    <section id="experience" className="max-w-full mx-auto">
      <div>
        <div className="mb-6 mt-20">
          <p className="text-md max-w-full text-left opacity-70">Experience</p>
          <div className="mt-2 border-b border-white/10" />
        </div>

        <div className="mt-10 ">
          <Timeline position="alternate">
            {/* First experience */}
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ color: "grey.400", opacity: 0.7, mt: 1 }}
              >
                Sept 2025 - Dec 2025
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  sx={{
                    p: 0,
                    width: 44,
                    height: 44,
                    overflow: "hidden",
                    bgcolor: "transparent",
                  }}
                >
                  <img
                    src={image1}
                    alt="logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ height: 220 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <h1 className="text-md mb-3">
                  Cybersecurity Operations Specialist
                </h1>
                <Typography>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.2rem",
                      listStylePosition: "outside",
                    }}
                  >
                    <li className="mb-2">
                      Built KPI dashboards and automated SOC reports, reducing
                      manual data work and improving visibility.
                    </li>
                    <li className="mb-2">
                      Partnered with SOC analysts to define KPIs that drove
                      data-driven security decisions.
                    </li>
                    <li className="mb-2">
                      Created PowerBI/SQL visualizations to highlight trends,
                      detect anomalies, and improve response.
                    </li>
                  </ul>
                </Typography>
              </TimelineContent>
            </TimelineItem>

            {/* Second experience */}
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ color: "grey.400", opacity: 0.7, mt: 1 }}
              >
                Setp 2024 - May 2027
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  sx={{
                    p: 0,
                    width: 44,
                    height: 44,
                    overflow: "hidden",
                    bgcolor: "transparent",
                  }}
                >
                  <img
                    src={image3}
                    alt="logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ height: 220 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <h1 className="text-md mb-3">BSc Computer Science Co-op</h1>
                <Typography>
                  <ul
                    style={{
                      margin: 0,
                      paddingRight: "1.2rem",
                      listStylePosition: "outside",
                    }}
                  >
                    <li className="mb-2">
                      Member of the Institute of Co-operative Education
                    </li>
                    <li className="mb-2">
                      Relevant Courses: Object Oriented Programming, Data
                      Structures & Algorithms, Databses, Operating Sysmtes
                    </li>
                  </ul>
                </Typography>
              </TimelineContent>
            </TimelineItem>

            {/* Third experience */}
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ color: "grey.400", opacity: 0.7, mt: 1 }}
              >
                Apr 2022 - Sept 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  sx={{
                    p: 0,
                    width: 44,
                    height: 44,
                    overflow: "hidden",
                    bgcolor: "transparent",
                  }}
                >
                  <img
                    src={image2}
                    alt="logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ height: 220, opacity: 0.8 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <h1 className="text-md mb-3 text-left">Data Annotator</h1>
                <Typography>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.2rem",
                      listStylePosition: "outside",
                      textAlign: "left",
                    }}
                  >
                    <li className="mb-2">
                      Annotated over 7,000+ high-resolution frames using CVAT
                      for training advanced computer vision models, contributing
                      to improved object detection accuracy.
                    </li>
                    <li className="mb-2">
                      Achieved a 98%+ accuracy rate in annotation quality, as
                      measured through quality control systems.
                    </li>
                    <li className="mb-2">
                      Awarded ‘Annotator of the Month’ in recognition of
                      consistent annotation accuracy & attention to detail.
                    </li>
                  </ul>
                </Typography>
              </TimelineContent>
            </TimelineItem>

            {/* Fourth experience */}
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ color: "grey.400", opacity: 0.7, mt: 1 }}
              >
                Sept 2019 - Dec 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    p: 0,
                    width: 44,
                    height: 44,
                    overflow: "hidden",
                    bgcolor: "transparent",
                  }}
                >
                  <img
                    src={image4}
                    alt="logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ height: 220, opacity: 0.6 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <h1 className="text-md mb-3">DEC Business/Commerce General</h1>
                <Typography>
                  <ul
                    style={{
                      margin: 0,
                      paddingRight: "1.2rem",
                      listStylePosition: "outside",
                    }}
                  >
                    <li className="mb-2">Dean's List 2022 Graduate</li>
                    <li className="mb-2">
                      Relevant Courses: Calculus 1, Calculus 2, Linear Algebra
                    </li>
                  </ul>
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  );
}
