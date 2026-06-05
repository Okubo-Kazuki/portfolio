import { SectionHeading } from './SectionHeading'
import Badge from './Badge'
import StatCard from './StatCard'

const profileItems = ['Webサイト制作', 'UI/UX設計', 'React開発', '管理画面']

export default function HeaderSection() {
  return (
    <header className="space-y-8 border-b-2 border-slate-900 px-6 py-16 sm:px-8 lg:px-12">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-600">P O R T F O L I O</p>
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-black tracking-tight lg:text-6xl">Okubo Kazuki's profile</h1>
          <div className="mt-4 h-1 w-16 bg-sky-500" />
        </div>
        <div className="grid gap-8 md:grid-cols-[minmax(280px,360px)_1fr] items-start">
          <div className="aspect-square overflow-hidden rounded-3xl border-2 border-slate-900 bg-slate-200">
            <img src="/src/assets/img/face.png" alt="プロフィール写真" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-base leading-8 text-slate-700">
              フロントエンド開発を中心に、Webサイト制作をしております。
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {profileItems.map((item) => (
                <Badge key={item} label={item} />
              ))}
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <StatCard label="経験" value="3年以上" />
              <StatCard label="得意領域" value="高速実装＋丁寧なUI" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
