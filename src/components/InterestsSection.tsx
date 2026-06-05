import { SectionHeading } from './SectionHeading'

export default function InterestsSection() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mb-12">
        <SectionHeading title="INTERESTS" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border-2 border-slate-300 bg-white p-8">
          <h3 className="text-lg font-black">趣味</h3>
          <div className="mb-4 mt-3 h-0.5 w-8 bg-sky-500" />
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• photography</li>
            <li>• traveling</li>
            <li>• reading</li>
            <li>• cooking</li>
          </ul>
        </div>
        <div className="rounded-3xl border-2 border-slate-300 bg-white p-8">
          <h3 className="text-lg font-black">その他</h3>
          <div className="mb-4 mt-3 h-0.5 w-8 bg-sky-500" />
          <p className="text-sm leading-7 text-slate-700">
            最新の技術トレンドに常に目を向けており、新しいフレームワークやツールの学習を心がけています。オープンソースプロジェクトへの貢献にも興味があります。
          </p>
        </div>
      </div>
    </section>
  )
}
