import { Mail, MapPin } from 'lucide-react';
import { LogoMark } from '@/components/LogoMark';
import { navLinks } from '@/data/navigation';

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Footer() {
  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden border-t border-slate-800/80">
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="py-14 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark className="w-11 h-11" light />
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                EduScape AI
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A governed CBE AI-powered tutoring and learning companion for universities implementing Competency-Based Education. Built at MUST, incubated at CITT.
            </p>

            <div className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 max-w-md">
              <p className="font-semibold text-slate-200">Academic & Research Governance</p>
              <p className="mt-1 text-slate-400">
                Supervised by <strong className="text-sky-300">Dr. Richard Kimera</strong>, Dept of Computer Science, Faculty of Computing and Informatics, MUST.
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 lg:pl-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-sky-400">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleClick(e, link.id)}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Project Contacts */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-sky-400">
              Get in Touch
            </h4>
            
            <div className="space-y-4">
              {/* Email */}
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Official Project Email
                </span>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 select-all">
                  <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>eduscapeai@gmail.com</span>
                </div>
              </div>

              {/* Direct Team Phone Numbers */}
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-3">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Direct Institutional Inquiries
                </span>

                {/* Doreen */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200">Ninsiima Doreen</span>
                    <span className="text-[10px] font-medium text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">Business Lead</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-sky-300 select-all">
                    <PhoneIcon className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                    <span>+256 780 338687</span>
                  </div>
                </div>

                <div className="h-px bg-slate-800" />

                {/* Dr. Kimera */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200">Dr. Richard Kimera</span>
                    <span className="text-[10px] font-medium text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">Academic Supervisor</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-sky-300 select-all">
                    <PhoneIcon className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                    <span>+256 774 437989</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <span>
                  Kihumuro Campus, Mbarara University of Science and Technology (MUST), Mbarara, Uganda
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="border-t border-slate-800/80 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; 2026 EduScape AI. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            MUST FCI &middot; CITT Software Incubation Unit &middot; Preparing for Uganda NCHE CBE 2027/28 Alignment
          </p>
        </div>
      </div>
    </footer>
  );
}
