
export type Team = {
  id: number;
  title: string;
  description: string;
  image: string;
  links: {
    live: string;
  };
};

export const teams: Team[] = [
  {
    id: 1,
    title: "Mr Ibrahim",
    description: "A software developer",
    image: "/imgs/speaker.jpg",
    links: {
      live: "http://ibrahim-profile.vercel.app/",
    },
  },
  {
    id: 2,
    title: "Mr Ibrahim",
    description: "A software developer",
    image: "/imgs/speaker.jpg",
    links: {
      live: "http://ibrahim-profile.vercel.app/",
    },
  },
  {
    id: 3,
    title: "Mr Ibrahim",
    description: "A software developer",
    image: "/imgs/speaker.jpg",
    links: {
      live: "http://ibrahim-profile.vercel.app/"
    },
  },
  {
    id: 4,
    title: "Mr Ibrahim",
    description: "A software developer",
    image: "/imgs/speaker.jpg",
    links: {
      live: "http://ibrahim-profile.vercel.app/"
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
