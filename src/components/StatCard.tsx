type StatCardProps = {
  label: string
  value: string
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-900 bg-white px-5 py-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 text-lg font-bold text-slate-900">{value}</p>
    </div>
  )
}
