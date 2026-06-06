import { SectionHeading } from './SectionHeading';
import InterestCard from './InterestCard';

export default function InterestsSection() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mb-12">
        <SectionHeading title="INTERESTS" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <InterestCard title="趣味">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• 動画制作</li>
            <li>• 一人旅</li>
            <li>• ボイスパーカッション</li>
          </ul>
        </InterestCard>
        <InterestCard title="その他">
          <p className="text-sm leading-7 text-slate-700">
            1年ほど前から、有名サンドボックスゲームを用いて、プレイヤーが課題に挑戦する形式のアスレチック企画を開催しています。<br />
            総挑戦者は120人に上る、人気企画となりました!
          </p>
        </InterestCard>
      </div>
    </section>
  );
}
