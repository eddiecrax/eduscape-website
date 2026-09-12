import type { PricingTier } from '@/types';

export const tiers: PricingTier[] = [
  {
    name: 'Course Pilot',
    subtitle: 'Up to 250 students · 20 lecturers',
    studentRate: 'US$15',
    lecturerRate: 'US$20',
    onboarding: 'UGX 5 million one-time onboarding',
    description:
      'Ideal for a first deployment in one or two course offerings. Low entry cost to evaluate EduScape with real students and real materials.',
    features: [
      '1–2 course offerings',
      'Full LMS integration (Moodle)',
      'CBE roadmap configuration',
      'Staff training included',
      'Security audit & acceptance testing',
    ],
    popular: false,
  },
  {
    name: 'Faculty',
    subtitle: '251 – 1,500 students',
    studentRate: 'US$12',
    lecturerRate: 'US$18',
    onboarding: 'UGX 7.5 million one-time onboarding',
    description:
      'Scales across a faculty or department. Volume discount rewards broader adoption. Includes full LMS integration, CBE mapping and training.',
    features: [
      'Department or faculty-wide',
      'Full LMS integration',
      'CBE mapping & training',
      'Volume discount pricing',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Institution',
    subtitle: 'Above 1,500 students',
    studentRate: 'Negotiated',
    lecturerRate: 'Volume rate',
    onboarding: 'UGX 15 million one-time onboarding',
    description:
      'Campus-wide pricing with custom volume discounts. Dedicated account management, managed private deployment and priority support.',
    features: [
      'Campus-wide deployment',
      'Managed private deployment',
      'Dedicated account management',
      'Custom volume discounts',
      'Priority support & SLA',
    ],
    popular: false,
  },
];

export const pilotExample: string =
  'Worked Example — A 100-student, 6-lecturer pilot at MUST: approximately UGX 10.87 million in year one including onboarding. Annual recurring cost approximately UGX 2.4 million from year two — the grant funds the build, revenue sustains it.';

export const pricingNote: string =
  'Planning rate: UGX 3,625 per US$. All onboarding includes LMS integration, CBE roadmap configuration, staff training, security audit and acceptance testing.';
