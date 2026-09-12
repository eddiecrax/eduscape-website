import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Database, Globe, Sparkles, BarChart, ArrowRight } from 'lucide-react';

const studyMetrics = [
  { label: 'Anytime access to resources', score: '2.88', max: 5 },
  { label: 'Outcome-aligned content development', score: '2.77', max: 5 },
  { label: 'Timely availability of learning items', score: '2.74', max: 5 },
  { label: 'Sufficiency of information for tasks', score: '2.52', max: 5 },
];

export function Problem() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="problem" className="relative py-20 lg:py-28 overflow-hidden bg-slate-50/60 border-b border-slate-200/60">
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            The Problem
          </p>
          <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-slate-900 text-balance leading-[1.3] sm:leading-[1.32] ${inView ? 'animate-fade-up' : 'reveal'}`}>
            Uganda is moving to CBE.
            <br />
            <span className="text-primary-700">The support layer is still missing.</span>
          </h2>
          <p className={`mt-4 text-base text-slate-600 leading-relaxed ${inView ? 'animate-fade-up' : 'reveal'}`} style={{ animationDelay: '0.1s' }}>
            While institutions adopt Competency-Based curricula, neither traditional LMS platforms nor general-purpose public AI can deliver curriculum-grounded, verifiable learning support.
          </p>
        </div>

        {/* Three Columns Comparison */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {/* Column 1: What the LMS does */}
          <div
            className={`bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
              inView ? 'animate-fade-up' : 'reveal'
            }`}
            style={{ animationDelay: '0.15s' }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-5 text-slate-700">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                Current Reality
              </span>
              <h3 className="text-xl font-display font-bold text-slate-900 mt-1 mb-3">
                What the LMS does
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your university VLE stores materials, assignments and grades. It manages the academic record. It does not answer questions. It does not know what competency a student is working toward. It cannot show its sources.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
              Static repository · Record keeper
            </div>
          </div>

          {/* Column 2: What public AI does */}
          <div
            className={`bg-white rounded-2xl p-7 border border-amber-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
              inView ? 'animate-fade-up' : 'reveal'
            }`}
            style={{ animationDelay: '0.25s' }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-5 text-amber-600">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-wider text-amber-600 uppercase">
                Ungoverned AI
              </span>
              <h3 className="text-xl font-display font-bold text-slate-900 mt-1 mb-3">
                What public AI does
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ChatGPT and Gemini answer questions from the entire internet. They do not know your course materials, your approved outcomes, or your institution&apos;s CBE framework. Students get fluent answers that may be completely wrong for their course.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-amber-700 font-medium">
              Ungrounded answers · Hallucination risk
            </div>
          </div>

          {/* Column 3: What is missing (EduScape) */}
          <div
            className={`bg-gradient-to-br from-primary-900 via-primary-950 to-slate-900 text-white rounded-2xl p-7 shadow-xl shadow-primary-950/20 border border-primary-700/50 flex flex-col justify-between ${
              inView ? 'animate-fade-up' : 'reveal'
            }`}
            style={{ animationDelay: '0.35s' }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-5 text-sky-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-wider text-sky-400 uppercase">
                The Governed Solution
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-1 mb-3">
                What is missing
              </h3>
              <p className="text-sm text-blue-100/85 leading-relaxed">
                An intelligence layer that works with your existing LMS, retrieves from lecturer-approved materials only, links responses to the right competency and outcome, shows its sources, and withholds an answer when evidence is insufficient. <strong className="text-white">That is EduScape.</strong>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-sky-300 font-medium flex items-center justify-between">
              <span>Governed · Source-anchored</span>
              <span className="text-emerald-400 font-bold">EduScape AI</span>
            </div>
          </div>
        </div>

        {/* MUST Evidence Callout Box */}
        <div
          className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-lg shadow-slate-200/40 ${
            inView ? 'animate-fade-up' : 'reveal'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-bold mb-3">
                <BarChart className="w-3.5 h-3.5" />
                The MUST Empirical Evidence
              </div>
              <h4 className="text-lg sm:text-xl font-display font-bold text-slate-900 leading-snug">
                Measured gaps from real Ugandan higher education classrooms
              </h4>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                A 2025 study at MUST with <strong>237 respondents</strong> found that anytime access (2.88/5), outcome-aligned content development (2.77), timely availability (2.74) and sufficiency of information for tasks (2.52) were the weakest dimensions of the current VLE experience. <strong>EduScape addresses all four.</strong>
              </p>
              <div className="mt-5">
                <a
                  href="#solution"
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary-700 hover:text-primary-800 transition-colors"
                >
                  Explore the 3-layer architecture addressing these gaps
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Score Bars */}
            <div className="lg:col-span-5 bg-slate-50/80 rounded-xl p-5 border border-slate-200/70 space-y-3.5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Weakest VLE Dimensions (Mean / 5.0)
              </p>
              {studyMetrics.map((item) => {
                const val = parseFloat(item.score);
                const pct = (val / item.max) * 100;
                return (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-700 font-medium">{item.label}</span>
                      <span className="font-bold text-slate-900">{item.score}/5.0</span>
                    </div>
                    <div className="h-2 bg-slate-200/80 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-1000"
                        style={{ width: inView ? `${pct}%` : '0%' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
