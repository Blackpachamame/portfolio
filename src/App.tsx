import Header from "./components/Header.tsx"
import Principal from "./components/Principal.tsx"

function App() {

  return (
    <main className="main">
      <Principal></Principal>
      <Header></Header>
      <div className="redes container">R</div>
      <div className="skills container">Skills</div>
      <div className="social container">Social</div>
      <div className="proyectos container">Proyectos</div>
    </main>
  )
}

export default App
