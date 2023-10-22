import Header from "./components/Header.tsx"
import Principal from "./components/Principal.tsx"

function App() {

  return (
    <main className="container">
      <Principal></Principal>
      <Header></Header>
      <div className="Redes">Redes</div>
      <div className="Skills">Skills</div>
      <div className="Proyectos">Proyectos</div>
    </main>
  )
}

export default App
