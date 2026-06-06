import StatCard from './StatCard';
import faceImage from '../assets/img/face.png';

export default function HeaderSection() {
  return (
    <header className="space-y-8 border-b-2 border-slate-900 px-6 py-16 sm:px-8 lg:px-12">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-600">
        P O R T F O L I O
      </p>
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-black tracking-tight lg:text-6xl">Kazuki Okubo</h1>
          <p className="mt-2 text-xl text-slate-700">Frontend Developer</p>
          <div className="mt-4 h-1 w-16 bg-sky-500" />
        </div>
        <div className="grid gap-8 md:grid-cols-[minmax(240px,300px)_1fr] items-center">
          <div className="aspect-square w-full max-w-[300px] overflow-hidden rounded-3xl border-2 border-slate-900 bg-slate-200 mx-auto lg:mx-0">
            <img
              src={faceImage}
              alt="プロフィール写真"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-base leading-8 text-slate-700">
              フロントエンド開発を中心に、Webサイト制作をしています。<br />
              実務では、仕様変更に強いプログラムを書くよう心がけています。<br />
              インターンとして、小中学生にプログラミングを教える活動もしています。
            </p>
            
            <div className="grid gap-3 md:grid-cols-2">
              <StatCard label="生年月日" value="2007年 9月 13日" />
              <StatCard label="学校" value="福井工業高等専門学校 電子情報工学科" />
              <StatCard label="経験" value="長期インターンとして3年程度" />
              <StatCard label="得意領域" value="仕様変更に強いプログラム" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
