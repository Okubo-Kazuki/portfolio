type SectionHeadingProps = {
  title: string
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-3xl font-black uppercase tracking-[0.15em]">
        {title}
      </h2>
      <div className="flex-1 h-px bg-slate-900" />
    </div>
  )
}
