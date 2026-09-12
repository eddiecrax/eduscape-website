import { Mail, ExternalLink } from 'lucide-react';
import { LogoMark } from '@/components/LogoMark';
import { navLinks } from '@/data/navigation';

export function Footer() {
  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="py-14 grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark className="w-12 h-12" light />
              <span className="font-display font-bold text-lg text-white">
                EduScape AI
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A governed CBE AI-powered tutoring and learning companion for
              universities implementing Competency-Based Education. Built at
              MUST, incubated at CITT.
            </p>
            <p className="mt-3 text-xs font-semibold text-sky-400">
              Supervised by Dr. Richard Kimera, MUST
            </p>
            <div className="mt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors border border-slate-700"
              >
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                Request Concept Document (PDF)
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-center">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleClick(e, link.id)}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <a
              href="mailto:hello@eduscape.co"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary-400 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              hello@eduscape.co
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; 2026 EduScape AI. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            MUST · CITT · Competency-Based Higher Education in Uganda
          </p>
        </div>
      </div>
    </footer>
  );
}
