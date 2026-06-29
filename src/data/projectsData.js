import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.jpeg";
import project3 from "../assets/images/project3.jpeg";

const projects = [
  {
    id: 1,
    image: project1,
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind", "JavaScript"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    image: project2,
    title: "E-Commerce UI",
    description: "Modern shopping website interface with reusable components.",
    technologies: ["React", "CSS", "API"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    image: project3,
    title: "Task Manager",
    description: "Task management application with CRUD functionality.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
];

export default projects;
