import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoMark } from '@/components/LogoMark';
import { useActiveSection } from '@/hooks/useActiveSection';
import { navLinks } from '@/data/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="absolute top-0 left-0 h-0.5 bg-sky-400 transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, 'hero')}
            className="flex items-center gap-2.5 group outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 select-none border-none"
            style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
          >
            <LogoMark className="w-12 h-12 transition-transform group-hover:scale-105" />
            <span className="font-display font-bold text-lg text-slate-900 tracking-tight">
              EduScape AI
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  active === link.id
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, 'contact')}
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-md shadow-primary-600/25 hover:shadow-lg hover:shadow-primary-600/30 hover:scale-[1.02] transition-all duration-200"
            >
              Request a pilot
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-5 pb-4 space-y-1 bg-white/95 backdrop-blur-md border-b border-slate-200/60">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={`block px-4 py-2.5 text-sm font-medium rounded-lg ${
                active === link.id
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
            className="block mt-2 px-4 py-2.5 text-sm font-semibold text-center text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg"
          >
            Request a pilot
          </a>
        </div>
      </div>
    </header>
  );
}
