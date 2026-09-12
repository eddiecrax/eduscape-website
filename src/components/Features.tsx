import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, X, ShieldCheck } from 'lucide-react';

interface ComparisonRow {
  capability: string;
  lmsAi: boolean;
  groundedTools: boolean;
  competencySystems: boolean;
  publicAi: boolean;
  eduscape: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    capability: 'LMS integration',
    lmsAi: true,
    groundedTools: true,
    competencySystems: true,
    publicAi: false,
    eduscape: true,
  },
  {
    capability: 'Course-grounded answers',
    lmsAi: false,
    groundedTools: true,
    competencySystems: true,
    publicAi: false,
    eduscape: true,
  },
  {
    capability: 'Source attribution',
    lmsAi: false,
    groundedTools: false,
    competencySystems: false,
    publicAi: false,
    eduscape: true,
  },
  {
    capability: 'CBE course roadmap',
    lmsAi: false,
    groundedTools: false,
    competencySystems: false,
    publicAi: false,
    eduscape: true,
  },
  {
    capability: 'Roadmap-aware AI',
    lmsAi: false,
    groundedTools: false,
    competencySystems: false,
    publicAi: false,
    eduscape: true,
  },
  {
    capability: 'Hierarchical retrieval',
    lmsAi: false,
    groundedTools: false,
    competencySystems: false,
    publicAi: false,
    eduscape: true,
  },
  {
    capability: 'Course-level access control',
    lmsAi: false,
    groundedTools: false,
    competencySystems: false,
    publicAi: false,
    eduscape: true,
  },
  {
    capability: 'Evidence-based refusal',
    lmsAi: false,
    groundedTools: false,
    competencySystems: false,
    publicAi: false,
    eduscape: true,
  },
  {
    capability: 'Multi-LMS architecture',
    lmsAi: false,
    groundedTools: false,
    competencySystems: false,
    publicAi: false,
    eduscape: true,
  },
];

export function Features() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="features" className="relative py-20 lg:py-28 overflow-hidden bg-slate-50/50 border-b border-slate-200/60">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            What Makes It Different
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-slate-900 text-balance leading-[1.3] sm:leading-[1.32]">
            Everything missing from your LMS — without replacing it.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed text-pretty">
            A comprehensive architectural comparison across existing higher-education solutions and general AI tools.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div
          ref={ref}
          className={`bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden ${
            inView ? 'animate-fade-up' : 'reveal'
          }`}
          style={{ animationDelay: '0.15s' }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-4 px-5 text-sm font-bold text-slate-700 w-1/3">
                    Capability
                  </th>
                  <th className="py-4 px-4 text-center text-xs font-semibold text-slate-600">
                    General LMS AI
                  </th>
                  <th className="py-4 px-4 text-center text-xs font-semibold text-slate-600">
                    Course-grounded tools
                  </th>
                  <th className="py-4 px-4 text-center text-xs font-semibold text-slate-600">
                    Competency systems
                  </th>
                  <th className="py-4 px-4 text-center text-xs font-semibold text-slate-600">
                    Public AI
                  </th>
                  <th className="py-4 px-5 text-center text-sm font-extrabold text-primary-700 bg-primary-50/80 border-x-2 border-primary-500/80 shadow-xs">
                    <span className="flex items-center justify-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-primary-600" />
                      EduScape AI
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={row.capability}
                    className={`transition-colors hover:bg-slate-50/60 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/25'
                    }`}
                  >
                    <td className="py-3.5 px-5 font-medium text-slate-800">
                      {row.capability}
                    </td>

                    {/* General LMS AI */}
                    <td className="py-3.5 px-4 text-center">
                      {row.lmsAi ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600">
                          <Check className="w-4 h-4" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                          <X className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </td>

                    {/* Course-grounded tools */}
                    <td className="py-3.5 px-4 text-center">
                      {row.groundedTools ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600">
                          <Check className="w-4 h-4" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                          <X className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </td>

                    {/* Competency systems */}
                    <td className="py-3.5 px-4 text-center">
                      {row.competencySystems ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600">
                          <Check className="w-4 h-4" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                          <X className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </td>

                    {/* Public AI */}
                    <td className="py-3.5 px-4 text-center">
                      {row.publicAi ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600">
                          <Check className="w-4 h-4" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                          <X className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </td>

                    {/* EduScape AI */}
                    <td className="py-3.5 px-5 text-center bg-primary-50/50 border-x-2 border-primary-500/80">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-600 text-white shadow-xs">
                        <Check className="w-4 h-4" strokeWidth={2.5} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Caption Below Table */}
          <div className="p-6 bg-slate-50 border-t border-slate-200/80 text-center">
            <p className="text-sm sm:text-base text-slate-700 font-medium max-w-4xl mx-auto leading-relaxed">
              &ldquo;We reviewed existing tools. None combine all of these. <strong>EduScape is the only product built specifically for CBE-aligned, lecturer-governed, source-anchored AI tutoring.</strong>&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
