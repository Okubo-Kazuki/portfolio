import { SectionHeading } from './SectionHeading'
import ActionButton from './ActionButton'

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
          <ActionButton href="mailto:hello@example.com" variant="primary">メールを送る</ActionButton>
          <ActionButton href="#">GitHub</ActionButton>
        </div>
      </div>
    </footer>
  )
}
