import avatarAsset from "@/assets/kyle-avatar.jpeg.asset.json";
import {
  Home,
  User,
  Sparkles,
  Briefcase,
  Workflow,
  Mail,
  PenTool,
  Code2,
  Smartphone,
  Network,
  LifeBuoy,
  Palette,
} from "lucide-react";

export const profile = {
  name: "Kyle",
  fullName: "Christ Vein Cabalida",
  title: "UX/UI Designer & Digital Product Builder",
  greeting: "Hello, I'm Christ Vein Kyle Cabalida.",
  intro:
    "Designing intuitive digital experiences and building practical systems that connect people, technology, and business.",
  status: "Available for Projects",
  initials: "CV",
  avatar: avatarAsset.url,
  meta: {
    role: "UX/UI Designer",
    specialization: "Digital Product Design",
    experience: "1+ Year",
    location: "Philippines",
    focus: "Enterprise Systems & Applications",
    lastUpdated: "September 2026",
    designTool: "Figma",
  },
  contact: {
    email: "cv@asuratechsolutions.com",
    linkedin: "https://www.linkedin.com/in/christ-vein-cabalida-258562291/",
    linkedinLabel: "linkedin.com/in/christ-vein-cabalida-258562291",
    location: "Philippines",
    availability: "Open for selected projects",
  },
};

export const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/expertise", label: "Expertise", icon: Sparkles },
  { to: "/work", label: "Work", icon: Briefcase },
  { to: "/process", label: "Process", icon: Workflow },
  { to: "/contact", label: "Contact Me", icon: Mail },
];

export const dashboardCards = [
  { no: "01", label: "Experience", value: "UX/UI Design" },
  { no: "02", label: "Focus", value: "Digital Products" },
  { no: "03", label: "Tools", value: "Figma • React • Flutter" },
  { no: "04", label: "Location", value: "Philippines" },
];

export const aboutParagraphs = [
  "I'm a multidisciplinary technology professional working across UX/UI design, frontend development, system analysis, and IT support. That mix means I can sit with stakeholders to map a workflow, design the interface for it, and stay involved while it gets built and supported.",
  "Most of my work lives in enterprise systems and internal platforms — the kind of software people use all day. I care about clear structure, readable screens, and interfaces that reduce the number of decisions someone has to make to get their job done.",
];

export const expertise = [
  {
    icon: PenTool,
    title: "UX/UI Design",
    description:
      "Turning requirements into clear screens, reusable components, and flows people can follow without training.",
    level: 92,
    tools: ["Figma", "Wireframing", "Prototyping", "Design Systems", "User Flows"],
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive, component-based interfaces that stay close to the design intent.",
    level: 84,
    tools: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Design",
    description:
      "Designing mobile-first layouts and touch interactions that scale across screen sizes.",
    level: 80,
    tools: ["Mobile UX", "Responsive Design", "Flutter UI"],
  },
  {
    icon: Network,
    title: "System Analysis",
    description:
      "Mapping business processes into requirements, user flows, and documentation developers can build from.",
    level: 82,
    tools: ["Requirements Analysis", "User Flows", "System Documentation"],
  },
  {
    icon: LifeBuoy,
    title: "IT Support",
    description:
      "Keeping hardware, networks, and workstations running, and resolving issues end users report.",
    level: 86,
    tools: ["Hardware", "Networking", "Troubleshooting", "System Setup"],
  },
  {
    icon: Palette,
    title: "Graphic & Visual Design",
    description:
      "Producing brand assets and marketing visuals that stay consistent across channels.",
    level: 78,
    tools: ["Branding", "Social Media Graphics", "Marketing Materials"],
  },
];

export const filters = ["All", "UX/UI", "Web", "Systems"];

export const projects = [
  {
    id: "empireone",
    name: "EmpireOne Unified System",
    category: "Enterprise System / UX/UI",
    tags: ["UX/UI", "Systems"],
    hue: 264,
    summary:
      "A unified employee and applicant platform designed to streamline HR, employee engagement, recruitment, and internal company workflows.",
    role: "UX/UI Designer / System Analyst",
    tools: ["Figma", "React", "Next.js", "Tailwind", "VS Code"],
    overview:
      "One platform for employees and applicants, replacing separate tools used for HR records, engagement, and recruitment.",
    challenge:
      "Employee, applicant, and internal request workflows lived in disconnected tools, so the same information was re-entered and hard to track.",
    solution:
      "A modular dashboard with a shared navigation model, role-based views, and a component library so each module looks and behaves the same way.",
    contribution:
      "Gathered requirements with stakeholders, mapped the user flows, designed the screens in Figma, and prepared the specifications used for implementation.",
    result:
      "A consistent system structure that HR and employees use through one entry point instead of several tools.",
  },
  {
    id: "gymasura",
    name: "GymAsura",
    category: "Gym Management System",
    tags: ["Systems", "Web", "UX/UI"],
    hue: 199,
    summary:
      "A customizable gym management platform for memberships, attendance, trainers, POS, inventory, and business management.",
    role: "UX/UI Designer / System Analyst",
    tools: ["Figma", "React", "Tailwind", "VS Code"],
    overview:
      "An operations platform for gyms covering members, attendance, trainers, point of sale, and inventory in one interface.",
    challenge:
      "Gyms operate differently from one another, so the interface had to stay usable whether a branch runs a POS, classes, or both.",
    solution:
      "Configurable modules on a shared dashboard shell, with attendance and membership states surfaced as the primary daily view.",
    contribution:
      "Defined the information architecture, designed the dashboard and module screens, and documented the states for each workflow.",
    result: "A single operational view that front-desk staff can run a shift from.",
  },
  {
    id: "career-empireone",
    name: "Career EmpireOne",
    category: "Careers Platform / UX/UI",
    tags: ["UX/UI", "Web", "Systems"],
    hue: 294,
    summary:
      "A careers portal designed to present open roles and guide applicants through one clear application flow.",
    role: "UX/UI Designer",
    tools: ["Figma", "React", "Tailwind"],
    overview:
      "Open roles, role details, and applications brought into one careers site instead of scattered job posts and email threads.",
    challenge:
      "Roles were advertised in several places and applications arrived through different channels, so nothing sat in one pipeline.",
    solution:
      "A role listing built for scanning, a short application flow with visible progress, and one applicant view that keeps each submission in a clear state.",
    contribution:
      "Mapped the applicant journey, designed the listing, role, and application screens in Figma, and documented the states for development handoff.",
    result:
      "A single careers entry point where someone can find a role and apply without leaving the site.",
  },
  {
    id: "empireone-health",
    name: "EmpireOne Health",
    category: "Health Platform / UX/UI",
    tags: ["UX/UI", "Web", "Systems"],
    hue: 190,
    summary: "A health platform designed to keep care information clear and easy to reach.",
    role: "UX/UI Designer / Frontend Developer",
    tools: ["Figma", "Webflow", "Framer", "React", "Tailwind"],
    overview:
      "A health-focused product that brings the information and admin tasks around care into one place.",
    challenge:
      "Health workflows involve a lot of detail and sensitive information, so the interface has to stay simple without hiding what matters.",
    solution:
      "One calm layout that groups health information, schedules, and records into a single clear flow, with the most needed actions always within reach.",
    contribution:
      "Mapped the user journey, designed the key screens in Figma, documented the states for handoff, and implemented the frontend.",
    result:
      "A single place where health information and everyday admin are handled without switching between tools.",
  },
];

export const process = [
  {
    no: "01",
    title: "Discover",
    description: "Understand the business, users, requirements, and problems.",
  },
  {
    no: "02",
    title: "Research",
    description: "Analyze users, workflows, competitors, and existing systems.",
  },
  {
    no: "03",
    title: "Define",
    description:
      "Create requirements, user flows, information architecture, and project direction.",
  },
  {
    no: "04",
    title: "Design",
    description: "Create wireframes, UI designs, components, and prototypes in Figma.",
  },
  {
    no: "05",
    title: "Validate",
    description: "Review designs, test workflows, gather feedback, and refine the experience.",
  },
  {
    no: "06",
    title: "Handoff",
    description:
      "Prepare design specifications and collaborate with developers for implementation.",
  },
];

export const projectTypes = [
  "UX/UI Design",
  "Web Development",
  "Mobile Application",
  "System Development",
  "IT Support",
  "Other",
];
