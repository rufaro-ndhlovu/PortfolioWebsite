export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  stackLabel: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Company Directory V2",
    description:
      "A modern rebuild of my original Company Directory project using React and TypeScript, focused on reusable components, improved state management, responsive UI design, and cleaner architecture.",
    image: "/companyDirectoryV2.png",
    techStack: ["React", "TypeScript", "CSS", "REST APIs", "Node.js"],
    stackLabel: "Full Stack",
    github: "https://github.com/rufaro-ndhlovu/employee-directory-v2",
    live: "https://employee-directory-v2-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Company Directory V1",
    description:
      "A mobile-first personnel management system created during a full stack developer traineeship using PHP, MySQL, JavaScript, and Bootstrap. Features CRUD functionality, department filtering, modal workflows, and database integration.",
    image: "/companyDirectoryV1.png",
    techStack: [
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "REST APIs",
    ],
    stackLabel: "Full Stack",
    github: "Please email for access",
    live: "https://rufarondhlovu.co.uk/project2/",
  },
  {
    id: 3,
    title: "Gazetteer",
    description:
      "A mobile-first travel and geography application using multiple APIs to display country information, maps, weather, and points of interest.",
    image: "/gazeteer.png",
    techStack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "PHP",
      "Leaflet",
      "Bootstrap",
      "REST APIs",
    ],
    stackLabel: "Full Stack",
    github: "Please email for access",
    live: "https://rufarondhlovu.co.uk/project1/",
  },

  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A custom developer portfolio designed and developed with a modern UI, smooth animations, responsive layouts, and reusable React components.",
    image: "/portfolioWebsite.png",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    stackLabel: "Frontend",
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.vercel.app",
  },
];
