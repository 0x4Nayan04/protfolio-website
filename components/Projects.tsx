import { FaGithub } from 'react-icons/fa6';
import Image from 'next/image';
import RecomBook from '@/public/images/RecomBook.png';
import MurmurPreview from '@/public/images/murmur-preview.jpg';
import SolanaRentPreview from '@/public/images/solana-rent-preview.jpg';
import Link from 'next/link';

const projects = [
  {
    title: 'RecomBooks',
    summary: 'AI-Powered Book Discovery Platform',
    features: [
      'Built a personalized book recommendation platform using Gemini AI, enhancing discovery via prompt-based inputs.',
      'Integrated Google Books API with fallback logic to achieve over 95% content reliability.',
      'Designed a responsive, animated UI using reusable components for optimal performance across devices.',
    ],
    image: RecomBook,
    liveLink: 'https://book-recom-nayan.vercel.app/',
    githubLink: 'https://github.com/0x4Nayan04/book-recom',
    tags: [
      'Next.js 14',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'Gemini AI',
      'Google Books API',
    ],
  },
  {
    title: 'Murmur',
    summary: 'Real-Time Chat Application',
    features: [
      'Developed a real-time chat app with JWT-based authentication and secure user sessions.',
      'Built the backend using Express and MongoDB, integrated Zustand for efficient state management.',
      'Implemented media upload using Cloudinary to enable seamless image sharing.',
      'Crafted a fully responsive UI using TailwindCSS and DaisyUI.',
    ],
    image: MurmurPreview,
    liveLink: '', // Add live link if available
    githubLink: '', // Add GitHub link if available
    tags: [
      'MERN',
      'Socket.IO',
      'Zustand',
      'TailwindCSS',
      'DaisyUI',
      'Cloudinary',
    ],
  },
  {
    title: 'Solana Rent Calculator',
    summary: 'Web App to Estimate Solana Blockchain Rent',
    features: [
      'Built a responsive tool to calculate rent exemption amounts on the Solana blockchain based on account size.',
      'Implemented light/dark mode toggle and modular TypeScript config for clean development and builds.',
    ],
    image: SolanaRentPreview,
    liveLink: '', // Add live link if available
    githubLink: '', // Add GitHub link if available
    tags: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Vite',
      'Solana',
    ],
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16">
      <div className="font-extrabold text-3xl xl:text-4xl font-recoleta text-center">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-foreground border-neutral-600 border-2 rounded-xl p-4"
          >
            <div className="overflow-hidden rounded-lg">
              <Link href={project.liveLink} target="_blank">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg hover:scale-110 transition-transform duration-500"
                />
              </Link>
            </div>
            <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
              <Link
                href={project.liveLink}
                className="text-2xl font-bold font-inter"
              >
                {project.title}
              </Link>
              <Link href={project.githubLink} target="_blank">
                <FaGithub className="hover:scale-110 size-6" />
              </Link>
            </div>
            <div className="px-3 text-neutral-300 font-semibold mb-1">
              {project.summary}
            </div>
            <ul className="px-5 text-neutral-400 list-disc space-y-1 mb-2">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 px-3 pt-2 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
              {project.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
