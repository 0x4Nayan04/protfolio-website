import Link from 'next/link';
import { FaLink, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { LuGithub } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';
import { GridPatternDashed } from './ui/GridPatternDashed';
import { motion, HTMLMotionProps } from 'framer-motion';

const socials = [
  {
    name: 'Github',
    href: 'https://github.com/0x4Nayan04',
    displayText: '0x4Nayan04',
    icon: LuGithub,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/NayanSwarnkar04',
    displayText: '@NayanSwarnkar04',
    icon: FaXTwitter,
  },
  {
    name: 'Email',
    href: 'mailto:nayan_s@ce.iitr.ac.in',
    displayText: 'nayan_s@ce.iitr.ac.in',
    icon: MdOutlineEmail,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nayanswarnkar/',
    displayText: 'Nayan Swarnkar',
    icon: FaLinkedinIn,
  },
];

const SocialLink = ({
  href,
  displayText,
  Icon,
  isEmail,
}: {
  href: string;
  displayText: string;
  Icon: any;
  isEmail: boolean;
}) => {
  return (
    <div className="flex items-center gap-2">
      <Link
        href={href}
        target="_blank"
        className="flex items-center gap-3 hover:text-white group relative px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white/5"
      >
        <div className="relative z-10 flex items-center gap-3">
          <Icon className="size-5 group-hover:text-blue-400 transition-colors" />
          <div
            className={`${
              isEmail ? 'break-all' : ''
            } group-hover:text-white transition-colors`}
          >
            {displayText}
          </div>
        </div>
      </Link>
    </div>
  );
};

const Footer = () => {
  return (
    <GridPatternDashed>
      <div className="px-8 md:px-20 sm:px-10 py-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 justify-start mb-8 font-bold">
          <FaLink className="size-6 text-blue-400" />
          <div className="text-2xl xl:text-3xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Connect with me
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-neutral-400 font-medium">
          {socials.map(({ name, href, displayText, icon: Icon }, index) => (
            <SocialLink
              key={index}
              href={href}
              displayText={displayText}
              Icon={Icon}
              isEmail={name === 'Email'}
            />
          ))}
        </div>
        <div className="text-center mt-12 text-sm text-neutral-500">
          © {new Date().getFullYear()} Nayan Swarnkar. All rights reserved.
        </div>
      </div>
    </GridPatternDashed>
  );
};

export default Footer;
