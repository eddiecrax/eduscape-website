import { useScrollReveal } from '@/hooks/useScrollReveal';
import { team, avatarColors } from '@/data/team';

function avatarColor(initials: string) {
  const idx = initials.charCodeAt(0) % avatarColors.length;
  return avatarColors[idx];
}

export function Team() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="team" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            The Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-slate-900 text-balance leading-[1.3] sm:leading-[1.32]">
            The team building EduScape.
          </h2>
          <p className="mt-5 text-base text-slate-600 leading-relaxed text-pretty">
            A multidisciplinary team of engineers, business developers, and academic researchers at Mbarara University of Science and Technology.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl p-6 border border-slate-200/80 card-hover hover:shadow-xl hover:shadow-slate-200/50 hover:border-primary-200"
              style={{
                opacity: 0,
                animation: inView
                  ? `fadeUp 0.5s ease-out ${i * 0.08}s forwards`
                  : 'none',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${avatarColor(member.initials)} flex items-center justify-center text-white font-display font-bold text-sm shadow-md`}
                >
                  {member.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-bold text-base text-slate-900 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary-600 font-semibold mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{member.org}</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                {member.bio}
              </p>
              <div className="mt-4 pt-3.5 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Core Contribution
                </p>
                <p className="text-xs text-slate-800 font-medium leading-relaxed bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/60">
                  {member.contribution || member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
