import { SectionHeading } from './SectionHeading'
import InterestCard from './InterestCard'

export default function InterestsSection() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mb-12">
        <SectionHeading title="INTERESTS" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <InterestCard title="趣味">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• photography</li>
            <li>• traveling</li>
            <li>• reading</li>
            <li>• cooking</li>
          </ul>
        </InterestCard>
        <InterestCard title="その他">
          <p className="text-sm leading-7 text-slate-700">
            最新の技術トレンドに常に目を向けており、新しいフレームワークやツールの学習を心がけています。オープンソースプロジェクトへの貢献にも興味があります。
          </p>
        </InterestCard>
      </div>
    </section>
  )
}
