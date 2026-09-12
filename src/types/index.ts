import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  id: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type DashboardCard = {
  label: string;
  icon: LucideIcon;
  active: boolean;
};

export type AudienceCard = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type Metric = {
  score: string;
  label: string;
};

export type Step = {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  note: string;
};

export type Feature = {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type Capability = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type NewsStory = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  accent: string;
  url?: string;
  source?: string;
};

export type NewsEvent = {
  month: string;
  day: string;
  title: string;
  meta: string;
  type: string;
};

export type PricingTier = {
  name: string;
  subtitle: string;
  studentRate: string;
  lecturerRate: string;
  onboarding: string;
  description: string;
  features: string[];
  popular: boolean;
};

export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  org: string;
  bio: string;
  contribution?: string;
};

export type ContactBenefit = {
  icon: LucideIcon;
  text: string;
};

export type ContactForm = {
  name: string;
  email: string;
  institution: string;
  role: string;
  message: string;
};
