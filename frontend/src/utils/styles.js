// Shared Tailwind class strings for card surfaces.
// Hover colours are repeated under `dark:` because Tailwind v4 emits `dark:` after `hover:`,
// so a plain `hover:` border would be overridden by the dark-mode border.

export const cardSurface =
  'rounded-2xl border border-gray-200/80 bg-white/80 shadow-sm backdrop-blur-md ' +
  'dark:border-white/[0.07] dark:bg-neutral-950/75 dark:shadow-none transition-colors duration-300';

export const cardHover = 'hover:border-primary-500/40 dark:hover:border-primary-500/30';

export const techTag =
  'text-xs px-2.5 py-1 rounded-md border border-gray-200 bg-gray-100/80 text-gray-700 ' +
  'dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300';

export const eyebrow = 'text-[11px] font-semibold uppercase tracking-[0.18em]';

// Gold accent for text. primary-500/600 are too light to read on white (<3:1),
// so light mode uses amber-700 (~5:1) and dark mode keeps the brand gold.
export const accentText = 'text-amber-700 dark:text-primary-400';
