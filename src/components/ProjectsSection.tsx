import { SectionHeading } from './SectionHeading';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Modern Landing Page',
    subtitle: 'マーケティング向けのランディング',
    preview: '/placeholder.svg',
    details:
      'レスポンシブなデザインと洗練されたインタラクションを備えたランディングページです。',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    why: '高速な開発と軽量なビルド、既存のコンポーネントを再利用しやすいため。',
    challenges: '多様な画面サイズでのレイアウト調整と画像最適化が難しかった。',
    learnings: 'レスポンシブ画像の取り扱いとTailwindでの設計パターンを習得。',
    role: 'フロントエンド実装・UI設計',
    duration: '2週間',
    live: 'https://example.com/landing',
    repo: 'https://github.com/yourname/landing',
    style: 'bg-slate-50',
  },
  {
    title: 'Design System',
    subtitle: '再利用可能なUIコンポーネント集',
    preview: '/placeholder.svg',
    details: '再利用可能なUIコンポーネントと一貫性のあるブランドスタイルのシステムです。',
    tech: ['React', 'Storybook', 'TypeScript', 'CSS Modules'],
    why: 'コンポーネントの文書化とレビューをスムーズにするためStorybookを採用。',
    challenges: 'デザインとコードの同期、アクセシビリティ確保に時間がかかった。',
    learnings: 'デザインシステムのスケールとアクセシビリティ対応の知見を得た。',
    role: '設計＋コンポーネント実装',
    duration: '1か月',
    live: 'https://example.com/design-system',
    repo: 'https://github.com/yourname/design-system',
    style: 'bg-white shadow-lg hover:shadow-xl',
  },
  {
    title: 'Dashboard App',
    subtitle: 'データ管理と可視化',
    preview: '/placeholder.svg',
    details: '直感的なナビゲーションを備えたインタラクティブなデータ管理ダッシュボード。',
    tech: ['React', 'D3.js', 'Node.js', 'Express'],
    why: '複雑な可視化にはD3の柔軟性が必要だったため。',
    challenges: '大量データのレンダリングとパフォーマンス調整が課題だった。',
    learnings: '仮想化とデータ集約のテクニックで描画負荷を下げられた。',
    role: 'フロントエンド＋データ可視化',
    duration: '3週間',
    live: 'https://example.com/dashboard',
    repo: 'https://github.com/yourname/dashboard',
    style: 'bg-slate-900 text-white hover:bg-black',
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
