import CardCarousel, { type DetailCard } from "./CardCarousel";

const projects: DetailCard[] = [
  {
    title: "UntappedMe Platform",
    period: "Jan 2026 - Apr 2026",
    organization: "AI-enabled learning and self-awareness system",
    description: [
      "Developed a full-stack learning and self-awareness platform with profile management, search, and content-based learning modules.",
      "Implemented an LLM-powered chat system that provided context-aware guidance and recommendations to improve user engagement.",
      "Built internal administration features to manage users and content, streamlining platform operations and supporting ongoing iteration.",
    ],
    tags: ["Next.js", "Firebase", "LLM chat", "Admin tools"],
  },
  {
    title: "Fanzi Management Platform",
    period: "Nov 2024 - Jun 2025",
    organization: "CRM and file processing system",
    description: [
      "Developed key features for an internal CRM platform managing customer data, receivables, and income and expense tracking.",
      "Implemented full-stack functionality and automation pipelines for customer records, payment tracking, Excel parsing, PDF conversion, and batch printing.",
      "Improved system reliability and usability through testing and debugging, contributing to an overall workflow efficiency gain of more than 80%.",
    ],
    tags: ["CRM", "Python", "Excel parsing", "PDF conversion"],
  },
  {
    title: "Traffic Sign Recognition Classifier",
    period: "Jul 2024 - Sep 2024",
    organization: "Deep-learning image recognition",
    description: [
      "Developed a traffic sign classification system using LeNet, YOLOv5, and VGG to evaluate deep-learning approaches for image recognition.",
      "Wrote black-box tests in Jest to validate API endpoints and core functionality, supporting reliable deployment.",
    ],
    tags: ["LeNet", "YOLOv5", "VGG", "Jest"],
  },
];

export default function ProjectExp() {
  return <CardCarousel title="Project Experience" items={projects} />;
}
