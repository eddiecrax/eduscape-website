import type { NewsStory, NewsEvent } from '@/types';

export const stories: NewsStory[] = [
  {
    category: 'National Policy & CBE',
    source: 'Daily Monitor Uganda',
    date: 'April 2026',
    title: 'Varsities race to meet 2027 new curriculum deadline',
    excerpt: 'Ugandan universities accelerate preparations to implement the Competency-Based Education framework ahead of the 2027/28 national alignment deadline.',
    image: 'https://images.pexels.com/photos/27769510/pexels-photo-27769510.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-slate-950 via-slate-950/90 to-slate-950/30',
    url: 'https://www.monitor.co.ug/uganda/news/national/varsities-race-to-meet-2027-new-curriculum-deadline-5422602',
  },
  {
    category: 'AI Research & Grounding',
    source: 'arXiv:2312.10997',
    date: 'Dec 2023',
    title: 'Retrieval-Augmented Generation for Large Language Models: A Survey',
    excerpt: 'Comprehensive peer-reviewed research analyzing how source retrieval and citation anchoring mitigate hallucinations and establish verifiable trust.',
    image: 'https://images.pexels.com/photos/33920035/pexels-photo-33920035.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-slate-950 via-slate-950/90 to-slate-950/30',
    url: 'https://arxiv.org/abs/2312.10997',
  },
];

export const events: NewsEvent[] = [
  { month: 'OCT', day: '08', title: 'CBE & AI in Higher Education', meta: 'MUST · Kihumuro Campus', type: 'Roundtable' },
  { month: 'NOV', day: '19', title: 'EduScape Pilot Showcase', meta: 'CITT Software Incubation Unit', type: 'Demo day' },
  { month: 'DEC', day: '03', title: 'Designing for lecturer control', meta: 'Online · Institutions welcome', type: 'Open session' },
];
