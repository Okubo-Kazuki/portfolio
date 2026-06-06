import { SectionHeading } from './SectionHeading';
import Badge from './Badge';
import LevelBar from './LevelBar';
import { SKILL_CATEGORIES } from '../data/skills';

export default function SkillsSection() {
  return (
    <section className="border-t-2 border-b-2 border-slate-900 bg-slate-50 px-6 py-20 sm:px-8 lg:px-12">
      <div className="space-y-8">
        <SectionHeading title="SKILLS" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map(cat => (
            <div key={cat.title}>
              <h3 className="mb-3 text-sm font-semibold text-slate-700">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map(s => (
                  <li key={s.name} className="flex items-center gap-2">
                    <Badge
                      label={s.name}
                      className="min-w-[110px]"
                      tooltip={
                        <div>
                          {s.level && <div className="font-medium">{s.level}</div>}
                          {s.note && <div className="mt-1 text-xs text-slate-700">{s.note}</div>}
                        </div>
                      }
                    />
                    <LevelBar level={s.rank ?? 0} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
