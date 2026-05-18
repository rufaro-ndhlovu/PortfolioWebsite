export type SkillCategory = {
  title: string;
  skills: {
    name: string;
    usedIn: string[];
    snippet: string;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      {
        name: "JavaScript ES6+",
        usedIn: ["Gazetteer", "Company Directory V1"],
        snippet: "async function fetchData() {}",
      },
      {
        name: "TypeScript",
        usedIn: ["Company Directory V2", "Portfolio"],
        snippet: "interface Props { id: string }",
      },
      {
        name: "HTML5",
        usedIn: ["All projects"],
        snippet: "<section aria-label='skills'>",
      },
      {
        name: "CSS3",
        usedIn: ["All projects"],
        snippet: "@keyframes drift { ... }",
      },
      {
        name: "PHP",
        usedIn: ["Gazetteer", "Company Directory V1"],
        snippet: "<?php echo $data; ?>",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React",
        usedIn: ["Company Directory V2", "Portfolio"],
        snippet: "const [state, setState] = useState()",
      },
      {
        name: "Next.js",
        usedIn: ["Company Directory V2", "Portfolio"],
        snippet: "export default function Page() {}",
      },
      {
        name: "Tailwind CSS",
        usedIn: ["Portfolio"],
        snippet: "className='flex gap-4 items-center'",
      },
      {
        name: "Framer Motion",
        usedIn: ["Portfolio"],
        snippet: "whileInView={{ opacity: 1 }}",
      },
      {
        name: "Bootstrap",
        usedIn: ["Gazetteer", "Company Directory V1"],
        snippet: "className='container-fluid'",
      },
      {
        name: "jQuery",
        usedIn: ["Gazetteer", "Company Directory V1"],
        snippet: "$('.modal').fadeIn()",
      },
      {
        name: "Leaflet",
        usedIn: ["Gazetteer"],
        snippet: "L.tileLayer(url).addTo(map)",
      },
    ],
  },
  {
    title: "Forms & State",
    skills: [
      {
        name: "Formik",
        usedIn: ["Company Directory V2"],
        snippet: "useFormik({ validationSchema })",
      },
      {
        name: "Yup",
        usedIn: ["Company Directory V2"],
        snippet: "string().email().required()",
      },
      {
        name: "Controlled Components",
        usedIn: ["Company Directory V2"],
        snippet: "value={val} onChange={setVal}",
      },
    ],
  },
  {
    title: "Back-End & Databases",
    skills: [
      {
        name: "Node.js",
        usedIn: ["Various"],
        snippet: "app.get('/api', handler)",
      },
      {
        name: "Firebase",
        usedIn: ["Company Directory V2"],
        snippet: "await addDoc(collection, data)",
      },
      {
        name: "REST APIs",
        usedIn: ["Gazetteer", "Company Directory V2"],
        snippet: "const res = await fetch(url)",
      },
      {
        name: "MySQL",
        usedIn: ["Company Directory V1", "QA Research"],
        snippet: "SELECT * FROM employees",
      },
      {
        name: "MariaDB",
        usedIn: ["Company Directory V1", "QA Research"],
        snippet: "ALTER TABLE staff ADD COLUMN...",
      },
      {
        name: "MongoDB",
        usedIn: ["Traineeship"],
        snippet: "db.collection.findOne({ id })",
      },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      {
        name: "Git & GitHub",
        usedIn: ["All projects"],
        snippet: "git commit -m 'feat: ...'",
      },
      {
        name: "Agile / Scrum",
        usedIn: ["QA Research"],
        snippet: "sprint planning, standups",
      },
      {
        name: "WordPress",
        usedIn: ["QA Research"],
        snippet: "custom templates, hooks",
      },
    ],
  },
];
