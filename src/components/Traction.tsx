import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CheckCircle, ShieldCheck, Zap, Users, Award, Server } from 'lucide-react';

const milestones = [
  {
    icon: Users,
    title: 'Multi-Role Workflows Operational',
    desc: 'Prototype successfully demonstrates end-to-end student, lecturer, and institutional administrator workflows.',
    tag: 'Core System',
  },
  {
    icon: Zap,
    title: 'HA-RAG & Access Control Active',
    desc: 'Course-offering access control, hierarchical adaptive retrieval, and competency assessment functions are fully operational.',
    tag: 'Intelligence Layer',
  },
  {
    icon: ShieldCheck,
    title: 'Clean-Environment Verification',
    desc: 'Clean-environment verification completed and reproducible technical baseline established without third-party cloud leakages.',
    tag: 'Technical Baseline',
  },
  {
    icon: Award,
    title: '100% Student Trust Rating',
    desc: 'Early sessions with 12 FCI students: 100% reported that source-anchored citations significantly increased their trust in AI responses.',
    tag: 'Student Validation',
  },
  {
    icon: CheckCircle,
    title: '75% Lecturer Approval Rate',
    desc: '3 of 4 evaluated lecturers confirmed willingness to approve and adopt the tool with exclusive lecturer-controlled ingestion.',
    tag: 'Faculty Approval',
  },
  {
    icon: Server,
    title: 'MUST ICT Moodle Partnership',
    desc: 'MUST ICT Services verbally confirmed willingness to provide an isolated university Moodle sandbox environment for pilot testing.',
    tag: 'Deployment Ready',
  },
];

export function Traction() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="traction" className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 overflow-hidden border-b border-slate-200/60">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-4 shadow-sm">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            Verified Progress & Validation
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-slate-900 text-balance leading-[1.3] sm:leading-[1.32] ${inView ? 'animate-fade-up' : 'reveal'}`}>
            Where we are now.
          </h2>
          <p className={`mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-pretty ${inView ? 'animate-fade-up' : 'reveal'}`} style={{ animationDelay: '0.1s' }}>
            EduScape AI is an advanced working prototype, built at MUST during the 2025/2026 academic year. Here is what has been done and what has been confirmed.
          </p>
        </div>

        {/* 6 Milestone Tiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m, i) => (
            <div
              key={m.title}
              className={`bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md shadow-slate-200/40 hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                inView ? 'animate-fade-up' : 'reveal'
              }`}
              style={{ animationDelay: `${0.12 + i * 0.08}s` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-xs">
                    <m.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {m.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-2 leading-snug">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
