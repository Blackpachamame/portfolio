import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home, Proyectos, Skills, SobreMi, Contacto } from '..';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="relative z-10 flex flex-1 flex-col items-center justify-center rounded-2xl border border-solid border-[#d9dae2] bg-gradient-to-tr from-[rgba(60,62,138,.2)] to-transparent px-4 py-6 text-gray-900 shadow-lg transition duration-300 lg:px-10 lg:py-8 dark:border-[#242636] dark:from-[rgba(78,89,192,.2)] dark:text-slate-100">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
