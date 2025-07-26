
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Google Cloud",
    icon: Cpu,
  },
  {
    name: "Meta Technologies",
    icon: Cpu,
  },
  {
    name: "Nvidia Technologies",
    icon: Cpu,
  },
  {
    name: "Microsoft",
    icon: Cpu,
  },
  {
    name: "Amazon Web Services",
    icon: Cpu,
  },
  {
    name: "Digital Ocean",
    icon: Cpu,
  },
];
