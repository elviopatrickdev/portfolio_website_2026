import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'

function App() {
  return (
    <>
      <Header />

      <main className="min-h-[calc(100dvh-5rem)]">
        <Hero />
      </main>
    </>
  )
}

export default App