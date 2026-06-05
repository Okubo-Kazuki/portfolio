import { SectionHeading } from './SectionHeading'

const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite', 'Design', 'UX/UI', 'Git']

export default function SkillsSection() {
  return (
    <section className="border-t-2 border-b-2 border-slate-900 bg-slate-50 px-6 py-20 sm:px-8 lg:px-12">
      <div className="space-y-8">
        <SectionHeading title="SKILLS" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill} className="rounded-2xl border border-slate-400 bg-white px-4 py-3 text-center text-sm font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
