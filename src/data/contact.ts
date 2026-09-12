import { Server, Users, BarChart3 } from 'lucide-react';
import type { ContactBenefit, ContactForm } from '@/types';

export const contactImage: string =
  'https://images.pexels.com/photos/5940828/pexels-photo-5940828.jpeg?auto=compress&cs=tinysrgb&w=1200';

export const benefits: ContactBenefit[] = [
  { icon: Server, text: 'Consultative institutional onboarding and LMS integration included' },
  { icon: Users, text: 'Lecturer, administrator and ICT staff training provided' },
  { icon: BarChart3, text: 'Dedicated account management, helpdesk, regular reports and annual reviews' },
];

export const emptyForm: ContactForm = {
  name: '',
  email: '',
  institution: '',
  role: '',
  message: '',
};
