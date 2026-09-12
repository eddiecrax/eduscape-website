import { Check, Star, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { tiers, pilotExample, pricingNote } from '@/data/pricing';

export function Pricing() {
  const { ref, inView } = useScrollReveal();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-20 lg:py-28 overflow-hidden bg-slate-50/50">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-slate-900 text-balance leading-[1.3] sm:leading-[1.32]">
            Transparent pricing. Low entry cost.
          </h2>
          <p className="mt-5 text-base text-slate-600 leading-relaxed text-pretty">
            Annual subscriptions paid in advance by the institution — a
            familiar education-software model. A separate one-time onboarding
            fee covers LMS configuration, CBE and course mapping, training,
            security checks and acceptance testing.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-6 lg:p-7 border-2 card-hover flex flex-col ${
                tier.popular
                  ? 'border-primary-500 bg-white shadow-2xl shadow-primary-600/15 lg:scale-[1.03] lg:-mt-2'
                  : 'border-slate-200/80 bg-white shadow-lg shadow-slate-200/40'
              }`}
              style={{
                opacity: 0,
                animation: inView
                  ? `fadeUp 0.5s ease-out ${i * 0.12}s forwards`
                  : 'none',
              }}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-full shadow-md">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display font-extrabold text-xl text-slate-900">
                  {tier.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{tier.subtitle}</p>
              </div>

              <div className="mb-5 pb-5 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-display font-extrabold text-slate-900">
                      {tier.studentRate}
                    </span>
                    <span className="text-sm text-slate-500">/ student / year</span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-display font-bold text-slate-700">
                      {tier.lecturerRate}
                    </span>
                    <span className="text-sm text-slate-500">/ lecturer / year</span>
                  </div>
                </div>
                <p className="mt-3 text-xs font-medium text-primary-700 bg-primary-50/70 rounded-lg px-3 py-2">
                  {tier.onboarding}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {tier.description}
              </p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  tier.popular
                    ? 'text-white bg-gradient-to-r from-primary-600 to-primary-700 shadow-md shadow-primary-600/25 hover:shadow-lg hover:scale-[1.02]'
                    : 'text-primary-700 bg-primary-50 border border-primary-200 hover:bg-primary-100'
                }`}
              >
                Contact us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Example & note */}
        <div
          className="mt-12 max-w-3xl mx-auto"
          style={{
            opacity: 0,
            animation: inView ? 'fadeUp 0.5s ease-out 0.5s forwards' : 'none',
          }}
        >
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-md">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold mb-3 border border-primary-100">
              Institutional Budgeting & Sustainability
            </div>
            <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
              {pilotExample}
            </p>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed border-t border-slate-200/60 pt-3">
              {pricingNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
