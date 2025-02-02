import IconCloud from './icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'postgresql',
  'git',
  'github',
  'visualstudiocode',
  'tailwindcss',
  'mongodb',
  'git',
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg px-8 min-w-64 sm:pb-0 pb-4">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
