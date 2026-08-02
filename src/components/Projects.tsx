import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'
import ScrollReveal from './ScrollReveal'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="bg-paper-100 dark:bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow="04 · projects"
            title="Featured projects"
            description="A mix of software and hardware — web systems built for real use, and embedded projects built to move things in the physical world."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
