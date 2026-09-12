import type { TeamMember } from '@/types';

export const team: TeamMember[] = [
  {
    initials: 'TD',
    name: 'Twesigye John Davidson',
    role: 'Team Lead & Technical Architect',
    org: 'MUST FCI',
    bio: 'Leads AI engineering, HA-RAG architecture, and institutional evaluation pipelines.',
    contribution: 'AI pipeline, HA-RAG architecture, backend integration, evaluation and technical reporting.',
  },
  {
    initials: 'KE',
    name: 'Kagyezaho Eduardo',
    role: 'Systems & Integration Lead',
    org: 'MUST FCI',
    bio: 'Leads core web systems, deployment environments, and LMS middleware integration.',
    contribution: 'Web interface, deployment, Moodle mapping, monitoring and support.',
  },
  {
    initials: 'AP',
    name: 'Ayebare Patience Praise',
    role: 'AI Interaction Specialist',
    org: 'MUST FCI',
    bio: 'Designs evaluation frameworks, learner interactions, and prompt-grounding standards.',
    contribution: 'Benchmark design, learner interaction, prompt testing and user support.',
  },
  {
    initials: 'ND',
    name: 'Ninsiima Doreen',
    role: 'Business Development Lead',
    org: 'MUST alumna',
    bio: 'Drives institutional discovery, pricing models, and higher-ed pilot relationships.',
    contribution: 'Customer discovery, pricing models, academic & market development.',
  },
  {
    initials: 'RI',
    name: 'Rumwaya Gabriel Irumba',
    role: 'Industry Adviser',
    org: 'MUST alumnus',
    bio: 'Advises on enterprise architecture, product strategy, and commercial viability.',
    contribution: 'Product strategy, private-sector partnerships, technical advisory.',
  },
  {
    initials: 'RK',
    name: 'Dr Richard Kimera',
    role: 'Academic Supervisor',
    org: 'Dept of Computer Science, MUST',
    bio: 'Supervises research methodology, academic governance, and institutional alignment.',
    contribution: 'Academic Supervisor, Department of Computer Science, MUST — research design, quality review, institutional coordination.',
  },
];

export const partners: string[] = [
  'Mbarara University of Science and Technology (MUST)',
  'CITT Software Incubation Unit',
];

export const avatarColors: string[] = [
  'from-primary-500 to-primary-700',
  'from-teal-500 to-teal-700',
  'from-cyan-500 to-cyan-700',
  'from-emerald-500 to-emerald-700',
  'from-amber-500 to-amber-600',
  'from-slate-600 to-slate-800',
];
