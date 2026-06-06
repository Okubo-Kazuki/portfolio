export type Skill = {
  name: string
  level?: string
  note?: string
  rank?: number
}

export const SKILL_CATEGORIES: { title: string; items: Skill[] }[] = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', level: '実務3年', note: '趣味でも実務でも最も使う言語です。', rank: 5 },
      { name: 'TypeScript', level: '実務2年', note: '型導入で安全に開発しています。', rank: 4 },
      { name: 'C#', level: '個人プロジェクト', note: 'UnityでVRゲーム開発をしています。', rank: 2 },
    ],
  },
  {
    title: 'Frameworks / Libraries',
    items: [
      {
        name: 'Astro',
        level: '実務半年',
        note: '静的サイト制作のために使用しています。コンポーネントの粒度を適切にするよう心がけています。',
        rank: 4,
      },
      {
        name: 'React',
        level: '実務経験あり',
        note: 'Reactで実装されたサイトに、新規ページを追加した経験があります。',
        rank: 2,
      },
    ],
  },
  {
    title: 'Tools / Dev',
    items: [
      { name: 'Git', level: '日常的', note: '共同開発&バージョン管理のために使用しています。', rank: 3 },
      { name: 'Vite', level: '個人プロジェクト', note: '趣味制作のサイトで使用しました。このサイトのビルドツールもViteです!', rank: 2 },
    ],
  },
  {
    title: 'Deployment / Infra',
    items: [
      { name: 'CloudFlare', level: '実務1年', note: '主にCloudFlare Pagesを利用しています。', rank: 3 },
      { name: 'Firebase', level: '個人プロジェクト', note: '認証・DB利用', rank: 3 },
      { name: 'Vercel', level: 'デプロイ経験', note: '趣味制作で使用', rank: 2 },
    ],
  },
  {
    title: 'Soft Skills',
    items: [
      { name: '柔軟性', level: '実務', note: '変更に強いコードを書くことで、仕様変更にも素早く対応しています。', rank: 5 },
      { name: 'ドキュメント作成', level: '実務', note: 'README作成の際は、初めて触る後輩でもわかるように丁寧に記述しています。', rank: 3 },
    ],
  },
  {
    title: 'Others',
    items: [
      { name: '動画編集', level: '趣味', note: '実況動画や音MADを趣味で制作しています。', rank: 3 },
      { name: '料理', level: '趣味', note: '卵焼きとか得意です', rank: 1 },
    ],
  },
]
