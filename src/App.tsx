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
        <div className="flex-1 flex flex-col justify-center relative z-10 dark:bg-gray-900 dark:text-[#f1eeee] bg-white text-gray-900 rounded-2xl shadow-lg p-6 md:p-10 pb-8 md:pb-12 transition duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobremi" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/educacion" element={<Educacion />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
