import { projects } from "./projects-data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="container-page section"
    >
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-[#65FF9A]">
          Projects
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Featured Engineering Work
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-foreground/70">
          Software engineering projects focused on secure systems,
          networking, reliability, and modern technologies.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}