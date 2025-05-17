export interface TechItem {
  id: number;
  name: string;
  designation: "frontend" | "backend" | "fullstack" | "tool" | "design";
  category?:
    | "framework"
    | "language"
    | "library"
    | "database"
    | "design"
    | "tool";
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  techStack: string[];
  sourceCodeUrl: string;
  liveUrl: string;
  status: "done" | "in-progress";
}

export const techStack: TechItem[] = [
  { id: 1, name: "React.JS", designation: "frontend", category: "framework" },
  { id: 2, name: "Laravel", designation: "backend", category: "framework" },
  { id: 3, name: "Next.JS", designation: "frontend", category: "framework" },
  { id: 4, name: "Angular", designation: "frontend", category: "framework" },
  { id: 5, name: "JavaScript", designation: "frontend", category: "language" },
  { id: 6, name: "PHP", designation: "backend", category: "language" },
  { id: 7, name: "TypeScript", designation: "frontend", category: "language" },
  { id: 8, name: "Tailwind CSS", designation: "frontend", category: "library" },
  { id: 9, name: "HTML", designation: "frontend", category: "language" },
  { id: 10, name: "CSS", designation: "frontend", category: "language" },
  { id: 11, name: "Redux", designation: "frontend", category: "library" },
  { id: 12, name: "Zustand", designation: "frontend", category: "library" },
  { id: 13, name: "MySQL", designation: "backend", category: "database" },
  { id: 14, name: "MongoDB", designation: "backend", category: "database" },
  { id: 15, name: "Docker", designation: "backend", category: "tool" },
  { id: 16, name: "Git", designation: "tool", category: "tool" },
  { id: 17, name: "Firebase", designation: "backend", category: "tool" },
  { id: 18, name: "Bootstrap", designation: "frontend", category: "library" },
  { id: 19, name: "Photoshop", designation: "design", category: "design" },
  { id: 20, name: "Illustrator", designation: "design", category: "design" },
  { id: 21, name: "Postman", designation: "tool", category: "tool" },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Wikibook",
    description:
      "A collaborative cheat sheet app where users can create and define their own terms.",
    techStack: [
      "React.JS",
      "Next.JS",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Firebase",
    ],
    sourceCodeUrl: "https://github.com/yourusername/wikibook",
    liveUrl: "https://wikibook.vercel.app",
    status: "done",
  },
  {
    id: 2,
    name: "TaskFolder",
    description:
      "A task management app with a Kanban-style board and progress tracking.",
    techStack: ["React.JS", "Zustand", "Tailwind CSS", "Firebase"],
    sourceCodeUrl: "https://github.com/yourusername/taskfolder",
    liveUrl: "https://taskfolder.vercel.app",
    status: "done",
  },
  {
    id: 3,
    name: "Portfolio Website V1",
    description: "Personal portfolio to showcase my skills and projects.",
    techStack: ["React.JS", "Next.JS", "TypeScript", "Tailwind CSS", "Zustand"],
    sourceCodeUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    status: "done",
  },
];
