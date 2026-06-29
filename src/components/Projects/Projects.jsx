import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projectsData";

function Projects() {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle title="My Portfolio" subtitle="Recent Projects" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
