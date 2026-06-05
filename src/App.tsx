import './App.css'
import HeaderSection from './components/HeaderSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import InterestsSection from './components/InterestsSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <div className="mx-auto max-w-6xl">
        <HeaderSection />
        <ProjectsSection />
        <SkillsSection />
        <InterestsSection />
        <ContactSection />
      </div>
    </main>
  )
}

export default App
