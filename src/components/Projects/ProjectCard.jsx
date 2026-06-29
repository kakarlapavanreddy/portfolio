function ProjectCard({
  image,
  title,
  description,
  technologies,
  github,
  live,
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-2">
      <img src={image} alt={title} className="h-56 w-full object-cover" />

      <div className="p-6">
        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="mt-3 text-gray-600 leading-7">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-blue-600 px-4 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
