import {
  Plug,
  Map,
  Quote,
  Link2,
  Brain,
  Lock,
  Ban,
  Layers,
  ClipboardCheck,
  Award,
} from 'lucide-react';
import type { Capability } from '@/types';

export const capabilities: Capability[] = [
  { icon: Plug, title: 'LMS Integration', desc: 'Non-invasive overlay on Moodle, Canvas and Open edX. Your data, identities and records stay exactly where they are.' },
  { icon: Map, title: 'CBE Course Roadmap', desc: 'Lecturer digitises competencies and outcomes into an editable roadmap that organises resources and assessments.' },
  { icon: Quote, title: 'Source-Anchored AI Answers', desc: 'Every response cites the exact approved passage used — students always see where the answer came from.' },
  { icon: Link2, title: 'Competency & Resource Mapping', desc: 'Materials linked to specific roadmap points, competencies and learning outcomes.' },
  { icon: Brain, title: 'Roadmap-Aware Responses', desc: 'AI answers are always connected to the correct competency stage and learning outcome.' },
  { icon: Lock, title: 'Course-Level Access Control', desc: 'Students only access materials from their enrolled offering. Cross-offering queries are denied by design.' },
  { icon: Ban, title: 'Evidence-Based Refusal', desc: 'If approved evidence is insufficient, EduScape withholds the answer and directs the student to their lecturer.' },
  { icon: Layers, title: 'Hierarchical Retrieval (HA-RAG)', desc: 'Preserves both the precise passage and the wider section that gives it meaning — accurate and contextual.' },
  { icon: ClipboardCheck, title: 'Formative Learning Activities', desc: 'Short practice tasks reveal gaps, guide explanations and recommend the next appropriate step.' },
  { icon: Award, title: 'Lecturer-Controlled Assessment', desc: 'Lecturers retain final authority over competency declarations. AI is a support tool, not an assessor.' },
];
