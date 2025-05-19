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
        Full-stack developer and B.Tech student at IIT Roorkee, building fast, user-focused web apps with Next.js, TypeScript, and AI. Creator of RecomBooks, Murmur, and Solana Rent Calculator, with leadership experience in NSS and the Cultural Council.
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;
