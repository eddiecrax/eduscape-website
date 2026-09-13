import { useEffect, useState } from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { LogoMark } from '@/components/LogoMark';
import { stats, marqueeItems, dashboardCards, roadmapTags, heroImage } from '@/data/hero';

export function Hero() {
  const [typedTag, setTypedTag] = useState('');
  const [tagIndex, setTagIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roadmapTags[tagIndex];
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setTypedTag(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setTypedTag(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setTagIndex((tagIndex + 1) % roadmapTags.length);
    }
  }, [charIndex, deleting, tagIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-28 lg:pt-36 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/60 via-white to-white pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200/25 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute top-40 -left-24 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              Uganda · Competency-Based Higher Education · MUST CITT
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display font-extrabold text-slate-900 text-balance leading-[1.25] sm:leading-[1.26]">
              The AI tutoring layer built for how{' '}
              <span className="gradient-text">CBE</span> actually works.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 text-pretty leading-relaxed max-w-xl">
              Uganda&apos;s universities must align all programmes with Competency-Based Education by 2027/2028. Your LMS stores the materials. EduScape makes them intelligent.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 hover:scale-[1.02] transition-all duration-200"
              >
                Request a pilot
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('solution')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-200"
              >
                <Play className="w-4 h-4 text-primary-600" />
                See how it works
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="text-left animate-fade-up"
                  style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'both' }}
                >
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-primary-700">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 leading-snug pr-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/15 ring-1 ring-slate-200/60">
              <img
                src={heroImage}
                alt="Students in lecture session, MUST Uganda"
                className="w-full h-64 sm:h-72 object-cover object-center"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-xs text-white/90 font-medium">
                  MUST Lecture Hall · Kihumuro Campus, Uganda
                </p>
              </div>
            </div>

            {/* Floating dashboard card */}
            <div className="mt-4 bg-white rounded-2xl shadow-xl shadow-slate-900/10 ring-1 ring-slate-200/60 p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <LogoMark className="w-8 h-8" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">EduScape</p>
                    <p className="text-[10px] text-slate-400">Pilot Dashboard</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-green-50 text-green-600 border border-green-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Prototype Ready
                </span>
              </div>

              {/* Tab bar */}
              <div className="flex gap-1.5 mb-4">
                {dashboardCards.map((card) => (
                  <div
                    key={card.label}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-medium ${
                      card.active
                        ? 'bg-primary-50 text-primary-700 border border-primary-200'
                        : 'bg-slate-50 text-slate-500 border border-slate-100'
                    }`}
                  >
                    <card.icon className="w-3 h-3" />
                    {card.label}
                  </div>
                ))}
              </div>

              {/* Roadmap body */}
              <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Course Offering · CBE Roadmap
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-primary-100 text-primary-700">
                    LECTURER CONTROLLED
                  </span>
                </div>
                <div className="space-y-1.5">
                  {roadmapTags.slice(0, 4).map((tag, i) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 text-xs text-slate-600"
                      style={{
                        opacity: 0,
                        animation: `fadeUp 0.5s ease-out ${0.5 + i * 0.15}s forwards`,
                      }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Typing indicator */}
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-500">
                    <span className="text-slate-400">AI insight:</span>{' '}
                    <span className="text-primary-700 font-medium">{typedTag}</span>
                    <span className="inline-block w-0.5 h-3.5 bg-primary-600 ml-0.5 align-middle animate-blink" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-sky-300/25 rounded-2xl blur-2xl animate-pulse-slow pointer-events-none" />
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-8 animate-marquee w-max">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-medium text-slate-400 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
