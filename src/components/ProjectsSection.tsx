import { SectionHeading } from './SectionHeading'
import ProjectCard from './ProjectCard'

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
          <ProjectCard key={project.title} title={project.title} description={project.description} style={project.style} />
        ))}
      </div>
    </section>
  )
}
