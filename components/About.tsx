import React from 'react';
import { WobbleCard } from './ui/wobble-card';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16" id="about">
      <WobbleCard>
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          About Me
        </h2>
        <p className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
          I am a Roorkee-based full-stack developer and B.Tech student at IIT
          Roorkee, skilled in Next.js, TypeScript, and AI-powered applications.
          Notable projects include RecomBooks (AI book recommendations),
          CollabBoard (real-time whiteboard), and a YouTube channel management
          extension. With leadership experience in NSS IIT Roorkee and the
          Cultural Council, I bring innovation, technical expertise, and a
          passion for impactful solutions.
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;
