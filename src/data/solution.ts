import { Plug, Map, MessageSquareText } from 'lucide-react';
import type { Step } from '@/types';

export const steps: Step[] = [
  {
    num: '01',
    icon: Plug,
    title: 'Connects to your existing LMS.',
    desc: 'EduScape sits alongside Moodle, Canvas, Open edX and other LMS platforms without replacing them. Your identities, courses, enrolments, resources, grades and records stay exactly where they are.',
    note: 'MUST already has Moodle. EduScape works with it.',
  },
  {
    num: '02',
    icon: Map,
    title: 'Lecturer defines the CBE roadmap.',
    desc: 'The lecturer digitises competencies, learning outcomes and assessment expectations. EduScape generates an editable course roadmap that organises resources, activities and progress — and the lecturer stays in full control.',
    note: 'Competencies and outcomes drive the structure.',
  },
  {
    num: '03',
    icon: MessageSquareText,
    title: 'Students get source-anchored answers.',
    desc: 'When a student asks a question, EduScape checks their enrolment, retrieves evidence from approved course materials using HA-RAG, and returns a cited, competency-aligned answer. If evidence is insufficient, it withholds the response.',
    note: 'No public AI. No hallucinated answers. No data leaks.',
  },
];
