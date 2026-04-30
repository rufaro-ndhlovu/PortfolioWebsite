export type SkillCategory = {
  title: string;
  skills: {
    name: string;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript ES6+" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "PHP" },
    ],
  },

  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Redux" },
      { name: "Bootstrap" },
      { name: "jQuery" },
      { name: "Leaflet" },
      { name: "Tailwind.css" },
    ],
  },

  {
    title: "Forms & State",
    skills: [
      { name: "Formik" },
      { name: "Yup" },
      { name: "Controlled Components" },
      { name: "Validation UX" },
    ],
  },

  {
    title: "Back-End & Databases",
    skills: [
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "MariaDB" },
      { name: "PostgreSQL" },
      { name: "Firebase" },
      { name: "REST APIs" },
    ],
  },

  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub" },
      { name: "Agile/Scrum" },
      { name: "WordPress" },
      { name: "ESLint" },
      { name: "Prettier" },
      { name: "VS Code" },
    ],
  },

  {
    title: "Currently Learning",
    skills: [
      { name: "Jest" },
      { name: "React Testing Library" },
      { name: "WCAG Advanced" },
    ],
  },
];
