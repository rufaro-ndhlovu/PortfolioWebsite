export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
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
      "A full rebuild of my original Company Directory - this time built with React, Next.js App Router, and TypeScript from the ground up. I architected a scalable, fully typed component library, implemented secure CRUD API routes with server-side Firebase/Firestore validation, and designed accessible, error-resilient forms using Formik + Yup. The goal was to write code I'd be proud to hand off to a team.",
    image: "/companyDirectoryV2.png",
    video: "/companyDirectoryV2_Video.mp4",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "CSS",
      "REST APIs",
      "Node.js",
      "Firebase",
    ],
    stackLabel: "Full Stack",
    github: "https://github.com/rufaro-ndhlovu/employee-directory-v2",
    live: "https://employee-directory-v2-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Company Directory V1",
    description:
      "The project that started it all. Built during my Full-Stack Developer traineeship, this PHP/MySQL personnel management system features full CRUD operations, department filtering, modal-based workflows, and a responsive mobile-first interface designed for distributed team use. It's where I learned to connect the dots between front-end logic and backend data - and I haven't stopped since.",
    image: "/companyDirectoryV1.png",
    video: "/companyDirectoryV1_Video.mp4",
    techStack: [
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "REST APIs",
    ],
    stackLabel: "Full Stack",
    github:
      "https://github.com/rufaro-ndhlovu/RufaroNdhlovu/tree/master/project2",
    live: "https://home-5020371659.app-ionos.space/project2/",
  },
  {
    id: 3,
    title: "Gazetteer",
    description:
      "An interactive geography and travel explorer, pulling together multiple REST APIs to surface country profiles, live weather data, currency info, and points of interest - all overlaid on a Leaflet-powered map. Designed mobile-first with progressive enhancement for larger screens. This project pushed my async JavaScript skills hard and taught me how to wrangle unpredictable API responses into a smooth, reliable UX.",
    image: "/gazeteer.png",
    video: "/GazeteerVideo.mp4",
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
    github:
      "https://github.com/rufaro-ndhlovu/RufaroNdhlovu/tree/master/project1",
    live: "https://home-5020371659.app-ionos.space/project1/",
  },

  {
    id: 4,
    title: "Portfolio Website",
    description:
      "You're looking at it. Designed and built from scratch with Next.js, TypeScript, and Framer Motion - with a focus on performance, clean layout, and making a strong first impression. Every section, animation, and component was a deliberate choice.",
    image: "/portfolioWebsite.png",
    video: "/portfolioWebsite.mp4",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    stackLabel: "Frontend",
    github: "https://github.com/rufaro-ndhlovu/PortfolioWebsite",
    live: "https://rufarondhlovu.co.uk/",
  },
];
