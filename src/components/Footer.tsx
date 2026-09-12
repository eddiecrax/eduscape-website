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
        <div className="py-14 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark className="w-11 h-11" light />
              <span className="font-display font-bold text-xl text-white tracking-tight">
                EduScape AI
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A governed CBE AI-powered tutoring and learning companion for universities implementing Competency-Based Education. Built at MUST, incubated at CITT.
            </p>
            <p className="mt-4 text-xs font-semibold text-sky-400">
              Supervised by Dr. Richard Kimera, Department of Computer Science, MUST
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:pl-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleClick(e, link.id)}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            
            <div className="space-y-5">
              {/* Email */}
              <div>
                <span className="block text-xs font-medium text-slate-400 mb-1">
                  Official Email
                </span>
                <div className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white select-all">
                  <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>eduscapeai@gmail.com</span>
                </div>
              </div>

              {/* Direct Team Phone Numbers */}
              <div className="space-y-3.5 pt-1">
                <div>
                  <span className="text-xs text-slate-400">
                    Ninsiima Doreen <span className="text-slate-500">(Business Lead)</span>
                  </span>
                  <div className="mt-0.5 flex items-center gap-2 text-sm sm:text-base font-semibold text-sky-400 select-all tracking-wide">
                    <PhoneIcon className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>+256 780 338687</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-400">
                    Dr. Richard Kimera <span className="text-slate-500">(Academic Supervisor)</span>
                  </span>
                  <div className="mt-0.5 flex items-center gap-2 text-sm sm:text-base font-semibold text-sky-400 select-all tracking-wide">
                    <PhoneIcon className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>+256 774 437989</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 text-xs text-slate-400 pt-1 border-t border-slate-800/80">
                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Kihumuro Campus, Mbarara University of Science &amp; Technology (MUST), Uganda
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="border-t border-slate-800/80 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} EduScape AI Project &middot; MUST FCI &amp; CITT. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Dept of Computer Science, MUST &middot; Preparing for Uganda NCHE CBE 2027/28 Alignment
          </p>
        </div>
      </div>
    </footer>
  );
}
