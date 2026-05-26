// ---------------------------------------------------------------------------
// mockData.ts
// All arrays are intentionally empty.
// Backend integration should replace these with real API calls.
// ---------------------------------------------------------------------------

export const features: {
  icon: string;
  title: string;
  description: string;
}[] = [
  {
    icon: "🧠",
    title: "AI Skill Profiling",
    description: "Analyze your skills and interests using intelligent profiling powered by machine learning.",
  },
  {
    icon: "🎯",
    title: "Personalized Career Match",
    description: "Receive career recommendations tailored specifically to your strengths and goals.",
  },
  {
    icon: "📈",
    title: "Growth Roadmap",
    description: "Discover which skills to improve next and build a clearer roadmap for your future.",
  },
  {
    icon: "⚡",
    title: "Fast Recommendations",
    description: "Generate intelligent career insights in seconds through an intuitive guided flow.",
  },
  {
    icon: "🔍",
    title: "Deep Skill Analysis",
    description: "Understand how your abilities align with modern industry demands and opportunities.",
  },
  {
    icon: "🚀",
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

export const teamMembers: {
  initials: string;
  name: string;
  role: string;
  bio: string;
}[] = [
  {
    initials: "FF",
    name: "Faiz Fajar",
    role: "Project Lead & Back-End Developer",
    bio: "......",
  },
  {
    initials: "H",
    name: "Hizkian",
    role: "Machine Learning Engineer",
    bio: "....",
  },
  {
    initials: "AP",
    name: "Adinda Putri Nur R.",
    role: "Machine Learning Engineer",
    bio: ".....",
  },
  {
    initials: "HF",
    name: "Hana Fithri Sabiila",
    role: "Front-End Developer",
    bio: "......",
  },
];

export const techStack: string[] = [];

// Goal options are static UI choices, not backend data
export const goalOptions = ["Internship", "Freelance", "Fulltime"];
