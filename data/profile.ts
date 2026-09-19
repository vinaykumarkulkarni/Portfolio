export const profile = {
  name: "Vinay Kulkarni",
  title: "Lead Software Engineer",
  subtitle: "Frontend / Full-Stack Engineer",
  location: "Bengaluru, India",
  email: "vinaykoppal@gmail.com",
  phone: "+91-8951177248",
  summary:
    "Lead Consultant / Senior Software Engineer with 12 years of software development experience, including strong hands-on experience in React.js, Next.js, JavaScript, TypeScript, Redux, Node.js and automated testing. Experienced in enterprise web application development, frontend architecture, reusable component design, API integration, testing, deployment and stakeholder collaboration. Recent enterprise application experience also includes Microsoft Power Platform. Currently focused on modern full-stack, cloud and Generative AI application development.",
  focus: ["React.js", "Next.js", "Node.js", "AWS", "Generative AI"]
};

export const socialLinks = {
  github: "https://github.com/REPLACE_WITH_YOUR_GITHUB",
  linkedin: "https://www.linkedin.com/in/REPLACE_WITH_YOUR_LINKEDIN"
};

export const skills = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Redux", "HTML5", "CSS3", "Bootstrap", "jQuery"]
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JSON", "C#", "ASP.NET"]
  },
  {
    group: "Testing",
    items: ["Jest", "React Testing Library", "Enzyme", "Cypress", "Unit Testing", "TDD"]
  },
  {
    group: "Architecture",
    items: ["Frontend Architecture", "OOP", "SOLID Principles", "API Integration", "Web Application Development"]
  },
  {
    group: "Cloud / DevOps",
    items: ["AWS (learning/project focus)", "Docker", "CI/CD", "Git", "GitHub", "Deployment"]
  },
  {
    group: "AI / Current Focus",
    items: ["Python", "FastAPI", "Generative AI", "LLMs", "RAG", "Vector Databases", "AI Agents"]
  },
  {
    group: "Data / Tools",
    items: ["MS SQL Server", "MongoDB", "Redis", "Visual Studio Code", "Postman"]
  }
];

export const experience = [
  {
    company: "NTT DATA",
    role: "Lead Consultant",
    period: "Jan 2021 – Present",
    location: "Bengaluru, India",
    bullets: [
      "Worked on enterprise application development across modern frontend technologies and Microsoft Power Platform, collaborating with product owners, business stakeholders, QA and engineering teams.",
      "Designed/developed reusable, maintainable UI features using React.js, Next.js, JavaScript/TypeScript and Redux, emphasizing scalable frontend patterns and UX.",
      "Integrated frontend applications with APIs and enterprise services; debugging, performance improvements, testing and production/UAT deployments.",
      "Developed/maintained enterprise business apps using Power Apps and Power Automate during later phase.",
      "Worked on approval workflows, role-based access, forms, data integrations and enterprise process automation; supported UAT/prod releases.",
      "Contributed to solution discussions, requirement analysis, technical implementation, code quality and delivery coordination in lead/consulting capacity."
    ]
  },
  {
    company: "Harman Connected Services",
    role: "Senior Product Engineer",
    period: "~2 Years",
    location: "Bengaluru, India",
    bullets: [
      "Developed enterprise web apps using React, Redux, Node, JavaScript, Jest and Cypress; component development, unit/automation testing and deployment."
    ],
    projects: [
      {
        name: "TESCO – TPS (Toolkit Trading Partner)",
        period: "2019–2021",
        stack: ["React", "Redux", "Node", "JavaScript", "CSS3", "Jest", "Cypress"],
        bullets: [
          "Metadata-driven partner creation/search application; React upgrade and reusable UI development.",
          "TDD, unit testing and automation; worked with Product Owner on user stories/use cases and supported development, testing and deployment."
        ]
      },
      {
        name: "TESCO – SLMEP (Supplier Life Cycle Management Enterprise Portal)",
        period: "2018–2019",
        stack: ["React", "Redux", "Node", "JavaScript", "CSS3", "Jest"],
        bullets: [
          "Worked on Documents, System Links and Carousel modules with backend contribution.",
          "TDD, unit testing and deployment."
        ]
      }
    ]
  },
  {
    company: "Infosys Ltd",
    role: "Senior Systems Engineer",
    period: "~1 Year 2 Months",
    location: "Bengaluru, India",
    bullets: [
      "Requirements analysis, application development, unit testing, defect resolution."
    ],
    projects: [
      {
        name: "Southern California Edison (SCE)",
        period: "2017–2018",
        stack: ["React", "Jest", "HTML5", "CSS3"],
        bullets: [
          "Electricity account/billing platform covering registration, login and dashboard.",
          "Requirements/user stories, development, unit testing and deployment."
        ]
      }
    ]
  },
  {
    company: "Excelsoft Technologies Pvt Ltd",
    role: "Software Engineer",
    period: "~3 Years 1 Month",
    location: "Bengaluru, India",
    bullets: [
      "Development, debugging, deployment, unit testing, bug fixing, new business requirements."
    ],
    projects: [
      {
        name: "Saras-K12 / Parent Portal",
        period: "2014–2017",
        stack: ["React", "JavaScript", "AngularJS 1.4", "jQuery", "Bootstrap", "C3.js", "HTML5", "ASP.NET", "C#", "MSSQL", "Jest"],
        bullets: [
          "LMS with SuperAdmin/Admin/HOD/Teacher/Student roles; teachers assign homework and students access content, tests and results.",
          "Parent portal covering school activities, notifications, reports and performance.",
          "Worked on user stories, development, testing and deployment."
        ]
      }
    ]
  }
];

export const portfolioProjects = [
  {
    title: "Enterprise React / Next.js Platform",
    status: "Planned / Portfolio Build",
    description:
      "A production-style frontend demonstrating authentication, RBAC, state management, API integration, testing, performance and scalable component architecture.",
    stack: ["Next.js", "TypeScript", "React", "Redux Toolkit", "Jest", "Docker"],
    features: ["Authentication & RBAC", "Reusable component system", "API integration", "Testing & quality gates", "Performance-focused UI"]
  },
  {
    title: "Cloud-Native Full-Stack Application",
    status: "Planned / Portfolio Build",
    description:
      "A cloud-focused application designed to demonstrate full-stack engineering, containers, CI/CD and AWS deployment patterns.",
    stack: ["Next.js", "Node.js", "PostgreSQL / MongoDB", "Redis", "Docker", "AWS", "GitHub Actions"],
    features: ["REST APIs", "Caching", "Containerized deployment", "CI/CD pipeline", "Cloud architecture"]
  },
  {
    title: "Enterprise Knowledge AI Assistant",
    status: "Planned / Flagship AI Project",
    description:
      "A portfolio AI application demonstrating document ingestion, RAG, vector search, citations, tool use and AI-security controls.",
    stack: ["Next.js", "FastAPI", "LLM", "RAG", "MongoDB Atlas Vector Search", "AI Agents", "AWS"],
    features: ["Document ingestion", "Semantic retrieval", "Citations", "Agent/tool calling", "Prompt-injection protection", "Evaluation"]
  }
];
