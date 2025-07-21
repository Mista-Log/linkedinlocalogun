
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Vortisys - AI Studio",
    description: "A web2 AI Studio for building AI applications, featuring a user-friendly interface and integration with various AI models.",
    image: "/imgs/p4.png",
    tags: ["Next.js", "Vercel", "Typescript", "AI Models"],
    links: {
      github: "https://github.com/Mista-Log/VortisysWeb2",
      live: "https://vortisys-web2.vercel.app/",
    },
  },
  {
    id: 2,
    title: "Transferme-Banking-App",
    description: "A Back-end Banking Application built with Python, Flask, providing secure and efficient banking services for users.",
    image: "/imgs/p1.png",
    tags: ["Python", "Django", "DRF", "FastAPI"],
    links: {
      github: "https://github.com/Mista-Log/Transferme-Banking-App",
      live: "",
    },
  },
  {
    id: 3,
    title: "Zidio-Product-Management-App",
    description: "A project management application built with Django fullstack for organizing tasks, projects, and team collaboration.",
    image: "/imgs/p2.png",
    tags: ["Django", "HTML & CSS", "Authentication", "Render SAAS"],
    links: {
      github: "https://github.com/Mista-Log/Zidio-Product-Management-App",
      live: "https://zidio-product-management-app.onrender.com/"
    },
  },
  {
    id: 4,
    title: "E-Commerce App",
    description: "A full-stack e-commerce application built with Django, providing a seamless shopping experience with product listings, cart management, and user authentication.",
    image: "/imgs/p2.png",
    tags: ["Django", "HTML & CSS", "Authentication", "Django_Rest-Framework"],
    links: {
      github: "https://github.com/Mista-Log/E-commerce-",
      live: ""
    },
  },
  // {
  //   id: 4,
  //   title: "Minders",
  //   description: "A creative community platform built with React and Tailwind CSS, fostering collaboration among creative professionals.",
  //   image: "/imgs/p3.png",
  //   tags: ["React", "Tailwind CSS", "Redux", "Firebase"],
  //   links: {
  //     github: "https://github.com/AathifZahir/Minders",
  //     live: "https://minders-sigma.vercel.app/",
  //   },
  // },
];
