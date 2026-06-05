type ProjectCardProps = {
  title: string
  description: string
  style?: string
}

export default function ProjectCard({ title, description, style = '' }: ProjectCardProps) {
  const textClass = style.includes('text-white') ? 'text-sm leading-7 text-slate-300' : 'text-sm leading-7 text-slate-700'

  return (
    <article className={`rounded-3xl border-2 border-slate-900 p-8 transition ${style}`}>
      <h3 className="text-lg font-black">{title}</h3>
      <div className="mb-4 mt-3 h-0.5 w-8 bg-sky-500" />
      <p className={textClass}>{description}</p>
    </article>
  )
}
