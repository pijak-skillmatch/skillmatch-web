// ---------------------------------------------------------------------------
// mockData.ts
// All arrays are intentionally empty.
// Backend integration should replace these with real API calls.
// ---------------------------------------------------------------------------

import type { ReactNode } from 'react'
import {
  FiArrowUpRight,
  FiCpu,
  FiSearch,
  FiStar,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'

export const features: {
  icon: ReactNode;
  title: string;
  description: string;
}[] = [
  {
    icon: <FiCpu />,
    title: "AI Skill Profiling",
    description: "Analyze your skills and interests using intelligent profiling powered by machine learning.",
  },
  {
    icon: <FiStar />,
    title: "Personalized Career Match",
    description: "Receive career recommendations tailored specifically to your strengths and goals.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Growth Roadmap",
    description: "Discover which skills to improve next and build a clearer roadmap for your future.",
  },
  {
    icon: <FiZap />,
    title: "Fast Recommendations",
    description: "Generate intelligent career insights in seconds through an intuitive guided flow.",
  },
  {
    icon: <FiSearch />,
    title: "Deep Skill Analysis",
    description: "Understand how your abilities align with modern industry demands and opportunities.",
  },
  {
    icon: <FiArrowUpRight />,
    title: "Future-Oriented Insights",
    description: "Explore emerging career paths and technologies relevant to your evolving potential.",
  },
];

export const recommendations: {
  title: string;
  description: string;
  match: number;
  tags: string[];
}[] = [];

export const teamMembers = [
  {
    image: "/team/faiz.jpg",
    initials: "FF",
    name: "Faiz Fajar",
    role: "Project Lead & Back-End Developer",
    bio: "Leads project development and builds scalable backend systems, APIs, and infrastructure powering SkillMatch AI.",
  },
  {
    image: "/team/hizkian.jpg",
    initials: "H",
    name: "Hizkian",
    role: "Machine Learning Engineer",
    bio: "Focuses on data preparation, model evaluation, and optimizing AI performance for accurate career recommendations.",
  },
  {
    image: "/team/adinda.jpg",
    initials: "AP",
    name: "Adinda Putri Nur R.",
    role: "Machine Learning Engineer",
    bio: "Develops machine learning models and recommendation algorithms to deliver personalized career insights.",
  },
  {
    image: "/team/hana.jpg",
    initials: "HF",
    name: "Hana Fithri Sabiila",
    role: "Front-End Developer",
    bio: "Designs and implements intuitive user interfaces to create a seamless and engaging user experience.",
  },
];

export const techStack: string[] = [];

// Goal options are static UI choices, not backend data
export const goalOptions = ["Internship", "Freelance", "Fulltime"];
