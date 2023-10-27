import Header from "./components/Header/index.tsx"
import Principal from "./components/Principal.tsx"

function App() {
  return (
    <main className="min-h-screen flex flex-col p-4 md:p-6">
      <div className="fixed inset-0 bg-gradient-radial from-[#8e243a] to-[#000000]"></div>
      <Header></Header>
      <Principal></Principal>
    </main>
  )
}

export default App
