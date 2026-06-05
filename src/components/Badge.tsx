type BadgeProps = {
  label: string
  className?: string
}

export default function Badge({ label, className = '' }: BadgeProps) {
  return (
    <div className={`rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-900 ${className}`}>
      {label}
    </div>
  )
}
