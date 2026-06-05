export default function BackgroundPattern() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 background-pattern opacity-80" />
      <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-[140px] bg-sky-200/20 blur-3xl animate-float-slow" />
      <div className="absolute right-[-10%] top-[20%] h-[320px] w-[320px] rounded-[120px] bg-sky-100/20 blur-3xl animate-float-slow-reverse" />
      <div className="absolute left-0 top-[55%] h-[260px] w-full bg-gradient-to-r from-sky-100/70 via-transparent to-cyan-100/70 opacity-80" />
      <div className="absolute left-[10%] bottom-[10%] h-[220px] w-[220px] rounded-[100px] bg-sky-100/40 blur-2xl animate-float-slow" />
    </div>
  )
}
