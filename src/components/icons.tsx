import { GlobeIcon, MailIcon, GitHubIcon, LinkedInIcon, YouTubeIcon, NextJSIcon, FramerMotionIcon, XIcon } from "lucide-react";

// Define reusable type for SVG props
export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  linkedin: (props: IconProps) => <LinkedInIcon {...props} />,
  x: (props: IconProps) => <XIcon {...props} />,
  youtube: (props: IconProps) => <YouTubeIcon {...props} />,
  nextjs: (props: IconProps) => <NextJSIcon {...props} />,
  framermotion: (props: IconProps) => <FramerMotionIcon {...props} />,
  github: (props: IconProps) => <GitHubIcon {...props} />,  // Add this line
};

// Example usage:

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/barde-s",
    icon: Icons.github,
    navbar: true,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/barde-s",
    icon: Icons.linkedin,
    navbar: true,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/c/YourChannel",
    icon: Icons.youtube,
    navbar: true,
  },
  {
    name: "Next.js",
    url: "https://nextjs.org",
    icon: Icons.nextjs,
    navbar: true,
  },
  {
    name: "Framer Motion",
    url: "https://www.framer.com/motion/",
    icon: Icons.framermotion,
    navbar: true,
  },
  // Add other social links as needed
];
