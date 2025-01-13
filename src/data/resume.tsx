import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shuaibu Sani Barde",
  initials: "SSB",
  url: "https://google.com",
  location: "Niger, MX",
  locationLink: "https://www.google.com/maps/place/minna",
  description: "Data Scientist/Analyst, Machine Learning Engineer. I provide solutions to people's problems.",
  summary: "Passionate about leveraging data science to solve complex problems and deliver actionable insights.",
  avatarUrl: "/me.png",
  skills: ["Python", "SQL", "Excel", "Power BI", "Tableau", "Bubble.io"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mallamsz74@gmail.com",
    tel: "+2348024564190",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/barde-s",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shuaibu-sani-barde-21b835227/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/s_barde74",
        icon: Icons.x,
        navbar: true,
      },
      YouTube: {
        name: "YouTube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      SendEmail: {
        name: "Send Email",
        url: "mailto:mallamsz74@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "LiteQode",
      href: "https://litecode.com",
      badges: [],
      location: "Remote",
      title: "Project Analyst",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description: "Architected and implemented solutions for cryptocurrency trading strategies, containerized microservices, and data lake architectures.",
    },
    {
      company: "Omdena",
      badges: [],
      href: "https://omdena.com",
      location: "Remote",
      title: "Junior ML Engineer (Contributor)",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description: "Developed Kubernetes automation tools and scripts for database management and deployment.",
    },
  ],
  education: [
    {
      school: "Bayero University Kano",
      href: "https://buk.edu.ng",
      degree: "B.Sc. Computer Science",
      logoUrl: "",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Loan Default Prediction",
      href: "https://github.com/Barde-S/Loan-Default-Prediction",
      dates: "2024",
      active: true,
      description: "Built predictive models to assess loan default risks using machine learning.",
      technologies: ["Python", "Jupyter Notebook", "Machine Learning"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/Barde-S/Loan-Default-Prediction",
          icon: Icons.github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Crop Yield Prediction",
      href: "https://github.com/Barde-S/DigitalGreen_CropYield_Prediction",
      dates: "2024",
      active: true,
      description: "Developed a machine learning pipeline for predicting crop yield with robust evaluation.",
      technologies: ["Python", "Scikit-learn", "LightGBM", "XGBoost", "Pandas"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/Barde-S/DigitalGreen_CropYield_Prediction",
          icon: Icons.github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Automated Trading Bot",
      href: "https://github.com/Barde-S/TradingBot",
      dates: "2024",
      active: true,
      description: "Built a bot integrating OANDA and Alpaca APIs for automated forex and stock trading.",
      technologies: ["Python", "OANDA API", "Alpaca API", "APScheduler", "RESTful API"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/Barde-S/TradingBot",
          icon: Icons.github,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
