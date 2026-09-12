import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Database, Layers, Sparkles, Check, ChevronDown } from 'lucide-react';

const layers = [
  {
    num: '01',
    layer: 'Layer 1',
    title: 'Your LMS (Moodle, Canvas, Open edX)',
    tag: 'Official Academic Source',
    tagColor: 'bg-slate-100 text-slate-700 border-slate-200',
    icon: Database,
    accentBorder: 'border-slate-200/90 hover:border-slate-400',
    desc: 'Remains the official source for identities, courses, enrolments, resources, submissions and grades. EduScape does not replace it.',
    keyPoints: [
      'Zero migration of student credentials or course records',
      'Works natively alongside existing LMS deployments',
      'Lecturers continue using existing grading & submission pipelines',
    ],
  },
  {
    num: '02',
    layer: 'Layer 2',
    title: 'EduScape Integration Layer',
    tag: 'LMS-Agnostic Middleware',
    tagColor: 'bg-sky-50 text-sky-700 border-sky-200',
    icon: Layers,
    accentBorder: 'border-sky-200 hover:border-sky-400',
    desc: 'Establishes the user\'s identity, role, course offering and permissions. Maps authorised LMS information into a common format. Moodle is the first integration. The architecture supports Canvas and Open edX without rebuilding the core.',
    keyPoints: [
      'Strict course-offering boundary enforcement (100% access-denial target)',
      'Normalises schemas across Moodle, Canvas, and Open edX',
      'Zero vendor lock-in for institutional IT services',
    ],
  },
  {
    num: '03',
    layer: 'Layer 3',
    title: 'EduScape Intelligence Layer',
    tag: 'Governed CBE Tutoring & HA-RAG',
    tagColor: 'bg-primary-50 text-primary-700 border-primary-200',
    icon: Sparkles,
    accentBorder: 'border-primary-300 hover:border-primary-500 shadow-md shadow-primary-600/5',
    desc: 'The lecturer digitises competencies, outcomes and assessment expectations. EduScape creates an editable course roadmap. When a student asks a question, EduScape retrieves from approved course materials only, links the response to the correct competency and outcome, shows the source, and withholds the answer if evidence is insufficient.',
    keyPoints: [
      'Hierarchical Adaptive Retrieval-Augmented Generation (HA-RAG)',
      'CBE roadmap linkage & source citation on every single answer',
      'Evidence-based refusal: withholds responses if evidence is lacking',
    ],
  },
];

export function Solution() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="solution" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <div ref={ref} className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-slate-900 text-balance leading-[1.3] sm:leading-[1.32] ${inView ? 'animate-fade-up' : 'reveal'}`}>
            EduScape AI: three layers, one governed intelligence cycle.
          </h2>
          <p className={`mt-5 text-base text-slate-600 leading-relaxed text-pretty ${inView ? 'animate-fade-up' : 'reveal'}`} style={{ animationDelay: '0.1s' }}>
            A modular, three-tier architecture engineered specifically for institutional governance, LMS co-existence, and curriculum alignment.
          </p>
        </div>

        {/* Stacked Horizontal Boxes Diagram */}
        <div className="space-y-4 relative">
          {layers.map((layer, i) => (
            <div key={layer.num} className="relative">
              <div
                className={`bg-white rounded-2xl p-6 sm:p-8 border ${layer.accentBorder} shadow-sm hover:shadow-xl transition-all duration-300 ${
                  inView ? 'animate-fade-up' : 'reveal'
                }`}
                style={{ animationDelay: `${0.15 + i * 0.12}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                  {/* Left: Icon & Badge */}
                  <div className="flex items-center gap-3.5 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center text-primary-700 shadow-sm">
                      <layer.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${layer.tagColor}`}>
                        {layer.layer}
                      </span>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{layer.tag}</p>
                    </div>
                  </div>

                  {/* Center/Right: Title, Description & Bullet points */}
                  <div className="flex-1 min-w-0 md:pl-2">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                      {layer.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {layer.desc}
                    </p>

                    <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap gap-x-6 gap-y-2">
                      {layer.keyPoints.map((point) => (
                        <div key={point} className="inline-flex items-center gap-2 text-xs text-slate-500 font-medium">
                          <Check className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Down Arrow between stacked boxes */}
              {i < layers.length - 1 && (
                <div className="flex justify-center my-1">
                  <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-400 shadow-xs z-10">
                    <ChevronDown className="w-4 h-4 text-primary-600" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Core Principle Banner */}
        <div
          className={`mt-12 bg-gradient-to-r from-primary-900 via-primary-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 text-center shadow-xl shadow-primary-900/15 border border-primary-700/40 ${
            inView ? 'animate-fade-up' : 'reveal'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <p className="text-base sm:text-lg lg:text-xl font-display font-extrabold tracking-tight">
            &ldquo;The LMS owns the academic record. EduScape owns the intelligence around it.&rdquo;
          </p>
          <p className="mt-2 text-xs sm:text-sm text-blue-100/70 font-medium">
            Non-disruptive integration · Strict role separation · Zero compromise on institutional authority
          </p>
        </div>
      </div>
    </section>
  );
}
