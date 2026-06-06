import { SectionHeading } from './SectionHeading';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: '鯖江まちなか移住&定住情報サイト',
    subtitle: '移住・定住者向け情報サイト',
    preview: '/src/assets/img/sabaemachinaka.png',
    details:
      '鯖江市と団体が提供する移定住情報や、まちなかの店舗・観光地をまとめたサイトです。レスポンシブな実装に、アニメーションを付けて賑やかさを演出しました。',
    tech: ['Astro', 'JavaScript', 'CloudFlare', 'MicroCMS', 'Sass'],
    why: 'ビルド時に無駄なJSを削減することでサイトを軽くするため。また、イベント情報はMicroCMSのAPIで取得していますが、SSGで運用することで高速になることが理由でAstroを採用しました。また、Sassの関数とパラメータを用いて、色や大きさなどデザインに一貫性を持たせました。',
    challenges: 'コンポーネントベースでゼロからの開発は初めてだったため、環境を整えることに苦労した。',
    learnings: 'コンポーネントの適切な粒度を学んだ。また、Sassを利用することでスタイルの保守性を向上できることを学んだ。さらに、ドメインの取得とDNSの設定をする方法を学んだ。',
    role: 'フロントエンド実装',
    duration: '2か月',
    live: 'https://sabae-machinaka.jp',
    style: 'bg-slate-50',
  },
  {
    title: 'Astral',
    subtitle: 'イベント用情報サイト',
    preview: '/src/assets/img/astral.png',
    details: 'ゲーム上で行うイベント用サイトです。イベント情報の掲載と、プレイヤーの成績を確認できるページがあります。現在も定期更新中です。',
    tech: ['JavaScript', 'Firebase', 'Vite', 'Vercel', 'UI/UX設計'],
    why: '小規模なWebサイトにすることと、ブラウザでのデバッグ作業が容易であることから、高速なHTML/CSSでの開発を選びました。また、Firebaseを用いてサーバーレスにすることでメンテナンスコストを削減しました。Firestoreにあるデータを、FunctionsでFirebase strageにJson形式で保存し、フロントエンドからはFunctionsでデータを呼び出すようにすることでパフォーマンスの向上と、呼び出しコストの低減をした。',
    challenges: 'デプロイ先がFirebaseではないので、Firebaseとの連携が難しかった。プレイヤー成績をFirestoreに保存しているので、そのデータを安全に取得するためにはいくつかのサービスを介する必要があって大変だった。',
    learnings: 'PaaSを利用したサーバーレスのサイト作成方法を学んだ。また、UI設計について、様々なサイトを参考にして学べた。',
    role: '個人制作',
    duration: '2か月',
    live: 'https://astral-pk.vercel.app/',
    repo: 'https://github.com/Okubo-Kazuki/Astral',
    style: 'bg-white shadow-lg hover:shadow-xl',
  },
  {
    title: 'About of Kazuki Okubo',
    subtitle: 'ポートフォリオ',
    preview: '/src/assets/img/portfolio.png',
    details: '自分の得意を伝える、ポートフォリオサイト。流しても見れるように文字情報を絞り、1ページにまとめました。',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Vercel', 'UI/UX設計'],
    why: '過去のプロジェクトや得意分野など、コンポーネント化して再利用したほうが扱いやすい領域が多くなること、ボタンを押すと開く構造などState管理が必要なコンポーネントが多いことから、Reactを採用しました。また、コンポーネントのファイル1つでスタイルまで完結する、Tailwind CSSを採用し、開発効率の向上を図りました。',
    challenges: '文字情報が削減されたUIの設計に苦労した。また、Tailwind CSSでクラス名を書くと冗長になることで、開発時にどこを編集するか迷うときがあった。',
    learnings: 'Tailwind CSSは、小さいプロジェクトではかえって見づらくなることがあることを学んだ。',
    role: '個人製作',
    duration: '3日間',
    repo: 'https://github.com/Okubo-Kazuki/portfolio',
  },
];

export default function ProjectsSection() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mb-12">
        <SectionHeading title="PROJECTS" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            preview={project.preview}
            details={project.details}
            tech={project.tech}
            why={project.why}
            challenges={project.challenges}
            learnings={project.learnings}
            role={project.role}
            duration={project.duration}
            live={project.live}
            repo={project.repo}
            style={project.style}
          />
        ))}
      </div>
    </section>
  );
}
