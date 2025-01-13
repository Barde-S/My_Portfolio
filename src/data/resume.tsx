import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shuaibu Sani Barde",
  initials: "SSB",
  url: ",
  location: "Niger, MX",
  locationLink: "https://www.google.com/maps/place/minna",
  description:
    "Data Scientist/Analyst, Machine Learning Engineer. I provide solutions to people's problems.",
  summary:
    " ",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "SQL",
      "Excel",
    "Power BI",
    "Tableu",
    "Bubble io"
  ],
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
        url: "x.com/s_barde74",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
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
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Omdena",
      badges: [],
      href: "https://omdena.com",
      location: "Remote",
      title: "Junior ML engineer (Contributor)",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Bayero University Kano",
      href: "buk.edu.ng",
      degree: "BSC Computer Science",
      logoUrl: "",
      start: "2021",
      end: "2025",
    }
   
  ],
  projects: [
    {
      title: "Loan Default Prediction",
      href: "https://github.com/Barde-S/Loan-Default-Prediction",
      dates: "2024",
      active: true,
      description:
        " ",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "Machine Learning",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/Barde-S/Loan-Default-Prediction",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        " ",
    },
    {
  "title": "Crop Yield Prediction",
  "href": "https://github.com/Barde-S/DigitalGreen_CropYield_Prediction",
  "dates": "2024",
  "active": true,
  "description": "Developed a data analysis and machine learning pipeline to predict crop yield using various regression models. The pipeline includes data preprocessing, feature engineering, exploratory data analysis, model training, hyperparameter tuning, and evaluation. It utilizes Python libraries like scikit-learn, LightGBM, CatBoost, and XGBoost to build robust predictive models.",
  "technologies": [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Scikit-learn",
    "LightGBM",
    "CatBoost",
    "XGBoost",
    "MLxtend",
    "Statsmodels"
  ],
  "links": [
    {
      "type": "Repository",
      "href": "https://github.com/Barde-S/DigitalGreen_CropYield_Predictionn",
      "icon": "<Icons.github className='size-3' />"
    }
  ],
  "image": "",
  "video": ""
}
,
    {
  "title": "Automated Trading Bot",
  "href": "https://github.com/Barde-S/TradingBot",
  "dates": "2024",
  "active": true,
  "description": "Developed an automated trading bot integrating OANDA and Alpaca APIs to execute trades based on predefined signals. The bot fetches real-time forex data, generates trade signals using custom logic, and schedules automated trade executions.",
  "technologies": [
    "Python",
    "OANDA API",
    "Alpaca API",
    "yFinance",
    "APScheduler",
    "RESTful API",
    "Jupyter Notebook"
  ],
  "links": [
    {
      "type": "Repository",
      "href": "https://github.com/Barde-S/TradingBot",
      "icon": "<Icons.github className='size-3' />"
    }
  ],
  "image": "",
  "video": ""
}
  ],
  hackathons: [
    {
      title: " ",
      dates: " ",
      location: " ",
      description:
        " ",
      image:
        " ",
      mlh: " ",
      links: [],
    }
  ],
} as const;
