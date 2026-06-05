import { SectionHeading } from './SectionHeading'
import Badge from './Badge'

const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite', 'Design', 'UX/UI', 'Git']

export default function SkillsSection() {
  return (
    <section className="border-t-2 border-b-2 border-slate-900 bg-slate-50 px-6 py-20 sm:px-8 lg:px-12">
      <div className="space-y-8">
        <SectionHeading title="SKILLS" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill) => (
            <Badge key={skill} label={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
