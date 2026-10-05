export type TimelineItem = {
  year: string;
  title: string;
  organisation: string;
  description: string;
  accent: string;
  isFirst?: boolean;
};

export const timeline: TimelineItem[] = [
  {
    year: "2021",
    title: "First design work",
    organisation: "Freelance",
    description: "Where it all started.",
    accent: "#c8b4e8",
  },
  {
    year: "2023",
    title: "Lead Product Designer",
    organisation: "Blizzcode Academy",
    description: "LMS and design system, full team coordination.",
    accent: "#a8d0b8",
  },
  {
    year: "Oct 2023",
    title: "Design Lead",
    organisation: "DevFest SE Unilag",
    description: "First DevFest Student Edition in Lagos.",
    accent: "#f0b8a0",
    isFirst: true,
  },
  {
    year: "Nov 2023",
    title: "Hacktoberfest Lead",
    organisation: "GDSC Unilag",
    description: "First designer-led open source session — 100+ designers.",
    accent: "#a8c0e8",
    isFirst: true,
  },
  {
    year: "2024",
    title: "Visual Designer + Product Designer",
    organisation: "GDG Lagos",
    description: "Community growth, ticketing system.",
    accent: "#e8b8d0",
  },
  {
    year: "Nov 2024",
    title: "Co-Founder and Design Lead",
    organisation: "Resonans",
    description: "Full brand identity and communication system.",
    accent: "#c8b4e8",
  },
  {
    year: "2024 - Ongoing",
    title: "Mentor",
    organisation: "ADPList, GMI, SCA, and more",
    description: "~100 designers across platforms and communities.",
    accent: "#a8d0b8",
  },
  {
    year: "Nov 2025",
    title: "Speaker",
    organisation: "Veet Career Series",
    description: "Thriving as a Tech Professional in an AI World.",
    accent: "#f0b8a0",
  },
  {
    year: "Sep 2025",
    title: "BSc Computer Science",
    organisation: "Covenant University",
    description: "Learning what lives underneath the things I design.",
    accent: "#a8c0e8",
  },
  {
    year: "Aug 2026",
    title: "Fellow",
    organisation: "The Bridge Program",
    description: "LEDGER wins 3 awards at hackathon.",
    accent: "#e8b8d0",
  },
  {
    year: "May 2026 - Ongoing",
    title: "Community Manager",
    organisation: "Untitled Designers Community",
    description: "15 chapters, one conference.",
    accent: "#c8b4e8",
  },
];