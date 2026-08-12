import CardCarousel, { type DetailCard } from "./CardCarousel";

const experiences: DetailCard[] = [
  {
    title: "Academic Tutor",
    period: "May 2025 - Present",
    organization: "CPU Education",
    description: [
      "Teach introductory machine learning, including mathematical foundations and basic models, to university-level students.",
    ],
    tags: ["Machine Learning", "Data Structures", "Teaching"],
  },
  {
    title: "Member of UNSW Academic Board",
    period: "Nov 2023 - Nov 2024",
    organization: "The University of New South Wales",
    description: [
      "Advised the Vice-Chancellor and Council on the University's standards of teaching, scholarship, and research.",
      "Met with the Head of School and executive staff to provide student feedback.",
      "Liaised with faculties and made recommendations to the Council.",
    ],
    tags: ["Governance", "Student voice", "Academic standards"],
  },
  {
    title: "UNSW CSE Stureps Member",
    period: "Jul 2023 - Jul 2024",
    organization: "UNSW Computer Science and Engineering",
    description: [
      "Handled complaints, questions, and feedback from undergraduate, postgraduate, and research students to help improve course quality.",
      "Met with the Head of School and executive staff and participated in the 2023 and 2024 CSE full-staff meetings.",
      "Maintained the Stureps webpage.",
    ],
    tags: ["Representation", "Feedback", "Web maintenance"],
  },
];

export default function AdditionalExp() {
  return <CardCarousel title="Extracurricular Experience" items={experiences} />;
}
