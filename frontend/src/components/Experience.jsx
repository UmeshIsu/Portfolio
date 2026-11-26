import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Calendar, Lock, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experience } from '../data/resume';
import { slideLeft, cardItem } from '../utils/animations';
import { cardSurface, cardHover, techTag, eyebrow, accentText } from '../utils/styles';

const LiveDot = () => (
  <span className="relative flex h-2 w-2" aria-hidden="true">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
  </span>
);

const RoleCard = ({ role }) => {
  const meta = [
    { icon: Calendar, text: role.period },
    { icon: MapPin, text: role.location },
    { icon: Briefcase, text: role.context },
  ];

  return (
    <motion.aside
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="lg:col-span-4"
    >
      <div className={`${cardSurface} relative overflow-hidden p-6 md:p-7 lg:sticky lg:top-28`}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/70 to-transparent" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary-500/10 blur-3xl" />

        <div className="mb-6 flex items-center justify-between gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-primary-500/30 bg-primary-500/10 text-base font-bold tracking-tight ${accentText}`}>
            {role.initials}
          </div>
          {role.current && (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <LiveDot /> Current role
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold leading-tight">{role.role}</h3>
        <p className={`mt-1 font-semibold ${accentText}`}>{role.company}</p>

        <ul className="mt-5 space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
          {meta.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-2.5">
              <Icon size={16} className="mt-0.5 shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{role.summary}</p>

        <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-gray-200 pt-6 dark:border-white/10">
          {role.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-1 text-[11px] leading-tight text-gray-500 dark:text-gray-400">{stat.label}</dt>
              <dd className={`text-2xl font-bold ${accentText}`}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.aside>
  );
};

const ProductLink = ({ link }) =>
  link.href ? (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-cyan-600/30 px-3 py-1.5 text-xs font-medium text-cyan-700 transition-colors hover:bg-cyan-500/10 dark:border-cyan-400/30 dark:text-cyan-400"
    >
      {link.label}
      <ArrowUpRight size={14} aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-500 dark:border-white/10 dark:text-gray-400">
      <Lock size={12} aria-hidden="true" />
      {link.label}
    </span>
  );

const ProductCard = ({ product, index }) => (
  <motion.li
    variants={cardItem}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    className={`${cardSurface} ${cardHover} p-6 md:p-7`}
  >
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex items-start gap-4">
        <span className={`w-6 shrink-0 pt-1 font-mono text-sm opacity-80 ${accentText}`} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h4 className="text-xl font-bold leading-snug">{product.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
        </div>
      </div>
      <div className="pl-10 sm:pl-0">
        <ProductLink link={product.link} />
      </div>
    </div>

    <div className="sm:pl-10">
      <dl className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
        {product.metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col-reverse justify-end rounded-xl border border-primary-500/15 bg-primary-500/[0.06] px-2.5 py-2.5 sm:px-3"
          >
            <dt className="mt-0.5 text-[11px] leading-tight text-gray-500 dark:text-gray-400">{metric.label}</dt>
            <dd className={`text-base font-bold md:text-lg ${accentText}`}>{metric.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-5 space-y-2.5">
        {product.highlights.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${product.name} tech stack`}>
        {product.tech.map((tech) => (
          <li key={tech} className={techTag}>{tech}</li>
        ))}
      </ul>
    </div>
  </motion.li>
);

const Experience = () => (
  <section id="experience" className="py-20 px-6">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        title="Work"
        highlight="Experience"
        subtitle="Production web products built for real clients, from database design to live launch."
      />

      <div className="space-y-16">
        {experience.map((role) => (
          <div key={`${role.company}-${role.period}`} className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <RoleCard role={role} />

            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span className={`${eyebrow} text-gray-500 dark:text-gray-400`}>Products delivered</span>
                <span className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent dark:from-white/10" aria-hidden="true" />
              </div>
              <ol className="space-y-5">
                {role.products.map((product, i) => (
                  <ProductCard key={product.name} product={product} index={i} />
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
