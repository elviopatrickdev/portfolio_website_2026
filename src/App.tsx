import { Header } from './components/Header/Header'

function App() {
  return (
    <>
      <Header />

      <main
        id="inicio"
        className="mx-auto min-h-[calc(100dvh-5rem)] max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Elvio Patrick
        </h1>
      </main>
    </>
  )
}

export default App