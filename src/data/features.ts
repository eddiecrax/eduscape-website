import { Plug, Map, Database, ShieldCheck, Sparkles, ClipboardCheck } from 'lucide-react';
import type { Feature } from '@/types';

export const features: Feature[] = [
  {
    num: '01',
    icon: Plug,
    title: 'LMS Integration Layer',
    desc: 'Connects to Moodle first, then Canvas and Open edX. Reads identities, courses, enrolments and resources without replacing or disrupting what already works.',
  },
  {
    num: '02',
    icon: Map,
    title: 'CBE Course Roadmap',
    desc: 'The lecturer digitises competencies and learning outcomes. EduScape creates an editable roadmap that links resources, activities and assessments to each outcome.',
  },
  {
    num: '03',
    icon: Database,
    title: 'HA-RAG Knowledge Base',
    desc: 'Hierarchical Adaptive Retrieval-Augmented Generation preserves both the precise passage and the wider section that gives it meaning — so answers are accurate and contextual.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Course-Level Access Control',
    desc: 'EduScape verifies a student\u2019s enrolment before retrieving any material. Cross-offering access is denied by design. 100% passage of access-denial tests is a hard target.',
  },
  {
    num: '05',
    icon: Sparkles,
    title: 'Roadmap-Aware AI Responses',
    desc: 'Every answer is connected to the correct competency stage and learning outcome. Students always see the source. The AI never speaks beyond the approved evidence.',
  },
  {
    num: '06',
    icon: ClipboardCheck,
    title: 'Formative Learning Evidence',
    desc: 'Short practice activities reveal strengths and gaps, guide explanations and recommend the next appropriate step — without replacing lecturer authority over competency declaration.',
  },
];
