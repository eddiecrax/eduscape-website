import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, CheckCircle2 } from 'lucide-react';

interface Partner {
  name: string;
  shortName: string;
  role: string;
  badge: string;
  logo: string;
  description: string;
  details: string;
}

const flagshipPartners: Partner[] = [
  {
    name: 'Mbarara University of Science and Technology',
    shortName: 'MUST',
    role: 'Host Academic Institution & Research Partner',
    badge: 'Built at MUST',
    logo: '/partners/must.png',
    description: 'Pioneering competency-based higher education research and pilot deployments across Ugandan universities.',
    details: 'Mbarara, Uganda · Founded 1989',
  },
  {
    name: 'CITT Software Incubation Unit',
    shortName: 'CITT',
    role: 'Technology Incubation & Commercialisation Partner',
    badge: 'Incubated at CITT',
    logo: '/partners/citt.png',
    description: 'The Centre for Innovation and Technology Transfer at MUST, incubating governed academic AI solutions.',
    details: 'Software Incubation Unit · Innovation Hub',
  },
];

export function Partners() {
  const { ref, inView } = useScrollReveal();

  return (
    <section
      id="partners"
      className="relative py-14 lg:py-20 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/50 border-y border-slate-200/60 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div ref={ref} className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200/80 text-primary-700 text-xs font-semibold mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-primary-600" />
            Institutional Backing & Strategic Partners
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.3] sm:leading-[1.32] ${
              inView ? 'animate-fade-up' : 'reveal'
            }`}
          >
            Built at MUST. Incubated at CITT.
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base text-slate-600 leading-relaxed ${
              inView ? 'animate-fade-up' : 'reveal'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            EduScape AI is developed and incubated in partnership with Mbarara University of Science and Technology and the Centre for Innovation and Technology Transfer.
          </p>
          <div
            className={`mt-3.5 ${inView ? 'animate-fade-up' : 'reveal'}`}
            style={{ animationDelay: '0.15s' }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold text-primary-900 bg-primary-100/70 border border-primary-200">
              Supervised by Dr. Richard Kimera, Department of Computer Science, MUST.
            </span>
          </div>
        </div>

        {/* Flagship Partners Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            inView ? 'animate-fade-up' : 'reveal'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          {flagshipPartners.map((partner) => (
            <div
              key={partner.shortName}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md shadow-slate-200/40 hover:shadow-xl hover:border-primary-300 hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start"
            >
              {/* Logo Card */}
              <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-2.5 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary-50 text-primary-700 border border-primary-200/70">
                    <CheckCircle2 className="w-3 h-3 text-primary-600" />
                    {partner.badge}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {partner.details}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 leading-snug group-hover:text-primary-700 transition-colors">
                  {partner.name}
                </h3>

                <p className="text-xs font-semibold text-primary-600 mt-1">
                  {partner.role}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
