import CardCarousel, { type DetailCard } from "./CardCarousel";

const experiences: DetailCard[] = [
  {
    title: "Full-Stack Developer",
    period: "Nov 2024 - Present",
    organization: "Shanghai Fanci Enterprise Management Consulting Co. Ltd",
    description: [
      "Develop Python-based batch folder and file management tools that automate Excel-related workflows and reduce repetitive handling time by over 80%.",
      "Build document recognition and processing workflows using Python, regular expressions, and Pandas to extract and transform Excel data efficiently.",
      "Contribute to a custom web-based CRM system that supports internal business process digitisation and improves operational efficiency.",
    ],
    tags: ["Python", "Pandas", "Excel", "CRM", "PDF automation"],
  },
  {
    title: "Software Developer Intern",
    period: "Jan 2026 - Apr 2026",
    organization: "Untapped Talent",
    description: [
      "Designed and delivered full-stack features for UntappedMe and a game-based team enablement system using Next.js, React, TypeScript, and Firebase.",
      "Built and integrated an LLM-powered chat system covering backend orchestration, knowledge retrieval, and structured response flows.",
      "Developed backend APIs and data pipelines with Next.js route handlers and Firebase services, including Firestore, Authentication, and Storage.",
      "Translated stakeholder requirements into technical solutions and supported continuous deployment through Vercel and Git workflows.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Firebase", "LLM"],
  },
];

export default function WorkExp() {
  return <CardCarousel title="Work Experience" items={experiences} />;
}
