import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="relative z-10 order-last flex min-h-[32px] basis-full flex-col items-center justify-center gap-4 self-center text-lg font-semibold min-[425px]:flex-row sm:text-xl md:order-none">
      <NavLink
        to="/sobremi"
        className={({ isActive }) =>
          isActive
            ? 'text-indigo-800 duration-500 dark:text-white'
            : 'duration-500 hover:text-indigo-900 dark:hover:text-slate-200'
        }>
        Sobre mi
      </NavLink>
      <NavLink
        to="/proyectos"
        className={({ isActive }) =>
          isActive
            ? 'text-indigo-800 duration-500 dark:text-white'
            : 'duration-500 hover:text-indigo-900 dark:hover:text-slate-200'
        }>
        Proyectos
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) =>
          isActive
            ? 'text-indigo-800 duration-500 dark:text-white'
            : 'duration-500 hover:text-indigo-900 dark:hover:text-slate-200'
        }>
        Skills
      </NavLink>
      <NavLink
        to="/contacto"
        className={({ isActive }) =>
          isActive
            ? 'text-indigo-800 duration-500 dark:text-white'
            : 'duration-500 hover:text-indigo-900 dark:hover:text-slate-200'
        }>
        Contacto
      </NavLink>
    </nav>
  );
}
