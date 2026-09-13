import { ArrowUpRight, CalendarDays, Newspaper, Radio, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { stories } from '@/data/news';


export function News() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="news" className="relative py-20 lg:py-28 overflow-hidden bg-primary-950 text-white">
      <div className="absolute inset-0 opacity-30 bg-grid-dark pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[32rem] h-[32rem] rounded-full bg-primary-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-sky-300 uppercase tracking-wider mb-3">News & Events</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-white text-balance leading-[1.3] sm:leading-[1.32]">
              The work is moving. Stay close to it.
            </h2>
            <p className="mt-5 text-base text-blue-100/75 leading-relaxed max-w-xl">
              Follow the ideas, conversations and pilot moments shaping a more useful AI layer for Competency-Based Education.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-sky-200">
            <Radio className="w-4 h-4 text-sky-300" />
            Building in public, with institutions
          </div>
        </div>

        <div ref={ref} className="grid lg:grid-cols-[1.45fr_1fr] gap-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {stories.map((story, i) => (
              <article
                key={story.title}
                className="group relative min-h-[390px] rounded-2xl overflow-hidden border border-white/10 bg-white/5"
                style={{ opacity: 0, animation: inView ? `fadeUp .6s ease-out ${i * .12}s forwards` : 'none' }}
              >
                <img src={story.image} alt={story.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/30" />
                <div className="relative h-full flex flex-col justify-end p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs mb-3.5 flex-wrap">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/95 border border-white/25 text-white font-semibold shadow-md tracking-wide">
                      {story.category}
                    </span>
                    {story.source && (
                      <span className="px-2.5 py-1 rounded-md bg-sky-500/25 border border-sky-400/60 text-sky-200 font-bold shadow-md">
                        {story.source}
                      </span>
                    )}
                    <span className="px-2 py-1 rounded-md bg-slate-900/90 border border-white/20 text-slate-200 font-medium text-[11px] shadow-sm">
                      {story.date}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white leading-snug drop-shadow-sm">{story.title}</h3>
                  <p className="mt-3 text-sm text-slate-200 leading-relaxed font-normal">{story.excerpt}</p>
                  <a
                    href={story.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-white transition-colors"
                  >
                    Read publication <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:p-6 backdrop-blur-sm flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-semibold text-sky-300 uppercase tracking-wider">Live Events</p>
                <h3 className="mt-1 font-display font-bold text-xl text-white">Events on the horizon</h3>
              </div>
              <CalendarDays className="w-5 h-5 text-sky-300" />
            </div>

            {/* Coming soon state */}
            <div className="flex-1 flex flex-col items-center justify-center text-center py-8 px-4"
              style={{ opacity: 0, animation: inView ? 'fadeUp .6s ease-out .2s forwards' : 'none' }}>
              <div className="w-16 h-16 rounded-2xl bg-sky-400/10 border border-sky-300/20 flex items-center justify-center mb-5">
                <CalendarDays className="w-7 h-7 text-sky-300" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">
                We're going live soon
              </h4>
              <p className="text-sm text-blue-100/65 leading-relaxed max-w-xs">
                Roundtables, pilot showcases, and open sessions with Ugandan institutions are in the pipeline. Dates will be announced here first.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-400/15 border border-sky-300/25 text-sm font-semibold text-sky-200 hover:bg-sky-400/25 hover:border-sky-300/50 hover:text-white transition-all duration-200"
              >
                <Radio className="w-4 h-4" />
                Get notified when we go live
              </a>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-sky-300 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-100/65 leading-relaxed">Want EduScape at your next academic or ICT gathering? <a href="#contact" className="font-semibold text-sky-300 hover:text-white transition-colors">Invite the team.</a></p>
            </div>
          </div>

        </div>

        <div className="mt-12 flex items-center gap-3 text-sm text-blue-100/50">
          <Newspaper className="w-4 h-4 text-sky-300" />
          Notes from the road to institution-controlled intelligence.
        </div>
      </div>
    </section>
  );
}
