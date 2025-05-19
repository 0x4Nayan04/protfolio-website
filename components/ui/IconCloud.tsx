import IconCloud from './icon-cloud';

const slugs = [
  'javascript',
  'typescript',
  'html5',
  'css3',
  'react',
  'nextdotjs',
  'tailwindcss',
  'nodedotjs',
  'express',
  'mongodb',
  'zustand',
  'zod',
  'axios',
  'socketdotio',
  'jwt',
  'nextauth',
  'git',
  'github',
  'visualstudiocode',
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg px-8 min-w-64 sm:pb-0 pb-4">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
