
import { Trophy, Star, Award, Badge } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "Entrepreneurer" | "Academic" | "Innovator";
  year: string;
  image: string; 
  description: string;
  icon: LucideIcon;
};

export const speakers: Achievement[] = [

  {
    id: 1,
    title: "API Testing Expert - Postman",
    type: "Innovator",
    image: "/imgs/speaker.jpg",
    year: "2025",
    description: "We welcome our amazing speaker.",
    icon: Badge,
  },
  {
    id: 2,
    title: "Arit Developer Circle Hackathon",
    type: "Entrepreneurer", 
    image: "/imgs/speaker.jpg",
    year: "2025",
    description: "We welcome our amazing speaker.",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Web Development - Zidio",
    type: "Innovator", 
    image: "/imgs/speaker.jpg",
    year: "2025",
    description: "We welcome our amazing speaker.",
    icon: Award,
  },
  {
    id: 4,
    title: "2nd Place - NACOS Litrary Debate",
    type: "Entrepreneurer", 
    image: "/imgs/speaker.jpg",
    year: "2025",
    description: "We welcome our amazing speaker.",
    icon: Trophy,
  },
  {
    id: 5,
    title: "Python Certification - HackerRank",
    type: "Innovator",
    image: "/imgs/speaker.jpg",
    year: "2024",
    description: "We welcome our amazing speaker.",
    icon: Award,
  },
  {
    id: 6,
    title: "Back-end Development - Kibo School",
    type: "Innovator", 
    image: "/imgs/speaker.jpg",
    year: "2024",
    description: "We welcome our amazing speaker.",
    icon: Badge,
  },
  {
    id: 7,
    title: "Python Essentials - Udemy",
    type: "Innovator", 
    image: "/imgs/speaker.jpg",
    year: "2024",
    description: "We welcome our amazing speaker.",
    icon: Star,
  },
  {
    id: 8,
    title: "Back-end Web Development - Institute of Management, Technology & Finance",
    type: "Innovator", 
    image: "/imgs/speaker.jpg",
    year: "2024",
    description: "We welcome our amazing speaker.",
    icon: Star,
  },



  // {
  //   id: 1,
  //   title: "2nd Place - Algothon Codefest",
  //   type: "Entrepreneurer",
  //   year: "2024",
  //   description: "Secured second place in the competitive programming event.",
  //   icon: Trophy,
  // },
  // {
  //   id: 2,
  //   title: "3rd Place - INTELLECT 1.0 Hackathon",
  //   type: "Entrepreneurer", 
  //   year: "2024",
  //   description: "Won third place for developing an innovative solution during the 24-hour hackathon.",
  //   icon: Trophy,
  // },
  // {
  //   id: 3,
  //   title: "Dean's List",
  //   type: "A",
  //   year: "2023",
  //   description: "Recognized for A excellence with placement on the Dean's List.",
  //   icon: Star,
  // },
  // {
  //   id: 4,
  //   title: "Python Certification",
  //   type: "Innovator",
  //   year: "2023",
  //   description: "Completed comprehensive Python programming Innovator.",
  //   icon: Award,
  // },
  // {
  //   id: 5,
  //   title: "SQL Certification",
  //   type: "Innovator",
  //   year: "2022",
  //   description: "Earned Innovator in SQL database management and querying.",
  //   icon: Award,
  // },
  // {
  //   id: 6,
  //   title: "Prompt Engineering Certification",
  //   type: "Innovator",
  //   year: "2023",
  //   description: "Completed specialized training in AI prompt engineering techniques.",
  //   icon: Award,
  // },
];
