import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Upload, Map, Link2, CheckCircle2, BarChart, MessageSquareText, ShieldCheck, Sparkles, Info } from 'lucide-react';

const lecturerFeatures = [
  {
    icon: Upload,
    title: 'Upload course materials',
    desc: 'EduScape indexes them automatically and prepares evidence-backed retrieval pipelines.',
  },
  {
    icon: Map,
    title: 'Generate editable CBE roadmaps',
    desc: 'Automatically organize syllabus outcomes and course resources into an editable sequence.',
  },
  {
    icon: Link2,
    title: 'Link resources to competencies',
    desc: 'Connect specific learning outcomes to readings, activities and assessments with full authority.',
  },
  {
    icon: CheckCircle2,
    title: 'AI-assisted grading suggestions',
    desc: 'Review rubric-mapped formative grading suggestions while keeping full final grading control.',
  },
  {
    icon: BarChart,
    title: 'Monitor competency development',
    desc: 'Track cohort progress in real time to pinpoint learning gaps before summative exams.',
  },
];

const studentFeatures = [
  {
    icon: MessageSquareText,
    title: 'Course-specific questions',
    desc: 'Ask questions about your exact course offering — not generic answers from the entire internet.',
  },
  {
    icon: ShieldCheck,
    title: 'Source-anchored answers',
    desc: 'Receive answers grounded exclusively in your lecturer\'s approved materials with direct citations shown.',
  },
  {
    icon: Sparkles,
    title: 'Competency & outcome mapping',
    desc: 'See exactly which competency stage and curriculum outcome each question and answer connects to.',
  },
  {
    icon: Info,
    title: 'Guided scaffolding',
    desc: 'Receive step-by-step Socratic guidance for complex problems — not ready-made answers to copy.',
  },
];

export function WhatItDoes() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="what-it-does" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Everything You Need
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-slate-900 text-balance leading-[1.3] sm:leading-[1.32]">
            Everything you need — in one governed system.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed text-pretty">
            Designed with dedicated workflows for both faculty authority and student mastery.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Lecturers Track */}
          <div
            className={`bg-slate-50/75 rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-sm ${
              inView ? 'animate-fade-up' : 'reveal'
            }`}
            style={{ animationDelay: '0.15s' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100/80 text-primary-800 text-xs font-bold mb-5">
              Faculty & Teaching Teams
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
              For Lecturers
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Full control over curriculum ingestion, roadmap creation, and evaluation without technical overhead.
            </p>

            <div className="space-y-4">
              {lecturerFeatures.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/70 shadow-xs flex items-start gap-4 hover:border-primary-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      <span className="text-primary-600 font-mono text-xs mr-1.5">{idx + 1}.</span>
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Students Track */}
          <div
            className={`bg-slate-50/75 rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-sm ${
              inView ? 'animate-fade-up' : 'reveal'
            }`}
            style={{ animationDelay: '0.25s' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold mb-5">
              Learners & Cohorts
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
              For Students
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              A 24/7 source-anchored tutoring companion that prepares you for real competency demonstrations.
            </p>

            <div className="space-y-4">
              {studentFeatures.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/70 shadow-xs flex items-start gap-4 hover:border-sky-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      <span className="text-sky-600 font-mono text-xs mr-1.5">{idx + 1}.</span>
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
