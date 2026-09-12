import { useState } from 'react';
import { Mail, CheckCircle2, Send, Award, BookOpen, Users, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type PartnerTrack = 'grants' | 'universities' | 'corporate';

const partnerTracks = [
  {
    id: 'grants' as PartnerTrack,
    title: 'Grant bodies & research funds',
    tag: 'Funding & Applied Research',
    icon: Award,
    borderAccent: 'border-primary-200 hover:border-primary-400',
    desc: 'We are seeking funding partners to support a structured six-month institutional pilot covering product hardening, evaluation with 100 students and six lecturers across two MUST faculties, usability benchmarking, and buyer validation. If your fund supports edtech innovation, applied AI, or CBE implementation in African higher education, we want to talk.',
    cta: 'Contact us',
  },
  {
    id: 'universities' as PartnerTrack,
    title: 'Universities & institutions',
    tag: 'Pilot Cohort 2027/28',
    icon: BookOpen,
    borderAccent: 'border-sky-200 hover:border-sky-400',
    desc: 'We are looking for one or two partner institutions beyond MUST to join a pilot cohort ahead of Uganda\'s 2027/2028 CBE deadline. Early partners get a voice in product direction, reference deployment status, and preferential onboarding rates.',
    cta: 'Express interest',
  },
  {
    id: 'corporate' as PartnerTrack,
    title: 'Corporate & industry partners',
    tag: 'Competency Tracks',
    icon: Users,
    borderAccent: 'border-slate-200 hover:border-slate-400',
    desc: 'CBE produces graduates with verified, demonstrable competencies. EduScape can host competency tracks sponsored by your organisation — giving you direct pipeline access to students developing skills relevant to your sector.',
    cta: 'Discuss sponsorship',
  },
];

export function Contact() {
  const { ref, inView } = useScrollReveal();
  const [selectedTrack, setSelectedTrack] = useState<PartnerTrack>('grants');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    track: 'grants',
    message: '',
  });

  const handleSelectTrack = (trackId: PartnerTrack) => {
    setSelectedTrack(trackId);
    setForm((prev) => ({ ...prev, track: trackId }));
    document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden bg-slate-50/60 border-t border-slate-200/60">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Partner With Us
          </p>
          <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-slate-900 text-balance leading-[1.3] sm:leading-[1.32] ${inView ? 'animate-fade-up' : 'reveal'}`}>
            Partner with EduScape AI.
          </h2>
          <p className={`mt-4 text-base text-slate-600 leading-relaxed text-pretty ${inView ? 'animate-fade-up' : 'reveal'}`} style={{ animationDelay: '0.1s' }}>
            Whether you represent a research fund, an academic institution preparing for CBE accreditation, or an industry partner seeking verified graduate skills, we have a concrete engagement model.
          </p>
        </div>

        {/* Three Distinct Audience Boxes */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {partnerTracks.map((track, i) => (
            <div
              key={track.id}
              className={`bg-white rounded-2xl p-7 border ${track.borderAccent} shadow-md shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                inView ? 'animate-fade-up' : 'reveal'
              }`}
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shadow-xs">
                    <track.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full border border-primary-100">
                    {track.tag}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                  {track.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {track.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleSelectTrack(track.id)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-slate-900 text-white hover:bg-primary-700 transition-colors shadow-sm"
                >
                  {track.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Email & Form Container */}
        <div
          id="partner-form"
          className={`bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 max-w-4xl mx-auto ${
            inView ? 'animate-fade-up' : 'reveal'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
            <div>
              <h4 className="text-xl font-display font-bold text-slate-900">
                Send a Partnership Inquiry
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                We review all proposals with MUST & CITT project leads.
              </p>
            </div>
            <a
              href="mailto:hello@eduscape.co"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-primary-700 bg-primary-50 rounded-xl border border-primary-100 hover:bg-primary-100 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              hello@eduscape.co
            </a>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Inquiry Received
              </h3>
              <p className="text-sm text-slate-600 max-w-md">
                Thank you for your interest in partnering with EduScape AI. Our team will review your message and respond directly via email.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-primary-700 hover:text-primary-800"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Official Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@institution.org"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    required
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    placeholder="University, Foundation, or Company"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Partnership Category
                  </label>
                  <select
                    value={form.track}
                    onChange={(e) => setForm({ ...form, track: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                  >
                    <option value="grants">Grant bodies & research funds</option>
                    <option value="universities">Universities & institutions (Pilot)</option>
                    <option value="corporate">Corporate & industry partners</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Collaboration Proposal / Scope
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share details about your fund, university cohort, or industry focus..."
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-md shadow-primary-600/25 hover:shadow-lg hover:shadow-primary-600/30 hover:scale-[1.01] transition-all duration-200"
              >
                Submit Partnership Inquiry
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
