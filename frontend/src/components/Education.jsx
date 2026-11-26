import { motion } from 'framer-motion';
import { ArrowUpRight, Award, BadgeCheck, GraduationCap, MapPin, Trophy } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { education, certifications, achievements } from '../data/resume';
import { cardItem, staggerGrid } from '../utils/animations';
import { cardSurface, cardHover, eyebrow, accentText } from '../utils/styles';

const badgeTones = {
  gold: 'border-primary-500/30 bg-primary-500/10 text-amber-700 dark:text-primary-400',
  cyan: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400',
};

const iconTile = `flex shrink-0 items-center justify-center rounded-xl border border-primary-500/25 bg-primary-500/10 ${accentText}`;

const EducationCard = ({ item }) => (
  <motion.article
    variants={cardItem}
    className={`${cardSurface} ${cardHover} relative flex flex-col overflow-hidden p-6 md:p-7 md:last:odd:col-span-2 lg:last:odd:col-span-1`}
  >
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

    <div className="mb-5 flex items-start justify-between gap-4">
      <div className={`${iconTile} h-12 w-12`}>
        <GraduationCap size={22} aria-hidden="true" />
      </div>
      <span className="rounded-full border border-gray-200 bg-gray-100/80 px-3 py-1 text-xs font-semibold tabular-nums text-gray-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300">
        {item.period}
      </span>
    </div>

    <h3 className="text-xl font-bold leading-snug">{item.degree}</h3>
    <p className={`mt-1.5 text-sm font-semibold ${accentText}`}>{item.institution}</p>
    {item.via && <p className="text-sm text-gray-500 dark:text-gray-400">{item.via}</p>}

    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
      {item.location && (
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
          <MapPin size={13} aria-hidden="true" />
          {item.location}
        </span>
      )}
      {item.badge && (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${badgeTones[item.badge.tone]}`}
        >
          {item.badge.tone === 'gold'
            ? <Award size={12} aria-hidden="true" />
            : <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />}
          {item.badge.label}
        </span>
      )}
    </div>

    <div className="pt-6">
      <div className="border-t border-gray-200 pt-5 dark:border-white/10">
        <p className={`${eyebrow} mb-3 text-gray-500 dark:text-gray-400`}>{item.modulesLabel ?? 'Key modules'}</p>
        <ul className="flex flex-wrap gap-2">
          {item.modules.map((module) => (
            <li
              key={module}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700 dark:border-white/10 dark:text-gray-300"
            >
              {module}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.article>
);

const PanelHeader = ({ icon: Icon, title, count }) => (
  <div className="mb-2 flex items-center gap-3">
    <div className={`${iconTile} h-10 w-10`}>
      <Icon size={18} aria-hidden="true" />
    </div>
    <h3 className="text-lg font-bold">{title}</h3>
    <span className="ml-auto rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold tabular-nums text-gray-600 dark:bg-white/[0.06] dark:text-gray-300">
      {count}
    </span>
  </div>
);

const Education = () => (
  <section id="education" className="py-20 px-6">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        title="Education &"
        highlight="Credentials"
        subtitle="Computer Science at the University of Westminster through IIT, backed by industry certifications and competitions."
      />

      <motion.div
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {education.map((item) => (
          <EducationCard key={item.degree} item={item} />
        ))}
      </motion.div>

      <motion.div
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-6 grid gap-6 lg:grid-cols-2"
      >
        <motion.div variants={cardItem} className={`${cardSurface} p-6 md:p-7`}>
          <PanelHeader icon={BadgeCheck} title="Certifications" count={certifications.length} />
          <ul className="divide-y divide-gray-200 dark:divide-white/[0.06]">
            {certifications.map((cert) => (
              <li key={cert.title} className="flex items-center justify-between gap-4 py-3.5">
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug">{cert.title}</p>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                    {cert.issuer} · {cert.platform}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-cyan-700 hover:underline dark:text-cyan-400"
                    >
                      Verify
                      <ArrowUpRight size={12} aria-hidden="true" />
                      <span className="sr-only">{cert.title} certificate (opens in a new tab)</span>
                    </a>
                  )}
                  <span className="text-xs tabular-nums text-gray-500 dark:text-gray-400">{cert.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={cardItem} className={`${cardSurface} p-6 md:p-7`}>
          <PanelHeader icon={Trophy} title="Achievements" count={achievements.length} />
          <ul className="divide-y divide-gray-200 dark:divide-white/[0.06]">
            {achievements.map((item) => (
              <li key={item.title} className="flex gap-4 py-3.5">
                <span className={`mt-0.5 w-10 shrink-0 font-mono text-xs font-semibold tabular-nums ${accentText}`}>
                  {item.year}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug">{item.title}</p>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{item.role}</span>
                    {' · '}
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Education;
