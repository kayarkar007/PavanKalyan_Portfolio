export const projects = [
  {
    id: 1,
    title: "Localu – Delivery App",
    description: "A comprehensive local delivery ecosystem with premium UI, real-time tracking, and multi-user roles (Admin, Vendor, Delivery, User). Built with MERN stack and Redux for state management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS", "JWT", "Razorpay"],
    link: "#",
    github: "#",
    image: "/assets/localu-preview.png",
    category: "Full Stack",
    highlights: [
      "Multi-role authentication system (Admin, Vendor, Delivery Agent, Customer)",
      "Real-time order tracking with WebSocket integration",
      "Razorpay payment gateway with webhook handling",
      "Interactive admin dashboard with analytics and order management",
      "Premium glassmorphism UI with Framer Motion animations",
    ]
  },
  {
    id: 2,
    title: "FlowLabs – Visual Pipeline Builder",
    description: "A flagship DAG-based visual interface for creating and executing modular workflows with dynamic node configuration. Think Zapier but fully custom-built.",
    tech: ["MERN Stack", "React Flow", "Node.js", "MongoDB", "DAG Architecture", "WebSockets"],
    link: "#",
    github: "#",
    image: "/assets/flowlabs-preview.png",
    category: "System Design",
    highlights: [
      "Drag-and-drop DAG (Directed Acyclic Graph) based workflow builder",
      "Dynamic node registry with custom configuration panels",
      "Real-time pipeline execution with status propagation via WebSockets",
      "Configurable edge validation and cycle detection algorithms",
      "Modular backend worker system for parallel task execution",
    ]
  },
  {
    id: 3,
    title: "Job Application Tracker",
    description: "Secure JWT-based tracking system with interactive dashboards and data visualization for career management. Live on Vercel.",
    tech: ["React", "Express", "Node.js", "MongoDB", "Chart.js", "JWT", "Vercel"],
    link: "https://job-application-tracker-murex-three.vercel.app",
    github: "https://github.com/kayarkar007/Job_Application_Tracker.git",
    image: "/assets/job-tracker-preview.png",
    category: "Utility",
    highlights: [
      "Full JWT authentication with secure HTTP-only cookie sessions",
      "Interactive Chart.js dashboard showing application status breakdown",
      "Filter and search across applied, interviewing, and rejected applications",
      "Deployed to Vercel with CI auto-deployment from GitHub",
    ]
  },
  {
    id: 4,
    title: "Online Exam Portal",
    description: "Secure platform with RBAC, automated evaluation, and CI/CD integration for educational institutions.",
    tech: ["React", "Node.js", "MongoDB", "RBAC", "CI/CD", "Express"],
    link: "#",
    github: "#",
    image: "/assets/exam-portal-preview.png",
    category: "Education",
    highlights: [
      "Role-Based Access Control (RBAC) for Admin, Teacher, Student roles",
      "Automated MCQ evaluation with instant score generation",
      "Timer-enforced exams with auto-submit on timeout",
      "CI/CD pipeline for continuous deployment",
    ]
  },
  {
    id: 5,
    title: "Real-Time Chat App",
    description: "Bidirectional messaging system using WebSockets, featuring typing indicators and instant delivery. Live on Netlify.",
    tech: ["MERN Stack", "Socket.io", "WebSockets", "Tailwind CSS", "Netlify"],
    link: "https://advancechatappfrontend.netlify.app",
    github: "https://github.com/kayarkar007/AdvanceChatAppFrontend.git",
    image: "/assets/chat-app-preview.png",
    category: "Real-time",
    highlights: [
      "Full-duplex WebSocket communication with Socket.io",
      "Real-time typing indicators and online status",
      "Persistent message history stored in MongoDB",
      "Deployed frontend (Netlify) and backend (Render) separately",
    ]
  },
  {
    id: 6,
    title: "Fast Cart – E-Commerce",
    description: "Scalable MERN e-commerce platform with admin dashboard, inventory management, and optimized queries.",
    tech: ["MERN Stack", "Redux", "API Optimization", "MongoDB Aggregation"],
    link: "#",
    github: "#",
    image: "/assets/fast-cart-preview.png",
    category: "E-Commerce",
    highlights: [
      "Product catalog with category filtering and search",
      "Redux cart state management with persistent localStorage",
      "Admin dashboard for product and inventory management",
      "MongoDB aggregation pipelines for optimized sales analytics",
    ]
  }
];

export const skills = [
  // ─── Frontend ───────────────────────────────────
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Framer Motion", level: 82, category: "Frontend" },
  { name: "Three.js / R3F", level: 75, category: "Frontend" },
  { name: "Redux / Context API", level: 88, category: "Frontend" },
  { name: "HTML5 / CSS3", level: 97, category: "Frontend" },
  { name: "GSAP Animations", level: 78, category: "Frontend" },

  // ─── Backend ────────────────────────────────────
  { name: "Node.js", level: 92, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "REST API Design", level: 92, category: "Backend" },
  { name: "Socket.io / WebSockets", level: 80, category: "Backend" },
  { name: "JWT / OAuth 2.0", level: 85, category: "Backend" },
  { name: "Razorpay / Stripe APIs", level: 75, category: "Backend" },
  { name: "GraphQL", level: 65, category: "Backend" },

  // ─── Database ───────────────────────────────────
  { name: "MongoDB / Mongoose", level: 88, category: "Database" },
  { name: "PostgreSQL", level: 70, category: "Database" },
  { name: "Redis (Caching)", level: 65, category: "Database" },
  { name: "Firebase Firestore", level: 72, category: "Database" },

  // ─── Language ───────────────────────────────────
  { name: "JavaScript (ES2024)", level: 95, category: "Language" },
  { name: "TypeScript", level: 78, category: "Language" },
  { name: "Python (Scripting)", level: 65, category: "Language" },
  { name: "Bash / Shell", level: 60, category: "Language" },

  // ─── Productivity / DevOps ─────────────────────
  { name: "AI-Assisted Dev (Cursor/ChatGPT)", level: 92, category: "Productivity" },
  { name: "Git / GitHub", level: 90, category: "Productivity" },
  { name: "Docker (Basics)", level: 65, category: "Productivity" },
  { name: "CI/CD (GitHub Actions)", level: 70, category: "Productivity" },
  { name: "Vercel / Netlify / Render", level: 90, category: "Productivity" },
  { name: "Figma / UI Design", level: 75, category: "Productivity" },
  { name: "Postman / API Testing", level: 88, category: "Productivity" },
];