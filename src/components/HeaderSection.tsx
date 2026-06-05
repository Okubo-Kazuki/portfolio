import { SectionHeading } from './SectionHeading'

const profileItems = ['Webサイト制作', 'UI/UX設計', 'React開発', '管理画面']

export default function HeaderSection() {
  return (
    <header className="space-y-8 border-b-2 border-slate-900 px-6 py-16 sm:px-8 lg:px-12">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-600">P O R T F O L I O</p>
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-black tracking-tight lg:text-6xl">Your Name</h1>
          <div className="mt-4 h-1 w-16 bg-sky-500" />
        </div>
        <div className="grid gap-8 md:grid-cols-[minmax(280px,360px)_1fr] items-start">
          <div className="aspect-square overflow-hidden rounded-3xl border-2 border-slate-900 bg-slate-200">
            <img src="" alt="プロフィール写真" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-base leading-8 text-slate-700">
              Webサイト制作、UI設計、React開発を中心に、ビジネスに直結するWeb体験をつくっています。
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {profileItems.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-900">
                  {item}
                </div>
              ))}
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-900 bg-white px-5 py-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">経験</p>
                <p className="mt-2 text-lg font-bold text-slate-900">3年以上</p>
              </div>
              <div className="rounded-2xl border border-slate-900 bg-white px-5 py-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">得意領域</p>
                <p className="mt-2 text-lg font-bold text-slate-900">高速実装＋丁寧なUI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
