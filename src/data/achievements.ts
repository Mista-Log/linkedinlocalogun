
import { Trophy, Star, Award, Badge } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [

  {
    id: 1,
    title: "API Testing Expert - Postman",
    type: "certification",
    year: "2025",
    description: "Achieved certification in API testing, demonstrating proficiency in testing RESTful APIs using Postman.",
    icon: Badge,
  },
  {
    id: 2,
    title: "Arit Developer Circle Hackathon",
    type: "competition", 
    year: "2025",
    description: "Participated in the Arit Developer Circle Hackathon, showcasing skills in software development and problem-solving.",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Web Development - Zidio",
    type: "certification", 
    year: "2025",
    description: "Completed a comprehensive web development training program with Zidio to enhance skills in building modern web applications.",
    icon: Award,
  },
  {
    id: 4,
    title: "2nd Place - NACOS Litrary Debate",
    type: "competition", 
    year: "2025",
    description: "Secured second place in the NACOS Litrary Debate, demonstrating strong analytical and public speaking skills.",
    icon: Trophy,
  },
  {
    id: 5,
    title: "Python Certification - HackerRank",
    type: "certification",
    year: "2024",
    description: "Earned Python certification from HackerRank, validating skills in Python programming and problem-solving.",
    icon: Award,
  },
  {
    id: 6,
    title: "Back-end Development - Kibo School",
    type: "certification", 
    year: "2024",
    description: "Completed a back-end development course at Kibo School.",
    icon: Badge,
  },
  {
    id: 7,
    title: "Python Essentials - Udemy",
    type: "certification", 
    year: "2024",
    description: "Completed a Python Essentials course on Udemy, covering fundamental programming concepts and practical applications.",
    icon: Star,
  },
  {
    id: 8,
    title: "Back-end Web Development - Institute of Management, Technology & Finance",
    type: "certification", 
    year: "2024",
    description: "Completed a back-end web development course at the Institute of Management, Technology & Finance, focusing on server-side programming and database management.",
    icon: Star,
  },



  // {
  //   id: 1,
  //   title: "2nd Place - Algothon Codefest",
  //   type: "competition",
  //   year: "2024",
  //   description: "Secured second place in the competitive programming event.",
  //   icon: Trophy,
  // },
  // {
  //   id: 2,
  //   title: "3rd Place - INTELLECT 1.0 Hackathon",
  //   type: "competition", 
  //   year: "2024",
  //   description: "Won third place for developing an innovative solution during the 24-hour hackathon.",
  //   icon: Trophy,
  // },
  // {
  //   id: 3,
  //   title: "Dean's List",
  //   type: "academic",
  //   year: "2023",
  //   description: "Recognized for academic excellence with placement on the Dean's List.",
  //   icon: Star,
  // },
  // {
  //   id: 4,
  //   title: "Python Certification",
  //   type: "certification",
  //   year: "2023",
  //   description: "Completed comprehensive Python programming certification.",
  //   icon: Award,
  // },
  // {
  //   id: 5,
  //   title: "SQL Certification",
  //   type: "certification",
  //   year: "2022",
  //   description: "Earned certification in SQL database management and querying.",
  //   icon: Award,
  // },
  // {
  //   id: 6,
  //   title: "Prompt Engineering Certification",
  //   type: "certification",
  //   year: "2023",
  //   description: "Completed specialized training in AI prompt engineering techniques.",
  //   icon: Award,
  // },
];
