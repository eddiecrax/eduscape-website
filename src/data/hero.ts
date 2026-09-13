import { BookOpen, Lock, Sparkles } from 'lucide-react';
import type { Stat, DashboardCard } from '@/types';

export const stats: Stat[] = [
  { value: '100%', label: 'of students in early sessions said source-anchored answers increased trust in AI output' },
  { value: '75%', label: 'of lecturers said they would approve EduScape if lecturer control over ingestion stayed exclusive' },
  { value: '2027/28', label: 'NCHE deadline for full CBE programme alignment across all Ugandan universities' },
];

export const marqueeItems: string[] = [
  'Competency-Based Education',
  'HA-RAG Retrieval',
  'Lecturer-Controlled AI',
  'Source-Anchored Answers',
  'Institution-Controlled Inference',
  'LMS-Agnostic Architecture',
];

export const dashboardCards: DashboardCard[] = [
  { label: 'CBE Roadmap', icon: BookOpen, active: true },
  { label: 'LMS Layer', icon: Lock, active: false },
  { label: 'AI Responses', icon: Sparkles, active: false },
];

export const roadmapTags: string[] = [
  'Competency Mapping',
  'Learning Outcome Links',
  'HA-RAG Knowledge Base',
  'Formative Evidence',
  'LMS-Agnostic Architecture',
];

export const heroImage: string = '/hero-students.jpg';
