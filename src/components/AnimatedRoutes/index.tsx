import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home, Proyectos, Skills, SobreMi } from "..";

export default function AnimateRoutes() {
    const location = useLocation();

    return (
        <div className="flex-1 flex flex-col justify-center items-center relative z-10 
        bg-gradient-to-tr from-[rgba(60,62,138,.2)] to-transparent text-gray-900 
        dark:from-[rgba(78,89,192,.2)] dark:text-slate-100
        border border-solid border-[#d9dae2] dark:border-[#242636] rounded-2xl 
        shadow-lg px-4 py-6 lg:px-10 lg:py-8 transition duration-300">
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobremi" element={<SobreMi />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}