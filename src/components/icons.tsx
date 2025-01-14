import { GlobeIcon, MailIcon } from "lucide-react";

// Define reusable type for SVG props
export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Close</title>
      <path
        fill="currentColor"
        d="M12 10.293l5.707-5.707 1.414 1.414-5.707 5.707 5.707 5.707-1.414 1.414-5.707-5.707-5.707 5.707-1.414-1.414 5.707-5.707-5.707-5.707 1.414-1.414L12 10.293z"
      />
    </svg>
  ),
  youtube: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>YouTube</title>
      <path
        fill="currentColor"
        d="M21.8 8.34c-.21-.75-.84-1.29-1.61-1.39-1.46-.18-7.43-.18-7.43-.18s-5.96 0-7.43.18c-.77.1-1.4.64-1.61 1.39-.22.79-.22 2.46-.22 2.46s0 1.67.22 2.46c.21.75.84 1.29 1.61 1.39 1.46.18 7.43.18 7.43.18s5.96 0 7.43-.18c.77-.1 1.4-.64 1.61-1.39.22-.79.22-2.46.22-2.46s0-1.67-.22-2.46zm-10.8 5.52V10.2l5.93 2.33-5.93 2.33zM3.2 6.24c.51-.33 1.15-.41 1.73-.25.46.12.86.44 1.1.84l2.45 3.52c.09.14.13.3.13.46v7.96c0 .16-.04.31-.13.46l-2.45 3.52c-.24.4-.64.72-1.1.84-.58.16-1.22.08-1.73-.25-.51-.33-.81-.86-.81-1.43v-13.6c0-.57.3-1.1.81-1.43z"
      />
    </svg>
  ),
  nextjs: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Next.js</title>
      <path
        fill="currentColor"
        d="M6 2.8c0-.7.6-1.2 1.2-1.2h7.6c.7 0 1.2.5 1.2 1.2v18.4c0 .7-.6 1.2-1.2 1.2H7.2c-.7 0-1.2-.5-1.2-1.2V2.8zm2.4 16.2h7.2V5.2H8.4v13z"
      />
    </svg>
  ),
  framermotion: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Framer Motion</title>
      <path
        fill="currentColor"
        d="M12 2L2 12l10 10 10-10-10-10zm-2 13h4v2h-4v-2zm0-4h4v2h-4v-2zm0-4h4v2h-4V7z"
      />
    </svg>
  ),
  // Add other icons if needed
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
  // Add other social links as needed
];
