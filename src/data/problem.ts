import { Users, BookOpen, ShieldAlert } from 'lucide-react';
import type { AudienceCard, Metric } from '@/types';

export const audienceCards: AudienceCard[] = [
  {
    icon: Users,
    title: 'For lecturers',
    desc: 'Create editable CBE course roadmaps, control what the AI can say, and reduce the repeated answering of course-specific questions.',
  },
  {
    icon: BookOpen,
    title: 'For students',
    desc: 'Get immediate, source-anchored answers grounded in your approved course materials — connected to the exact competency and learning outcome.',
  },
  {
    icon: ShieldAlert,
    title: 'For institutions',
    desc: 'Keep content, learner data and AI inference under your own institutional control. No public cloud processes your students\u2019 data.',
  },
];

export const metrics: Metric[] = [
  { score: '2.88/5', label: 'Anytime access to learning materials' },
  { score: '2.77/5', label: 'Outcome-aligned content development' },
  { score: '2.74/5', label: 'Timely availability of materials' },
  { score: '2.52/5', label: 'Sufficiency of information for tasks' },
];

export const statusQuoIssues: string[] = [
  'MUST already has a functional Moodle-based VLE for materials, assignments, assessments, forums and resources.',
  'Public AI does not know the student\u2019s authorised materials, course context or intended outcomes.',
  'Lecturers bear avoidable workload. Students receive unsupported or inappropriate guidance. CBE transition stalls.',
];

export const libraryImage: string =
  'https://images.pexels.com/photos/10744384/pexels-photo-10744384.jpeg?auto=compress&cs=tinysrgb&w=1200';

export const pullQuote: string =
  'Students cannot ask questions about approved materials and get immediate answers. Misunderstandings persist, lecturers carry avoidable workload, and students risk receiving unsupported answers.';
