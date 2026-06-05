import { SectionHeading } from './SectionHeading'

const projects = [
  {
    title: 'Modern Landing Page',
    description: 'レスポンシブなデザインと洗練されたインタラクションを備えたランディングページです。',
    style: 'bg-slate-50',
  },
  {
    title: 'Design System',
    description: '再利用可能なUIコンポーネントと一貫性のあるブランドスタイルのシステムです。',
    style: 'bg-white shadow-lg hover:shadow-xl',
  },
  {
    title: 'Dashboard App',
    description: '直感的なナビゲーションを備えたインタラクティブなデータ管理ダッシュボード。',
    style: 'bg-slate-900 text-white hover:bg-black',
  },
]

export default function ProjectsSection() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mb-12">
        <SectionHeading title="PROJECTS" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className={`rounded-3xl border-2 border-slate-900 p-8 transition ${project.style}`}>
            <h3 className="text-lg font-black">{project.title}</h3>
            <div className="mb-4 mt-3 h-0.5 w-8 bg-sky-500" />
            <p className={project.style.includes('text-white') ? 'text-sm leading-7 text-slate-300' : 'text-sm leading-7 text-slate-700'}>
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
