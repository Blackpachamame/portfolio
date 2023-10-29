import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Educacion from "./pages/Educacion";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen flex flex-col p-4 md:p-6">
        <div className="fixed inset-0 bg-gradient-radial from-[#8e243a] to-[#000000]"></div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/educacion" element={<Educacion />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
