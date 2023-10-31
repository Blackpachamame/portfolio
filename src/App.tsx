import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Educacion, Header, Home, Proyectos, SobreMi } from "./components";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen flex flex-col p-4 md:p-6">
        <div className="fixed inset-0 bg-[#f5f1e7] dark:bg-[#11121b]"></div>
        <Header></Header>
        <div className="flex-1 flex flex-col justify-center relative z-10 
        bg-gradient-to-tr from-[rgba(138,60,60,.2)] to-transparent text-gray-900 
        dark:from-[rgba(78,89,192,.2)] dark:text-[#f5f1e7] 
        border border-solid border-[#ffffff] dark:border-[#242636] rounded-2xl 
        shadow-lg p-6 md:p-10 pb-8 md:pb-12 transition duration-300">
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
