// src/components/Experience.tsx
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import image1 from '../assets/cae.jpeg';
import image2 from '../assets/torc.png';
import image3 from '../assets/logo3.png';
import image4 from '../assets/232332.jpg';


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
                <TimelineOppositeContent sx={{ color: 'grey.400', opacity: 0.7 , mt: 1}}>
             Sept 2025 - Dec 2025
            </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                sx={{ p: 0, width: 44, height: 44, overflow: 'hidden', bgcolor: 'transparent' }}
                >
                    <img
                    src={image1}
                    alt="logo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </TimelineDot>
               <TimelineConnector sx={{ height: 220 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Frontend Developer
                </Typography>
                <Typography>
                  Built responsive web apps with React, Material UI, and TypeScript.
                  Optimized performance and collaborated with backend teams.
                </Typography>
              </TimelineContent>
            </TimelineItem>

            {/* Second experience */}
            <TimelineItem>
              <TimelineOppositeContent sx={{ color: 'grey.400', opacity: 0.7, mt: 1}}>
             Setp 2024 - May 2027
            </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                sx={{ p: 0, width: 44, height: 44, overflow: 'hidden', bgcolor: 'transparent' }}
                >
                    <img
                    src={image3}
                    alt="logo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </TimelineDot>
                <TimelineConnector sx={{ height: 220 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  UI/UX Designer
                </Typography>
                <Typography>
                  Designed modern, user-friendly interfaces and collaborated closely with developers
                  to ensure consistent design systems.
                </Typography>
              </TimelineContent>
            </TimelineItem>

            {/* Third experience */}
            <TimelineItem>
                <TimelineOppositeContent sx={{ color: 'grey.400', opacity: 0.7, mt: 1 }}>
             Apr 2022 - Sept 2022
            </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                sx={{ p: 0, width: 44, height: 44, overflow: 'hidden', bgcolor: 'transparent' }}
                >
                    <img
                    src={image2}
                    alt="logo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </TimelineDot>
                <TimelineConnector sx={{ height: 220 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Full-Stack Engineer
                </Typography>
                <Typography>
                  Implemented REST and GraphQL APIs, integrated with frontend apps, and improved CI/CD pipelines.
                </Typography>
              </TimelineContent>
            </TimelineItem>

            {/* Fourth experience */}
            <TimelineItem>
                <TimelineOppositeContent sx={{ color: 'grey.400', opacity: 0.7, mt: 1 }}>
             Sept 2019 - Dec 2022
            </TimelineOppositeContent>
              <TimelineSeparator>
               <TimelineDot
                sx={{ p: 0, width: 44, height: 44, overflow: 'hidden', bgcolor: 'transparent' }}
                >
                    <img
                    src={image4}
                    alt="logo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </TimelineDot>
                <TimelineConnector sx={{ height: 220, opacity: 0.7 }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Product Engineer
                </Typography>
                <Typography>
                  Shipped features end-to-end, ran A/B tests, and iterated on design based on analytics and user feedback.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  );
}
