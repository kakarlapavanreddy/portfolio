import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const footerData = {
  logo: "Portfolio",

  description:
    "Building modern responsive web applications using React and Tailwind CSS.",

  links: [
    {
      id: 1,
      title: "Home",
      path: "#home",
    },
    {
      id: 2,
      title: "About",
      path: "#about",
    },
    {
      id: 3,
      title: "Services",
      path: "#services",
    },
    {
      id: 4,
      title: "Skills",
      path: "#skills",
    },
    {
      id: 5,
      title: "Projects",
      path: "#projects",
    },
    {
      id: 6,
      title: "Contact",
      path: "#contact",
    },
  ],

  social: [
    {
      id: 1,
      icon: FaGithub,
      link: "#",
    },
    {
      id: 2,
      icon: FaLinkedin,
      link: "#",
    },
    {
      id: 3,
      icon: FaInstagram,
      link: "#",
    },
  ],
};

export default footerData;
