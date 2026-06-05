import { SectionHeading } from './SectionHeading'

export default function ContactSection() {
  return (
    <footer className="border-t-2 border-slate-900 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mb-12">
        <SectionHeading title="CONTACT" />
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm text-slate-700">
            お気軽にお問い合わせください。一緒に素晴らしいものを作りましょう。
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a href="mailto:hello@example.com" className="rounded-2xl border-2 border-slate-900 bg-sky-500 px-8 py-3 font-bold text-white transition hover:bg-sky-600">
            メールを送る
          </a>
          <a href="#" className="rounded-2xl border-2 border-slate-900 bg-white px-8 py-3 font-bold text-slate-900 transition hover:bg-slate-100">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
