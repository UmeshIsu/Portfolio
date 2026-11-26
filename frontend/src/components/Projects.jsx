import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/resume';
import { cardItem } from '../utils/animations';
import { cardSurface, cardHover, techTag, eyebrow, accentText } from '../utils/styles';

const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 6.796a11.52 11.52 0 0 1 3.004.404c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ProjectMedia = ({ project, reversed }) => (
  <div
    className={`relative aspect-[16/10] overflow-hidden bg-neutral-900 lg:col-span-5 lg:aspect-auto lg:min-h-[22rem] ${
      reversed ? 'lg:order-2' : ''
    }`}
  >
    {/* Blurred copy fills the frame so square logos never leave empty bands */}
    <img
      src={project.image}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="absolute inset-0 h-full w-full scale-125 object-cover opacity-80 blur-2xl"
    />
    <img
      src={project.image}
      alt={`${project.title} preview`}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
        >
          {tag}
        </span>
      ))}
    </div>

    {project.live && (
      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-emerald-500/20">
        <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
        Live
      </span>
    )}
  </div>
);

const ProjectCard = ({ project, reversed }) => (
  <motion.article
    variants={cardItem}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    className={`group grid overflow-hidden lg:grid-cols-12 ${cardSurface} ${cardHover}`}
  >
    <ProjectMedia project={project} reversed={reversed} />

    <div className="flex flex-col p-6 md:p-8 lg:col-span-7">
      <p className={`${eyebrow} ${accentText}`}>{project.context}</p>

      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-2xl font-bold md:text-3xl">{project.title}</h3>
        <span className="text-sm tabular-nums text-gray-500 dark:text-gray-400">{project.period}</span>
      </div>
      <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">{project.subtitle}</p>

      <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{project.summary}</p>

      <ul className="mt-4 space-y-2.5">
        {project.highlights.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
        {project.tech.map((tech) => (
          <li key={tech} className={techTag}>{tech}</li>
        ))}
      </ul>

      <div className="min-h-6 flex-1" aria-hidden="true" />

      <div className="flex flex-wrap gap-3 border-t border-gray-200 pt-6 dark:border-white/10">
        {project.live && (
          <a
            href={project.live.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-primary-400"
          >
            Visit {project.live.label}
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary-500 hover:text-amber-700 dark:border-white/15 dark:hover:border-primary-500 dark:hover:text-primary-400"
        >
          <GitHubIcon size={16} />
          Source code
          <span className="sr-only">for {project.title} (opens in a new tab)</span>
        </a>
      </div>
    </div>
  </motion.article>
);

const Projects = () => (
  <section id="projects" className="py-20 px-6">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        title="Featured"
        highlight="Projects"
        subtitle="Team, academic and client projects, taken from Figma designs to working products."
      />

      <div className="space-y-8 md:space-y-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} reversed={i % 2 === 1} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 text-center"
      >
        <a
          href="https://github.com/UmeshIsu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-primary-500 px-6 py-3 font-medium text-primary-600 transition-all hover:bg-primary-50 dark:text-primary-500 dark:hover:bg-primary-900/20"
        >
          See more on GitHub <ExternalLink size={16} className="ml-2" aria-hidden="true" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
