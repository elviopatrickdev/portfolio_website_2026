import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { ProcessSection } from './components/ProcessSection/ProcessSection'

function App() {
  return (
    <>
      <Header />

      <main className="min-h-[calc(100dvh-5rem)]">
        <Hero />
        <ProcessSection />
      </main>
    </>
  )
}

export default App