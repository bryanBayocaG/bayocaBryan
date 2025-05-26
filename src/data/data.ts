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
  image?: string;
  description?: string;
  type: "Graphic Art" | "Web App" | "Logo Design";
  techStack: string[];
  sourceCodeUrl?: string;
  liveUrl?: string;
  status: "Done" | "In-progress";
}

export interface CertificateItem {
  id: number;
  name: string;
  link: string;
  imgUrl: string;
}

export const techStack: TechItem[] = [
  {
    id: 1,
    name: "JavaScript",
    designation: "frontend",
    category: "language",
    img: "tech_stack/javascript.svg",
  },
  {
    id: 2,
    name: "PHP",
    designation: "backend",
    category: "language",
    img: "tech_stack/php.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    designation: "frontend",
    category: "language",
    img: "tech_stack/typescript.svg",
  },
  {
    id: 4,
    name: "HTML",
    designation: "frontend",
    category: "language",
    img: "tech_stack/html.svg",
  },
  {
    id: 5,
    name: "CSS",
    designation: "frontend",
    category: "language",
    img: "tech_stack/css.svg",
  },
  {
    id: 6,
    name: "SCSS",
    designation: "frontend",
    category: "library",
    img: "tech_stack/scss.svg",
  },
  {
    id: 7,
    name: "React.JS",
    designation: "frontend",
    category: "framework",
    img: "tech_stack/react.svg",
  },
  {
    id: 8,
    name: "Laravel",
    designation: "backend",
    category: "framework",
    img: "tech_stack/laravel.svg",
  },
  {
    id: 9,
    name: "Next.JS",
    designation: "frontend",
    category: "framework",
    img: "tech_stack/next.svg",
  },
  {
    id: 10,
    name: "Angular",
    designation: "frontend",
    category: "framework",
    img: "tech_stack/angular.svg",
  },
  {
    id: 11,
    name: "Tailwind CSS",
    designation: "frontend",
    category: "library",
    img: "tech_stack/tailwind.svg",
  },
  {
    id: 12,
    name: "Redux",
    designation: "frontend",
    category: "library",
    img: "tech_stack/redux.svg",
  },
  {
    id: 23,
    name: "GSAP",
    designation: "frontend",
    category: "library",
    img: "tech_stack/gsap.svg",
  },
  {
    id: 13,
    name: "Zustand",
    designation: "frontend",
    category: "library",
    img: "tech_stack/zustand.svg",
  },
  {
    id: 14,
    name: "Bootstrap",
    designation: "frontend",
    category: "library",
    img: "tech_stack/bootstrap.svg",
  },
  {
    id: 15,
    name: "MySQL",
    designation: "backend",
    category: "database",
    img: "tech_stack/mysql.svg",
  },
  {
    id: 16,
    name: "MongoDB",
    designation: "backend",
    category: "database",
    img: "tech_stack/mongodb.svg",
  },
  {
    id: 17,
    name: "Docker",
    designation: "backend",
    category: "tool",
    img: "tech_stack/docker.svg",
  },
  {
    id: 22,
    name: "Express.JS",
    designation: "backend",
    category: "framework",
    img: "tech_stack/express.svg",
  },
  {
    id: 18,
    name: "Git",
    designation: "tool",
    category: "tool",
    img: "tech_stack/git.svg",
  },
  {
    id: 19,
    name: "Firebase",
    designation: "backend",
    category: "tool",
    img: "tech_stack/firebase.svg",
  },
  {
    id: 20,
    name: "Postman",
    designation: "tool",
    category: "tool",
    img: "tech_stack/postman.svg",
  },
  {
    id: 21,
    name: "Photoshop",
    designation: "design",
    category: "design",
    img: "tech_stack/photoshop.svg",
  },

  {
    id: 23,
    name: "Illustrator",
    designation: "design",
    category: "design",
    img: "tech_stack/illustrator.svg",
  },
];

export const projects: Project[] = [
  {
    id: 7,
    name: "NestNexus",
    image: "/projects/nestNexus.png",
    description:
      "A real estate management platform where landlords can upload and manage property listings with detailed descriptions and images. It features secure file handling using Appwrite storage buckets and stores listing data in MongoDB for scalability and performance. Customers can easily search, filter, and contact landlords based on their specific needs. This project enhanced my skills in building full-stack applications with dynamic data handling and user-centric design. It’s a complete solution for streamlined property discovery and management.",
    type: "Web App",
    techStack: [
      "React.JS",
      "Zustand",
      "Tailwind CSS",
      "Firebase",
      "Express.JS",
      "MongoDB",
      "Redux",
      "HTML",
    ],
    sourceCodeUrl: "https://github.com/bryanBayocaG/nestNexus",
    liveUrl: "https://nest-nexus.vercel.app/",
    status: "Done",
  },
  {
    id: 8,
    name: "Natours",
    image: "/projects/natours.png",
    description:
      "A purely front-end project built to practice and strengthen my understanding of Angular fundamentals. I focused on creating reusable components, implementing responsive layouts, and managing styles using SCSS with variables and mixins. This project helped me build a solid foundation in Angular’s component-based architecture and responsive design principles. It served as a hands-on exploration of modern front-end development techniques using Angular and SCSS.",
    type: "Web App",
    techStack: ["Angular", "SCSS", "CSS", "HTML"],
    sourceCodeUrl: "https://github.com/bryanBayocaG/natours",
    liveUrl: "https://natours-cyan-nine.vercel.app/",
    status: "In-progress",
  },
  {
    id: 9,
    name: "Authentication API",
    image: "",
    description:
      "A pure back-end project where I practiced building RESTful APIs using Laravel’s resource controllers. The application runs in a Dockerized environment with MySQL as the database and uses JWT for authentication, securely stored in HTTP cookies. I implemented full CRUD functionality, established relationships within Laravel Eloquent models, and included structured error handling for robust API behavior. This project deepened my knowledge of Laravel’s API capabilities, containerization, and secure user authentication.",
    type: "Web App",
    techStack: ["Laravel", "PHP", "MySQL", "Docker"],
    sourceCodeUrl:
      "https://github.com/bryanBayocaG/project-admin/tree/main/laravel-admin",
    liveUrl: "",
    status: "In-progress",
  },
  {
    id: 5,
    name: "TaskFolder",
    image: "/projects/taskfolder.png",
    description:
      "An advanced task management app featuring a Kanban-style board and real-time progress tracking. Users can create multiple boards and manage tasks within each board, offering a flexible and organized workflow. This project is an upgraded version of my earlier Trello clone, built with the MERN stack and enhanced with Zustand for state management. I also developed a custom REST API using Node.js, gaining deeper experience in full-stack development, scalable architecture, and state synchronization.",
    type: "Web App",
    techStack: [
      "React.JS",
      "Zustand",
      "Tailwind CSS",
      "Express.JS",
      "MongoDB",
      "Firebase",
      "HTML",
    ],
    sourceCodeUrl: "https://github.com/yourusername/taskfolder",
    liveUrl: "https://task-folder.vercel.app/",
    status: "Done",
  },
  {
    id: 6,
    name: "Portfolio Website V1",
    image: "/projects/portfolioV1.png",
    description:
      "My first personal portfolio, built to showcase my skills, projects, and growth as a developer. Created using React and styled with Tailwind CSS, it’s fully responsive across all devices. This project marked my introduction to building polished UIs and mobile-friendly layouts, helping me understand the fundamentals of responsive design. It’s the first version of my portfolio and a milestone in my journey as a front-end developer.",
    type: "Web App",
    techStack: [
      "React.JS",
      "Next.JS",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "HTML",
    ],
    sourceCodeUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://bayoca-portfolio.vercel.app/",
    status: "Done",
  },
  {
    id: 1,
    name: "Web Scrapper",
    image: "",
    description:
      "A web scraper that extracts product data from both Google Shopping and the Amazon store. It features seamless integration with Oxylabs scrapper API. Users can choose which platform to scrape and enjoy a robust search experience with a custom-built filtering system, and sorting by price or relevance. This project highlights my skills in API integration, dynamic user input handling, and advanced front-end functionality for an intuitive user experience.",
    type: "Web App",
    techStack: ["React.JS", "Next.JS", "TypeScript", "Tailwind CSS", "HTML"],
    sourceCodeUrl: "https://github.com/bryanBayocaG/webScrapper",
    liveUrl: "",
    status: "Done",
  },
  {
    id: 2,
    name: "Trello Clone",
    image: "/projects/trello.png",
    description:
      "A Trello clone built with React and TypeScript, featuring intuitive drag-and-drop functionality powered by Atlassian’s React DnD library. I integrated the OpenAI API to provide smart task insights by analyzing the content of the To-Do, In Progress, and Done columns. Users can also upload images to enrich their task cards, enhancing the visual experience. This project helped me deepen my understanding of TypeScript, advanced state management, and working with AI APIs to deliver intelligent, interactive features.",
    type: "Web App",
    techStack: [
      "React.JS",
      "Next.JS",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Firebase",
      "HTML",
    ],
    sourceCodeUrl: "https://github.com/bryanBayocaG/trello",
    liveUrl: "https://trello-clone-two-hazel.vercel.app/",
    status: "Done",
  },
  {
    id: 3,
    name: "Capstone Project - (New one in progress)",
    image: "",
    description:
      "I developed a full-stack application for a mid-sized business client to manage their item rental operations. The system tracks rental movements, sends daily reminders to both the business owner and customers, and includes SMS messaging functionality for real-time updates. Built with Laravel, I gained hands-on experience with the MVC architecture, creating robust API endpoints, and implementing effective error handling. This project sharpened my back-end development skills and gave me practical experience delivering a real-world solution tailored to client needs.",
    type: "Web App",
    techStack: [
      "Laravel",
      "PHP",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "MySQL",
      "HTML",
    ],
    sourceCodeUrl: "https://github.com/bryanBayocaG/larosa_capstone_old",
    liveUrl: "",
    status: "Done",
  },
  {
    id: 4,
    name: "Wikibook",
    image: "/projects/wikibook.png",
    description:
      "A personalized cheat sheet app that allows users to create, define, and organize their own custom terms for quick reference. I implemented Firebase Authentication to manage user accounts securely and used Firestore to store and sync user data in real time. This project taught me how to build scalable, user-centric features using serverless architecture. It’s a lightweight yet powerful tool designed to boost productivity and knowledge retention.",
    type: "Web App",
    techStack: [
      "React.JS",
      "Next.JS",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Firebase",
      "HTML",
    ],
    sourceCodeUrl: "https://github.com/yourusername/wikibook",
    liveUrl: "https://wikibook.vercel.app",
    status: "Done",
  },
];

export const certificates: CertificateItem[] = [
  {
    id: 0,
    name: "Javascript Asynchronous Function",
    link: "https://www.linkedin.com/learning/certificates/ea04657ac3955812c07876f6f28e31948c67f72ab35e61461111fd2fe716874b",
    imgUrl: "/certificate/javascript_async.jpg",
  },
  {
    id: 3,
    name: "Git Version Control",
    link: "https://www.linkedin.com/learning/certificates/b970680c8cf6ffee36e3ba22fa0b75f329b58457b8149c404952a7ac2a81347c?trk=share_certificate",
    imgUrl: "/certificate/version_control.jpg",
  },
  {
    id: 1,
    name: "College Diploma",
    link: "https://drive.google.com/file/d/14oy_ntnMssk8n4j5z7F1QIfXKbhZPODD/view?usp=sharing",
    imgUrl: "/certificate/bayoca_diploma.jpg",
  },
  {
    id: 2,
    name: "OJT Completion Certificate",
    link: "https://drive.google.com/file/d/17hwEtZR4RfdgoQjGaoo88d0ZsTVvdKNw/view?usp=sharing",
    imgUrl: "/certificate/ojt_cert.jpg",
  },

  {
    id: 4,
    name: "MERN stack development",
    link: "https://www.udemy.com/certificate/UC-30f82cc7-6728-4138-84e1-efd76e4c8450/",
    imgUrl: "/certificate/mern_cert.jpg",
  },
];
