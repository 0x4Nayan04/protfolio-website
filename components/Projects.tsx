import { FaGithub } from 'react-icons/fa6';
import Image from 'next/image';
import RecomBook from '@/public/images/RecomBook.png';
import CollabBoard from '@/public/images/CollabBord.png';
import Link from 'next/link';

const projects = [
  {
    title: 'RecomBooks',
    description:
      "An AI-powered book recommendation platform using Next.js 14 and Google's Gemini AI to analyze user reading patterns, achieving 92% accuracy in suggestions. Designed a scalable architecture with TypeScript and React Server Components, reducing initial page load time by 45% and earning a 98% Lighthouse performance score. Integrated a price comparison engine and optimized UI with Tailwind CSS, resulting in a 40% decrease in bounce rate and 95% mobile responsiveness.",
    image: RecomBook,
    liveLink: 'https://book-recom-nayan.vercel.app/',
    githubLink: 'https://github.com/0x4Nayan04/book-recom',
    tags: [
      'Next.js',
      'TypeScript',
      'Gemini AI',
      'React Server Components',
      'Tailwind CSS',
    ],
  },
  {
    title: 'CollabBoard',
    description:
      'A real-time collaborative whiteboard application built with React.js, Socket.IO, and Canvas API, supporting 20+ concurrent users with <50ms latency. Developed advanced features like freehand drawing, text annotations, and an efficient rendering pipeline, reducing CPU usage by 60% while maintaining smooth 60 FPS. Engineered robust error handling for consistent drawing states with 99.9% accuracy.',
    image: CollabBoard,
    liveLink: 'https://chatgpt.com/auth/login',
    githubLink: 'https://github.com/0x4Nayan04/whiteboard-real-time',
    tags: ['React.js', 'Socket.IO', 'Canvas API', 'Real-time', 'TypeScript'],
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
            <div className="px-3 text-neutral-400 italic">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
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
