import { IconCloudDemo } from './ui/IconCloud';

const Skills = () => {
  return (
    <div className="mx-8 overflow-hidden">
      <div className="max-w-5xl mx-auto my-2 px-0 sm:px-6 py-6 border-neutral-600 border-2 rounded-lg flex gap-0 sm:gap-4 items-center bg-foreground sm:flex-row flex-col">
        <div className="p-4 w-11/12">
          <div className="lg:text-4xl text-3xl font-extrabold mb-8 font-recoleta">
            Technical Skills
          </div>
          <div className="space-y-4 text-base text-neutral-300">
            <div>
              <span className="font-semibold text-neutral-100">Languages:</span> JavaScript, TypeScript, HTML5/CSS3
            </div>
            <div>
              <span className="font-semibold text-neutral-100">Frontend:</span> React.js, Next.js, Tailwind CSS
            </div>
            <div>
              <span className="font-semibold text-neutral-100">Backend & APIs:</span> Node.js, Express.js, MongoDB, RESTful APIs
            </div>
            <div>
              <span className="font-semibold text-neutral-100">Libraries & Tools:</span> Zustand, Zod, Axios, Socket.IO, JWT, Next-Auth
            </div>
            <div>
              <span className="font-semibold text-neutral-100">Developer Tools:</span> Git, GitHub, VS Code
            </div>
          </div>
        </div>
        <div>
          <IconCloudDemo />
        </div>
      </div>
    </div>
  );
};

export default Skills;
