// Single source of truth for CV content shown on the site.
// Edit this file to update Experience, Projects and Education without touching layout code.

import swapUpImg from '../assets/Swap-up.jpeg';
import educoImg from '../assets/Screenshot 2026-03-23 203203.png';
import cbcImg from '../assets/logo2.png';

export const experience = [
  {
    company: 'Trivista Labs (Pvt) Ltd',
    initials: 'TL',
    role: 'Full-Stack Developer',
    period: 'Apr 2026 – Present',
    current: true,
    location: 'Colombo, Sri Lanka',
    context: 'Industrial Placement via LeapGen IIT Accelerator',
    summary:
      'Building and shipping client products end to end at a software engineering company, from database design and security to fast, responsive front ends.',
    stats: [
      { value: '4', label: 'Products built' },
      { value: '3', label: 'Live in production' },
      { value: '6', label: 'Restaurants on MenuQR' },
    ],
    products: [
      {
        name: 'MenuQR Lanka',
        category: 'Restaurant Menu SaaS',
        link: { label: 'menuqrlanka.com', href: 'https://menuqrlanka.com' },
        metrics: [
          { value: '6', label: 'restaurants live' },
          { value: '5+', label: 'menu languages' },
          { value: '<350 KB', label: 'WebP photos' },
        ],
        highlights: [
          'Led development of a digital menu platform: guests scan a table QR code and browse the menu in their phone’s browser with no app or sign-in, then send orders to the kitchen on WhatsApp or Telegram.',
          'Kept it fast on mobile data with pre-built pages served from a CDN, menus translated into 5+ languages and cached on the server, and photos compressed in the browser to WebP under 350 KB.',
          'Separated each restaurant’s data with PostgreSQL row-level security, added cookie-free visit analytics for owners, and rate limiting with Upstash Redis.',
        ],
        tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Upstash Redis', 'Vercel'],
      },
      {
        name: 'Aura Gem ERP',
        category: 'Enterprise Resource Planning',
        link: { label: 'Access on request', href: null },
        metrics: [
          { value: '4', label: 'user roles' },
          { value: '158', label: 'files reviewed' },
          { value: '8', label: 'issues prioritised' },
        ],
        highlights: [
          'Built an ERP for a gem mining and export business in Ratnapura covering purchasing, splitting, heat treatment, cutting, certificates and exports, with the cost and profit of every stone.',
          'Front end in Next.js and React 19 with Tailwind CSS v4, reusable Radix UI components and TanStack Table data grids, connected to a NestJS REST API, with JWT authentication and role-based access for 4 user roles.',
          'Reviewed the 158-file codebase and prioritised 8 issues, including 2 critical security risks and a profit calculation bug.',
        ],
        tech: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Radix UI', 'TanStack Query', 'NestJS', 'Prisma', 'PostgreSQL'],
      },
      {
        name: 'The Beauty Room',
        category: 'Salon Booking & Management System',
        link: { label: 'thebeautyroom.lk', href: 'https://thebeautyroom.lk' },
        metrics: [
          { value: '7-step', label: 'online booking' },
          { value: '2FA', label: 'staff sign-in' },
          { value: '5 min', label: 'OTP expiry' },
        ],
        highlights: [
          'Built a live booking site and staff management system for a salon and aesthetic clinic, replacing paper bookings with a 7-step online booking flow, live availability and SMS one-time-code confirmation.',
          'Made double bookings impossible with a PostgreSQL exclusion constraint, and added stock tracking, per-treatment cost and margin, rescheduling links and digital consent records for clinic treatments.',
          'Secured staff access with two-factor authentication and server-side checks; one-time codes are rate-limited, stored as hashes and expire after 5 minutes.',
        ],
        tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Supabase', 'Upstash Redis', 'Resend', 'Vercel'],
      },
      {
        name: 'Trivista Labs',
        category: 'Company Website',
        link: { label: 'trivistalabs.io', href: 'https://trivistalabs.io' },
        metrics: [
          { value: '<10 KB', label: 'compressed JS' },
          { value: '~164 KB', label: 'total page weight' },
          { value: 'AVIF', label: 'responsive images' },
        ],
        highlights: [
          'Built the company site as static pages with under 10 KB of compressed JavaScript, including a 3D drawing, and a total page weight of about 164 KB.',
          'Served responsive AVIF / WebP images sized for each screen, enforced a strict Content Security Policy with hashed scripts and styles, and loaded analytics only after the page.',
        ],
        tech: ['Astro', 'HTML5', 'CSS3', 'JavaScript', 'Cloudflare'],
      },
    ],
  },
];

export const projects = [
  {
    title: 'SwapUP',
    subtitle: 'Shift Management Platform',
    context: 'IIT Industry Project',
    period: '2025 – Present',
    tags: ['Mobile', 'Full Stack'],
    summary:
      'A mobile app for hotel teams to plan shifts, swap them and check in, with role-based access so managers and staff only see the tools for their role.',
    highlights: [
      'Turned Figma designs into a visual schedule of morning, afternoon and night shifts, with swap requests that managers approve and instant notifications.',
      'Built on a Node.js / Express REST API with PostgreSQL (Prisma) and Supabase authentication; now replacing GPS-based attendance with QR-code check-in.',
    ],
    tech: ['React Native', 'Expo', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Supabase', 'Render'],
    image: swapUpImg,
    live: { label: 'swapupnow.com', href: 'https://swapupnow.com' },
    github: 'https://github.com/UmeshIsu/SwapUp',
  },
  {
    title: 'CBC Crystal Beauty',
    subtitle: 'E-Commerce & Salon Booking Web App',
    context: 'Client Project',
    period: '2025 – Present',
    tags: ['Web', 'Full Stack'],
    summary:
      'An online store for cosmetics combined with salon appointment booking, so clients can shop and book services in one place.',
    highlights: [
      'Built the React.js front end with 10+ responsive pages for browsing cosmetics and booking salon appointments, integrated with a Node.js / Express REST API (10+ endpoints) on MongoDB.',
      'Fixed cross-origin (CORS) bugs and tested across browsers and devices for a consistent user experience.',
    ],
    tech: ['React.js', 'JavaScript', 'CSS3', 'Node.js', 'Express.js', 'MongoDB'],
    image: cbcImg,
    live: null,
    github: 'https://github.com/UmeshIsu/cdc-frontend',
  },
  {
    title: 'EDUCO',
    subtitle: 'Education Web Platform',
    context: 'Team Lead & Front-End Developer · IIT Group Project',
    period: 'Jan 2025 – Apr 2025',
    tags: ['Web', 'Front End'],
    summary:
      'An awareness platform for UN Sustainable Development Goal 4: inclusive and equitable quality education for all.',
    highlights: [
      'Hand-coded all views in HTML5, CSS3 and JavaScript from Figma designs.',
      'Led a 4-member Agile team to full marks.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
    image: educoImg,
    live: null,
    github: 'https://github.com/UmeshIsu/EDUCO',
  },
];

export const education = [
  {
    degree: 'B.Sc. (Honours) Computer Science',
    institution: 'University of Westminster (UK)',
    via: 'via Informatics Institute of Technology (IIT)',
    period: 'Expected 2028',
    location: 'Colombo, Sri Lanka',
    badge: { label: 'In progress', tone: 'cyan' },
    modules: [
      'Object-Oriented Programming',
      'Software Development Group Project',
      'Information Technology Security',
      'Database Systems',
      'Web Design & Development',
    ],
  },
  {
    degree: 'Foundation in Information Technology',
    institution: 'Informatics Institute of Technology (IIT)',
    via: null,
    period: '2023 – 2024',
    location: 'Colombo, Sri Lanka',
    badge: { label: 'Distinction · 80%+', tone: 'gold' },
    modules: ['Python', 'Mathematics', 'Database Systems', 'English'],
  },
  {
    degree: 'G.C.E. Ordinary Level (O/L)',
    institution: 'Ananda Maithreya Central College',
    via: null,
    period: '2017 – 2023',
    location: null,
    badge: { label: "5 'A' passes", tone: 'gold' },
    modulesLabel: 'Key subjects',
    modules: ['Mathematics', 'English', 'Science'],
  },
];

// Add a `url` to show a "Verify" link next to a certificate.
export const certifications = [
  { title: 'APIs', issuer: 'Meta', platform: 'Coursera', date: 'Jun 2025', url: null },
  { title: 'Fundamentals of UI/UX Design', issuer: 'Microsoft', platform: 'Coursera', date: 'Aug 2024', url: null },
  { title: 'Version Control', issuer: 'Meta', platform: 'Coursera', date: 'Jul 2024', url: null },
  { title: 'Programming with JavaScript', issuer: 'Meta', platform: 'Coursera', date: 'Jul 2024', url: null },
  { title: 'Introduction to Front-End Development', issuer: 'Meta', platform: 'Coursera', date: 'Jun 2024', url: null },
  { title: 'Database Structures and Management with MySQL', issuer: 'Meta', platform: 'Coursera', date: 'Jun 2024', url: null },
  { title: 'Google AI Essentials', issuer: 'Google', platform: 'Coursera', date: '2024', url: null },
];

export const achievements = [
  { role: 'Entrant', title: 'Google Cloud AI Builder Cup 2026', detail: 'Hack2skill · Financial-services AI track', year: '2026' },
  { role: 'Team Lead', title: 'IEEEXtreme Programming Competition', detail: 'IIT', year: '2025' },
  { role: 'Participant', title: 'CodeRally 6.0', detail: 'Intermediate Tier · IEEE Computer Society, IIT', year: '2025' },
  { role: 'Contributor', title: 'Hacktoberfest', detail: 'All badges earned for open-source contributions', year: '2024' },
  { role: 'Semi-Finalist', title: 'HackX Hackathon', detail: 'University of Kelaniya', year: '2023' },
];
