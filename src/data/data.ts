export interface TechItem {
  id: number;
  name: string;
  designation: "frontend" | "backend" | "tool" | "design";
  category?:
    | "framework"
    | "language"
    | "library"
    | "database"
    | "design"
    | "tool";
  img: string;
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
  {
    id: 1,
    name: "React.JS",
    designation: "frontend",
    category: "framework",
    img: "tech_stack/react.svg",
  },
  {
    id: 2,
    name: "Laravel",
    designation: "backend",
    category: "framework",
    img: "tech_stack/laravel.svg",
  },
  {
    id: 3,
    name: "Next.JS",
    designation: "frontend",
    category: "framework",
    img: "tech_stack/next.svg",
  },
  {
    id: 4,
    name: "Angular",
    designation: "frontend",
    category: "framework",
    img: "tech_stack/angular.svg",
  },
  {
    id: 5,
    name: "JavaScript",
    designation: "frontend",
    category: "language",
    img: "tech_stack/javascript.svg",
  },
  {
    id: 6,
    name: "PHP",
    designation: "backend",
    category: "language",
    img: "tech_stack/php.svg",
  },
  {
    id: 7,
    name: "TypeScript",
    designation: "frontend",
    category: "language",
    img: "tech_stack/typescript.svg",
  },
  {
    id: 8,
    name: "Tailwind CSS",
    designation: "frontend",
    category: "library",
    img: "tech_stack/tailwind.svg",
  },
  {
    id: 9,
    name: "HTML",
    designation: "frontend",
    category: "language",
    img: "tech_stack/typescript.svg",
  },
  {
    id: 10,
    name: "CSS",
    designation: "frontend",
    category: "language",
    img: "tech_stack/css.svg",
  },
  {
    id: 11,
    name: "Redux",
    designation: "frontend",
    category: "library",
    img: "tech_stack/redux.svg",
  },
  {
    id: 12,
    name: "Zustand",
    designation: "frontend",
    category: "library",
    img: "tech_stack/zustand.svg",
  },
  {
    id: 13,
    name: "MySQL",
    designation: "backend",
    category: "database",
    img: "tech_stack/mysql.svg",
  },
  {
    id: 14,
    name: "MongoDB",
    designation: "backend",
    category: "database",
    img: "tech_stack/mongodb.svg",
  },
  {
    id: 15,
    name: "Docker",
    designation: "backend",
    category: "tool",
    img: "tech_stack/docker.svg",
  },
  {
    id: 16,
    name: "Git",
    designation: "tool",
    category: "tool",
    img: "tech_stack/git.svg",
  },
  {
    id: 17,
    name: "Firebase",
    designation: "backend",
    category: "tool",
    img: "tech_stack/firebase.svg",
  },
  {
    id: 18,
    name: "Bootstrap",
    designation: "frontend",
    category: "library",
    img: "tech_stack/bootstrap.svg",
  },
  {
    id: 19,
    name: "Photoshop",
    designation: "design",
    category: "design",
    img: "tech_stack/photoshop.svg",
  },
  {
    id: 20,
    name: "Illustrator",
    designation: "design",
    category: "design",
    img: "tech_stack/illustrator.svg",
  },
  {
    id: 21,
    name: "Postman",
    designation: "tool",
    category: "tool",
    img: "tech_stack/postman.svg",
  },
  {
    id: 22,
    name: "SCSS",
    designation: "frontend",
    category: "library",
    img: "tech_stack/scss.svg",
  },
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
