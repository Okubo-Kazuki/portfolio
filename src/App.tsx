function App() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl">
        <header className="space-y-8 border-b-2 border-slate-900 px-6 py-16 sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-600">
            P O R T F O L I O
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-5xl font-black tracking-tight lg:text-6xl">
                Your Name
              </h1>
              <div className="h-1 w-16 bg-sky-500"></div>
            </div>
            <p className="text-base leading-8 text-slate-700">
              Web developer crafting modern applications with refined digital experiences. Specializing in clean interfaces and user-focused design.
            </p>
          </div>
        </header>

        <section className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="mb-12 space-y-2">
            <h2 className="text-3xl font-black">PROJECTS</h2>
            <div className="h-1 w-12 bg-slate-900"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="border-2 border-slate-900 bg-slate-50 p-8 transition hover:bg-slate-100">
              <h3 className="text-lg font-black">Modern Landing Page</h3>
              <div className="mb-4 mt-3 h-0.5 w-8 bg-sky-500"></div>
              <p className="text-sm leading-7 text-slate-700">
                Responsive site with clean interactions and polished layout.
              </p>
            </article>
            <article className="border-2 border-slate-900 bg-white p-8 shadow-lg transition hover:shadow-xl">
              <h3 className="text-lg font-black">Design System</h3>
              <div className="mb-4 mt-3 h-0.5 w-8 bg-sky-500"></div>
              <p className="text-sm leading-7 text-slate-700">
                Reusable UI components and consistent brand styling.
              </p>
            </article>
            <article className="border-2 border-slate-900 bg-slate-900 p-8 text-white transition hover:bg-black">
              <h3 className="text-lg font-black">Dashboard App</h3>
              <div className="mb-4 mt-3 h-0.5 w-8 bg-sky-400"></div>
              <p className="text-sm leading-7 text-slate-300">
                Interactive data views with intuitive navigation.
              </p>
            </article>
          </div>
        </section>

        <section className="border-t-2 border-b-2 border-slate-900 bg-slate-50 px-6 py-20 sm:px-8 lg:px-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black">SKILLS</h2>
              <div className="h-1 w-12 bg-sky-500"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite', 'Design', 'UX/UI', 'Git'].map((skill) => (
                <div key={skill} className="border border-slate-400 bg-white px-4 py-3 text-center text-sm font-semibold">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t-2 border-slate-900 px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-black">CONTACT</h3>
              <div className="h-0.5 w-8 bg-sky-500"></div>
              <p className="text-sm text-slate-700">
                Let's build something great together. Get in touch.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@example.com"
                className="border-2 border-slate-900 bg-sky-500 px-8 py-3 font-bold text-white transition hover:bg-sky-600"
              >
                Email
              </a>
              <a
                href="#"
                className="border-2 border-slate-900 bg-white px-8 py-3 font-bold text-slate-900 transition hover:bg-slate-100"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App
