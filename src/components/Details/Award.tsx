import CardCarousel, { type DetailCard } from "./CardCarousel";

const awards: DetailCard[] = [
  {
    title: "MySQL HeatWave Implementation Certified Associate Rel 1",
    period: "Jul 28, 2025",
    organization: "Oracle",
    description: [
      "Oracle certification covering MySQL HeatWave implementation knowledge and applied cloud database capability.",
      "Credential ID: 102044707MYSQLHWIMPOCA.",
    ],
    tags: ["Oracle", "MySQL HeatWave", "Certification"],
  },
  {
    title: "Oracle Certified Professional, MySQL 8.0 Database Administrator",
    period: "Jul 21, 2025",
    organization: "Oracle",
    description: [
      "Professional-level Oracle credential for MySQL 8.0 database administration.",
      "Credential ID: 102044707MYSQLDBA80OCP.",
    ],
    tags: ["Oracle", "MySQL 8.0", "Database Administration"],
  },
  {
    title: "MySQL Implementation Certified Associate",
    period: "Jul 16, 2025",
    organization: "Oracle",
    description: [
      "Oracle associate credential for MySQL implementation fundamentals.",
      "Credential ID: 102044707MYSQLIMPOCA.",
    ],
    tags: ["Oracle", "MySQL", "Certification"],
  },
  {
    title: "Australia's Global University Award",
    period: "2022 & 2023",
    organization: "UNSW Sydney",
    description: [
      "Award providing up to $10,000 in financial support to international students, recognising academic achievement and contribution to the University's global community.",
    ],
    tags: ["Academic achievement", "International student award"],
  },
  {
    title: "College Scholar",
    period: "2023 & 2024",
    organization: "Warrane College, UNSW",
    description: [
      "Academic recognition for distinction-level results, leadership, and contribution to the college community.",
    ],
    tags: ["Distinction", "Leadership", "Community contribution"],
  },
];

export default function Award() {
  return <CardCarousel title="Awards & Certifications" items={awards} />;
}
