
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["JavaScript", "TypeScript", "Python", "Rust"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Django", "Express.js", "Hono", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Sqlite3"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Postman", "Git", "Github"],
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["Figma", "draw.io", "Wireframing", "Prototyping"],
  },
];
